$(document).ready(function () {
  let saveTime = 0;
  let saveText = "";
  let saveInput = JSON.parse(localStorage.getItem("userInput")) || [];

  function init(){
    setBlockColor();
    setUserInput();
    setTimeHeader();
  }

  init();

  // when the save button is clicked, we save user's notes to local storage
  $(".saveBtn").click(function(){
    saveTime = $(this).parent().attr('id').split("-")[1];
    // brain exploded
    saveText = $("textarea").get(saveTime - 9).value;
    let userInput = {
      time: saveTime,
      note: saveText
    };

    saveInput = saveInput.filter(({ time }) => time !== saveTime);
    saveInput.push(userInput);
    localStorage.setItem("userInput", JSON.stringify(saveInput));
  });



  // get the time-block ids and compare it with current time to color code each time-block
  function setBlockColor(){
    let currentTime = dayjs().format('HH');
    $(".time-block").each(function(index) {
      if ((index+9) > currentTime)
        $(this).attr("class", "row time-block future");
      if ((index+9) < currentTime)
      $(this).attr("class", "row time-block past");
      if ((index+9) == currentTime)
      $(this).attr("class", "row time-block present");
    });    
  }



  // load user note from local storage upon page refresh to the correct time-block
  function setUserInput(){
    saveInput.forEach(function(entry){
      $(".time-block").get(entry.time - 9).children[1].textContent = entry.note;
    })
  }



  // add current date and live time to the header
  function setTimeHeader(){
    var today = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a'); 
    $('#currentDay').text(today);
    
    function updateTime(){
      today = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a'); 
      $('#currentDay').text(today);
    }
    
    setInterval(updateTime, 1000);
  }
});


