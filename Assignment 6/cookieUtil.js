export class CookieUtil {

  static setCookie(ckey,cvalue,cdate){
      let d = new Date();
      d.setTime(d.getTime() + (cdate*24*60*60*1000));
      let expires = "expires="+ d.toUTCString();
      document.cookie = ckey + "=" + cvalue + ";" + expires + "; path=/";
  }

  static getCookie(ckey) {
      var name = ckey + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
    
  static checkCookie() {
    const colbtn = document.getElementById('colbtn');
    // เป็นการ check ว่าสุดท้ายเรากดปุ่มไปอยู่ที่ theme ใด โดย get id ของปุ่มมา
    let head = document.getElementById('navbar');
    let resetbtn = document.getElementById('reset');
    let user = document.getElementById('user');
    let searchbtn = document.getElementById('searchBtn');
    let text = document.getElementById('text');
    var theme = this.getCookie('theme');

      if (theme == 'default') {
      document.body.className = 'bg-dark';
      head.className = 'navbar navbar-light bg-light';
      resetbtn.className = 'btn btn-danger';
      user.setAttribute('style','color: rgb(125, 117, 182)');
      text.setAttribute('style', 'color: black');
      searchbtn.className = 'btn btn-outline-secondary';

      colbtn.checked=false;
      // เป็นการ fix ค่าว่าเรากดไปที่ default ตอนเรากดเข้ามาใหม่ เราจะเก็บค่า class เป็นแบบนี้
      
    }
      if (theme == 'colorful') {
      document.body.className = 'bg-info';
      head.className = 'navbar navbar-light bg-danger';
      resetbtn.className = 'btn btn-light';
      user.setAttribute('style','color: white');
      text.setAttribute('style', 'color: white');
      searchbtn.className = 'btn btn-outline-warning';

      colbtn.checked=true;
      // เป็นการ fix ค่าว่าเรากดไปที่ default ตอนเรากดเข้ามาใหม่ เราจะเก็บค่า class เป็นแบบนี้
      }
  }
  static unsunset(name){
    CookieUtil.setCookie(name,"",new Date(0));
  }
  }

function guestName(name){ 
  let data = document.cookie;
  let arrayOfCookie = data.split('; ');
  for(let i of arrayOfCookie){
      let key = i.split('=');
      if(key[0] == name){
          return key[1];
      }
  }
}

CookieUtil.setCookie("username", "asma");
let user = document.querySelector("#user");
user.textContent += `Login as : ${guestName("username")}`;