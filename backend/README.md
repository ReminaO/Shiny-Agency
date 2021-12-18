# Shiny Agency

Ce repo contient le code de l'API dont vous aurez besoin pour le cours OpenClassrooms ------.
Il va de paire avec [le repository de la partie frontend](https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire.git).


## Lancer l'API en local

Pour suivre le cours, vous aurez besoin d'installer l'API en local sur votre machine. Pour cela :
1. Faites un `git clone https://github.com/OpenClassrooms-Student-Center/7150606-API-React-intermediaire.git`
2. Installez les `node_modules` avec `yarn` ou `npm install`
3. Faites tourner l'API avec `yarn start` ou `npm start`


## Consommer l 'API
L'API Shiny est une API REST. 

- La route pour récupérer les profils des freelances :
`GET /freelances`

- La route pour avoir le détail d'un profil de freelance :
`GET /profile/?id={id}`

- La route pour avoir le questionnaire :
`GET /survey/`

- La route pour obtenir le résultat du questionnaire :
`GET /results/?a1={answer1}&a2={answer2}&a3={answer3}...`


## Modifier l'API

N'hésitez pas à explorer l'API pour tester. Cette base de code a été initialisée avec [Express Generator](https://expressjs.com/fr/starter/generator.html).