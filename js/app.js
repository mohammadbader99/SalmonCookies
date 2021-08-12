'use strict';

let hoursArray = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let branchesArray = [];

function BranchData(branchName, minHourlyCustomers, maxHourlyCustomers, avgCookiesSale) {
    this.branchName = branchName;
    this.minHourlyCustomers = minHourlyCustomers;
    this.maxHourlyCustomers = maxHourlyCustomers;
    this.avgCookiesSale = avgCookiesSale;
    this.hourlyCustomers = [];
    this.cookiesSalesPerHour = [];
    this.sumOfCookies = 0;
    branchesArray.push(this);
}

BranchData.prototype.randomCustomers = function () {
    let min = Math.ceil(this.minHourlyCustomers);
    let max = Math.floor(this.maxHourlyCustomers);

    for (let i = 0; i < hoursArray.length; i++) {
        this.hourlyCustomers.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
};

BranchData.prototype.calculate = function () {
    for (let i = 0; i < hoursArray.length; i++) {
        this.cookiesSalesPerHour.push(Math.ceil(this.hourlyCustomers[i] * this.avgCookiesSale));
        this.sumOfCookies = this.sumOfCookies + this.cookiesSalesPerHour[i];
    }
};

BranchData.prototype.render = function () {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let tdEl1 = document.createElement('td');
    tdEl1.textContent = this.branchName;
    trEl.appendChild(tdEl1);

    for (let i = 0; i < hoursArray.length; i++) {
        let tdEl = document.createElement('td');
        tdEl.textContent = this.cookiesSalesPerHour[i];
        trEl.appendChild(tdEl);
    }

    let tdEl2 = document.createElement('td');
    tdEl2.textContent = this.sumOfCookies;
    trEl.appendChild(tdEl2);
};

function createTableHeader() {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let thEl1 = document.createElement('th');
    trEl.appendChild(thEl1);

    for (let i = 0; i < hoursArray.length; i++) {
        let thEl = document.createElement('th');
        thEl.textContent = hoursArray[i];
        trEl.appendChild(thEl);
    }

    let thEl2 = document.createElement('th');
    thEl2.textContent = 'Daily Location Total';
    trEl.appendChild(thEl2);
}

function createTableFooter() {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let thEl1 = document.createElement('th');
    thEl1.textContent = 'Totals';
    trEl.appendChild(thEl1);

    let grandTotal = 0;
    for (let i = 0; i < hoursArray.length; i++) {

        let total = 0;

        for (let j = 0; j < branchesArray.length; j++) {
            total = total + branchesArray[j].cookiesSalesPerHour[i];
        }

        grandTotal = grandTotal + total;

        let thEl = document.createElement('th');
        thEl.textContent = total;
        trEl.appendChild(thEl);
    }

    let thEl2 = document.createElement('th');
    thEl2.textContent = grandTotal;
    trEl.appendChild(thEl2);
}

let myform = document.getElementById('myForm');

myform.addEventListener('submit', addBranch);

function addBranch(event) {

    event.preventDefault();

    let branchName = event.target.branchName.value;
    let minHourlyCustomers = event.target.minHourlyCustomers.value;
    let maxHourlyCustomers = event.target.maxHourlyCustomers.value;
    let avgCookiesSale = event.target.avgCookiesSale.value;

    if (Number(maxHourlyCustomers) < Number(minHourlyCustomers)){
        alert('Minimum can\'t be larger than maximum');
    }
    else if (isNaN(avgCookiesSale)){
        alert('Average of cookies sales must be a number!');
    }
    else{

        tableEl.deleteRow(-1);

        let newBranch = new BranchData(branchName, minHourlyCustomers, maxHourlyCustomers, avgCookiesSale);

        newBranch.randomCustomers();
        newBranch.calculate();
        newBranch.render();

        createTableFooter();

        document.getElementById('myForm').reset();
    }
}

new BranchData('Seattle', 23, 65, 6.3);
new BranchData('Tokyo', 3, 24, 1.2);
new BranchData('Dubai', 11, 38, 3.7);
new BranchData('Paris', 20 , 38, 2.3);
new BranchData('Lima', 2, 16, 4.6);

let container = document.getElementById('Sales');

let tableEl = document.createElement('table');
container.appendChild(tableEl);

createTableHeader();

for (let i = 0; i < branchesArray.length; i++) {
    branchesArray[i].randomCustomers();
    branchesArray[i].calculate();
    branchesArray[i].render();
}

createTableFooter();
