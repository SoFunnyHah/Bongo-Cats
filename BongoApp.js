alert('A, D = Kick;   S = Clap. Good luck, have fun!');
let img = document.getElementById('bongoCat');
let audioSample = document.getElementById('sample');
audioSample.volume = '0.3';
let music = document.getElementById('mainMusic');
music.volume = '0.5';
music.play();
music.setAttribute("loop", "-1");
let atribute1 = document.getElementById('atribute1');


//key events
document.addEventListener('keydown', function(event){
    switch (event.code){
        case 'KeyA':
            audioSample.setAttribute("src", "./audio/samples/Drums/Samples/kick-cultivator.wav");
            audioSample.play();
            img.setAttribute("src", "./img/bongo2.svg");
            function delay () {
                img.setAttribute("src", "./img/bongo1.svg");
              }
              setTimeout(delay, 200);  
            break;  
        
        case 'KeyS':
            audioSample.setAttribute("src", "./audio/samples/Drums/Samples/clap-crushed.wav");
            audioSample.play();
            img.setAttribute("src", "./img/bongo4.svg"); 
            function delay () {
                img.setAttribute("src", "./img/bongo1.svg");
              }
              setTimeout(delay, 200); 
            break;
        case 'KeyD':
            audioSample.setAttribute("src", "./audio/samples/Drums/Samples/kick-cultivator.wav");
            audioSample.play();
            img.setAttribute("src", "./img/bongo3.svg");
            function delay () {
                img.setAttribute("src", "./img/bongo1.svg");
              }
              setTimeout(delay, 200);  
            break;

    }
    
    
    
    // if (event.code === 'KeyA') {
    //     img.setAttribute("src", "/img/bongo2.svg");
    // }





});