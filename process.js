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
    1: {
        Title: "My Hero Academia, The Promise Neverland, & Naruto", 
        Author: "Kohei Horikoshi, Kaiu Shirai, Masashi Kishimoto", 
        Published: "2014, 2016, 1999" 
    },
    
    2: {
        Title: "Needless, Aiki, Gamaran", 
        Author: "Kami Imai, Isutoshi, Nakamaru Yousuke", 
        Published: "2003, 2013, 2013" 
    },
    
    3: {
        Title: "Hunter x Hunter, Attack on Titan , Berserk", 
        Author: "Yoshiro Togashi, Hajime Isayama, Kentaro Miura", 
        Published: "1998, 2009, 1990" 
    },
    
    4: {
        Title: "Hikaru no GO, Barakamon, Yotsuba&I", 
        Author: "Yumi Hotta and Takeshi Obata, Satsuki Yoshino, Kiyohiko Azuma", 
        Published: "1999, 2009, 2003" 
    },
    
    5: {
        Title: "Haikyu, Blue exorcist, One Punch Man", 
        Author: "Haruichi Furudate, Kazue Kato, Yusuke Murata", 
        Published: "2012, 2009, 2012" 
    },
    
    6: {
        Title: "Bleach, Tokyo ghoul, Fairy Tail", 
        Author: "Tite Kubo, Sui Ishida, Hiro Mashima", 
        Published: "2001, 2001, 2006" 
    },
    
    7: {
        Title: "Soul Eater, Alive: Saishuu Shinkateki Shounen, Psyren", 
        Author: "Atsushi Okubo, Tadashi Kawashima, Toshiaki Iwashiro", 
        Published: "2004, 2016, 2007" 
    },
    
    8: {
        Title: "Parasyte, Vinland Saga, Bomber Girl", 
        Author: "Hitoshi Iwaaki, Makoto Yukimura, Makoto Niwano", 
        Published: "2014, 2005, 1994" 
    },
    
    9: {
        Title: "Pluto, Freesia, Hurejasik", 
        Author: "Naoki Urasawa, Jiro Matsumoto, kazushi Hagiwara ", 
        Published: "2004, 2001, 2000" 
    },
    
    10:{
        Title: "Tajuu Jinkaku Tantei Pyscho, Homunculus, Monster", 
        Author: "Eiji Otsuka, Hideo Yamamoto, Naoki Urasawa", 
        Published: "2007, 2003, 1994" 
    },
    
    11:{
        Title: "Life is Money, Route End, Doubt", 
        Author: "Asaniji Teru, Nakagawa Kaini, Yoshiki Tonogai", 
        Published: "2011, 2017, 2007" 
    },
    
    12:{
        Title: "Pigpen, Ikigami: the Ultimate Limit, Uriah", 
        Author: "Kim Carnby, Motoro Mase, Toffuo", 
        Published: "2015, 2009, 2019" 
    },
    
    13:{
        Title: "Save Me, Your Throne, Usogui", 
        Author: "1230, SAM, Toshio Sako", 
        Published: "2019, 2020, 2005" 
    },
    
    14:{
        Title: "Green Blood, Future Diary, Kishibe Rohan Wa Ugokanai", 
        Author: "Kakizaki Masasumi, Sakae Esuno, Hirohiko Araki", 
        Published: "2011, 2006, 1997" 
    },
    
    15:{
        Title: "Angels of Death, Fort of Apocalypse, Summertime Rendering", 
        Author: "Kudan Naduka, Yuu Kuraishi, Yasuki Tanaka", 
        Published: "2016, 1982, 2018" 
    },
    
    16:{
        Title: "Bastard, Akumetsu, Sweet Home", 
        Author: "Kazushi Hagiwara, Yoshiaki Tabata, Youngchan Hwang", 
        Published: "1992, 2002, 2018" 
    },
    
    17:{
        Title: "Overlord, Log Horizon, Mononoke Hime", 
        Author: "Kugane Maruyama, Daisuke Umezu, Hayao Miyazaki", 
        Published: "2012, 2013, 1997" 
    },
    
    18:{
        Title: "Fate/Zero, Overlord II, No Game No Life", 
        Author: "Gen Urobuchi, Hugin Miyama, Yu Kamiya", 
        Published: "2011, 2012, 2012" 
    },
    
    19:{
        Title: "Full Metal Alchemist, Death Note ,One Piece", 
        Author: "Hiromu Arakawa, Tsugumi Ohba, Eiichiro Oda", 
        Published: "2001, 2003, 1997" 
    },
    
    20:{
        Title: "Superior, Superior Cross, Helck", 
        Author: "Ichtys, Ichtys, Nanao Nanaki", 
        Published: "2004, 2004, 2014" 
    },
    
    21:{
        Title: "Dungeon Meshi, Shounen Oujo, Mahoutsukai no Yome", 
        Author: "Ryoko Kui, Utako Yukihiro, Kore Yamazaki", 
        Published: "2014, 2011, 2013" 
    },
    
    22:{
        Title: "Nanastu no Taizai, Fairy Tail, Mahou Sensei Negima!", 
        Author: "Nakaba Suzuki, Hiro Mashima, Ken Akamatsu", 
        Published: "2011, 2011, 2003" 
    },
    
    23:{
        Title: "Niehime to Kemono no Ou, Drifters, Houseki no Kuni", 
        Author: "Yu Tomofuji, Kouta Hirano, Haruko Ichikawa", 
        Published: "2015, 2009, 2012" 
    },
    
    24:{
        Title: "Houshin Engi, Dorohedoro, claymore", 
        Author: "Ryu Fujisaki, Q Hayashida, Norihiro Yagi", 
        Published: "2005, 2000, 2001" 
    },
    
    25:{
        Title: "Naruto Shippuden, Made in Abyss, Inuyasha ", 
        Author: "Masashi Kishimoto, Akihito Tsukushi, Rumiko Takahashi",
        Published: "1999, 2012, 1996" 
    },
    
    26:{
        Title: "Fruits Basket, Re:Creators, Maoyuu Maou Yuusha", 
        Author: "Natsuki Takaya, Shizuka Kurosaki, Mamare Touno", 
        Published: "1998, 2017, 2011" 
    },
    
    27:{
        Title: "Dragon Ball Z, Assassination Classroom, Jojo's Bizarre adventure", 
        Author: "Akira Toriyama, Yusei Matsui, Hirohiko Araki ", 
        Published: "1984, 2012, 1987" 
    }
    
};

//Insert getMangalist function;
//insert dictionary/ api

function getMangalist(req, res) {
    let x = lib[1];
    let y = lib[2];
    
    let answer = "Other List";
    
    let n = req.params.number;
    
    if(n == 6) {
        answer += x['Title'];
        //console.log(dict.one.Title);
        //return answer;
        res.send(answer);
        console.log(answer);
        return;
    } else if (n == 3){
        answer += y['Title'];
        //return answer;
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