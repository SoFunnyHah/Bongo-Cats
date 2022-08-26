alert ('8-0...8-0-0...8-0-8-0-0-8-7-9-7-6...SPACE-ENTER? TAKE IN MIND, NOOB!');

let discoChecker = 2;

let discoDance = document.getElementById('disco');
let img = document.getElementById('bongoCat');
let audioSample = document.getElementById('sample');
audioSample.volume = '1';
let music = document.getElementById('mainMusic');
// music.setAttribute("loop", "-1");
let atribute1 = document.getElementById('atribute1');
let autoTune = document.getElementById('autoTune'); 
autoTune.volume = "0.9";
let autoTuneChecker = 2;


//key events
document.addEventListener('keydown', function(event){
    switch (event.code){
        case 'Digit6':
            audioSample.setAttribute("src", "./audio/samples/Drums/stiloPhone6.mp3");
            audioSample.play();
            img.setAttribute("src", "./img/bongoCat7.svg");
            function delay () {
                img.setAttribute("src", "./img/bongoCat1.svg");
              }
              setTimeout(delay, 200);  
            break;  
        
        case 'Digit7':
            audioSample.setAttribute("src", "./audio/samples/Drums/stiloPhone7.mp3");
            audioSample.play();
            img.setAttribute("src", "./img/bongoCat8.svg"); 
            img.style.backgroundSize = "37.5% 34.5%"
            function delay () {
                img.setAttribute("src", "./img/bongoCat1.svg");
              }
              setTimeout(delay, 200); 
              function backSize () {
                img.style.backgroundSize = "38% 35%";
              }
              setTimeout(backSize, 200); 
            break;
        case 'Digit8':
            audioSample.setAttribute("src", "./audio/samples/Drums/stiloPhone8.mp3");
            audioSample.play();
            img.setAttribute("src", "./img/bongoCat9.svg");
            img.style.backgroundSize = "37.5% 34.5%"
            function delay () {
                img.setAttribute("src", "./img/bongoCat1.svg");
              }
              setTimeout(delay, 200);  
              function backSize () {
                img.style.backgroundSize = "38% 35%";
              }
              setTimeout(backSize, 200); 
            break;
        case 'Digit9':
                audioSample.setAttribute("src", "./audio/samples/Drums/stiloPhone9.mp3");
                audioSample.play();
                img.setAttribute("src", "./img/bongoCat5.svg");
                img.style.backgroundSize = "37.5% 34.5%"
                function delay () {
                    img.setAttribute("src", "./img/bongoCat1.svg");
                  }
                  setTimeout(delay, 200);  
                  function backSize () {
                    img.style.backgroundSize = "38% 35%";
                  }
                  setTimeout(backSize, 200); 
                break;
        case 'Digit0':
                    audioSample.setAttribute("src", "./audio/samples/Drums/stiloPhone0.mp3");
                    audioSample.play();
                    img.setAttribute("src","./img/bongoCat3.svg");
                    img.style.backgroundSize = "37.5% 34.5%"
                    function delay () {
                        img.setAttribute("src", "./img/bongoCat1.svg");
                      }
                      setTimeout(delay, 200);  
                      function backSize () {
                        img.style.backgroundSize = "38% 35%";
                      }
                      setTimeout(backSize, 200); 
                    break;
        
        
        
            case 'Space':
            if (autoTuneChecker % 2 === 0){
                autoTune.play();
                autoTuneChecker++;
                break;  
            } else {

                autoTuneChecker++;
                break; 
            }
        case 'Enter':
            discoDance.style.animationPlayState = 'running';
            if (discoChecker % 2 === 0){
                discoDance.style.opacity = '0.4';
                discoChecker++;
                break;  
            } else {
                discoDance.style.opacity = '0';
                discoChecker++;
                break; 
            }
        
            

    }
    
    
    
    // if (event.code === 'KeyA') {
    //     img.setAttribute("src", "/img/bongo2.svg");
    // }





}); 