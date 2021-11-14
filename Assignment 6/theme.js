

function toggleTheme(){
    var theme = this.getCookie('theme');
    if(theme==="colorful"){
      theme ="default"
    }else{
      theme ="colorful"
    }
    CookieUtil.setCookie("theme",theme);
  }