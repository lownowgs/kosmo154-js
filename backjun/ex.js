
// const fs = require('fs');
// const input = fs.readFileSync(
//     process.platform === "linux" ? "/dev/stdin" : "./input.txt").
//     toString().trim().split(" ");
//     var A=parseInt(input[0]);
//     var B=parseInt(input[1]);
//     var C=parseInt(input[2]);

    

// const { Console } = require('console');
// const fs = require('fs');
// const input = fs.readFileSync(
//     process.platform === "linux" ? "/dev/stdin" : 
// "./input.txt").toString().trim().split("\n"); // 줄바꿈 기준으로 나눔


// const fs = require('fs');
// const input = fs.readFileSync(
// process.platform === "linux" ? "/dev/stdin" : "./input.txt"
//  ).toString().trim().split("\n"); // Windows(`\r\n`)과 Unix(`\n`) 모두 처리

// const x = Number(input[0]);  // x 좌표
// const y = Number(input[1]);  // y 좌표


// const fs = require("fs");
// const input = fs.readFileSync(0).toString().split("\n").map(Number);

// const A = input[0];
// const B = input[1];
// if (x > 0) {
//     console.log(y > 0 ? 1 : 4);
// } else {
//     console.log(y > 0 ? 2 : 3);
// }

//const input = require("fs").readFileSync(0).toString().trim().split(" ");

// const fs = require('fs');
// const input = fs.readFileSync(
// process.platform === "linux" ? "/dev/stdin" : "./input.txt"
//  ).toString().trim().split("\n");
// const a = parseInt(input[0]);
// const b = parseInt(input[1]);
// // const b = parseInt(input[1]);
// // const c = parseInt(input[2]); 

// let temp = 0;
// for (let i = 2; i < 2+b; i++) {
//     const [A,B] = input[i].split(" ").map(Number);
//     temp += A*B;
    
// }
// console.log((temp===a) ? "Yes": "No");

// const fs = require('fs');
// const input = fs.readFileSync(
// process.platform === "linux" ? "/dev/stdin" : "./input.txt"
//  ).toString().trim().split("\n");

// const N = parseInt(input[0]); // 첫 번째 줄에서 N 값을 가져옴

// for (let i = 1; i <= N; i++) {
//     console.log('*'.repeat(i)); 
// }


const fs = require('fs');
const input = fs.readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input.txt"
).toString().trim().split("\n");


const n = parseInt(input[0]); // 첫 번째 줄: 정수 n
const l = input[1].split(" ").map(Number); // 두 번째 줄: 정수 배열
const v = parseInt(input[2]); // 세 번째 줄: 찾을 값 v

let c = 0;
for (let i of l) {
    if (i === v) {
        c += 1;
    }
}
console.log(c);


// for (let i = 0; i < input.length; i++) {
//     const [A, B] = input[i].split(' ').map(Number);
//     if (A === 0 && B === 0) break;
//     console.log(A + B);
// }

// const N = parseInt(input[0]);

// for (let i = 1; i <= N; i++) {
//     let spaces = ' '.repeat(N - i); // 공백 추가
//     let stars = '*'.repeat(i); // 별 추가
//     console.log(spaces + stars); // 공백 + 별 출력
// }
// for (let i = 1; i <= a; i++) {
//     const [A, B] = input[i].split(" ").map(Number); // A, B를 숫자로 변환
//     console.log("Case #"+i+":"+" " +A+" + "+B+" = " + (A + B));
// }


// const result = (temp===a) ? "Yes": "No";
// console.log(result);


// for (let i = 1; i <= a; i++) {
//     const [A, B] = input[i].split(" ").map(Number); // A, B를 숫자로 변환
//     console.log(A + B);
// }
// const x = parseInt(input[0]);  // x 좌표
// const y = parseInt(input[1]);  // y 좌표


       
    


    // B의 각 자리 수를 구함
    // const B1 = B % 10;         // 일의 자리
    // const B10 = parseInt((B % 100) / 10);  // 십의 자리
    // const B100 = parseInt(B / 100);  // 백의 자리
    
    // // 각 단계 곱셈 결과 출력
    // console.log(A * B1);    // (3) 일의 자리 곱셈 결과
    // console.log(A * B10);   // (4) 십의 자리 곱셈 결과
    // console.log(A * B100);  // (5) 백의 자리 곱셈 결과
    // console.log(A * B);  







