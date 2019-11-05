<?php
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "param"; 
$id = '';

$con = mysqli_connect($host, $user, $password,$dbname);

$method = $_SERVER['REQUEST_METHOD'];

if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}


switch ($method) {
    case 'POST':
    $categorie = $_POST["categorie"];
    $taux_horraire = $_POST["taux_horraire"];
    $montant_heure_100 = $_POST["montant_heure_100"];
    $montant_heure_115 = $_POST["montant_heure_115"];
    $montant_heure_175 = $_POST["montant_heure_175"];
    $montant_heure_200 = $_POST["montant_heure_200"];
    $montant_heure_150 = $_POST["montant_heure_150"];
    $avantage_acquis = $_POST["avantage_acquis"];
    $prime_precarite = $_POST["prime_precarite"];
    $panier_salissure_mouille = $_POST["panier_salissure_mouille"];
    $indemnite_transport = $_POST["indemnite_transport"];
    $brut_imposable = $_POST["brut_imposable"];
    $tranche_id = $_POST["tranche_id"];
    $brut_total = $_POST["brut_total"];
    $provis_conge_gratis = $_POST["provis_conge_gratis"];
    $frais_bureau = $_POST["frais_bureau"];
    $frais_centre_medical = $_POST["frais_centre_medical"];
    $tva_frais_fonctionnement = $_POST["tva_frais_fonctionnement"];
    $prestation_familliales = $_POST["prestation_familliales"];
    $accident_travail = $_POST["accident_travail"];
    $c_r_t_c_i = $_POST["c_r_t_c_i"];
    $impot_sal = $_POST["impot_sal"];
    $taxe_fpc = $_POST["taxe_fpc"];
    $taxe_apprenti = $_POST["taxe_apprenti"];
    $total_montant_heure = $_POST["total_montant_heure"];
    $total_cout = $_POST["total_cout"];
         
      $req = "insert into coords (categorie, total_cout, total_montant_heure,
      taxe_apprenti, taxe_fpc, impot_sal, c_r_t_c_i,accident_travail,prestation_familliales,
      tva_frais_fonctionnement,frais_centre_medical,frais_bureau,
      provis_conge_gratis,brut_total,tranche_id,brut_imposable,indemnite_transport,
      panier_salissure_mouille,prime_precarite,avantage_acquis,montant_heure_150,
      montant_heure_200,montant_heure_175,
      montant_heure_115,montant_heure_100,taux_horraire) 
     values ('$categorie', '$total_cout', '$total_montant_heure',
      '$taxe_apprenti', '$taxe_fpc', '$impot_sal', '$c_r_t_c_i','$accident_travail',
      '$prestation_familliales','$tva_frais_fonctionnement','$frais_centre_medical','$frais_bureau',
      '$provis_conge_gratis','$brut_total','$tranche_id','$brut_imposable','$indemnite_transport',
      '$panier_salissure_mouille','$prime_precarite','$avantage_acquis','$montant_heure_150',
      '$montant_heure_200','$montant_heure_175','$montant_heure_115','$montant_heure_100','$taux_horraire')";

      break;
}

$result = mysqli_query($con,$req);

if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}

$con->close();