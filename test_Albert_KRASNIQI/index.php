<?php

// Ouverture d'une session
session_start();

	// Page d'accueil lorsque l'on ouvre le projet
	
if (count($_GET)==0){
	$controle = "accueil";   
	$action	=	"accueil";	
	require ('./controle/' . $controle . '.php');
	$action ();		
}
	

	// Lorsque l'on changera de page, l'url s'adaptera au contrôle et à la fonction associée
	
if (isset($_GET['controle']) && isset ($_GET['action'])){
		$controle = $_GET['controle'];  
		$action = 	 $_GET['action'];	
		require ('./controle/' . $controle . '.php');
		$action ();
}
		
				
?>