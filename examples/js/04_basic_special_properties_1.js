<html>
    <head>
        <title>EKTweener.js - Basic special properties 1</title>
        <link rel="stylesheet" href="css/reset.css" type="text/css">
        <link rel="stylesheet" href="css/ui.css" type="text/css">
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
        <script src="../dist/EKTweener.all.js"></script>
        <script src="js/ui.js"></script>
        <!---
            The script of example script of this page is at the bottom of the source.
            --->
    </head>
    <body>
        <div id="container">
            <div id="title">EKTweener.js - Basic delay transition</div>
            <div class="line"></div>
            <div class="view-source" data-id="canvas">
                <div class="bg"></div>
                <div class="text">view source</div>
            </div>
            <div id="canvas" class="canvas">
                <div id="img" class="img"></div>
            </div>
            <div class="body">
                This is an example of using the "delay" special property.<br/><br/>
                In this example we use: <br/>
                <div class="code">EKTweener.fromTo(img, 0.5, {left: 0, top: 0}, {delay: 1, left: 452, top: 252});</div><br/>
                In this example, I added a delay in a fromTo function to make it pauses for half second before the transition. You may notice that the second time you click the image, the image doesn't go to (0,0) immediately because the from properties will apply after the delay of the transition. 
                <h4>Other examples:</h4>
                EKTweener.to(img, 1, {delay: 1, left: 200});<br/>
                EKTweener.to(img, 1, {delay: 0.5, width: 100});<br/>
            </div>
        </div>
        
        
        
        
        <script>
            /***** Source code *****/
            var img;
            function tweenIt(){
                EKTweener.fromTo(img, 0.5, {left: 0, top: 0}, {delay: 1, left: 452, top: 252});
            }
            img = document.getElementById("img");
            img.onclick = tweenIt;
        </script>
    </body>
</html>