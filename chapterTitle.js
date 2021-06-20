

$(".main-container").on("scroll",function(){

    var mainScrollTop = $(".main-container").scrollTop();

    var empfangOffset = $(".empfang").offset().top;
    var abstractOffset = $(".abstract").offset().top;
    var conceptOffset = $(".concept").offset().top;
    var exampleOffset = $(".example-area").offset().top;
    var anatomyOffset = $(".anatomy").offset().top;
    var designOffset = $(".design-area").offset().top;
    var combinationOffset = $(".combination-area").offset().top;
    var generatorOffset = $(".generator-area").offset().top;
    var zeichensatzOffset = $(".zeichensatz-area").offset().top;
    var abschiedOffset = $(".abschied-area").offset().top;





    if(empfangOffset <= 0){
        $(".chapter-name").text("Empfang");
        $(".chapter-number").text("1");
    }

    if(abstractOffset <= 0){
        $(".chapter-name").text("Einführung");
        $(".chapter-number").text("2");
    }

    if(conceptOffset <= 0){
        $(".chapter-name").text("Konzept");
        $(".chapter-number").text("3");
    }

    if(anatomyOffset <= 0){
        $(".chapter-name").text("Anatomie");
        $(".chapter-number").text("4");
    }

    if(designOffset <= 0){
        $(".chapter-name").text("Design");
        $(".chapter-number").text("5");
    }

    if(combinationOffset <= 0){
        $(".chapter-name").text("Buchstaben");
        $(".chapter-number").text("6");
    }

    if(generatorOffset <= 0){
        $(".chapter-name").text("Generator");
        $(".chapter-number").text("7");
    }

    if(zeichensatzOffset <= 0){
        $(".chapter-name").text("Zeichensatz");
        $(".chapter-number").text("8");
    }
    
    if(abschiedOffset <= 0){
        $(".chapter-name").text("Abschied");
        $(".chapter-number").text("9");
    }



})