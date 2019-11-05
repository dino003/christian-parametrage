<?php

header("Content-Type: application/json;");

$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "param"; 
$id = '';

$method = $_SERVER['REQUEST_METHOD'];

try{
    $pdo = new PDO("mysql:host=" . $host . ";dbname=" . $dbname, $user, $password);

    $retour["succes"] = true;
    $retour["message"] = "Conexion reussie";


}catch(PDOException $exception){
    echo "Error: " . $exception->getMessage();
    $retour["succes"] = false;
    
}


switch ($method) {
    case 'GET':
     
     $req = $pdo->prepare("SELECT * FROM `coords` ORDER BY `tranche_id` ASC ");
    $req->execute();

      break;
    case 'POST':
      $req = $pdo->prepare("SELECT * FROM `coords` WHERE `tranche_id` LIKE :tranc ORDER BY `tranche_id` ASC");
     $req->bindParam(':tranc', $_POST["tranche"]);
      $req->execute();
      break;
}

$req2 = $pdo->prepare("SELECT * FROM `tranches` ");
    $req2->execute();

$res = $req->fetchAll();
$res2 = $req2->fetchAll();


$retour["succes"] = true;
$retour["resultats"]["coords"] = $res;
$retour["resultats"]["tranches"] = $res2;


echo json_encode($retour);

// execution du serveur
// php -S 127.0.0.1:8080