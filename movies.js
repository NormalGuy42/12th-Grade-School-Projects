//This program recommends a book title depending on the genre selected
//Enter one of four genres : action, family, scifi or comedy  to get a result


var  user_name = 'Ndeye Astou';//Enter your name
console.log('Hello',user_name + ',','today I will recommend you a movie');
var genre = 'comedy'.toLowerCase(); //Enter a genre
console.log('The genre you picked was :',genre)

var action_movies = ['Fast and Furious 7', 'Transformers', 'Mad Max: Fury Road','Godzilla','Hitman',
'Taken', 'The Equalizer']
var family_movies = ['Sonic','Hary Potter','Cinderella','Minions','Ice Age 5','Kung Fu Panda']

var scifi_movies = ['Dune','1984','Blade Runner','The Martian Chronicles','Terminator'];

var comedy_movies = ['Borat', 'Monthy Python and the Holy Grail','Friday'];

if(genre == 'action'){
    choice = Math.floor(Math.random()*action_movies.length);
    console.log(`In the action movies list,you might like this movie called: "${action_movies[choice]}"`);
}
else if(genre == 'scifi'){
    choice = Math.floor(Math.random()*scifi_movies.length);
    console.log(`In the scifi movies list,you might like this movie called: "${scifi_movies[choice]}"`);
}
else if(genre == 'family'){
    choice = Math.floor(Math.random()*family_movies.length);
    console.log(`In the family movies list, you might like this movie called: "${family_movies[choice]}"`);
}
else if(genre == 'comedy'){
    choice = Math.floor(Math.random()*comedy_movies.length);
    console.log(`In the mystery movies list,you might like this movie called: "${comedy_movies[choice]}"`);
}
//Error handling
else{
    console.log('Error! The genre you entered was not recognized, please check spelling or pick available genre');
}



