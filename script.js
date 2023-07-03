document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию
    
    var selectedRadio = document.querySelector('input[name="radio"]:checked');
    
    if (selectedRadio) {
      if (selectedRadio.value === 'C') {
        // Сотрудник выбран, перенаправляем на профиль сотрудника
        window.location.href = 'Sotrudnil.html';
      } else if (selectedRadio.value === 'P') {
        // Покупатель выбран, перенаправляем на профиль покупателя
        window.location.href = 'profilpokupatel.html';
      }
    }
  });
  