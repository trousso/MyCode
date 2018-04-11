<?php
//define the receiver of the email $to = $pros2;

//, testpamp12@gmail.com, testpamp12@yahoo.gr, testpamp12@hotmail.com
//define the subject of the email
$subject = $subject2; 
//create a boundary string. It must be unique 
//so we use the MD5 algorithm to generate a random hash
$random_hash = md5(date('r', time())); 
//define the headers we want passed. Note that they are separated with \r\n
$headers = "From: From@EmailABCDDummy.com\r\nReply-To: Repy-To@EmailABCDDummy.com";
//add boundary string and mime type specification
$headers .= "\r\nContent-Type: text/html;charset=utf-8"; 
//define the body of the message.
ob_start(); //Turn on output buffering
?>
<?php
	$name2=$_POST['nsl_code1'];
	echo $name2;
/*htmlspecialchars($_GET['camp'], ENT_QUOTES, 'UTF-8');*/
?>
<?
//copy current buffer contents into $message variable and delete current output buffer
$message = ob_get_clean();
//send the email
$pros2=$_POST['pros1'];
$subject2=$_POST['subject1'];
$mail_sent = @mail( $pros2, $subject2, $message, $headers );
//if the message is sent successfully print "Mail sent". Otherwise print "Mail failed" 
echo $mail_sent ? "Mail sent" : "Mail failed";

?>