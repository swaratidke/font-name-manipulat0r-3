function setup(){
    video = createCapture(VIDEO);
    video.size(550 , 500);

    canvas = createCanvas(550,550);
    canvas.position(600,150)

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
 function modelLoaded()
 {
    console.log('model is initialized successfully')
 }

 function gotPoses(results)
 {
    if(results.length>0)
    {
        console.log(results);

        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = floor(leftwristx - rightwristx )
    }
 }
 function draw()
 {
    background('#AED6F1 ');
    textSize('difference');
    fill('#D2B4DE');
    text('Swara',50,400);
    
 }