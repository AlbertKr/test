Bonjour,

Pour tester mon application, il vous faudra : 

1. Lancez WampServer (ou UwAmp), et vous connecter à MySql
2. Remplacez vos coordonnées de connexion (Login et Mdp) MySql à la place des miens (root et "")
  dans le fichier "connexionBD.php" (qui se trouve dans le dossier modele)
3. Vous pouvez importer la bdd "face", possédant une table nommé "facebook", dont vous pourrez modifier le nom.
  Les inéractions avec la bdd se trouvent dans le fichier "utilisateurBD.php" qui se trouve dans le dossier modele.

Notes personnelles :

  La réalisation du projet s'est très bien déroulé mais avec tout de même quelques problèmes :
  
  La partie du formulaire de connexion marchait très bien jusqu'à ce que je commence la partie inscription,
à partir de ce moment la partie connexion ne fonctionnait plus, et ne fonctionne malheureusement toujours pas.
J'ai quelques idées à propos du problème, je dirais même plus particulièrement une, 
je pense que le problème vient de mon fichier "index.php", mais je n'ai malheureusement pas réussis à le corriger,
même si cela m'a pris plusieurs heures à essayer de le résoudre ...

  La partie du formulaire d'inscription quant à elle, fonctionne très bien, nous pouvons nous inscrire sans problèmes,
les champs sont vérifiés, nous ne pouvons nous inscrire si les champs sont vides ou bien si le champ du numéro de 
téléphone/mail ne correspond pas à celui de la confirmation.

  Le CSS a été réalisé sans problèmes particuliers.
  
  Le code est commenté à plusieurs endroits afin de vous guider dans mes manipulations.
  Code sous Architecture MVC.
  
  
 Bonne journée,
 
 Cordialement,
 
 KRASNIQI Albert.
