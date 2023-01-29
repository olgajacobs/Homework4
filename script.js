// task 1

let a = true

while (a<=2) {
    console.log('Привет!');
    a++;
}

// task 2

let b = 1
do {
    console.log(b);
    b++;
} while (b <= 5);

// task 3 

for (let c = 7; c <= 22; c++) {
    console.log(c); 
}

// task 4

const obj = {
    'Коля' : 200,
    'Вася' : 300,
    'Петя': 400
}

for (const key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`)
}

// task 5

for (n=1000, num=1; n=n/2; n/2>50,num++) {
    console.log(n);
   
    if (n/2<=50) {
        break;
    }   
}
console.log('Количество интераций ' + num);


// task 6


for (firstFriday = 1; firstFriday <=31; firstFriday+=7) {
    console.log('Сегодня пятница, ' + firstFriday + '-е число. Необходимо подготовить отчет.');

}

