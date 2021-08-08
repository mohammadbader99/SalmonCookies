'use strict';

let hoursArray =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let container = document.getElementById('Sales');

let Seattle = {
    branchName : 'Seattle',
    minHourlyCustomers : 23,
    maxHourlyCustomers : 65,
    avgCookiesSale : 6.3,
    hourlyCustomers : [],
    cookiesSalesPerHour : [],
    sumOfCookies : 0,

    randomCustomers : function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        for (let i = 0; i < hoursArray.length; i++) {
            this.hourlyCustomers.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
    },

    calculate : function () {
        for (let i = 0; i < hoursArray.length; i++) {
            this.cookiesSalesPerHour.push(this.hourlyCustomers[i] * this.avgCookiesSale);
            this.sumOfCookies = this.sumOfCookies + this.cookiesSalesPerHour[i];
        }
    },

    render : function () {
        let divEl = document.createElement('div');
        container.appendChild(divEl);

        let h3El = document.createElement('h3');
        h3El.textContent = this.branchName;
        divEl.appendChild(h3El);

        let ulEl =document.createElement('ul');
        divEl.appendChild(ulEl);
        for (let i = 0; i < hoursArray.length; i++) {
            let liEl =document.createElement('li');
            liEl.textContent = `${hoursArray[i]}: ${this.cookiesSalesPerHour[i]}`;
            ulEl.appendChild(liEl);
        }

        let lastLi = document.createElement('li');
        lastLi.textContent = `Total: ${this.sumOfCookies}`;
        ulEl.appendChild(lastLi);
    }
};

Seattle.randomCustomers(Seattle.minHourlyCustomers, Seattle.maxHourlyCustomers);
Seattle.calculate();
Seattle.render();

let Tokyo = {
    branchName : 'Tokyo',
    minHourlyCustomers : 3,
    maxHourlyCustomers : 24,
    avgCookiesSale : 1.2,
    hourlyCustomers : [],
    cookiesSalesPerHour : [],
    sumOfCookies : 0,

    randomCustomers : function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        for (let i = 0; i < hoursArray.length; i++) {
            this.hourlyCustomers.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
    },

    calculate : function () {
        for (let i = 0; i < hoursArray.length; i++) {
            this.cookiesSalesPerHour.push(this.hourlyCustomers[i] * this.avgCookiesSale);
            this.sumOfCookies = this.sumOfCookies + this.cookiesSalesPerHour[i];
        }
    },

    render : function () {
        let divEl = document.createElement('div');
        container.appendChild(divEl);

        let h3El = document.createElement('h3');
        h3El.textContent = this.branchName;
        divEl.appendChild(h3El);

        let ulEl =document.createElement('ul');
        divEl.appendChild(ulEl);
        for (let i = 0; i < hoursArray.length; i++) {
            let liEl =document.createElement('li');
            liEl.textContent = `${hoursArray[i]}: ${this.cookiesSalesPerHour[i]}`;
            ulEl.appendChild(liEl);
        }

        let lastLi = document.createElement('li');
        lastLi.textContent = `Total: ${this.sumOfCookies}`;
        ulEl.appendChild(lastLi);
    }
};

Tokyo.randomCustomers(Tokyo.minHourlyCustomers, Tokyo.maxHourlyCustomers);
Tokyo.calculate();
Tokyo.render();

let Dubai = {
    branchName : 'Dubai',
    minHourlyCustomers : 11,
    maxHourlyCustomers : 38,
    avgCookiesSale : 3.7,
    hourlyCustomers : [],
    cookiesSalesPerHour : [],
    sumOfCookies : 0,

    randomCustomers : function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        for (let i = 0; i < hoursArray.length; i++) {
            this.hourlyCustomers.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
    },

    calculate : function () {
        for (let i = 0; i < hoursArray.length; i++) {
            this.cookiesSalesPerHour.push(this.hourlyCustomers[i] * this.avgCookiesSale);
            this.sumOfCookies = this.sumOfCookies + this.cookiesSalesPerHour[i];
        }
    },

    render : function () {
        let divEl = document.createElement('div');
        container.appendChild(divEl);

        let h3El = document.createElement('h3');
        h3El.textContent = this.branchName;
        divEl.appendChild(h3El);

        let ulEl =document.createElement('ul');
        divEl.appendChild(ulEl);
        for (let i = 0; i < hoursArray.length; i++) {
            let liEl =document.createElement('li');
            liEl.textContent = `${hoursArray[i]}: ${this.cookiesSalesPerHour[i]}`;
            ulEl.appendChild(liEl);
        }

        let lastLi = document.createElement('li');
        lastLi.textContent = `Total: ${this.sumOfCookies}`;
        ulEl.appendChild(lastLi);
    }
};

Dubai.randomCustomers(Dubai.minHourlyCustomers, Dubai.maxHourlyCustomers);
Dubai.calculate();
Dubai.render();

let Paris = {
    branchName : 'Paris',
    minHourlyCustomers : 20,
    maxHourlyCustomers : 38,
    avgCookiesSale : 2.3,
    hourlyCustomers : [],
    cookiesSalesPerHour : [],
    sumOfCookies : 0,

    randomCustomers : function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        for (let i = 0; i < hoursArray.length; i++) {
            this.hourlyCustomers.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
    },

    calculate : function () {
        for (let i = 0; i < hoursArray.length; i++) {
            this.cookiesSalesPerHour.push(this.hourlyCustomers[i] * this.avgCookiesSale);
            this.sumOfCookies = this.sumOfCookies + this.cookiesSalesPerHour[i];
        }
    },

    render : function () {
        let divEl = document.createElement('div');
        container.appendChild(divEl);

        let h3El = document.createElement('h3');
        h3El.textContent = this.branchName;
        divEl.appendChild(h3El);

        let ulEl =document.createElement('ul');
        divEl.appendChild(ulEl);
        for (let i = 0; i < hoursArray.length; i++) {
            let liEl =document.createElement('li');
            liEl.textContent = `${hoursArray[i]}: ${this.cookiesSalesPerHour[i]}`;
            ulEl.appendChild(liEl);
        }

        let lastLi = document.createElement('li');
        lastLi.textContent = `Total: ${this.sumOfCookies}`;
        ulEl.appendChild(lastLi);
    }
};

Paris.randomCustomers(Paris.minHourlyCustomers, Paris.maxHourlyCustomers);
Paris.calculate();
Paris.render();

let Lima = {
    branchName : 'Lima',
    minHourlyCustomers : 2,
    maxHourlyCustomers : 16,
    avgCookiesSale : 4.6,
    hourlyCustomers : [],
    cookiesSalesPerHour : [],
    sumOfCookies : 0,

    randomCustomers : function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        for (let i = 0; i < hoursArray.length; i++) {
            this.hourlyCustomers.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
    },

    calculate : function () {
        for (let i = 0; i < hoursArray.length; i++) {
            this.cookiesSalesPerHour.push(this.hourlyCustomers[i] * this.avgCookiesSale);
            this.sumOfCookies = this.sumOfCookies + this.cookiesSalesPerHour[i];
        }
    },

    render : function () {
        let divEl = document.createElement('div');
        container.appendChild(divEl);

        let h3El = document.createElement('h3');
        h3El.textContent = this.branchName;
        divEl.appendChild(h3El);

        let ulEl =document.createElement('ul');
        divEl.appendChild(ulEl);
        for (let i = 0; i < hoursArray.length; i++) {
            let liEl =document.createElement('li');
            liEl.textContent = `${hoursArray[i]}: ${this.cookiesSalesPerHour[i]}`;
            ulEl.appendChild(liEl);
        }

        let lastLi = document.createElement('li');
        lastLi.textContent = `Total: ${this.sumOfCookies}`;
        ulEl.appendChild(lastLi);
    }
};

Lima.randomCustomers(Lima.minHourlyCustomers, Lima.maxHourlyCustomers);
Lima.calculate();
Lima.render();
