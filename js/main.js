
 var p = $("#n").offset().top;
 $(window).scroll
(
  function()
  {
  var s = $(window).scrollTop();  
  if(s > p)
  {
$(".navbar-inverse").css("background-color","rgba(50,50,50,.8)")    
  }
  else
  {
$(".navbar-inverse").css("background-color","transparent")    
    
  }
  }
)   
 $(".navbar a").click(
  function()
  {
    $("body").animate({scrollTop: $($(this).attr('href')).offset().top},1000);
  }
)
$(".b1").click(function()
  {
    $(".f1").show(function()
      {
        $(".f2,.f3,.f4,.f5,.f6,.f7,.f8,.f9").hide();
      });
  })
$(".b2").click(function()
  {
    $(".f2").show(function()
      {
        $(".f1,.f3,.f4,.f5,.f6,.f7,.f8,.f9").hide();
      });
  })
$(".b3").click(function()
  {
    $(".f3").show(function()
      {
        $(".f2,.f1,.f4,.f5,.f6,.f7,.f8,.f9").hide();
      });
  })
$(".b4").click(function()
  {
    $(".f4").show(function()
      {
        $(".f2,.f3,.f1,.f5,.f6,.f7,.f8,.f9").hide();
      });
  })
$(".b5").click(function()
  {
    $(".f5").show(function()
      {
        $(".f2,.f3,.f4,.f1,.f6,.f7,.f8,.f9").hide();
      });
  })
$(".b6").click(function()
  {
    $(".f6").show(function()
      {
        $(".f2,.f3,.f4,.f5,.f1,.f7,.f8,.f9").hide();
      });
  })
$(".b7").click(function()
  {
    $(".f7").show(function()
      {
        $(".f2,.f3,.f4,.f5,.f6,.f1,.f8,.f9").hide();
      });
  })
$(".b8").click(function()
  {
    $(".f8").show(function()
      {
        $(".f2,.f3,.f4,.f5,.f6,.f7,.f1,.f9").hide();
      });
  })
$(".b9").click(function()
  {
    $(".f9").show(function()
      {
        $(".f2,.f3,.f4,.f5,.f6,.f7,.f1,.f8").hide();
      });
  })
var canvas = new fabric.Canvas('canvas');
 document.getElementById('file').addEventListener("change",function(e)
{
  var file = e.target.files[0];
  var reader = new FileReader();
  reader.onload = function(f)
  {
    var data = f.target.result;
    fabric.Image.fromURL(data,function(img){
      var oImg = img.set({left:0, top:0, angle:00, width:500, height:500}).scale(0.9);
      canvas.add(oImg).renderAll();
      var a = canvas.setActiveobject(oImg);
      var DataURL = canvas.toDataURL({format:'png', quality:0.8});

    });
  };
  reader.readAsDataURL(file);
});