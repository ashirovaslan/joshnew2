function counterkvan() {
    if (typeof(Storage) !== "0") {
      if (localStorage.clickcount1) {
        localStorage.clickcount1 = Number(localStorage.clickcount1)+1;
      } else {
        localStorage.clickcount1 = 1;
      }
      
    } else {
      document.getElementById("downloadkvan").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }

  document.getElementById("downloadkvan").innerHTML = "Downloads<br>"+ localStorage.clickcount1;
  
  
  function counterubuntu() {
    if (typeof(Storage) !== "0") {
      if (localStorage.clickcount2) {
        localStorage.clickcount2 = Number(localStorage.clickcount2)+1;
      } else {
        localStorage.clickcount2 = 1;
      }
      
    } else {
      document.getElementById("downloadubuntu").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }
  document.getElementById("downloadubuntu").innerHTML = "Downloads<br>"+ localStorage.clickcount2;

  function counteronqaku() {
    if (typeof(Storage) !== "0") {
      if (localStorage.clickcount3) {
        localStorage.clickcount3 = Number(localStorage.clickcount3)+1;
      } else {
        localStorage.clickcount3 = 1;
      }
      
    } else {
      document.getElementById("downloadonqaku").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }
  document.getElementById("downloadonqaku").innerHTML = "Downloads<br>"+ localStorage.clickcount3;

  function counterlamartin() {
    if (typeof(Storage) !== "0") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      
    } else {
      document.getElementById("downloadlamartin").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }
  document.getElementById("downloadlamartin").innerHTML = "Downloads<br>"+ localStorage.clickcount;