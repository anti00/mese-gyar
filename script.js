function myMove() {
    var elem = document.getElementById("felho");
    var box = document.getElementById("box");
    var box_mag = document.getElementById("box").clientHeight
    var pos = 0;
    var id = setInterval(frame, 10);
    var size = Math.floor(Math.random() * 51);
    var random_mag = Math.floor(Math.random() * box_mag+1);
    elem.style.height = size + '%';
    elem.style.width = size + '%';
    elem.style.top = random_mag + '%';
    var img = document.getElementById("felho").clientWidth;
    function frame() {
        var tav = document.getElementById("box")
        tav = tav.clientWidth;
      if (pos == tav || pos >= tav) {
        elem.style.left = tav - pos - img;
        box_mag = document.getElementById("box").clientHeight
        size = Math.floor(Math.random() * 51);
        random_mag = Math.floor(Math.random() * box_mag+1);
        elem.style.height = size + '%';
        elem.style.width = size + '%';
        elem.style.bottom = random_mag + 'px';
        img = document.getElementById("felho").clientWidth;
        pos = 0;
      } else {
        pos++; 
        elem.style.left = pos + 'px';
      }
    }
  }

  