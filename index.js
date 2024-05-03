//desktop 
const desktopScreen = document.getElementById('desktop-screen');
const mobile = document.getElementById('mobile');
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    desktopScreen.style.display = 'none';
    mobile.style.display = 'block';
  } else {
    desktopScreen.style.display = 'block';
    mobile.style.display = 'none';
}