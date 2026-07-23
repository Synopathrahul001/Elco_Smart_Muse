//==============================
// Elements
//==============================

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const uploadInput = document.getElementById("uploadImage");

const startBtn = document.getElementById("startCamera");
const stopBtn = document.getElementById("stopCamera");
const captureBtn = document.getElementById("capturePhoto");
const downloadBtn = document.getElementById("downloadPhoto");

let stream = null;

//==============================
// Start Camera
//==============================

startBtn.onclick = async () => {

    try{

        stream = await navigator.mediaDevices.getUserMedia({
            video:true
        });

        video.srcObject = stream;

    }

    catch(error){

        alert("Unable to access camera.");

    }

};

//==============================
// Stop Camera
//==============================

stopBtn.onclick = () => {

    if(stream){

        stream.getTracks().forEach(track=>track.stop());

        video.srcObject = null;

    }

};

//==============================
// Upload Image
//==============================

uploadInput.onchange = function(){

    const file = this.files[0];

    if(!file) return;

    const img = new Image();

    img.onload = function(){

        canvas.width = img.width;

        canvas.height = img.height;

        ctx.drawImage(img,0,0);

    }

    img.src = URL.createObjectURL(file);

}

//==============================
// Capture
//==============================

captureBtn.onclick = function(){

    canvas.width = video.videoWidth;

    canvas.height = video.videoHeight;

    ctx.drawImage(video,0,0);

}

//==============================
// Download
//==============================

downloadBtn.onclick = function(){

    const link=document.createElement("a");

    link.download="ELCO-Look.png";

    link.href=canvas.toDataURL();

    link.click();

}