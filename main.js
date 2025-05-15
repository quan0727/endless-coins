
let levelCount = 0;

function onLevelComplete() {
  levelCount++;
  if (levelCount % 2 === 0) {
    showSimulatedAd();
  } else {
    startNextLevel();
  }
}

function showSimulatedAd() {
  const adOverlay = document.createElement('div');
  adOverlay.id = 'adOverlay';
  adOverlay.style.position = 'fixed';
  adOverlay.style.top = '0';
  adOverlay.style.left = '0';
  adOverlay.style.width = '100vw';
  adOverlay.style.height = '100vh';
  adOverlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
  adOverlay.style.display = 'flex';
  adOverlay.style.justifyContent = 'center';
  adOverlay.style.alignItems = 'center';
  adOverlay.style.zIndex = '1000';

  const adContent = document.createElement('div');
  adContent.style.width = '300px';
  adContent.style.height = '250px';
  adContent.style.backgroundColor = '#fff';
  adContent.style.borderRadius = '10px';
  adContent.style.textAlign = 'center';
  adContent.style.padding = '20px';
  adContent.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';

  adContent.innerHTML = \`
    <h3>广告时间！</h3>
    <p>请稍等片刻，广告结束后点击关闭继续游戏。</p>
    <button id="closeAdBtn" style="margin-top:20px; padding:10px 20px; font-size:16px;">关闭广告</button>
  \`;

  adOverlay.appendChild(adContent);
  document.body.appendChild(adOverlay);

  document.getElementById('closeAdBtn').addEventListener('click', () => {
    document.body.removeChild(adOverlay);
    startNextLevel();
  });
}

function startNextLevel() {
  console.log('开始下一关...');
  // 这里写您游戏开始下一关的逻辑
}

console.log('Endless Coins Game Loaded');
