<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $email = $data['email'];
    $subject = $data['subject'];
    $message = $data['message'];

    // Thực hiện việc gửi email ở đây
    // Sử dụng thư viện PHPMailer hoặc hàm mail() trong PHP

    // Ví dụ sử dụng PHPMailer:
    require 'PHPMailer/PHPMailerAutoload.php';

    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 587;
    $mail->SMTPSecure = 'tls';
    $mail->SMTPAuth = true;
    $mail->Username = 'ntson.ongroup@gmail.com'; // Thay đổi email của bạn
    $mail->Password = 'xjrxodkguurkxcva'; // Thay đổi mật khẩu của bạn

    $mail->setFrom('ntson.ongroup@gmail.com', 'nolan'); // Thay đổi email và tên người gửi
    $mail->addAddress($email); // Thêm địa chỉ email người nhận
    $mail->Subject = $subject;
    $mail->Body = $message;

    if (!$mail->send()) {
        http_response_code(500);
        echo json_encode(array('message' => 'Gửi email thất bại.'));
        exit;
    }

    http_response_code(200);
    echo json_encode(array('message' => 'Gửi email thành công.'));
    exit;
}
?>
