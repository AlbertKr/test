<?php

	// Fonction de connexion à son compte facebook où l'on manipule la base de données
function verif_connexion($login,$pass,&$profil) {
	
	require ('./modele/connexionBD.php'); 
	
	// Préparation des requêtes de connexion
	$req = $bdd->prepare("SELECT * FROM facebook WHERE login = ? and mdp= ?");
	$req->execute(array($_POST['login'], $_POST['pass']));

	$existe = $req->rowCount();
	
	// Création de la Session
	if( $existe > 0){
		$_SESSION['profil'] = array(
		'login' => $login,
		'pass' => $pass		
		);
		return true;
	}else{
		$profil = null;
		return false;		
	}
	
	// Fermeture du curseur
	$req->closeCursor();
	
}

	// Fonction d'inscription à facebook où l'on manipule la base de données
function inscrip(){
	
	require ('./modele/connexionBD.php'); 
	
	// Préparation des requêtes d'inscription
	$req = $bdd->prepare('INSERT INTO facebook(prenom, nom, login, mdp, datenaissance, genre) VALUES(?, ?, ?, ?, ?, ?)');
	$req->execute(array($_POST['prenom'], $_POST['nom'], $_POST['num'], $_POST['mdp'], $_POST['datedenaissance'] , $_POST['genre']));
	
}

?>