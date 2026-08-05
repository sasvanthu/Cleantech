<?php

require_once('phpmailer/class.phpmailer.php');
require_once('phpmailer/class.smtp.php');

$mail = new PHPMailer();

//$mail->SMTPDebug = 3; // Enable verbose debug output
$mail->isSMTP(); 
$mail->Host = 'smtp.hostinger.com'; 
$mail->SMTPAuth = true; 
$mail->Username = 'no_reply@kleanmaxpro.com'; 
$mail->Password = 'tcjX~KJsqac#1'; 
$mail->SMTPSecure = 'ssl'; // use 'ssl' for port 465, 'tls' for 587
$mail->Port = 465; 

$message = "";
$status = "false";

if( $_SERVER['REQUEST_METHOD'] == 'POST' ) {
    if( $_POST['form_name'] != '' AND $_POST['form_email'] != '' AND $_POST['form_phone'] != '' ) {

        $name    = $_POST['form_name'];
        $email   = $_POST['form_email'];
        $subject = $_POST['form_subject'];
        $phone   = $_POST['form_phone'];

        $subject = isset($subject) ? $subject : 'New Message | Quick Enquiry';
        $botcheck = $_POST['form_botcheck'];

        $toemail = 'info@kleanmaxpro.com';
        $cc      = 'sritherss.s@gmail.com';
        $bcc     = 'kishore0288@gmail.com';
        $toname  = 'Klean Max Quick Enquiry!';

        if( $botcheck == '' ) {

            // ✅ FIX: Always use your authenticated sender
            $mail->SetFrom('no_reply@kleanmaxpro.com', 'Kleanmax Pro');
            $mail->AddReplyTo($email, $name); // visitor’s email

            $mail->AddAddress($toemail , $toname);
            $mail->AddCC($cc , $toname);
            $mail->AddBCC($bcc , $toname);

            $mail->Subject = $subject;

            $name    = isset($name) ? "Name: $name<br><br>" : '';
            $email   = isset($email) ? "Email: $email<br><br>" : '';
            $phone   = isset($phone) ? "Phone: $phone<br><br>" : '';
            $subject = isset($subject) ? "Services: $subject<br><br>" : '';

            $referrer = $_SERVER['HTTP_REFERER'] ? '<br><br><br>This Form was submitted from: ' . $_SERVER['HTTP_REFERER'] : '';

            $body = "$name $email $phone $subject $referrer";

            $mail->MsgHTML($body);

            if($mail->Send()):
                $message = 'We have <strong>successfully</strong> received your Message and will get back to you soon.';
                $status = "true";
            else:
                $message = 'Email <strong>could not</strong> be sent.<br /><br /><strong>Reason:</strong><br />' . $mail->ErrorInfo;
                $status = "false";
            endif;
        } else {
            $message = 'Bot <strong>Detected</strong>. Clean yourself Botster!';
            $status = "false";
        }
    } else {
        $message = 'Please <strong>Fill up</strong> all the Fields and Try Again.';
        $status = "false";
    }
} else {
    $message = 'An <strong>unexpected error</strong> occurred. Please Try Again later.';
    $status = "false";
}

$status_array = array( 'message' => $message, 'status' => $status);
echo json_encode($status_array);
?>
