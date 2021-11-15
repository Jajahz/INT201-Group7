export class CookieUtil {

  static setCookie(ckey,cvalue){
      let d = new Date();
      d.setTime(d.getTime() + (30*24*60*60*1000));
      let expires = "expires="+d.toUTCString();
      document.cookie = ckey+"=" + cvalue + ";" + expires + "; path=/";
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
    let head = document.getElementById('navbar');
    // let area = document.body;
      var theme = this.getCookie('theme');
      if (theme == 'default') {
      document.body.className = 'bg-dark';
      head.className = 'navbar navbar-light bg-light';
      colbtn.checked=false;
        
      }
      if (theme == 'colorful') {
      document.body.className = 'bg-info';
      head.className = 'navbar navbar-light bg-danger';
      colbtn.checked=true;
      }
  }
  static unsunset(name){
    CookieUtil.setCookie(name,"",new Date(0))
  }
  }

function guestName(name){ 
  let data = document.cookie;  //ดึงข้อมูลของ cookie เข้ามา
  let arrayOfCookie = data.split('; '); //แยกข้อมูลcookie ของแต่ละตัว จะตัดทุกครั้งที่เจอ ;
  for(let i of arrayOfCookie){  //loop ของทั้งหมดที่มีใน cookie 
      let key = i.split('='); //แยกค่า key value ออกจากกัน
      if(key[0] == name){ //เช็คค่า key ว่าเท่ากับ name ไหม
          return key[1]; //ถ้าเท่ากัน return value 
      }
  }
}

CookieUtil.setCookie("username", "asma");
let user = document.querySelector("#user")
user.textContent += `Login as : ${guestName("username")}`
