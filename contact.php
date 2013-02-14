<?php
	$name = $_POST['name'];
	$subject = $_POST['subject'];
	$fromEmail = $_POST['email'];
	$message = $_POST['message'];
	
	$toEmail = 'michaelotte1@gmail.com';
	
	/** remember mail($to, $subject, $message, $headers, $parameters) **/
	mail($toEmail, $subject, $name.''.$message, 'From:'.$fromEmail);
	
	/** send confirmation to the message sender **/
	mail($fromEmail, 'confirmed['.$subject.']', 'Thank you for sending a message to Michael Otte.  This is an automated message.', 'From:donotreply@ivynexus.com');
	
	echo 'success';

?>