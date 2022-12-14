// ---- live API time ---- //
var currentTime = parseInt(moment().format('H'));


// ---- Text area input object array ---- //
var entryArr = JSON.parse(localStorage.getItem("entryArr")) || {
  "hour-9": "",
  "hour-10": "",
  "hour-11": "",
  "hour-12": "",
  "hour-13": "",
  "hour-14": "",
  "hour-15": "",
  "hour-16": "",
  "hour-17": ""
};





// ---- Jumbotron current day/ display time ---- //
var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

var displayTime = moment().format("LT");
$("#currentTime").append(displayTime);




// Click event to populate the tasksObj with text input from the textarea 
$("button").on("click", function () {

  // get id
  console.log($(this).parent().attr("id"));
  var entryId = $(this).parent().attr("id");

  // get textarea input
  var textInput = $(this).parent().find("textarea");
  textInput.val();
  console.log(textInput.val());
  

  // printing the object array in the console to make sure it's there
  console.log("Entries: ", entryArr);

  entryArr[entryId] = textInput.val();

  storeEntries(); // triggers the function
});


// ---- Stores entries to local storage ---- //
function storeEntries() {

  localStorage.setItem("entryArr", JSON.stringify(entryArr));

};





function onLoad(){
  for (var i = 0; i < 9; i++) {
    
    var entryId = `hour-${i + 9}`;
    var entryText = entryArr[entryId];
    debugger
    $(`#timeblock-${i + 9}`).val(entryText);
    
};
}





// ---- Conditional to assign 'past-present-future' classes to time-blocks ---- //

    $(".timeblock").each(function () {
       
       
        // ---- we need to get the actual value inside each time-block to compare to the live time ---- //
        var timeBlock = parseInt($(this).attr("id").split("timeblock-")[1]);
    
          // if the current live time is greater than our individual time-block
          if (timeBlock < currentTime) { 
            $(this).addClass("past"); 
          } 

          // if the present time matches a specific time-block's value
         else if (timeBlock == currentTime){
            $(this).removeClass("past");
            $(this).addClass("present");
         } 
                  
         else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        };
    });





