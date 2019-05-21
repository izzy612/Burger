$(document).ready(function () {
  
  $(".submit-btn").on("click", function (e) {
    
    e.preventDefault();

    let input = $("#name-input").val().trim()
    console.log(input)

    const burgerData = {
      name: input
    }

    $.ajax({
      url: "/api/burgers",
      method: "POST",
      data: burgerData
    })
      .then(function () {
        location.reload()
      })
      .catch(err => console.log(err));

  });

  $(".update-burger").on("click", function () {
    
    const burgerId = $(this).attr("data-id");
    const eaten = $(this).attr("data-eaten");
    console.log(burgerId);

    $.ajax({
      url: "/api/burgers/" + burgerId,
      method: "PUT",
      data: {
        eaten: eaten
      }
    })
      .then(() => location.reload())
      .catch(err => console.log(err));
  });
  $(".delete-burger").on("click", function () {
    
    
    const burgerId = $(this).attr("data-id");
    console.log(burgerId)

    $.ajax({
      url: `/api/burgers/${burgerId}`,
      method: "DELETE",
    })
      .then(() => location.reload())
      .catch(err => console.log(err));
    
  });

});