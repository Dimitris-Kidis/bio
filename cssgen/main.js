const inputs = document.querySelectorAll('.input'),
      tlr = document.getElementById('tlr'),
      trr = document.getElementById('trr'),
      blr = document.getElementById('blr'),
      brr = document.getElementById('brr'),
      cube = document.getElementById('cube');

const resultTLR = document.getElementById('result-tlr'),
      resultTRR = document.getElementById('result-trr'),
      resultBLR = document.getElementById('result-blr'),
      resultBRR = document.getElementById('result-brr'),
      btn = document.getElementById('btn'),
      totalResult = document.getElementById('totalResult'),
      totalResultColors = document.getElementById('colors');

const rateRange1 = document.getElementById('qqq1'),
      rateRange2 = document.getElementById('qqq2'),
      rateRange3 = document.getElementById('qqq3');

const resultColor1 = document.getElementById('result-color-1'),
      resultColor2 = document.getElementById('result-color-2'),
      resultColor3 = document.getElementById('result-color-3');


console.log(rateRange1);
console.log(rateRange2);
console.log(rateRange3);

tlr.addEventListener('input', e => {
    resultTLR.innerHTML = e.target.value;
    cube.style.borderTopLeftRadius = `${e.target.value}px`;
    btn.style.borderTopLeftRadius = `${e.target.value}px`;
})

trr.addEventListener('input', e => {
    resultTRR.innerHTML = e.target.value;
    cube.style.borderTopRightRadius = `${e.target.value}px`;
    btn.style.borderTopRightRadius = `${e.target.value}px`;
})

blr.addEventListener('input', e => {
    resultBLR.innerHTML = e.target.value;
    cube.style.borderBottomLeftRadius = `${e.target.value}px`;
    btn.style.borderBottomLeftRadius = `${e.target.value}px`;
})

brr.addEventListener('input', e => {
    resultBRR.innerHTML = e.target.value;
    cube.style.borderBottomRightRadius = `${e.target.value}px`;
    btn.style.borderBottomRightRadius = `${e.target.value}px`;
})

var first = 224, second = 226, third = 122;


var click = 0;
btn.addEventListener('click', () => {

    totalResult.innerHTML = ` ${resultTLR.innerHTML}px ${resultTRR.innerHTML}px ${resultBLR.innerHTML}px ${resultBRR.innerHTML}px`;
    console.log('vfegrverbg');
    totalResultColors.innerHTML = `rgb(${qqq1.value}, ${qqq2.value}, ${qqq3.value})`;


})

qqq1.addEventListener('input', e => {
    resultColor1.innerHTML = e.target.value;
    document.getElementById('cube').style.backgroundColor = `rgb(${e.target.value}, ${second}, ${third})`; 
    first = e.target.value;
    console.log(e.target.value);
})

qqq2.addEventListener('input', e => {
    resultColor2.innerHTML = e.target.value;
    document.getElementById("cube").style.backgroundColor = `rgb(${first}, ${e.target.value}, ${third})`; 
    second = e.target.value;
})
qqq3.addEventListener('input', e => {
    resultColor3.innerHTML = e.target.value;
    document.getElementById("cube").style.backgroundColor = `rgb(${first}, ${second}, ${e.target.value})`; 
    third = e.target.value;
})

