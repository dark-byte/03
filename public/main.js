const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')


const getPannel = () =>{
    const pannel = [one, two, three, four]
    return pannel[parseInt(Math.random() * pannel.length)]
}

let sequence = [getPannel()]
let seqToGuess = [...sequence]

const flash = pannel =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{}, 1000)
        pannel.className += ' active';
        setTimeout(()=>{
            pannel.className = pannel.className.replace(' active', '');
            setTimeout(()=>{
                resolve();
            }, 250)
        }, 500)
    })
}

// let canClick = false;

const clicked = pannel =>{
    if(!canClick) return;
    const expectedPannel = seqToGuess.shift();
    if(expectedPannel === pannel){
        if(seqToGuess.length === 0){
            sequence.push(getPannel());
            seqToGuess = [...sequence]
            startFlashing();
        }
    } else{
        alert("Game Over!")
        sequence = [getPannel()]
        seqToGuess = [...sequence]
        startFlashing();
    }
    console.log(pannel, seqToGuess, sequence)
}

const startFlashing = async ()=>{
    canClick = false;
    for(const pannel of sequence){
        await flash(pannel);
    }
    
    canClick = true;
}

startFlashing()