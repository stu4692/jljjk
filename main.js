leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

Peter_pan_song="";
Harry_potter_theme_song="";

function preload() {
    Harry_potter_theme_song = loadSound("Harry-Potter-Theme.mp3");
    Peter_pan_song = loadSound("peterpansong.mp3");
}

function setup() {
    canvas = createCanvas(600,530);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
         
        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist_x+" rightWrist_y = "+rightWrist_y);
    }
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}

function draw() {
    image(video,0,0,600,530);
}
