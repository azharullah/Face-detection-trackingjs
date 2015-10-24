    window.onload = function() {
      var img = document.getElementById('img');

      var tmp=0;

      var tracker = new tracking.ObjectTracker(['face']);
      tracker.setStepSize(1.7);

      tracking.track('#img', tracker);

      tracker.on('track', function(event) {
        event.data.forEach(function(rect) {
          window.plot(rect.x, rect.y, rect.width, rect.height);

          ////////////////////////////////////////////


      imageObj.onload = function() {
        // draw cropped image
        var sourceX = (img.offsetLeft + rect.x) - 20;
        var sourceY = (img.offsetTop + rect.y) - 40;
        var sourceWidth = rect.width + 40;
        var sourceHeight = rect.height + 50;
        var destWidth = sourceWidth ;
        var destHeight = sourceHeight;
        var destX = 100 + tmp;//canvas.width / 2 - destWidth / 2;
        var destY = 100;//canvas.height / 2 - destHeight / 2;

        //var canvas = document.getElementById('myCanvas');

        tmp=tmp + 200;
        var num = tmp / 200;

        var faces_div = getElementById("faces");

        faces_div.innerHTML += "<canvas id=\"mycanvas\"" + num + " height = \" 500px \" width = \" 500px \" ></canvas>"

        var canvas = document.getElementById('mycanvas' + num);
        var context = canvas.getContext('2d');
        var imageObj = new Image();

        context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
         
         var per = (sourceHeight * sourceWidth) * 100 / (my_image.height * my_image.width);
         
        var append_div = document.getElementById("percentage");
        append_div.innerHTML += "<p> Image " + num + " occupies " + per + " of the area </p>";

      };
      imageObj.src = my_image.src;
      imageObj.id = "oneone";  

      var app_img = getElementById("oneone");

      append_div.appendChild(app_img);

          ////////////////////////////////////////////

        });
      });

      window.plot = function(x, y, w, h) {
        var rect = document.createElement('div');
        document.querySelector('.demo-container').appendChild(rect);
        rect.classList.add('rect');
        rect.style.width = w + 'px';
        rect.style.height = h + 'px';
        rect.style.left = (img.offsetLeft + x) + 'px';
        rect.style.top = (img.offsetTop + y) + 'px';
      };
    };
