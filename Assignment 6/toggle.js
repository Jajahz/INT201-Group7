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
    //เป็นการสลับ, update ข้อมูลภายในcookie เมื่อมีการเปลี่ยน theme ของเว็บไซต์ โดยการ set ค่าthemeใหม่เข้าไปใน cookie ที่มี key คือ theme
    //หาก theme ภายใน cookie เดิม เป็น colorful จะถูกเปลี่ยนเป็น default และหากเป็น default จะเปลี่ยนเป็น colorful
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
  //เป็นการสลับ, update ข้อมูลภายในlocal เมื่อมีการซ่อน searchbar ผ่านการ click ที่icon ของเว็บไซต์ 
  //โดยการ set ค่า searchBarDisplay ใหม่เข้าไปใน localStorage ที่มี key คือ searchBarDisplay
  //หาก searchBarDisplay ภายใน localstorage เดิม เป็น 0(ซ่อน)จะถูกเปลี่ยนเป็น 1(แสดง) และหากเป็น 1(แสดง)จะเปลี่ยนเป็น 0(ซ่อน)
}