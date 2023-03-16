
# 🏠 Cozy Nest: Client Side 🏠
## Project Overview
Cozy Nest is an interior design and decor application providing users structure when it comes to designing their space. Designing a new space or renovating an existing one is always exciting, but oftentimes people can easily become inundated with the myriad of ideas and inspirations. This is where Cozy Nest comes in! You can add the specific rooms you want to design and the pieces you want in your rooms. This allows the user to keep an account of the rooms and pieces, while also being able to visualize the room and the associated pieces. This streamlines the home design process, giving users more clarity and peace of mind.

## Primary Features of Cozy Nest

* Google Authentication is required to gain access to Cozy Nest
  * Upon authentication, new user will be shown a form to fill out before accessing contents of the application
  * Landing page will provide users with images and descriptions of the 18 most popular interior design styles, allowing users to better determine what styles they may want to incorporate into their spaces

* Public view: 
  * All authenticated users can view rooms and pieces created by other authenticated users

* Rooms:
  * Authenticated users are able to create their a room/space
  * Authenticated users are able to edit and delete rooms they have created, but can only view rooms created by other authenticated users

* Pieces:
  * Authenticated users are able to submit a piece(s) that accompanies a particular room
  * Authenticated users are able to create a piece they would like to share
  * Authenticated users are able to select one room they would like a piece to belong to. The room they select will be a room they have created, not a room created by another authenticated user.
  * Authenticated users are able to edit and delete pieces they have created and shared, but can only view pieces created by other authenticated users

* Users are able to sign out of the application via the "Sign Out" button on the nav bar

## Begin Designing Your Own Cozy Nest!
In order for the client side to work, you will need to run the server side API server/debugger. [Here](https://github.com/krima-patel/CozyNest-BE) is my server side repo. The server side API server/debugger must be running at the same time as the client side. Follow the instructions on the Cozy Nest server-side repo's README.md

### Run Frontend Locally
1. First, set up [Google Firebase Authentication](https://firebase.google.com/).
2. Clone the CozyNest-FE repo to your local machine:
git@github.com:krima-patel/CozyNest-FE.git
3. Go into the directory:
cd CozyNest-FE
4. Once CozyNest-FE project is open, make sure you are at the root level of your the project and create a .env file. You will put your environmental variables into your .env file:
NEXT_PUBLIC_FIREBASE_API_KEY=""
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=""
NEXT_PUBLIC_DATABASE_URL="http://localhost:8000"
5. You will find your environmental variables in your Google Firebase by going to Project Overview -> Project Settings - Your Apps
6. Copy and Paste your respective variables into the empty strings.
7. Go to your terminal in your project, while in the root directory, run this command:
npm install or npm i
8. Now run this command:
npm run prepare
9. Then run this command to start Cozy Nest and view it in your browser:
npm run dev
10. Click http://localhost:3000 in the terminal to open Cozy Nest in your browser
11. Have fun viewing and designing on Cozy Nest! If you want to stop the server at any point, press ctrl+C

## Planning Documents:
- [Cozy Nest ERD](https://dbdiagram.io/d/63de819e296d97641d7e7174)
- [Cozy Nest Wireframe](https://whimsical.com/krima-s-cozynest-wireframe-GuLoPWBKnZSPUK3dahrGRd)

## Contributions

Krima Patel
- [Krima's LinkedIn](https://www.linkedin.com/in/krima-patel/)
- Krima's email: patel.krima@hotmail.com
## Have Questions?

Have any questions or comments about Cozy Nest? Please leave them in [this dicussion board](https://github.com/krima-patel/CozyNest-FE/discussions)!

## Backend Tech Stacks
<div align="center">  
<a href="https://www.python.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/python-original.svg" alt="Python" height="50" /></a>  
<a href="https://www.djangoproject.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/django-original.svg" alt="Django" height="50" /></a>
<a href="https://sqlite.org/index.html" targert="_blank"><img style="margin 10px" src="https://user-images.githubusercontent.com/33158051/103467186-7b6a8900-4d1a-11eb-9907-491064bc8458.png" alt="SQLite" height="50" /></a>
</div>

</td><td valign="top" width="33%">

<br/>
  
## Frontend Tech Stacks
<div align="center">  
<a href="https://reactjs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="50" /></a>  
<a href="https://getbootstrap.com/docs/3.4/javascript/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg" alt="Bootstrap" height="50" /></a>  
<a href="https://www.w3schools.com/css/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" /></a>  
<a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /></a>  
<a href="https://www.javascript.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" /></a>  
<a href="https://www.typescriptlang.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="TypeScript" height="50" /></a>  
<a href="https://github.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="50" /></a>  
<a href="https://firebase.google.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/firebase.png" alt="Firebase" height="50" /></a>  
<a href="https://www.figma.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/figma-icon.svg" alt="Figma" height="50" /></a>
<a href="https://whimsical.com/" target="_blank"><img style="margin: 10px" src="https://www.freelogovectors.net/wp-content/uploads/2021/07/whimsical_logo-freelogovectors.net_.png" alt="Whimsical" height="50" /></a>
</div>

</td><td valign="top" width="33%">
