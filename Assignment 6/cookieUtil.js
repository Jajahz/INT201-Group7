class CookieUtil {

    static setCookie(cvalue){
        let d = new Date();
        d.setTime(d.getTime() + (30*24*60*60*1000));
        let expires = "expires="+d.toUTCString();
        document.cookie = "theme=" + cvalue + ";" + expires + "; path=/";
    }

    static getCookie(theme) {
        var name = theme + "=";
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
      let area = document.body;
        var theme = this.getCookie('theme');
        if (theme == 'default') {
        document.body.className = 'bg-dark';
        head.className = 'navbar navbar-light bg-light';
          colbtn.checked=false;
        }
        if (theme == 'colorful') {
        document.body.className = 'bg-warning';
        head.className = 'navbar navbar-light bg-danger';
        colbtn.checked=true;
        }
    }

}

export default CookieUtil;
