<?php
header("Content-Type: application/json");
$data = json_decode(file_get_contents("php://input"));
echo "Сервер получил следующие данные: имя — $data->name, номер телефона — $data->phone";

// $arr['name']=$_POST['name'];
// $arr['phone']=$_POST['phone'];
// echo json_encode($arr);