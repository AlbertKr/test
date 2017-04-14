<?php


	// Fonction de connexion à facebook
function connexion () {
	
	// On vérifie si "login" et "pass" existe bien
	$login=isset($_POST['login']);
	$pass=isset($_POST['pass']);

	require ('./modele/utilisateurBD.php');

	if (count($_POST)==0){

			require('./vue/accueil.tpl');

	}
	else {
		
		// On établie la connexion, et on crée la session dans le cas où les identifiants le permette
		if (verif_connexion($login, $pass, $profil)) {
			
			$_SESSION['profil'] = $profil;
			
			$nexturl = "index.php?controle=accueil&action=connecte";
			
			header ("Location:" . $nexturl);

			
		}
	
		// Les identifiants sont erronées, on retourne à la page d'accueil
		$nexturl = "index.php";
		header ("Location:" . $nexturl);

	}
	
	require('./vue/connecte.tpl');
	
}


	// Fonction d'inscription à facebook
function inscription(){

	require('./modele/utilisateurBD.php');

	inscrip();
	
	// Inscription terminée, on reste à la page d'accueil
	$nexturl = "index.php";
	header ("Location:" . $nexturl);
	
	
}

	// Fonction de déconnexion à facebook
function deconnexion(){	

	session_destroy();
	
	$nexturl = "index.php";
	
	header ("Location:" . $nexturl);
	
	// Fermeture de la session
	session_destroy();
	
}

?>