document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Lấy thông tin từ form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
  
    // Gửi email
    sendEmail(name, email, subject, message);
  });
  
  function sendEmail(name, email, subject, message) {
    var params = {
      to: email,
      from: 'ntson.ongroup@gmail.com', // Thay thế bằng địa chỉ email của bạn
      subject: subject,
      text: 'Xin chào ' + name + ',\n\n' + message
    };
  
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'smtp.gmail.com');
    xhr.setRequestHeader('Authorization', 'Bearer xjrxodkguurkxcva'); // Thay thế YOUR_API_TOKEN bằng mã thông báo API của bạn
    xhr.setRequestHeader('Content-Type', 'application/json');
  
    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log('Email đã được gửi thành công!');
        alert('Email đã được gửi thành công!');
        // Xóa nội dung form sau khi gửi thành công
        document.getElementById('emailForm').reset();
      } else {
        console.error('Đã xảy ra lỗi khi gửi email:', xhr.statusText);
        alert('Đã xảy ra lỗi khi gửi email!');
      }
    };
  
    xhr.onerror = function() {
      console.error('Đã xảy ra lỗi khi gửi email:', xhr.statusText);
      alert('Đã xảy ra lỗi khi gửi email!');
    };
  
    xhr.send(JSON.stringify(params));
  }
  