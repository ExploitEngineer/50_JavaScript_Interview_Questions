// 1
console.log("Abdul Rafay", "Just to do code!");


// 2
console.log(45 * 2 - 10);


// 3
const dt = new Date();
console.log(dt.getFullYear());


// 4
let first = "Abdul";
let last = "Rafay";
console.log(first.concat(" " + last));


// 5
let a = 12;
console.log(a);
a = 32;
console.log(a);


// 6
console.error("something went wrong");


// 7
console.log(12 * 12);


// 8
let b = true;
console.log(typeof b);


// 9
let myAge = 17;
if (myAge > 18) {
    console.log(true);
} else {
    console.log(false);
}


// 10
console.log(100 / 0);


// 11
let c = 10;
console.log(c);


// 12
const PI = Math.PI;
console.log(PI);


// 13
let d = "dog";
d = "cat";
console.log(d);


// 14
console.log(typeof null);


// 15
let strNum = "25";
console.log(typeof strNum);


// 16
let bool = true;
console.log(typeof bool);


// 17
let str = "hey", num = 12, bol = true;
console.log(str, num, bol);


// 18
let e;
console.log(typeof e);


// 19
let un = undefined;
console.log(un);


// 20
const arr = [1, 2, 3];
// arr = [3, 3, 4]; // don't do this with constant variable
console.log(arr);


// 21
for (let i = 1; i < 51; i++) {
    console.log(i);
}


// 22
let i = 1;
let sum = 0
while (i < 11) {
    sum += i;
    i++;
}
console.log(sum);


// 23
let str1 = "JavaScript";
for (let char of str1) {
    console.log(char);
}


// 24
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) { }
    else {
        console.log(i);
    }
}

for (let i = 0; i < 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


// 25
let aa = 5;
do {
    console.log(aa);
    aa--;
} while (aa > 0);


// 26
let fact = 1;
for (let i = 5; i > 0; i--) {
    fact *= i;
}
console.log(fact);


// 27
let hold = 1
for (let i = 1; i < 4; i++) {
    let str = "";
    for (let j = 1; j < 4; j++) {
        str += `${hold} `;
        hold++;
    }
    console.log(str);
}


// 28
let arr1 = [1, 2, 3, 4, 5];
for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr1[i];
    arr1[i] = arr1[arr1.length - 1 - i];
    arr[arr.length - i - 1] = temp;
}
console.log(arr1);


// 29
let num2 = 1;
while (num2 < 101) {
    if (num2 % 5 === 0) {
        console.log(num2);
    }
    num2++;
}


// 30
let obj = {
    name: "abdul rafay",
    city: "Islamabad"
};
for (let key in obj) {
    console.log(`${key} and value of obj is ${obj[key]}`);
}


// 31
let movies = ["Money Heist", "3 Idiots", "kingdom of heaven", "Mr Robot", "Hacking"];
movies.forEach(value => console.log(value));


// 32
console.log(movies[1]);


// 33
movies.unshift("a", "b");
console.log(movies);


// 34
movies.pop();
console.log(movies);


// 35
movies.splice(0, 3); // start from 0 delete 3 elements
console.log(movies);


// 36
console.log(movies.indexOf("3 Idiots"));


// 37
console.log(movies.includes("Mr Robot"));


// 38
let arr2 = [1, 2, 3, 4, 5];
let newarr = arr2.concat(movies);
console.log(newarr);


// 39
let num1 = [5, 1, 2, 23, 343, 23, 3, 4];
for (let j = 0; j < num1.length - 1; j++) {
    for (let i = 0; i < num1.length - j - 1; i++) {
        if (num1[i] > num1[i + 1]) {
            let temp = num1[i];
            num1[i] = num1[i + 1];
            num1[i + 1] = temp;
        }
    }
}
console.log(num1);


// 40
let num5 = [1, 2, 3, 4, 5];
let num6 = [...num5]; // first method
let num7 = []; // second method
num5.forEach((value) => {
    num7.push(value);
})
console.log(num7);
