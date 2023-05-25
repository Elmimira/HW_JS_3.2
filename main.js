const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

let sum = 0;
let count = 0;
array.forEach((element) => sum += element > 0 ? element : 0);

for (i=0; i<100; i++) {
    if (array[i] >0) {
        count += 1;
    }
}

let min = Math.min(...array);
let minIndex = array.indexOf(Math.min(...array));

let max = Math.max(...array);
let maxIndex = array.indexOf(Math.max(...array));

let negative = array.filter(item => item < 0);

let oddNumber = array.filter(item => item > 0 & item % 2 !== 0);

let pairNumber = array.filter(item => item > 0 & item % 2 == 0);

let sumPairNumber = 0;
pairNumber.forEach((el) => {
    sumPairNumber += el;
})

let sumOddNumber = 0;
oddNumber.forEach((el) => {
    sumOddNumber += el;
})

let positive = array.filter(item => item > 0);
let product = 1;
for (let i= 0; i<positive.length; i++) {
    product *= positive[i];
}

const maxElement = array.map(el => el === max ? el : 0);

console.log(sum);
console.log(count);
console.log(min);
console.log(minIndex);
console.log(max);
console.log(maxIndex);
console.log(negative.length);
console.log(oddNumber.length);
console.log(pairNumber.length);
console.log(sumPairNumber);
console.log(sumOddNumber);
console.log(product);
console.log(maxElement);

