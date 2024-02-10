// через цикл for
const salary = [20000, 30000, 40000, 50000, 60000];
const salaryAfterDeductions = [];

for (let i = 0; i < salary.length; i++) {
    const element = salary[i];
    salaryAfterDeductions.push(element * 0.87);
}

console.log(salaryAfterDeductions); 

// через map
console.log(salary.map((item) => item * 0.87));


// вывод массива на экран
const products = ['Брюки','Пальто','Шапка','Сапоги'];

const contentEl = document.querySelector('.content');

products.forEach(element => {
    const pEl = document.createElement('p');
    pEl.textContent = element;
    contentEl.append(pEl);
});
