document.getElementById("emailForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var data = {
      email: email,
      subject: subject,
      message: message
  };

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "sendmail.php", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
          if (xhr.status === 200) {
              alert("Email đã được gửi thành công!");
          } else {
              alert("Gửi email thất bại. Vui lòng thử lại sau!");
          }
      }
  };

  xhr.send(JSON.stringify(data));
});
