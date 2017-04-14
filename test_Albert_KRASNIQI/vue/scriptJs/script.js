
	// Vérification des entrées dans la partie Connexion
function verifcon(){
	
		// Si le champ du "login" et du "mot de passe" sont vides, la connexion ne se fera pas et une alrte apparaitra
		if(document.getElementById('login').value == '' || document.getElementById('pass').value == ''){
			alert('Veuillez remplir tous les champs !');
			return false;			
		}
		// Si tout est aux normes, la connexion est faite
		else
		{
			return true;
		};
}

	// Vérification des entrées dans la partie Inscription
function verifins(){
	
	
		// Si les champs "numéro" et "confirmation de numéro" sont différents, alors on envoie pas le formulaire
		if(document.getElementById('num').value !== document.getElementById('confnum').value){			
			alert('Les numéros/emails ne sont pas identiques !');
			return false;		
		}
		
		// Si un ou plusieurs champs sont vides, le formunlaire n'est pas envoyé et une alerte apparaitra
		if(document.getElementById('datenaissance').value == '' || document.getElementById('nom').value == '' || document.getElementById('prenom').value == '' || document.getElementById('num').value == '' || document.getElementById('confnum').value == '' || document.getElementById('mdp').value == ''){
			alert('Veuillez remplir tous les champs !');
			return false;			
		}
		// Si tout est aux normes, le formulaire est envoyé et l'inscription est faite
		else
		{
			alert('Inscription terminé !');
			return true;
		};		
}
		
	// Autorisation seulement d'entrer des lettres dans les zones appropriées
function lettres(event) {

	var code = event.keyCode; 
	var which = event.which;
	
	//Si le keycode ne correspond pas à [A-Z] ou à [a-z] ou aux autres autorisés
	if  (!((which >= 65 && which <= 90) || (which >= 97 && which <= 122) || (code >= 37 && code <= 40) || code == 8 || code == 9 || code == 13 || code == 16 || code == 46 || event.ctrlKey)) {
		event.preventDefault();
		event.stopPropagation();
	}
	
}
	
	
	
	
	
	
	