// function sendJSON() {
//   const name = document.querySelector("#name");
//   const phone = document.querySelector("#phone");
//   const select = document.querySelector("select");
//   const result = document.querySelector(".result");
//   const xhr = new XMLHttpRequest();
//   const url = "http://127.0.0.1:5500/form.php";
//   xhr.open("POST", url, true);
//   xhr.setRequestHeader("Content-Type", "application/json");
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       result.innerHTML = this.responseText;
//     }
//   };
//   const data = JSON.stringify({
//     select: select.value,
//     name: name.value,
//     phone: phone.value,
//   });
//   xhr.send(data);
// }

const sendData = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    body: data,
  });

  if (!response.ok) {
    throw new Error(
      `Ошибка по адресу ${url}, статус ошибки ${response.status}`
    );
  }

  return await response.json();
};

const sendForm = () => {
  const name = document.querySelector("#name");
  const phone = document.querySelector("#phone");
  const select = document.querySelector("select");
  const cartForm = document.querySelector(".form");
  const data = {
    name,
    phone,
    select,
  };
  cartForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // const cartList = JSON.stringify(data);
    const formData = new FormData(cartForm);
    sendData("https://jsonplaceholder.typicode.com/posts", formData)
      .then(() => {
        cartForm.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
