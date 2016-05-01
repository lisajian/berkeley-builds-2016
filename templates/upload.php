<?php
$target_dir = "uploads/";
$target_file = $target_dir.basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
if(isset($_POST["submit"])) {
	if (!is_writable($target_file)) {
		echo "nope";
	} else if (file_exists($target_file)) {
		echo "Sorry, file already exists.";
		$uploadOk = 0;
	} else {
		echo "File has been uploaded UPDATED.";
		$uploadOk = 1;
    }
}
?>