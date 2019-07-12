
var repository = [
   {
   name: 'bulbasaur',
   size: '2',
   type: ['grass', 'poison']
   },

   {
   name: 'Ivysaur',
   size: '3',
   type: ['grass', 'poison']
   },

   {
   name: 'Venusaur',
   size: '6',
   type: ['grass', 'poison']
   },

   {
   name: 'Charmander',
   size: '2',
   type: ['fire']
   },

   {
   name: 'Charmeleon',
   size: '2',
   type: ['fire']
   },

   {
   name: 'Charizdard',
   size: '5',
   type: ['fire', 'flying']
   }
];


repository.forEach(function(repository) {
   for(var prop in repository){
      document.write (repository[prop] + '"' + '<br>')
   }
    if (repository.size > 5) {
        document.write ('<p>Wow! Biggest Pokemon</p>');
      };
   });
     