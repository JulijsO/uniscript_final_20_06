$(document).ready(function () {
  


// _________________________Span__________________


    $(".sp, textPath").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.lang = "de-DE";
      var element = $(this);
      msg.text = element.text();
      element.addClass("speaking");
      speechSynthesis.speak(msg);
      msg.onend = function(event){
        element.removeClass("speaking");
      }
    }
  );

      $(".wc-kyr, .ex1").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.lang = "ru-RU";
      var element = $(this);
      msg.text = element.text();
      element.addClass("speaking");
      speechSynthesis.speak(msg);
      msg.onend = function(event){
        element.removeClass("speaking");
      }
    }
  );

        $(".wc-grie, .ex3").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.lang = "el-GR";
      var element = $(this);
      msg.text = element.text();
      element.addClass("speaking");
      speechSynthesis.speak(msg);
      msg.onend = function(event){
        element.removeClass("speaking");
      }
    }
  );

          $(".wc-chin, .ex2").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.lang = "zh-CN";
      var element = $(this);
      msg.text = element.text();
      element.addClass("speaking");
      speechSynthesis.speak(msg);
      msg.onend = function(event){
        element.removeClass("speaking");
      }
    }
  );


              $(".fake-hindi, .fake-hindi-2").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.lang = "hi-IN";
      msg.text = "नमस्ते "
      speechSynthesis.speak(msg);
      
    }
  );


  // _______Nummer_____________________________________________________


  $(".zz0").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Null";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz1").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Eins";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz2").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Zwei";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz3").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Drei";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz4").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Vier";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz5").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Fünf";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz6").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Sechs";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz7").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Sieben";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz8").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Acht";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz9").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Neun";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz10").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Zehn";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz11").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Elf";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz12").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Zwölf";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz13").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Dreizehn";
      speechSynthesis.speak(msg);
    }
  );

    $(".zz14").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Vierzehn";
      speechSynthesis.speak(msg);
    }
  );

      $(".zz15").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Fünfzehn";
      speechSynthesis.speak(msg);
    }
  );

    


});