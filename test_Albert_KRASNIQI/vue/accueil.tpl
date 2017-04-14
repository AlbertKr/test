<!doctype html>

<html>

<head>

  <meta charset="utf-8">
  <title> Test - Facebook </title>
	<link rel="stylesheet" href="./vue/styleCSS/style.css"/>
   <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
   <script src="./vue/scriptJs/script.js?v=1"></script>
   <script src="./vue/scriptJs/jquery.js"></script>

 

</head>

<body>

	<header>	<!-- Formulaire de connexion -->
	
		<form id="form" method="post" action="index.php?controle=facebook&action=connexion" onsubmit="return verifcon()" > <!-- Appel des fonctions Js pour la vérification des entrées -->
		
		<table>
		<tr>
			<td><label id="cone"> Adresse e-mail ou mobile </label></td>
			<td><label id="cone"> Mot de passe </label></td>			
		</tr>	
		<tr>
			<td><input name="login" id="login" class="login" placeholder="Votre login" /> </td>
			<td><input name="pass" id="pass" class="pass" type="password" placeholder="Votre mot de passe" /></td>
			<td><input id="connexion" value="Connexion" type="submit" /> </td>
		</tr>	
		<tr>
			<td> </td>
			<td><label><a href="#" id="lien1"> Information de compte oubliées ?</a> </label></td>
		</tr>
		</table>	 
		
		</form>
		
	</header>

	
	
				<!-- Formulaire d'inscription -->
				
	<form id="form2"  method="post"  action="index.php?controle=facebook&action=inscription"  onsubmit="return verifins()"  > <!-- Appel des fonctions Js pour la vérification des entrées -->

	<div>
		<p id="titre"> Inscription </p>
		
		<p id="gratis"> C'est gratuit (et ça le restera toujours) </p>

		<input name="prenom" id="prenom" class="prenom" onKeyPress="return lettres(event);" placeholder="Prénom"  />   <!-- Appel des fonctions Js pour la vérification des entrées -->
		 
		<input name="nom" id="nom" class="nom" onKeyPress="return lettres(event);"  placeholder="Nom de famille"  /> <!-- Appel des fonctions Js pour la vérification des entrées -->
			
		<input name="num"  id="num" class="num" placeholder="Numéro de mobile ou email"  /> 
		
		<input name="confnum" id="confnum" class="confnum"  placeholder="Confirmer numéro de mobile ou email"  /> 		
		 
		<input name="mdp" id="mdp" class="mdp" type="password" placeholder="Nouveau mot de passe" />
	</div>
	
	<div>
		<p id="naiss"> Date de naissance </p>	
		<input type="date" id="datenaissance" name="datedenaissance" > <label><a href="#1" id="lien">Pourquoi ma date de naissance ?</a></label>
		
		<input type="radio" id="femme" name="genre" value="Femme" checked> Femme <br>			
		<input type="radio" id="homme" name="genre" value="Homme"> Homme <br>

		<p id="cond"> 
			En cliquant sur Inscription, vous acceptez nos <a href="#2" id="lien">Conditions</a> et indiquez que vous avez 
			lu notre <a href="#3" id="lien">Politique d’utilisation des données</a>, y compris notre <a href="#4" id="lien">Utilisation des cookies</a>.
			Vous pourrez recevoir des notifications par texto de la part de Facebook et pouvez vous désabonner à tout moment.
		</p>
				
		<input id="inscription" value="Inscription"  type="submit" /> 
	 </div>
	 
	</form>

</body>

</html>
