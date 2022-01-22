var interval = setInterval(function() {
    $('#currentDay').html(moment().format('YYYY MMMM DD')+' '+ moment().format('dddd'))                   
    $('#currentDay').html(moment().format('dddd') + " " + moment().format("Do MMM YYYY") + " " + moment().format('hh:mm:ss A'))
    function colours(){
      var time = moment().hour()
    $('.time-block').each(function(){
      var idTime = parseInt($(this).attr("id"))
      if (idTime < time){
          $(this).addClass("past")
      } else if (idTime === time){
          $(this).addClass("present")
          $(this).removeClass("past")
      } else {$(this).addClass("future")
      $(this).removeClass("past")
      $(this).removeClass("present")
      }
  })}
  colours()
}, 100);

$(document).ready(function(){
  $(".saveBtn").on("click", function(){
      var plannerText = $(this).siblings(".description").val()
      var time = $(this).parent().attr("id")
      localStorage.setItem(time, plannerText)
  })
  $("#7 .description").val(localStorage.getItem("7"))
  $("#8 .description").val(localStorage.getItem("8"))
  $("#9 .description").val(localStorage.getItem("9"))
  $("#10 .description").val(localStorage.getItem("10"))
  $("#11 .description").val(localStorage.getItem("11"))
  $("#12 .description").val(localStorage.getItem("12"))
  $("#13 .description").val(localStorage.getItem("13"))
  $("#14 .description").val(localStorage.getItem("14"))
  $("#15 .description").val(localStorage.getItem("15"))
  $("#16 .description").val(localStorage.getItem("16"))
  $("#17 .description").val(localStorage.getItem("17"))
  $("#18 .description").val(localStorage.getItem("18"))

  $("#deleteButton").on("click", function(){
    localStorage.clear()
    location.reload()
  }) 

  })