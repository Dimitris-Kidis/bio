// доходы

const salary = document.getElementById('salary'),
      freelance = document.getElementById('freelance'),
      extra = document.getElementById('extra'),
      pocket = document.getElementById('pocket');


      
// расходы

const flat = document.getElementById('flat'),
      taxes = document.getElementById('taxes'),
      transport = document.getElementById('transport'),
      credit = document.getElementById('credit');
// доступно в месяц, день, накопим

let totalMonth, totalDay, accumulation, totalPercents;


const totalMonthInput = document.getElementById('availableMonth');
const totalDayInput = document.getElementById('availableDay');
const totalYearInput = document.getElementById('savingsYear');
const accumulationInput = document.getElementById('accumulation');
const spendInput = document.getElementById('spend');

// проверка, если что-то изменилось в инпутах

const inputs = document.querySelectorAll('.input');
for(input of inputs) {
    input.addEventListener('input', () => {
        countingAvailableMoney();
    })
}


const rangeRate = document.getElementById('rangeRate');
const rangePercents = document.getElementById('rangePercents');
// функция перевода из строки в число

const strToNum = str => str.value ? parseInt(str.value) : 0;

const countingAvailableMoney = () => {
    const totalPerMonth = strToNum(salary) + strToNum(freelance) + strToNum(extra) + strToNum(pocket);
    const totalCosts = strToNum(flat) + strToNum(taxes) + strToNum(transport) + strToNum(credit);

    totalMonth = totalPerMonth - totalCosts;
    totalMonthInput.value = totalMonth;

    

}

// рычажок копилки



rangeRate.addEventListener('input', e => {
    rangePercents.innerHTML = e.target.value;
    totalPercents = e.target.value;
    totalDayInput.value = (((totalMonthInput.value * e.target.value)/100)/30).toFixed();
    save();
    saveYear();
    spending();
})

const save = () => {
    totalMonth ? accumulation = (totalMonth*totalPercents)/100 : accumulation = 0;
    accumulationInput.value = accumulation;
}

const saveYear = () => {
    accumulation ? totalYearInput.value = accumulation * 12 : 0;
}

const spending = () => {
    totalMonth ? spendInput.value = totalMonth - accumulation : 0;
}


