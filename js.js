  // Wait for the first text to finish typing before starting the second
  setTimeout(function () {
    document.getElementById("first-text").style.borderRight = "0px solid black"; // Remove cursor
    document.getElementById("second-text").style.visibility = "visible"; // Show second text
    document.getElementById("second-text").style.animation = "typing 3s steps(23) forwards 3s, blink 0.7s infinite 3s";
  }, 3000); // This should match the duration of the first text animation


  // btn functionalty
  document.querySelector('.btn').addEventListener('click', function(){
    document.querySelector('.paragraph').style.display = 'flex';

    document.querySelector('h2').style. borderRight = '0px solid black';
    
  });