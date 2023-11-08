<?php
if (empty($_POST["email"]) || empty($_POST["registrationNo"])) {
    header("location:index.html?empty=1");
} else {
    $email = $_POST["email"];
    $registration = $_POST["registrationNo"];
    $conn = mysqli_connect("localhost", "root", "", "adm");
    if ($conn) {
        $query = "select * from adm where email='$email' AND registration='$registration'";
        $result = mysqli_query($conn, $query);
        if ($result && mysqli_num_rows($result) > 0) {
            echo "success";
            header("location:cert.html");
        } else {
	          header("location:index.html?invalid_registration");
			
        }
    } else {
        header("location:index.php?db_error");
    }
}
?>
