Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image"src="'+data_uri+'>'});
}
console.log('ml5 version',ml5.version);
classfier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7fYGJKEGQ/',modelLoaded);
function modelLoaded(){
    console.log('modelLoded')
}
function check(){
    img=document.getElementById('capturad_image');
    classfier.classify(img,gotResult);
}
function gotResult error(),redult;
if(error){
    console.error(error);
}else{
    document.getElementById("result_object").innerHTML=results[0].lable;
}