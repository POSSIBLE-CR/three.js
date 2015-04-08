var pocCanvasTimer = pocCanvasTimer || {};

(function (context, $) {

    // Render text on Canvas using global timer variables
    function drawCanvas(countdownText){
        var c = document.getElementById("myCanvas"),
            ctx = c.getContext("2d"),
            background = new Image();

        ctx.clearRect(0, 0, c.width, c.height);

        background.onload = function () {
            c.width = background.width;
            c.height = background.height;
            ctx.drawImage(background, 0, 0);

            ctx.font = "30px Verdana";

            // Create gradient
            var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
            gradient.addColorStop("0", "magenta");
            gradient.addColorStop("0.5", "blue");
            gradient.addColorStop("1.0", "red");

            // Fill with gradient
            ctx.fillStyle = gradient;
            ctx.fillText(countdownText, 10, 90);
        };
        
        
                
        background.src = "img/bg.jpg";

    }

    // Calculate seconds countdown timer
    function generateTimer(){
        // set the date we're counting down to
        var target_date = new Date("Aug 15, 2016").getTime();
         
        // variables for time units
        var remainingTime = 600;
         
        // update the tag with id "countdown" every 1 second
        setInterval(function () {       
            minutes = parseInt(remainingTime / 60);
            seconds = parseInt(remainingTime % 60);
             
            // format countdown string + set tag value
            timeOnCanvas = minutes + "m " + seconds + "s";  

            drawCanvas(timeOnCanvas);

            remainingTime--;
        }, 1000);      
    }

    function init() {
        generateTimer();
    }

    init();

})(pocCanvasTimer);