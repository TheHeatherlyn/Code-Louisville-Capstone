var first = [
    "Stinky", "Filbert", "George", "Dirty", "Dizzy", "Narrow", "Shaky", "Hawk-Nose", "Gorgeous", "Dum Dum", "Greasy", "Pus-face", "Smelly", "Snaggle-Tooth", "Slouchy", "Marvin", "Harry", "Hercules", "Tiny", "Wheezy", "Argh-Blat", "Slappy", "Mugsley", "Melvin", "Red", "Griselda", "Gassy", "Saucy", "Thunder", "Hilda", "Muscles"


]

var last = [
    "Bugbear-bait","Rolly-Pimple", "Soggy-bottom",  "Butt-Cheeks", "Bum-Shaker", "Underpants", "McTrollface", "MoldyWart", "Von Beethoven", "The Green", "McNutt", "Trouser-patch", "Fartblossom", "Wicked-Gorge", "Mountain-Head","The Mighty", "Highbun", "Bumtuka", "High-Fang", "Club-Face", "Wart-Mouth", "The Fang", "The Hammer", "The Terror", "Warhammer", "Thunderclaw", "Longtooth", "Deeznuts"

]

var pics = [
    
    "images/80s-pink.jpg", "images/Armored.jpg", "images/Bent.jpg", "images/Big-belly.jpg", "images/Big-mama.jpg", "images/Blue.jpg", "images/Conjoined.jpg", "images/Crazy-cook.jpg", "images/cute.jpg", "images/Droopy-horns.jpg", "images/emo-troll.jpg", "images/Fuzzy-trap.jpg", "images/granny.jpg", "images/Grass-ass.jpg", "images/Grr.jpg", "images/miniature.jpg", "images/ole-one-eye.jpg", "images/pumpkin.jpg", "images/She-mini.jpg", "images/Surprised-troll.jpg", "images/Troll-play.jpg", "images/ugly.jpg", "images/Viking.jpg", "images/warty.jpg", "images/Wicked.jpg", "images/wiz.jpg", "images/Yucky.jpg"

]


function firstName() {
    function displayName() {
        var randomNumber = Math.floor(Math.random() * (first.length));
        var funnyName = first[randomNumber];
        var randomNumber = Math.floor(Math.random() * (last.length));
        // Concatenating here allows me to pull names from both arrays and string them together instead of running a loop. //
        funnyName = funnyName.concat( ' ', last[randomNumber]);
        document.getElementById("first").innerHTML = funnyName;
         
        

        
    
    }
    displayName();

    
}


function trollFace() {
    var ranPic = Math.floor((Math.random() * (pics.length))); 

    $("#funnyPic").attr("src", pics[ranPic]);
}


