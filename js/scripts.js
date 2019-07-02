
var repository = [
   [
   'Bulbasaur', 
   '2', 
   'grass, poison'
   ],
   [
   'Ivysaur', 
   '3', 
   'grass, poison'
   ],
   [
   'Venusaur',
   '6', 
   'grass, poison'
   ],
   [
   'Charmander', 
   '2', 
   'fire'
   ],
   [
   'Charmeleon', 
   '3', 
   'fire'
   ],
   [ 
   'Charizard', 
   '5', 
   'fire, flying'
   ]
]   ;

for (var i = 0; i < repository.length; i++) {
   if (repository[i][1] > 5) {
     document.write ('<p>Wow! Biggest Pokemon</p>');
   }
 
   document.write ('<h2>' + repository[i][0] + '</h2>');
} 
