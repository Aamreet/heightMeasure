function main(){
    window.addEventListener('deviceorientation',onOrientationChange);

    navigator.mediaDevices.getUserMedia({ video: {
        facingMode:'enviroment'
    } })
    .then(function (signal) {
        const video = document.getElementById('myVideo');
        video.srcObject = signal;
        video.play();
    })
    .catch(function (err) {
        console.error("getUserMedia error:", err);
        alert(err);
    });
}

function onOrientationChange(event){
    let angle = event.beta - 90;
    if(angle<0){
        angle=0;
    }

    let distToTree= document.getElementById('mySlider').value;
    document.getElementById('myLabel').innerHTML=
    "Distance to object: "+distToTree+"meters";

    let height = distToTree*Math.tan(angle*Math.PI/180);
     
    document.getElementById('heightInfo').innerHTML=
          height.toFixed(1)+"m("+angle.toFixed(1)+"&deg)";

}