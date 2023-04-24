function exitFullscreen() {
    // Create a full-screen white overlay
    var overlay = document.createElement('div');
    overlay.id = 'fullscreen-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'white';
    document.body.appendChild(overlay);
    // Show an alert message to the user
    alert('This game was made for fullscreen!');
  }
  
  function enterFullscreen() {
    // Remove the white overlay if it exists
    var overlay = document.getElementById('fullscreen-overlay');
    if (overlay) {
      overlay.remove();
    }
  }
  
  if ((window.fullScreen) ||
     (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
    // User is already in fullscreen mode
    enterFullscreen();
  } else {
    // User is not in fullscreen mode
    exitFullscreen();
  }
  
  document.addEventListener('fullscreenchange', function () {
    if (document.fullscreenElement) {
      // User entered fullscreen mode
      enterFullscreen();
    } else {
      // User exited fullscreen mode
      exitFullscreen();
    }
  });