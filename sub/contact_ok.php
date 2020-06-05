<? 
    include_once $_SERVER['DOCUMENT_ROOT']."/php/db.php";

    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $query = "INSERT INTO contact(name, email, message) VALUES ('$name', '$email', '$message')";
    
    mq($query);

    echo "<script>alert('SUCCESS');</script>";
    echo "<script>location.href='contact.php';</script>";
?>
