var i = 0;
var sentenceCounter = 0; // initialize a counter variable

var speed = 50;

function type(i, txt, length,newsentence) {
    if (i < length) {
        newsentence.innerHTML += txt.charAt(i);
        i++;
        setTimeout(function () {
            type(i, txt, length,newsentence);
        }, speed);
    }
}

function typeWriter() {
    i = 0;

    var txt = 'Lorem ipsum dummy text blablabla.Lorem ipsum dummy text blablabla.Lorem ipsum dummy text blablabla.Lorem ipsum dummy text blablabla.Lorem ipsum dummy text blablabla.Lorem ipsum dummy text blablabla.Lorem ipsum dummy text blablabla.';
    var template = document.getElementById('TypeWriter');
    var sentence = template.cloneNode(false);
    sentence.id = 'sentence-' + sentenceCounter; // append counter to id
    sentenceCounter++; // increment the counter
    document.body.insertBefore(sentence, template);
    type(i, txt, txt.length,sentence);
}