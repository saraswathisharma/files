function bigImg(x)
    {
      onmouseover="bigImg(this)"
      x.style.height="250px";
      x.style.width="330px";
    }
    function normalImg(x)
    {
      onmouseout="normalImg(this)"
      x.style.height="200px";
      x.style.width="250px";
    }
    function loadImage()
    {
      onload="loadImage()"
      alert("Image is loaded");
    }
    function keydownFunction()
      {
        document.getElementById("menu").style.backgroundColor="pink";
      }
      function keyupFunction()
      {
        document.getElementById("menu").style.backgroundColor="skyblue";
      }
      function paage() 
      {
        var a = document.getElementById('gender').value;
        document.getElementById('female').innerHTML="Gender: "+ a;
      }
      function paagee() 
      {
        var b = document.getElementById('ggender').value;
        document.getElementById('male').innerHTML="Gender: "+ b;
      }
      function page() 
      {
        var a = document.getElementById('hobbies').value;
        document.getElementById('dance').innerHTML="Hobbies: "+ a;
      }
      function pagee() 
      {
        var b = document.getElementById('hobbbies').value;
        document.getElementById('read').innerHTML="Hobbies: "+ b;
      }
      function pagge() 
      {
        var c = document.getElementById('hhobbies').value;
        document.getElementById('travel').innerHTML="Hobbies: "+ c;
      }
      function myFunction() 
      {
        var a = document.getElementById('department').value;
        document.getElementById('depart').innerHTML="Department: "+ a;
      }
      function fn2()
      {
        var x = document.getElementById('psw');
        if (x.type === "password"){
          x.type = "text";
        } else {
          x.type = "password";
        }
      }


      