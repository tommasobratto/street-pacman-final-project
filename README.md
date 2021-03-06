Pacman.js - client-side GPS-tracking game.
==========================================
You can check out the live version on Heroku: http://street-pacman.herokuapp.com/

Note: 
-----
Right now, this is the most up to date fork of all the project repos. I started it mainly to see if I could refactor and clean up a bit more of the codebase.

I feel like the highlights of this project were the Socket.io implementation, done in around two days with no previous knowledge, which allowed real-time update of enemy location and game status (also read: Multiplayer!) and it practically worked as a base on which to build all the other features upon, like the addition of player interaction features like "eating" pellets and enemies and the differentiation between player "pacman" and player "ghost" interactions within the game, or the game status changing once the "pacman" player ate the pellet. 

All in all, it took around 5 days to get to a decent point for the presentation. We had a lot of live testing, even if the GPS tech is not very reliable nor accurate for this kind of thing, so we had to compensate a bit for it.

In the end, I see it more as a proof-of-concept project than anything, since the GPS tech we used felt very laggy and unresponsive for a game experience.

Instructions
------------
To try out the player geolocation feature on a GPS-enabled phone:
 - clone the source code on a local folder
 - type ```npm install``` to install the required npm packages
 - startup the local server with ``` http-server ```.
 - if you don't have http-server, type ```npm install -g http-server``` in the command line
 - download [ngrok](http://ngrok.com/)
 - setup ngrok in your command line by typing ``` /Users/*youruserfoldernamehere*/Downloads/ngrok 8080 ```
 - open up the url that ngrok provides in your phone browser (with geolocation activated), example: ``` http://*bunchofnumbersandletters*.ngrok.com/ ```
 
Or, if you have Ruby installed:
 - after point 3/4, you can run ```gem install proxylocal``` to use a similar service to ngrok
 - type ```proxylocal``` plus the port your http-server points to (it should be 3000 by default)
 - open up the url proxylocal gives you, as always checking that your GPS tracking is activated


Built with:
- Google Maps API and GMaps.js
- Javascript
- JQuery
- Html
- Css
- Socket io
- Express js
- Node


Concept:
Real-life tag Pacman game! 5 players connect to the app and choose to be either Pacman or one of the 4 Ghosts. Pacman's goal is to eliminate every Ghost by eating the 4 super pellets on the map and turning the roles of the game, while the Ghosts aim to touch Pacman.


Features:
- Geolocation via GPS
- Multiplayer
- Real-time
- Retro design


For more info, get in touch with the team:
- ![Diego](https://avatars2.githubusercontent.com/u/10360735?v=3&s=120) - [Diego](https://github.com/jdiegoromero)
- ![Guido](https://avatars2.githubusercontent.com/u/10268884?v=3&s=120) - [Guido](https://github.com/guidovitafinzi)
- ![Tommaso](https://avatars2.githubusercontent.com/u/10244235?v=3&s=120) - [Tommaso](https://github.com/tommasobratto)
- ![Vanessa](https://avatars0.githubusercontent.com/u/10236105?v=3&s=100) - [Vanessa](https://github.com/vvirgitti)
