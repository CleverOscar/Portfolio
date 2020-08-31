// helper function for typewriter effect 
function typeWriter(){
    var i = 0;

    var sentence = 'Welcome, my name is Oscar Ortiz';

    var speed = 50;

    if(i < sentence.length) {
        document.getElementById('typeWriter').innerHTML += sentence.charAt(i);
        i++;
        setTimeout(typeWriter, speed)
    }
}

export default typeWriter