const write = document.getElementById('write');
const the7habits = document.getElementById('the7habits');
const sapiens = document.getElementById('sapiens');
const theart = document.getElementById('theart');
const g1984 = document.getElementById('g1984');
const harrypotter = document.getElementById('harrypotter');
const tokilla = document.getElementById('tokilla');
const hungergames = document.getElementById('hungergames');
const thinking = document.getElementById('thinking');
const animal = document.getElementById('animal');


const writeInfo = document.getElementById('write-info');
const sevenInfo = document.getElementById('seven-info');
const sapiensInfo = document.getElementById('sapiens-info');
const theartInfo = document.getElementById('theart-info');
const g1984Info = document.getElementById('g1984-info');
const harrypotterInfo = document.getElementById('harrypotter-info');
const tokillaInfo = document.getElementById('tokilla-info');
const hungergamesInfo = document.getElementById('hungergames-info');
const thinkingInfo = document.getElementById('thinking-info');
const animalInfo = document.getElementById('animal-info');

write.addEventListener('mouseover', () => {
    writeInfo.classList.add('show');

})
write.addEventListener('mouseout', () => {
    writeInfo.classList.remove('show');
})

the7habits.addEventListener('mouseover', () => {
    sevenInfo.classList.add('show');
})
the7habits.addEventListener('mouseout', () => {
    sevenInfo.classList.remove('show');
})

sapiens.addEventListener('mouseover', () => {
    sapiensInfo.classList.add('show');
})
sapiens.addEventListener('mouseout', () => {
    sapiensInfo.classList.remove('show');
})

theart.addEventListener('mouseover', () => {
    theartInfo.classList.add('show');
})
theart.addEventListener('mouseout', () => {
    theartInfo.classList.remove('show');
})

g1984.addEventListener('mouseover', () => {
    g1984Info.classList.add('show');
})
g1984.addEventListener('mouseout', () => {
    g1984Info.classList.remove('show');
})

harrypotter.addEventListener('mouseover', () => {
    harrypotterInfo.classList.add('show');
})
harrypotter.addEventListener('mouseout', () => {
    harrypotterInfo.classList.remove('show');
})
tokilla.addEventListener('mouseover', () => {
    tokillaInfo.classList.add('show');
})
tokilla.addEventListener('mouseout', () => {
    tokillaInfo.classList.remove('show');
})
hungergames.addEventListener('mouseover', () => {
    hungergamesInfo.classList.add('show');
})
hungergames.addEventListener('mouseout', () => {
    hungergamesInfo.classList.remove('show');
})
thinking.addEventListener('mouseover', () => {
    thinkingInfo.classList.add('show');
})
thinking.addEventListener('mouseout', () => {
    thinkingInfo.classList.remove('show');
})
animal.addEventListener('mouseover', () => {
    animalInfo.classList.add('show');
})
animal.addEventListener('mouseout', () => {
    animalInfo.classList.remove('show');
})



//---------------------------------------------
// const games = document.getElementById('games');

// let index = 0;
// games.addEventListener('mouseover', () => {
//     games.innerHTML = '';
//     setTimeout( function() {
//         games.style.backgroundImage = `url(/img/games/game${index}.png)`;


//                 index++;
//                 index = (index)%(3);



//             }, 2000);
    
// })

// games.addEventListener('mouseout', () => {
//     games.innerHTML = 'Игры';
//     games.style.backgroundImage = "url()";
// })
