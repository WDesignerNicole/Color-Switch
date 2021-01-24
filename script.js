function changeColor() {

    var image = document.getElementById('green');

    if (image.src.match("Green-Switch.png")) {
      image.src="Red-Switch.png";
      document.body.style.backgroundColor = 'pink';
    } else {
      image.src="Green-Switch.png";
      document.body.style.backgroundColor = 'aquamarine';
    }
  }