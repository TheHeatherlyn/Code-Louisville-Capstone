var first = [
    "Stinky", "Filbert", "George", "Dirty", "Dizzy", "Narrow", "Shaky", "Hawk-Nose", "Gorgeous", "Dum Dum", "Greasy", "Pus-face", "Smelly", "Snaggle-Tooth", "Slouchy", "Marvin", "Harry", "Hercules", "Tiny", "Wheezy", "Argh-Blat", "Slappy", "Mugsley", "Melvin", "Red", "Griselda", "Gassy", "Saucy"


]

var last = [
    "Bugbear-bait","Rolly-Pimple", "Soggy-bottom",  "Butt-Cheeks", "Bum-Shaker", "Underpants", "McTrollface", "MoldyWart", "Von Beethoven", "The Green", "McNutt", "Trouser-patch", "Fartblossom", 

]

function firstName() {
    function displayName() {
        var randomNumber = Math.floor(Math.random() * (first.length));
        var funnyName = first[randomNumber];
        var randomNumber = Math.floor(Math.random() * (last.length));
        // Concatenating here allowed me to pull names from both arrays and string them together instead of running a loop. //
        funnyName = funnyName.concat( ' ', last[randomNumber]);
        document.getElementById("first").innerHTML = funnyName;
      
        
        

        
    
    }
    displayName();

    
}



