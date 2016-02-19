
(function(){
  'use strict';
  $(document).on("ready", function(){

    var showCounter = true;
    var randomTime;
    alarm();
    $(".takeAShot").hide();
    $(".reRun").hide();

    var audio = new Audio('build/music/science_fiction_air_raid_alarm.mp3');

    function alarm() {
      randomTime = _.random(1500000, 2700000);
      //randomTime = _.random(9000, 2000); // for testing
      setTimeout(function(){
        showCounter = false;
        $(".takeAShot").show();
        audio.play();
        $(".randomNum").hide();
        $(".reRun").show();
      }, randomTime);
    }

    var randomWaiting;
    randomCounter();

    function randomCounter() {
      setTimeout(function(){
        randomWaiting = _.random(1, 99);
        $(".randomNum").text(randomWaiting);
        //console.log(randomWaiting)
        if (showCounter) {
          randomCounter();
          $(".randomNum").show();
          $(".takeAShot").hide();
        }
      }, 100);
    }

    $(".reRun").on("click", function() {
      showCounter = true;
      randomCounter();
      alarm();
      $(".reRun").hide();
    });

  })

})();
