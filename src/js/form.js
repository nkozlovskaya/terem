// function sendJSON() {
//   let name = document.querySelector("#name");
//   let phone = document.querySelector("#phone");
//   let result = document.querySelector(".result");
//   let xhr = new XMLHttpRequest();
//   let url = "http://127.0.0.1:5500/src/form.php";
//   xhr.open("POST", url, true);
//   xhr.setRequestHeader("Content-Type", "application/json");
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       result.innerHTML = this.responseText;
//     }
//   };
//   var data = JSON.stringify({ name: name.value, phone: phone.value });
//   xhr.send(data);
// }
// $(document).ready(function () {
//   let btnForm = document.querySelector("#formBtn");

$(document).on("click", "#formBtn", function () {
  let name = document.querySelector("#name");
  let phone = document.querySelector("#phone");
  let result = document.querySelector(".result");
  $.ajax({
    url: "form.php",
    type: "POST",
    dataType: "json",
    data: {
      name: name,
      phone: phone,
    },
    success: function (data) {
      $(result).text(`Имя пользователя: ${data.name}, телефон: ${data.phone}`);
    },
    error: function () {
      console.log("ERROR");
    },
  });
});
// });
// $(document).ready(function () {
//   $("#formBtn").click(function () {
//     $.post(
//       "form.php",
//       {
//         name: name,
//         phone: phone,
//       },
//       function (data) {
//         alert("Имя пользователя: " + data.name + "телефон " + data.phone);
//       }
//     );
//   });
// });
