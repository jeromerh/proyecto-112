//https://teachablemachine.withgoogle.com/models/xcYqd5bJ-/
prediccion1=""
prediccion2=""
Webcam.set({
    width:350,height:300,image_format:"png",png_quality:90
})
camera=document.getElementById("camara")

Webcam.attach("#camara")

function take_snapshot(){
    Webcam.snap(function(foto){
    document.getElementById("resultado").innerHTML="<img id='imagen' src='"+foto+"'>"
    })
    document.getElementById("imagen")
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/xcYqd5bJ-/model.jsno",modelLoaded)

function modelLoaded(){
console.log("modelo_cargado")
}

function speak(){
    synth=window.speechSynthesis;
    speak_date_one="La primera prediccion es"+prediccion1
    speak_date_two="La segunda preddicion es"+prediccion2
    var utterThis = new SpeechSynthesisUtterance(speak_data_one + speak_data_two);
    synth.speak(utterThis);

}
function check()
  {
    img = document.getElementById("imagen");
    classifier.classify(img, gotResult);
  }




function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("emotion_name").innerHTML = results[0].label;
    document.getElementById("emotion_name2").innerHTML = results[1].label;
    prediccion1 = results[0].lebel;
    prediccion2 = results[1].label;
    speak();
    if(results[0].label == "feliz")
    {
      document.getElementById("result_emoji").innerHTML = "😆";
    }
    if(results[0].label == "triste")
    {
      document.getElementById("result_emoji").innerHTML = "😭";
    }
    if(results[0].label == "enojado")
    {
      document.getElementById("result_emoji").innerHTML = "😡";
    }


    if(results[1].label == "feliz")
    {
      document.getElementById("result_emoji2").innerHTML = "😆";
    }
    if(results[1].label == "triste")
    {
      document.getElementById("result_emoji2").innerHTML = "😭";
    }
    if(results[1].label == "enojado")
    {
      document.getElementById("result_emoji2").innerHTML = "😡";
    }
  }
}

