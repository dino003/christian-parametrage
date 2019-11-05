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
      $Ecategorie = $_POST["Ecategorie"];
      $Etaux_horraire = $_POST["Etaux_horraire"];
      $Emontant_heure_100 = $_POST["Emontant_heure_100"];
      $Emontant_heure_115 = $_POST["Emontant_heure_115"];
      $Emontant_heure_175 = $_POST["Emontant_heure_175"];
      $Emontant_heure_200 = $_POST["Emontant_heure_200"];
      $Emontant_heure_150 = $_POST["Emontant_heure_150"];
      $Eavantage_acquis = $_POST["Eavantage_acquis"];
      $Eprime_precarite = $_POST["Eprime_precarite"];
      $Epanier_salissure_mouille = $_POST["Epanier_salissure_mouille"];
      $Eindemnite_transport = $_POST["Eindemnite_transport"];
      $Ebrut_imposable = $_POST["Ebrut_imposable"];
      $Etranche_id = $_POST["Etranche_id"];
      $Ebrut_total = $_POST["Ebrut_total"];
      $Eprovis_conge_gratis = $_POST["Eprovis_conge_gratis"];
      $Efrais_bureau = $_POST["Efrais_bureau"];
      $Efrais_centre_medical = $_POST["Efrais_centre_medical"];
      $Etva_frais_fonctionnement = $_POST["Etva_frais_fonctionnement"];
      $Eprestation_familliales = $_POST["Eprestation_familliales"];
      $Eaccident_travail = $_POST["Eaccident_travail"];
      $Ec_r_t_c_i = $_POST["Ec_r_t_c_i"];
      $Eimpot_sal = $_POST["Eimpot_sal"];
      $Etaxe_fpc = $_POST["Etaxe_fpc"];
      $Etaxe_apprenti = $_POST["Etaxe_apprenti"];
      $Etotal_montant_heure = $_POST["Etotal_montant_heure"];
      $Etotal_cout = $_POST["Etotal_cout"];
      $element_id = $_POST["element_id"];

        $req = "UPDATE coords SET total_cout=$Etotal_cout,
        total_montant_heure=$Etotal_montant_heure,taxe_apprenti=$Etaxe_apprenti,
        taxe_fpc=$Etaxe_fpc,impot_sal=$Eimpot_sal,c_r_t_c_i=$Ec_r_t_c_i,
        accident_travail=$Eaccident_travail,prestation_familliales=$Eprestation_familliales,
        tva_frais_fonctionnement=$Etva_frais_fonctionnement,frais_centre_medical=$Efrais_centre_medical,
        frais_bureau=$Efrais_bureau,provis_conge_gratis=$Eprovis_conge_gratis,
        brut_total=$Ebrut_total,tranche_id=$Etranche_id,brut_imposable=$Ebrut_imposable,
        indemnite_transport=$Eindemnite_transport,panier_salissure_mouille=$Epanier_salissure_mouille,
        panier_salissure_mouille=$Epanier_salissure_mouille,prime_precarite=$Eprime_precarite,
        avantage_acquis=$Eavantage_acquis,montant_heure_150=$Emontant_heure_150,
        montant_heure_200=$Emontant_heure_200,montant_heure_175=$Emontant_heure_175,
        montant_heure_115=$Emontant_heure_115,montant_heure_100=$Emontant_heure_100,
        taux_horraire=$Etaux_horraire,categorie=$Ecategorie
        WHERE id=$element_id";

      break;
}

$result = mysqli_query($con,$req);

if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}

$con->close();