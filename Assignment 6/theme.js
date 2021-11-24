import {CookieUtil} from "./cookieUtil.js"


export const theme = {
  toggleTheme : function (){
    var theme = CookieUtil.getCookie('theme');
    if(theme === "colorful"){
      theme = "default";
    }else{
      theme = "colorful";
    }
    CookieUtil.setCookie("theme", theme);
  }
}