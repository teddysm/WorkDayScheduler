// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
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

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
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



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function setBlockColor(){
    let currentTime = dayjs().format('HH');
    console.log(currentTime);
    let currentTimeElement = $(".time-block");
    $(".time-block").each(function(index) {
      if ((index+9) > currentTime)
        $(this).attr("class", "row time-block future");
      if ((index+9) < currentTime)
      $(this).attr("class", "row time-block past");
      if ((index+9) == currentTime)
      $(this).attr("class", "row time-block present");
    });

    // for (let i = 9; i <= 17; i++){
    //   if (currentTime > i){
    //     let currentTimeElement = $(".time-block").get(i-9);

    //     currentTimeElement[0].attr("class", "past");
    //     currentTimeElement.setAtribute("class", "past");
    //     .attr("class", "past") .get(i-9)
    //   }
    //   console.log($(".time-block").get(i-9).id.split("-")[1]);
    // }
    
  }



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  function setUserInput(){
    // TODO: try using $("TEXTAREA")
    saveInput.forEach(function(entry){
      $(".time-block").get(entry.time - 9).children[1].textContent = entry.note;


      // $(".time-block").get(entry.time - 9).text = entry.note;
      // $(".time-block").get(entry.time - 9).children[1].val(entry.note) ;
    })
  }



  // TODO: Add code to display the current date in the header of the page.
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


