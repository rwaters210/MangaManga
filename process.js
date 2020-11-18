const { genre } = require('jikan-nodejs');

async function getAnimesByGenre() {
  const animes = await genre.animesByGenre(1, { limit: 1 }); // parameters: genreId, { limit }
  console.log(animes); // print 10 animes of genre 1
}

getAnimesByGenre();

//module.exports = require('./dist').default

console.log("Hellllloooooo!!!!");

const express = require('express');
const app = express();
let port = process.env.PORT;
    if (port == null || port == "") {
      port = 80;
    }
    
function index(req, res) {
    res.redirect('index.html');
}


//create array of dictionary for manga database

var lib = { 
    1: { //248
        Title: "My Hero Academia, The Promise Neverland, & Naruto", 
        Author: "The Author", 
        Published: "The Published Date" 
    },
    
    2: { //247
        Title: "Needless, Aiki, Gamaran", 
        Author: "Kami Imai, Isutoshi, Nakamaru Yousuke", 
        Published: "2003, 2013, 2013" 
    },
    
    3: { //249
        Title: "Hunter x Hunter, Attack on Titan , Berserk", 
        Author: "Yoshiro Togashi, Hajime Isayama, Kentaro Miura", 
        Published: "1998, 2009, 1990" 
    },
    
    4: { //147
        Title: "Hikaru no GO, Barakamon, Yotsuba&I", 
        Author: "Yumi Hotta and Takeshi Obata, Satsuki Yoshino, Kiyohiko Azuma", 
        Published: "1999, 2009, 2003" 
    },
    
    5: { //148
        Title: "Haikyu, Blue exorcist, One Punch Man", 
        Author: "Haruichi Furudate, Kazue Kato, Yusuke Murata", 
        Published: "2012, 2009, 2012" 
    },
    
    6: { //149
        Title: "Bleach, Tokyo ghoul, Fairy Tail", 
        Author: "Tite Kubo, Sui Ishida, Hiro Mashima", 
        Published: "2001, 2001, 2006" 
    },
    
    7: { //347
        Title: "Soul Eater, Alive: Saishuu Shinkateki Shounen, Psyren", 
        Author: "Atsushi Okubo, Tadashi Kawashima, Toshiaki Iwashiro", 
        Published: "2004, 2016, 2007" 
    },
    
    8: { //348
        Title: "Parasyte, Vinland Saga, Bomber Girl", 
        Author: "Hitoshi Iwaaki, Makoto Yukimura, Makoto Niwano", 
        Published: "2014, 2005, 1994" 
    },
    
    9: { //157
        Title: "Pluto, Freesia, Hurejasik", 
        Author: "Naoki Urasawa, Jiro Matsumoto, kazushi Hagiwara ", 
        Published: "2004, 2001, 2000" 
    },
    
    10:{ //158
        Title: "Tajuu Jinkaku Tantei Pyscho, Homunculus, Monster", 
        Author: "Eiji Otsuka, Hideo Yamamoto, Naoki Urasawa", 
        Published: "2007, 2003, 1994" 
    },
    
    11:{ //159
        Title: "Life is Money, Route End, Doubt", 
        Author: "Asaniji Teru, Nakagawa Kaini, Yoshiki Tonogai", 
        Published: "2011, 2017, 2007" 
    },
    
    12:{ //258
        Title: "Pigpen, Ikigami: the Ultimate Limit, Uriah", 
        Author: "Kim Carnby, Motoro Mase, Toffuo", 
        Published: "2015, 2009, 2019" 
    },
    
    13:{ //259
        Title: "Save Me, Your Throne, Usogui", 
        Author: "1230, SAM, Toshio Sako", 
        Published: "2019, 2020, 2005" 
    },
    
    14:{ //357
        Title: "Green Blood, Future Diary, Kishibe Rohan Wa Ugokanai", 
        Author: "Kakizaki Masasumi, Sakae Esuno, Hirohiko Araki", 
        Published: "2011, 2006, 1997" 
    },
    
    15:{ //358
        Title: "Angels of Death, Fort of Apocalypse, Summertime Rendering", 
        Author: "Kudan Naduka, Yuu Kuraishi, Yasuki Tanaka", 
        Published: "2016, 1982, 2018" 
    },
    
    16:{ //359
        Title: "Bastard, Akumetsu, Sweet Home", 
        Author: "Kazushi Hagiwara, Yoshiaki Tabata, Youngchan Hwang", 
        Published: "1992, 2002, 2018" 
    },
    
    17:{ //167
        Title: "Overlord, Log Horizon, Mononoke Hime", 
        Author: "Kugane Maruyama, Daisuke Umezu, Hayao Miyazaki", 
        Published: "2012, 2013, 1997" 
    },
    
    18:{ //168
        Title: "Fate/Zero, Overlord II, No Game No Life", 
        Author: "Gen Urobuchi, Hugin Miyama, Yu Kamiya", 
        Published: "2011, 2012, 2012" 
    },
    
    19:{ //169
        Title: "Full Metal Alchemist, Death Note ,One Piece", 
        Author: "Hiromu Arakawa, Tsugumi Ohba, Eiichiro Oda", 
        Published: "2001, 2003, 1997" 
    },
    
    20:{ //267
        Title: "Superior, Superior Cross, Helck", 
        Author: "Ichtys, Ichtys, Nanao Nanaki", 
        Published: "2004, 2004, 2014" 
    },
    
    21:{ //268
        Title: "Dungeon Meshi, Shounen Oujo, Mahoutsukai no Yome", 
        Author: "Ryoko Kui, Utako Yukihiro, Kore Yamazaki", 
        Published: "2014, 2011, 2013" 
    },
    
    22:{ //269
        Title: "Nanastu no Taizai, Fairy Tail, Mahou Sensei Negima!", 
        Author: "Nakaba Suzuki, Hiro Mashima, Ken Akamatsu", 
        Published: "2011, 2011, 2003" 
    },
    
    23:{ //257
        Title: "Niehime to Kemono no Ou, Drifters, Houseki no Kuni", 
        Author: "Yu Tomofuji, Kouta Hirano, Haruko Ichikawa", 
        Published: "2015, 2009, 2012" 
    },
    
    24:{ //368
        Title: "Houshin Engi, Dorohedoro, claymore", 
        Author: "Ryu Fujisaki, Q Hayashida, Norihiro Yagi", 
        Published: "2005, 2000, 2001" 
    },
    
    25:{ //369
        Title: "Naruto Shippuden, Made in Abyss, Inuyasha ", 
        Author: "Masashi Kishimoto, Akihito Tsukushi, Rumiko Takahashi",
        Published: "1999, 2012, 1996" 
    },
    
    26:{ //367
        Title: "Fruits Basket, Re:Creators, Maoyuu Maou Yuusha", 
        Author: "Natsuki Takaya, Shizuka Kurosaki, Mamare Touno", 
        Published: "1998, 2017, 2011" 
    },
    
    27:{ //349
        Title: "Dragon Ball Z, Assassination Classroom, Jojo's Bizarre adventure", 
        Author: "Akira Toriyama, Yusei Matsui, Hirohiko Araki ", 
        Published: "1984, 2012, 1987" 
    }
    
};

//Insert getMangalist function;
//insert dictionary/ api

function getMangalist(req, res) {
    let x;
    
    let answer = "Other List";
    
    let n = req.params.number;
    
    if(n == "248") {
        x = lib[1];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
        
    } else if (n == "247"){
        x = lib[2];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
    
    } else if (n == "249"){
        x = lib[3];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
        
    } else if (n == "147"){
        x = lib[4];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
        
    } else if (n == "148"){
        x = lib[5];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
        
    } else if (n == "149"){
        x = lib[6];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
        
    } else if (n == "347"){
        x = lib[7];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
    
    } else if (n == "348"){
        x = lib[8];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
        
    } else if (n == "157"){
        x = lib[9];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
    } else if (n == "158"){
        x = lib[10];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
    } else if (n == "159"){
        x = lib[11];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
    
    } else if (n == "258"){
        x = lib[12];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
    
    } else if (n == "259"){
        x = lib[13];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
        
    } else if (n == "357"){
        x = lib[14];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
        
    } else if (n == "358"){
        x = lib[15];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
        
    } else if (n == "359"){
        x = lib[16];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
        
    } else if (n == "167"){
        x = lib[17];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
        
    } else if (n == "168"){
        x = lib[18];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
    
    } else if (n == "169"){
        x = lib[19];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
    } else if (n == "267"){
        x = lib[20];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
    
    } else if (n == "268"){
        x = lib[21];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
        
    } else if (n == "269"){
        x = lib[22];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
    
    } else if (n == "257"){
        x = lib[23];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
    
    } else if (n == "368"){
        x = lib[24];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
    
    } else if (n == "369"){
        x = lib[25];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
        
    } else if (n == "367"){
        x = lib[26];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
    
    } else if (n == "349"){
        x = lib[27];
        answer = x['Title'];
        res.send(answer);
        console.log(answer);
        return;
    } else {
        res.send(answer);
    }
}

app.use(express.static("static"));

app.get('/', index);

// Calling "/getMangalist/..." invokes the calculate function
app.get('/getMangalist/number/:number', getMangalist);

//Start Express listening at the given port
app.listen(port, function() {
    console.log("App running at port=" + port);
});
