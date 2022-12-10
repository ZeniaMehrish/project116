lipX=0;
lipY=0;

function preload() {
lip=loadImage('https://i.postimg.cc/MpBtx4L4/360-F-250502749-AC4ttn-Ls-KQu-Ht7u-Odq-Gxa-Mg1w-Ltiz-Orz-removebg-preview.png');
}

function setup() {
canvas=createCanvas(300 , 300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        console.log("lip x = " + results[0].pose.nose.x );
        console.log("lip y = " + results[0].pose.nose.y );
        lipX=results[0].pose.nose.x-20;
        lipY=results[0].pose.nose.y+20;

    }
    
    }

function draw() {
    image(video,0,0,300,300);
    image(lip,lipX,lipY,50,30);
}

function take_snapshot() {
save('myFilterImage.png');
}


