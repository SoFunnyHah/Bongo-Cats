alert('A, D = Kick; S = Clap. Space = Auto tune. Enter = Disco flex. Good luck, have fun!')
let discoChecker = 2;

let discoDance = document.getElementById('disco');
let img = document.getElementById('bongoCat');
let audioSample = document.getElementById('sample');
audioSample.volume = '0.2';
let music = document.getElementById('mainMusic');
music.volume = '0.5';

function backGrounfMusicDelay (){
    music.play();
}
setTimeout (backGrounfMusicDelay, 2490);
// music.setAttribute("loop", "-1");
let atribute1 = document.getElementById('atribute1');
let autoTune = document.getElementById('autoTune'); 
autoTune.play();
autoTune.volume = "0";
let autoTuneChecker = 1;


//key events
document.addEventListener('keydown', function(event){
    switch (event.code){
        case 'KeyA':
            audioSample.setAttribute("src", "./audio/samples/Drums/Samples/kick-cultivator.wav");
            audioSample.play();
            img.setAttribute("src", "./img/bongo2.svg");
            img.style.backgroundSize = "37.5% 34.5%"
            function delay () {
                img.setAttribute("src", "./img/bongo1.svg");
              }
              setTimeout(delay, 200);  
              function backSize () {
                img.style.backgroundSize = "38% 35%";
              }
              setTimeout(backSize, 200); 
            break;  
        
        case 'KeyS':
            audioSample.setAttribute("src", "./audio/samples/Drums/Samples/clap-crushed.wav");
            audioSample.play();
            img.setAttribute("src", "./img/bongo4.svg"); 
            img.style.backgroundSize = "37.5% 34.5%"
            function delay () {
                img.setAttribute("src", "./img/bongo1.svg");
              }
              setTimeout(delay, 200); 
              function backSize () {
                img.style.backgroundSize = "38% 35%";
              }
              setTimeout(backSize, 200); 
            break;
        case 'KeyD':
            audioSample.setAttribute("src", "./audio/samples/Drums/Samples/kick-cultivator.wav");
            audioSample.play();
            img.setAttribute("src", "./img/bongo3.svg");
            img.style.backgroundSize = "37.5% 34.5%"
            function delay () {
                img.setAttribute("src", "./img/bongo1.svg");
              }
              setTimeout(delay, 200);  
              function backSize () {
                img.style.backgroundSize = "38% 35%";
              }
              setTimeout(backSize, 200); 
            break;
        case 'Space':
            if (autoTuneChecker % 2 === 0){
                autoTune.volume = "0";
                autoTuneChecker++;
                break;  
            } else {
                autoTune.volume = "0.5";
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