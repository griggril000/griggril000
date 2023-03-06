function setCookie(name, value) {
  document.cookie = name + "=" + value + "; path=/";
}

function getCookie(name) {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.indexOf(name + "=") == 0) {
      return cookie.substring((name + "=").length, cookie.length);
    }
  }
  return null;
}

var fontSize = document.getElementById('fontSize');
var fontFamily = document.getElementById('fontFamily');

fontSize.addEventListener('change', function() {
  setCookie('fontSize', this.value);
  document.body.style.fontSize = this.value;
});

fontFamily.addEventListener('change', function() {
  setCookie('fontFamily', this.value);
  document.body.style.fontFamily = this.value;
});

var fontSizeCookie = getCookie('fontSize');
if (fontSizeCookie) {
  document.body.style.fontSize = fontSizeCookie;
  fontSize.value = fontSizeCookie;
}

var fontFamilyCookie = getCookie('fontFamily');
if (fontFamilyCookie) {
  document.body.style.fontFamily = fontFamilyCookie;
  fontFamily.value = fontFamilyCookie;
}
