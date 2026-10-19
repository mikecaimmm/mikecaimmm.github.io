/* Static-host player: payloads are uncompressed so no custom server headers are needed. */
'use strict';

const canvas = document.getElementById('unity-canvas');
const loading = document.getElementById('unity-loading-bar');
const loadingStatus = document.getElementById('loading-status');
const progressBar = document.getElementById('unity-progress');
const fullscreenButton = document.getElementById('unity-fullscreen-button');

function showBanner(message, type) {
  const banner = document.getElementById('unity-warning');
  const line = document.createElement('p');
  line.textContent = message;
  banner.appendChild(line);
  banner.hidden = false;
  if (type === 'warning') {
    setTimeout(() => {
      line.remove();
      banner.hidden = !banner.children.length;
    }, 8000);
  }
}

function showLoadError(message) {
  loadingStatus.textContent = 'The game could not load. Please refresh to try again.';
  progressBar.hidden = true;
  showBanner(String(message), 'error');
}

// Keep arrow keys inside the game instead of scrolling the surrounding page.
canvas.addEventListener('keydown', event => {
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(event.key)) {
    event.preventDefault();
  }
});
canvas.addEventListener('pointerdown', () => canvas.focus({ preventScroll: true }));

const loader = document.createElement('script');
loader.src = 'Build/Builds.loader.js';
loader.onerror = () => showLoadError('The Unity loader could not be downloaded.');
loader.onload = () => {
  createUnityInstance(canvas, {
    arguments: [],
    dataUrl: 'Build/Builds.data',
    frameworkUrl: 'Build/Builds.framework.js',
    codeUrl: 'Build/Builds.wasm',
    streamingAssetsUrl: 'StreamingAssets',
    companyName: 'DefaultCompany',
    productName: 'Swipe Crash',
    productVersion: '1.0',
    devicePixelRatio: 1,
    showBanner,
  }, progress => {
    progressBar.value = progress;
    loadingStatus.textContent = `Loading Swipe Crash… ${Math.round(progress * 100)}%`;
  }).then(unity => {
    loading.hidden = true;
    fullscreenButton.disabled = false;
    fullscreenButton.addEventListener('click', () => {
      unity.SetFullscreen(1);
      canvas.focus({ preventScroll: true });
    });
  }).catch(showLoadError);
};
document.body.appendChild(loader);
