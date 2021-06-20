
        function hexEncode() {
            // document.getElementById('download').style.display = "block";
            document.getElementById('cont').innerHTML = ""; // <div> Resultat1 zurücksetzen
            var str = document.getElementById("text").value; // Textfeld abfragen
            var hex, i; // Variablen initieren
            var result = ""; // Resultat zurücksetzen
            for (i = 0; i < str.length; i++) { // alle Zeichen des Texts durchgehen
                hex = str.charCodeAt(i).toString(16); // umwandeln vom Zeichen des Texts zu UTF-16
                hex = ("000" + hex).slice(-4); // padding (00) einfügen damit alle Werte 4-stellig sind
                // nun wird ein SVG-Container erstellt
                $("#cont").append('<svg viewBox="0 0 400 280" class="letter" data-unicode="' + hex + '" data-char="' + str.charAt(i) + '" id="svgContainer_' + i + '" xmlns="http://www.w3.org/2000/svg"></svg>');
                for (var l = 0; l < hex.length; l++) {
                    if (hex != 20) {
                        loadSVG(l, i, hex.charAt(l)); // SVG wird geladen.
                    } 
                }
                console.log(hex);
            }
        }

        function loadSVG(pos, index, hexa) {
            // start request
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    myFunction(this);
                }
            };
            xhttp.open("GET", "svg_neu/LT" + hexa + ".svg", true);
            xhttp.send();
            // end request

            function myFunction(xml) {
                var x, xmlDoc, g, path;
                xmlDoc = xml.responseXML;
                x = xmlDoc.getElementsByTagName("svg")[0];
                width = x.getAttribute("viewBox").split(" ")[2]; // Breite des Grundelements auslesen.
                height = x.getAttribute("viewBox").split(" ")[3]; // Höhe des Grundelements auslesen.
                wmiddle = width/2;
                hmiddle = height/2;
                console.log(width);
                console.log(wmiddle);
                x.setAttribute("viewBox", "0 0 " + width * 2 + " " + height * 2); // Breite und Höhe verdoppeln.
                // x.getElementsByTagName("path")[0].setAttribute("transform-origin", "" + wmiddle + " "+ hmiddle + "");

                // Element verschieben, je nach positions-index
                switch (pos) {
                    case 2:
                        x.getElementsByTagName("path")[0].setAttribute("transform", "scale(1, -1)");
                        x.getElementsByTagName("rect")[0].setAttribute("transform", "scale(1, -1)");
                        x.getElementsByTagName("g")[0].setAttribute("transform", "translate(0, 0" + height + ")");

                        break;
                    case 3:
                        x.getElementsByTagName("path")[0].setAttribute("transform", "scale(-1, -1)");
                        x.getElementsByTagName("rect")[0].setAttribute("transform", "scale(-1, -1)");
                        x.getElementsByTagName("g")[0].setAttribute("transform", "translate(0" + 2*width + ",0"+ height +")");
                        break;
                    case 0:
                        x.getElementsByTagName("g")[0].setAttribute("transform", "translate(0,0"+height+")");
                        break;
                    case 1:
                        x.getElementsByTagName("path")[0].setAttribute("transform", "scale(-1, 1)");
                        x.getElementsByTagName("rect")[0].setAttribute("transform", "scale(-1, 1)");
                        x.getElementsByTagName("g")[0].setAttribute("transform", "translate(0" + 2*width + ",0"+height+")");
                        break;
                    default:
                }
                g = x.childNodes;
                for (c = 0; c < g.length; c++) {
                    if (g[c].nodeType == 1) {
                        // alle child-elemente von svg in den SVG-container einfügen.
                        document.getElementById("svgContainer_" + index).appendChild(g[c]);
                    }
                }
            }
        }
        $("#cont").on("click", ".letter", function() {
            // Bei Klick auf das Zeichen, wird es heruntergeladen.
            var dataURL = 'data:image/svg+xml,' + encodeURIComponent(this.outerHTML);
            var a = document.createElement("a");
            a.href = dataURL;
            a.setAttribute("download", $(this).attr("data-char") + ".svg"); // Filename kannst du beliebig ändern.
            a.click();
        });

        function downloadAll() {
            if (confirm($(".letter").length+" Objekte herunterladen? \nACHTUNG: Diese Aktion kann nicht abgebrochen werden!")) {
                console.log("yes");
                $(".letter").each(function() {
                    var dataURL = 'data:image/svg+xml,' + encodeURIComponent(this.outerHTML);
                    var a = document.createElement("a");
                    a.href = dataURL;
                    a.setAttribute("download", $(this).attr("data-char") + ".svg"); // Filename kannst du beliebig ändern.
                    a.click();
                });
            } else {
                console.log("no");
            }
        }
