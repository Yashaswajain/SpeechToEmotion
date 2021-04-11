
const speech=window.webkitSpeechRecognition;

var rec=new speech();
const startButton=document.querySelector(".record");
const stopButton=document.querySelector(".stoprecord");

const sad_arr=["sad","homesick","wistful","unhappy","gloomy","bleak","subdued","sombre","agonized","agony","broken","depressed",
"devastated","down","downhearted","grieved","grieving","harassed","heartsick","heavy","low","miserable","sorrow","sorry",
"terrible","crying","cry"];

const calm_arr=["still","tranquil","quiet","serene","peaceful","pacific","undisturbed","restful","balmy",
"at peace","rest","resting","sleeping","sleep"];

const happy_arr=["happy","good","cheerful","cheery","merry","joyful","joyfull","cheerfull","smiling","delighted","jolly",
"joyous","blessed","glowing","satisfied","thrilled","overjoyed","in a good mood","kiss","hug","gift",
"i like you","i love you"];

const angry_arr=["angry","annoyed","cross","irritated","resentfull","resentful","fuming","hot as red","flaming","short tempered",
"wrath","fiery","ill-tempered","not in a good mood","fight","beat","kick","slap","punch","kill","hate"
];

const fear_arr=["fear","feared","frightened","scared","nervous","panic","tense","uneasy","terrified","hesitate",
"hesitated","alarmed","petrified","worried","anxious","afraid"];

const disgust_arr=["disgusting","disgustful","yuck","bad smelling","smelly","not good","ugly","bad looking",
"i don't like it","ew","eww","ewww","ewwww","ewwwww","sick","stingy","foul","i don't like you"
];

var displayText="";

rec.continuous=true;

rec.onstart=function(){
alert("Recording is ON");    
}

rec.onerror=function(){
    alert("Try Again!!");
}
rec.onresult=function(event){
    var current=event.resultIndex;
    var convert=event.results[current][0].transcript;
    displayText+=convert;
    displayText=displayText.toLowerCase();
    
    var sad=false,calm=false,angry=false,happy=false,fear=false,disgust=false;
    var show="";
for(var i=0;i<sad_arr.length;i++)
{
    if(displayText.indexOf(sad_arr[i])!=-1){
         show="sad";
        sad=true;
        break;
    }
}


for(var i=0;i<calm_arr.length;i++)
{
        if(displayText.indexOf(calm_arr[i])!=-1){
             show="calm";
            calm=true;
            break;
        }
}

for(var i=0;i<angry_arr.length;i++)
{
        if(displayText.indexOf(angry_arr[i])!=-1){
             show="angry";
            angry=true;
            break;
        }
}
for(var i=0;i<happy_arr.length;i++)
{
        if(displayText.indexOf(happy_arr[i])!=-1){
             show="happy";
            happy=true;
            break;
        }
}
for(var i=0;i<fear_arr.length;i++)
{
        if(displayText.indexOf(fear_arr[i])!=-1){
             show="fear";
            fear=true;
            break;
        }
}
for(var i=0;i<disgust_arr.length;i++)
{
        if(displayText.indexOf(disgust_arr[i])!=-1){
             show="disgust";
            disgust=true;
            break;
        }
}

if(calm){alert(displayText+" Calm");}
else if(disgust){alert(displayText+" Disgust");}
else if(fear){alert(displayText+" Fear");}
else if(happy){alert(displayText+" Happy");}
else if(sad){alert(displayText+" Sad");}
else{alert(displayText+" Neutral");}
rec.stop();
}



stopButton.onclick=function(event){
    displayText="";
}
startButton.onclick=function(event){
if(displayText.length>=1){
    displayText="";
}

rec.start();
}






