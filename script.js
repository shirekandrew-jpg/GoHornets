// Shared JavaScript functions for Go Hornets
console.log('Go Hornets script loaded!');

// Hornet animation functions
function navigateWithHornets(url) {
  if (url === '#') return;
  
  createHornetSwarm();
  
  setTimeout(() => {
    window.location.href = url;
  }, 1200);
}

function createHornetSwarm() {
  const container = document.getElementById('hornetContainer');
  if (!container) {
    console.warn('Hornet container not found');
    return;
  }
  
  container.innerHTML = '';
  
  for (let i = 0; i < 20; i++) {
    const hornet = document.createElement('div');
    hornet.className = 'hornet';
    
    hornet.innerHTML = `
      <div style="
        position: relative;
        width: 24px;
        height: 12px;
        background: linear-gradient(90deg, #1a1a1a 0%, #8b4513 20%, #ffd700 40%, #1a1a1a 60%, #8b4513 80%, #ffd700 100%);
        border-radius: 60% 40%;
        box-shadow: 
          0 0 4px rgba(255, 215, 0, 0.8),
          inset 0 1px 0 rgba(255, 255, 255, 0.4),
          inset 0 -1px 0 rgba(0, 0, 0, 0.3);
      ">
        <div style="
          position: absolute;
          top: -2px;
          left: 8px;
          width: 12px;
          height: 8px;
          background: radial-gradient(ellipse, rgba(255, 255, 255, 0.6) 0%, rgba(200, 220, 255, 0.3) 70%, transparent 100%);
          border-radius: 80% 20%;
          animation: wingFlap 0.08s infinite alternate;
          transform-origin: 20% 50%;
        "></div>
        <div style="
          position: absolute;
          top: -2px;
          left: 4px;
          width: 12px;
          height: 8px;
          background: radial-gradient(ellipse, rgba(255, 255, 255, 0.6) 0%, rgba(200, 220, 255, 0.3) 70%, transparent 100%);
          border-radius: 80% 20%;
          animation: wingFlap 0.08s infinite alternate-reverse;
          transform-origin: 80% 50%;
        "></div>
        <div style="
          position: absolute;
          top: 2px;
          left: 2px;
          width: 4px;
          height: 4px;
          background: #1a1a1a;
          border-radius: 50%;
          box-shadow: 8px 0 0 #1a1a1a;
        "></div>
      </div>
    `;
    
    const startY = Math.random() * window.innerHeight;
    const startX = -150;
    const duration = 3 + Math.random() * 3;
    const delay = Math.random() * 2;
    const size = 0.8 + Math.random() * 0.6;
    
    hornet.style.cssText = `
      position: fixed;
      left: ${startX}px;
      top: ${startY}px;
      z-index: 9999;
      pointer-events: none;
      animation: flyAcross ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s forwards;
      transform-origin: center;
      transform: scale(${size});
      filter: drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.4));
    `;
    
    container.appendChild(hornet);
    
    setTimeout(() => {
      if (hornet.parentNode) {
        hornet.parentNode.removeChild(hornet);
      }
    }, (duration + delay + 1) * 1000);
  }
}
