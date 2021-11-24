import {CookieUtil} from "./cookieUtil.js"

export const toggle = {
  toggleTheme : function (){
    let theme = CookieUtil.getCookie('theme');
    if(theme === "colorful"){
      theme = "default";
    }else{
      theme = "colorful";
    }
    CookieUtil.setCookie("theme", theme);
  },
  toggleSearchBar : function(){
    let searchBarDisplay = localStorage.getItem('searchBarDisplay');
    if (searchBarDisplay == undefined) {
      searchBarDisplay = '0';
  } else {
    searchBarDisplay = parseInt(searchBarDisplay);
  }
        if(searchBarDisplay == "0"){
          searchBarDisplay = '1'
        } else {
          searchBarDisplay = '0'
        }
    localStorage.setItem('searchBarDisplay',searchBarDisplay)
  }
}