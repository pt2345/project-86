x=document.getElementById("myAudio");
canvas=document.getElementById("myCanvas");

document.getElementById("my-btn").onclick=function(){
    var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition;


    document.getElementById("get_value").innerHTML="";
    recognition.start();


recognition.onresult =function(e){
    console.log(e);
    var content= e.results[0][0].transcript;
    document.getElementById("get_value").innerHTML= content;
    console.log(content);
    if(content== "play happy birthday song"){
        speak();
        console.log("Playing the song");
    }
    
}

function speak(){
    var synth= window.speechSynthesis;
    speak_data="Playing birthday song";
    var utter_this= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
  Timer();
   
}
function Timer(){
    x.play();
}
}
