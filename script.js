
function choseEmoji(){
    var emojiTable = ['❤',' 🚀 ','☕️',' 🌟 ',' 🐱 ','💜',' 😜','😋'];
    var ranEmoji= [Math.floor(Math.random() *emojiTable.length)];
    return emojiTable[ranEmoji];
}
var emoji = choseEmoji();



function createParticle(x,y,emoji){
    
    const div = document.getElementById('particleDiv');

    const particle = document.createElement('span');
    particle.setAttribute('class','particle');
    div.appendChild(particle);

    let destinationX = (Math.random() )* 1000;
    let destinationY = (Math.random() )*500 ;

    let rotation = Math.random() * 600;

    let delay = Math.random()*999;
    particle.innerHTML = emoji;

    particle.style.fontSize = Math.random() * 24 + 10 + 'px';
    particle.style.width = 'auto';
    particle.style.height = 'auto';

    const animation = particle.animate([
        {
          transform: `translate(100%, 50%) translate(${x}px, ${y}px) rotate(0deg)`,
          opacity: 1
        },
        {
          transform: `translate(100%, 50%) translate(${destinationX}px, ${-destinationY}px) rotate(${rotation}deg)`,
          opacity: 0
        }
      ], {
        duration: Math.random() * 1000 + 5000,
        easing: 'cubic-bezier(0, .5, .57, 1)',
        delay: delay
      });

    animation.onfinish = removeParticle;
}


function removeParticle (e) {
    e.srcElement.effect.target.remove();
}

if (document.body.animate) {
    document.getElementById('button').addEventListener('click',()=>{
        var emoji = choseEmoji();
        document.getElementById('emoji').innerHTML = emoji;
        const x = window.innerHeight;
        const y = window.innerWidth ;
        for (let i = 0; i < 50; i++) {
          // We call the function createParticle 30 times
          // We pass the coordinates of the button for x & y values
          createParticle(x, y,emoji)
        }
    });
}
  