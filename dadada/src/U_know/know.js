<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Learning</title>
    <link rel="stylesheet" href="learning.css" />
  </head>
  <body style="background-color: bisque">
    <div class="content">
      <h1>Форма для заполнения</h1>
      <form id="dataForm" class="formJS">
        <div class="formDiv">
          <label for="firstName">Имя</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            class="formInput"
            placeholder="Имя"
          />
        </div>
        <div class="formDiv">
          <label for="lastName">Фамилия</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            class="formInput"
            placeholder="Фамилия"
          />
        </div>
        <div class="formDiv">
          <label for="middleName">Отчество</label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            class="formInput"
            placeholder="Отчество"
          />
        </div>
        <div class="formDiv">
          <label for="phoneNumber">Номер телефона</label>
          <input
            data-max-length="11"
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            class="formInput"
            placeholder="Номер телефона"
          />
        </div>
        <div class="formDiv">
          <label for="date">Дата</label>
          <input
            type="date"
            id="date"
            name="date"
            class="formInput"
            placeholder="Дата"
          />
        </div>
        <div class="formDiv">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="formInput"
            placeholder="Email"
          />
        </div>
        <div class="formDiv">
          <label for="email">Пароль</label>
          <input
            type="password"
            id="pass"
            name="pass"
            class="formInput"
            placeholder="Пароль"
          />
        </div>
        <div class="formDiv">
          <input type="checkbox" id="privacy_check" class="formCheckbox" />
          <label class="checkboxForm" for="privacy_check"
            >Принять пользовательское соглашение</label
          >
        </div>
        <button class="btn" type="submit">
          <span class="btnText">Отправить</span>
        </button>
      </form>
    </div>
    <script defer src="./learning.js"></script>
  </body>
</html>





























function validation(form) {
  function removeError(input) {
    const error = input.parentNode.querySelector(".error");
    if (error) {
      error.remove();
    }
  }

  function createError(input, textError) {
    const error = document.createElement("div");
    error.classList.add("error");
    error.innerHTML = textError;
    input.parentNode.insertBefore(error, input.nextSibling);
  }

  let result = true;

  form.querySelectorAll("input").forEach((element) => {
    removeError(element);
    // Проверка на максимальную длину
    if (element.dataset.maxLength) {
      if (element.value.length > element.dataset.maxLength) {
        createError(
          element,
          "Максимальное количество символов " +
            element.dataset.maxLength +
            " знаков"
        );
        result = false;
      }
    }
    // Проверка на пустое значение
    if (element.type !== "checkbox" && element.value.trim() === "") {
      createError(element, "Поле не может быть пустым");
      result = false;
    } else if (element.type == "checkbox" && !element.checked) {
      createError(element, "Необходимо принять пользовательское соглашение");
      result = false;
    }
    // Дополнительная проверка для email
    if (element.type === "email" && element.value.trim() !== "") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(element.value)) {
        createError(element, "Введите корректный email");
        result = false;
      }
    }
    // Дополнительная проверка для даты
    if (element.type === "date" && element.value.trim() !== "") {
      const today = new Date();
      const inputDate = new Date(element.value);
      if (inputDate > today) {
        createError(element, "Дата не может быть в будущем");
        result = false;
      }
    }
    // Дополнительная проверка для пароля
    if (element.type === "password" && element.value.trim() !== "") {
      const password = element.value;
      const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
      if (!passwordPattern.test(password)) {
        createError(
          element,
          "Пароль должен содержать минимум 8 символов, включая заглавные и строчные буквы, цифры и специальные символы"
        );
        result = false;
      }
    }
  });

  return result;
}

document
  .getElementById("dataForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (validation(this) == true) {
      alert("Форма отправлена успешно!");
    }
  });















































































body {
    font-family: Arial, sans-serif;
  }
  .content {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px 34px 20px 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .formJS {
    display: flex;
    flex-direction: column;
  }
  .formDiv {
    margin-bottom: 15px;
    animation: fadeIn 1s ease-in-out;
  }
  label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
  }
  .checkboxForm {
    display: contents;
  }
  .formInput {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s;
  }
  .formInput:focus {
    border-color: #007bff;
  }
  .btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
  }
  .btn:hover {
    background-color: #0056b3;
  }
  .btn:active {
    transform: scale(0.95);
  }
  .error .formInput {
    border-color: red;
  }
  .error {
    color: red;
    font-size: 12px;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  