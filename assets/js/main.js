
function typeText(textArray) {
    const container = document.getElementById("rex");
    let currentIndex = 0;
    let currentText = textArray[currentIndex];
    let i = 0;
    let direction = "up";
    let interval = setInterval(function() {
      if (direction === "up") {
        container.innerHTML += currentText.charAt(i);
        i++;
        if (i > currentText.length) {
          i = currentText.length - 1;
          direction = "down";
        }
      } else if (direction === "down") {
        container.innerHTML = container.innerHTML.slice(0, -1);
        i--;
        if (i < 0) {
          i = 0;
          direction = "up";
          currentIndex++;
          if (currentIndex >= textArray.length) {
            currentIndex = 0;
          }
          currentText = textArray[currentIndex];
        }
      }
    }, 200);
  }
  

const textArray = ["Front End  Developer...", "Php Laravel Developer...", "Back End  Developer...","Full Stack Developer"];
typeText(textArray);



function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Set London as active and display its content by default
document.getElementById('London').style.display = "block";
document.querySelector("button.tablinks:nth-child(1)").className += " active";


// Get a reference to the video element
const video1 = document.getElementById('videoPlayer');
const video2 = document.getElementById('videoPlayer1');
const video3 = document.getElementById('videoPlayer2');
const video4 = document.getElementById('videoPlayer3');
const video5 = document.getElementById('videoPlayer4');
const video6 = document.getElementById('videoPlayer5');
const video7 = document.getElementById('videoPlayer6');
const video8 = document.getElementById('videoPlayer7');
const video9 = document.getElementById('videoPlayer8');

// Play the first video when the window has finished loading
window.onload = function() {
  video1.play();

  // Pause the first video after 10 seconds
  setTimeout(function() {
    video1.pause();
  }, 10000);  // 10,000 milliseconds = 10 seconds

  // Play the second video when the window has finished loading
  video2.play();

  // Pause the second video after 10 seconds
  setTimeout(function() {
    video2.pause();
  }, 10000);  // 10,000 milliseconds = 10 seconds


  video3.play();

  // Pause the second video after 10 seconds
  setTimeout(function() {
    video3.pause();
  }, 10000);  // 10,000 milliseconds = 10 seconds

  video4.play();

  // Pause the second video after 10 seconds
  setTimeout(function() {
    video4.pause();
  }, 10000);  // 10,000 milliseconds = 10 seconds

  video5.play();

  // Pause the second video after 10 seconds
  setTimeout(function() {
    video5.pause();
  }, 10000);  // 10,000 milliseconds = 10 seconds

  video6.play();

  // Pause the second video after 10 seconds
  setTimeout(function() {
    video6.pause();
  }, 10000);  // 10,000 milliseconds = 10 seconds

  video7.play();

  // Pause the second video after 10 seconds
  setTimeout(function() {
    video7.pause();
  }, 10000);  // 10,000 milliseconds = 10 seconds

  
  video7.play();

  // Pause the second video after 10 seconds
  setTimeout(function() {
    video7.pause();
  }, 30000);  // 10,000 milliseconds = 10 seconds

  video8.play();

  // Pause the second video after 10 seconds
  setTimeout(function() {
    video8.pause();
  }, 10000);  // 10,000 milliseconds = 10 seconds
};



$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();

      const targetId = $(this).attr('href').substring(1);
      const targetElement = $('#' + targetId);

      if (targetElement.length) {
          $('html, body').animate({
              scrollTop: targetElement.offset().top
          }, 1200, 'easeInOutCubic');  // Adjust the duration and easing function
      }
  });
});


