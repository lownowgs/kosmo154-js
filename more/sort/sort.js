
// 1. 버블 소트  오름차순
// function bubbleSort(arr){
//     let len = arr.length;
//     for (let i = 0; i < len-1; i++) {
//         for (let j = 0; j < len-i-1; j++) {
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1]   = temp;               
//             }           
//         }
//     }
//     return arr;
// }
// const arr1 = [5,4,1,16,3];
// console.log(JSON.stringify(bubbleSort(arr1)));




// 2. Bubble Sort 구현 시 각 패스(pass)(외부 반복문 한번을 의미함)마다 
// swap이 발생하지 않으면 조기 종료하도록 하고, 
// 정렬된 배열과 함께 총 패스 횟수와 swap 횟수를 같이 반환하라.

// function bubbleSort(arr){
//     let len = arr.length;
//     let passCount = 0;
//     let swapCount  = 0;
//     let swapped;

//     for (let i = 0; i < len-1; i++) {
//         swapped = false;
//         passCount++; // 패스가 진행될 때마다 증가
//         for (let j = 0; j < len-i-1; j++) {
//             if(arr[j]>arr[j+1]){

//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1]   = temp;         

//                 swapCount++;
//                 swapped = true;
//             }          
//         }
//          // swap이 한 번도 일어나지 않으면 정렬 완료 → 조기 종료
//         if(!swapped) break;
//     }
//     return { sortarr: arr, totalpass : passCount, totalswap:swapCount };
// }
// const arr1 = [5,4,1,16,3];
// console.log(JSON.stringify(bubbleSort(arr1)));
// const result = bubbleSort(arr1);
// console.log("정렬된 배열:", result.sortarr);
// console.log("총 패스 횟수:", result.totalpass);
// console.log("총 swap 횟수:", result.totalswap);





// 3. Selection Sort
// function selectSort(arr){
//     let n = arr.length;
//     for (let i = 0; i < n -1; i++) {
//         let min = i;
//         for (let j = i+1; j < n; j++) {
//             if(arr[j] < arr[min]){
//                 min = j;
//             }

//         }

//         if(min !== i){ //불필요한 swap 방지 → 성능 최적화
//             let temp = arr[i];
//             arr[i] = arr[min];
//             arr[min] = temp;
//         }
//     }
//     return arr;
// }

// const array3 = [29, 10, 14, 37, 13];
// console.log(JSON.stringify(selectSort(array3)));




// 4. Selection Sort를 활용하여 정수 배열을 오름차순으로 정렬한 후, 정렬된 배열의 최솟값과 최댓값을 함
//       께 반환하라.
// function selectSort(arr){
//     let n = arr.length;
//     for (let i = 0; i < n -1; i++) {
//         let min = i;
//         for (let j = i+1; j < n; j++) {
//             if(arr[j] < arr[min]){
//                 min = j;
//             }

//         }

//         if(min !== i){ //불필요한 swap 방지 → 성능 최적화
//             let temp = arr[i];
//             arr[i] = arr[min];
//             arr[min] = temp;
//         }
//     }
//     return {arr,min1 : arr[0], max1 : arr[n-1]};
// }

// const array3 = [29, 10, 14, 37, 13];
// console.log(JSON.stringify(selectSort(array3)));
// console.log(selectSort(array3).min1);
// console.log(selectSort(array3).max1);




// 5. insertion sort 
// function insertionSort(arr){
//     let n = arr.length;
//     for(let i = 1; i<n; i++){
//         let key = arr[i];
//         let j=i- 1;
//         while (j>=0 && arr[j] > key) {
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = key;
//     }
//     return arr;

// }

// const array4 =[12,11,13,5,6];
// console.log(JSON.stringify(insertionSort(array4)))


// 6. Insertion Sort 수행 시, 원소 이동(shift) 횟수를 계산하여 최종 정렬된 배열과
//  함께 반환하라
// function insertionSort(arr){
//     let n = arr.length;
//     let count = 0;
//     for(let i = 1; i<n; i++){
//         let key = arr[i];
//         let j=i- 1;

//         while (j>=0 && arr[j] > key) {
//             arr[j+1] = arr[j];
//             j--;
//             count++;
//         }
//         arr[j+1] = key;
//     }
//     return {arr, count};

// }

// const array4 =[12,11,13,5,6];
// console.log(JSON.stringify(insertionSort(array4)))



// 7. 주어진 정수 배열을 Bubble Sort로 정렬한 후, 정렬된 배열에서 특정 target 값의
//  인덱스를 Binary Search를 이용하여 탐색하라
// function bubbleSort(arr){
//     let len = arr.length;
//     for (let i = 0; i < len-1; i++) {
//         for (let j = 0; j < len-i-1; j++) {
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;               
//             }           
//         }
//     }
//     return arr;
// }

// function binarySearch(arr, target) {
//     let left = 0, right = arr.length - 1;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] === target) return mid;
//         else if (arr[mid] < target) left = mid + 1;
//         else right = mid - 1;
//     }
//     return -1;
// }

// const arr1 = [5, 4, 1, 16, 3];
// const sortedArr = bubbleSort(arr1);
// console.log("정렬된 배열:", JSON.stringify(sortedArr));

// const target = 4;
// const result = binarySearch(sortedArr, target);
// console.log(`원소 ${target}의 위치:`, result);




// 8. bubble sort 내림차순
// function bubbleSort(arr){
//     let len = arr.length;
//     for (let i = 0; i < len-1; i++) {
//         for (let j = 0; j < len-i-1; j++) {
//             if(arr[j]<arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1]   = temp;               
//             }           
//         }
//     }
//     return arr;
// }
// const arr1 = [5,4,1,16,3];
// console.log(JSON.stringify(bubbleSort(arr1)));



// 9. Selection Sort를 활용하여 주어진 정수 배열을 내림차순으로 정렬하라
// function selectSort(arr){
//     let n = arr.length;
//     for (let i = 0; i < n -1; i++) {
//         let min = i;
//         for (let j = i+1; j < n; j++) {
//             if(arr[j] > arr[min]){
//                 min = j;
//             }

//         }

//         if(min !== i){ //불필요한 swap 방지 → 성능 최적화
//             let temp = arr[i];
//             arr[i] = arr[min];
//             arr[min] = temp;
//         }
//     }
//     return arr;
// }

// const array3 = [29, 10, 14, 37, 13];
// console.log(JSON.stringify(selectSort(array3)));




// 10.Insertion Sort를 활용하여 주어진 정수 배열을 내림차순으로 정렬하라.
// function insertionSort(arr){
//     let n = arr.length;
//     for(let i = 1; i<n; i++){
//         let key = arr[i];
//         let j=i- 1;
//         while (j>=0 && arr[j] < key) {
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = key;
//     }
//     return arr;

// }

// const array4 =[12,11,13,5,6];
// console.log(JSON.stringify(insertionSort(array4)))




// 11.Selection Sort를 활용하여 정수 배열의 일부 구간(시작 인덱스부터 종료 인덱스까지)만 
// 오름차순으로 정렬하고, 나머지 원소는 그대로 유지하라
// function selectSort(arr, start,end){
//     let n = arr.length;
//     for (let i = start; i < end; i++) {
//         let min = i;
//         for (let j = i+1; j <= end ; j++) {
//             if(arr[j] < arr[min]){
//                 min = j;
//             }

//         }

//         if(min !== i){ //불필요한 swap 방지 → 성능 최적화
//             let temp = arr[i];
//             arr[i] = arr[min];
//             arr[min] = temp;

//         }
//     }
//     return {arr,min1 : arr[0], max1 : arr[n-1]};
// }

// const array3 = [29, 10, 14, 37, 13];
// console.log(JSON.stringify(selectSort(array3,1,4)));
// console.log(selectSort(array3).min1);
// console.log(selectSort(array3).max1);



// 12. Insertion Sort를 활용하여 정수 배열의 주어진 구간(시작 인덱스부터 종료 인덱스까지)만 
// 오름차순으로 정렬한 후 전체 배열을 반환하라.
// function insertionSort(arr,start,end) {
//     let n = arr.length; // 배열의 길이 저장

//     for (let i = start+1; i <= end; i++) { // i는 현재 정렬할 원소의 인덱스 (두 번째 원소부터 시작)
//         let key = arr[i]; // 현재 삽입할 원소를 key에 저장
//         let j = i - 1; // key 앞에 있는 원소들을 비교하기 위한 인덱스

//         // key보다 큰 원소들을 오른쪽으로 한 칸씩 이동
//         while (j >= start && arr[j] > key) { 
//             arr[j + 1] = arr[j]; // 큰 값을 한 칸 오른쪽으로 이동
//             j--; // 왼쪽 원소를 계속 비교하기 위해 j 감소
//         }

//         // key를 알맞은 위치(j+1)에 삽입
//         arr[j + 1] = key;
//     }

//     return arr; // 정렬된 배열 반환
// }

// const array4 = [12, 11, 13, 5, 6]; // 정렬할 배열 선언
// console.log(JSON.stringify(insertionSort(array4,1,3))); // 정렬된 배열 출력



// 13. Bubble Sort를 활용하여 문자열 배열을 사전순(오름차순)으로 정렬하라.
// [입력 예시]
// array = ["banana", "apple", "cherry"]

// function bubbleSort(arr){
//     let n = arr.length;
//     for(let i = 0; i<n-1;i++){
//         for(let j = 0; j<n-i-1; j++){
//             if (arr[j].localeCompare(arr[j+1])>0){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// const array13 = ["banana", "apple", "cherry","aaa","aabd"];
// console.log(JSON.stringify(bubbleSort(array13)));



// 14. Bubble Sort 수행 시, 각 패스 후의 배열 상태를 기록하여 
// 최종 정렬 결과와 단계별 배열을 반환하라.

// function bubbleSort(arr) {
//     let sorted = arr.slice();
//     let stages = [];
//     let n = sorted.length;
//     for (let i = 0; i < n - 1; i++) {
//         let swapped = false;

//         for (let j = 0; j < n - i - 1; j++) {
//             if (sorted[j] > sorted[j + 1]) {
//                 let temp = sorted[j];
//                 sorted[j] = sorted[j + 1];
//                 sorted[j + 1] = temp;

//                 swapped = true;
//             }
//         }
//         if (swapped) stages.push(sorted.slice());
//         else break;
//     }
//     return { stages, sorted };
// }
// // 테스트
// const array14 = [3, 2, 1];
// console.log(JSON.stringify(bubbleSort(array14)));


// 15. Selection Sort를 적용하여 정수 배열을 오름차순으로 정렬하는 동안, 
// 교환(swap) 횟수를 계산하여 함께반환하라.
// function selectionSortWithSwapCount(arr) {
//     let n = arr.length;
//     let swapCount = 0; // 교환 횟수 저장

//     for (let i = 0; i < n - 1; i++) {
//         let minIndex = i;

//         // 최소값 찾기
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }

//         // Swap 수행 (minIndex가 변경된 경우만)
//         if (minIndex !== i) {
//             let temp  = arr[i];
//             arr[i] = arr[minIndex];
//             arr[minIndex] = temp;
//             swapCount++;
//             // 위과 같게 동작
//             // [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; 
//             swapCount++; // 교환 발생 시 카운트 증가
//         }
//     }
//     return { sortedArray: arr, swapCount: swapCount };
// }
// // 입력 배열
// let array = [64, 25, 12, 22, 11];
// let result = selectionSortWithSwapCount(array);

// // 출력
// console.log("정렬된 배열:", result.sortedArray);
// console.log("총 교환 횟수:", result.swapCount);




// 16. Insertion Sort를 활용하여 주어진 정수 배열을 오름차순 정렬할 때, 
// 각 원소의 이동(shift) 횟수를 기록하고 이를 배열로 반환하라. 단,
//  첫 원소의 이동 횟수는 0으로 처리하라.
// function insertionSortWithShiftCounts(arr) {
//     let sorted = arr.slice();
//     let n = sorted.length;
//     let shiftCounts = new Array(n).fill(0);
//     for (let i = 1; i < n; i++) {
//         let key = sorted[i];
//         let count = 0;
//         let j = i - 1;
//         while (j >= 0 && sorted[j] > key) {
//             sorted[j + 1] = sorted[j];
//             count++;
//             j--;
//         }
//         sorted[j + 1] = key;
//         shiftCounts[i] = count;
//     }
//     return { sorted, shiftCounts };
// }
// // 테스트
// // const array16 = [4, 3, 2, 1];
// const array16 = [1,2, 3, 4];
// console.log(JSON.stringify(insertionSortWithShiftCounts(array16)));


// 17.Insertion Sort의 안정성을 확인하기 위하여, 부가 정보(예: id)를 포함하는 객체 배열을
//  value를 기준으로 오름차순 정렬하라. 동일한 value의 경우 원래 순서가 유지되어야 한다
// function stableInsertionSort(arr) {
//     let n = arr.length;

//     for (let i = 1; i < n; i++) {
//         let key = arr[i];  // 현재 정렬할 요소
//         let j = i - 1;

//         // key.value보다 큰 값들은 오른쪽으로 이동
//         while (j >= 0 && arr[j].value > key.value) {
//             arr[j + 1] = arr[j];
//             j--;
//         }

//         // key를 올바른 위치에 삽입
//         arr[j + 1] = key;
//     }

//     return arr;
// }

// //  객체 배열 (id, value)
// let array = [
//     { id: 1, value: 5 },
//     { id: 2, value: 3 },
//     { id: 3, value: 5 },
//     { id: 4, value: 1 }
// ];

// let sortedArray = stableInsertionSort(array);

// // 출력
// console.log(sortedArray);


// 18. 입력 배열의 원본은 변경하지 않고, Bubble Sort를 활용하여 복사본을 정렬한 후
//  정렬된 배열을 반환하라.
// function bubbleSortImmutable(arr) {
//     let sorted = arr.slice();// 원래 내가 쓰던거에서 이거 하나 바뀜
//     let n = sorted.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (sorted[j] > sorted[j + 1]) {
//                 let temp = sorted[j];
//                 sorted[j] = sorted[j + 1];
//                 sorted[j + 1] = temp;
//             }
//         }
//     }
//     return sorted;
// }
// // 테스트
// const array18 = [7, 2, 5, 3];
// console.log(JSON.stringify(bubbleSortImmutable(array18)));

// ex1 Merge Sort는 분할 정복(divide and conquer) 방식의 정렬 알고리즘이다. 
// 배열을 재귀적으로 절반으로분할한 후, 분할된 배열들을 정렬하며 합병(merge)하는
//  과정으로 전체 배열을 정렬한다. 시간 복잡도는 모든 경우에서 O(n log n)을 보장한다.
// function mergeSort(arr) {
//     if (arr.length < 2) return arr; // 기저 조건
//     const mid = Math.floor(arr.length / 2);
//     const left = mergeSort(arr.slice(0, mid));
//     const right = mergeSort(arr.slice(mid));
//     return merge(left, right);
// }
// function merge(left, right) {
//     const sorted = [];
//     let i = 0, j = 0;
//     // 두 배열의 원소를 비교하여 작은 값부터 sorted 에 삽입함
//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             sorted.push(left[i]);
//             i++;
//         } else {
//             sorted.push(right[j]);
//             j++;
//         }
//     }
//     // 남은 원소들을 sorted 에 삽입함
//     while (i < left.length) {
//         sorted.push(left[i]);
//         i++;
//     }
//     while (j < right.length) {
//         sorted.push(right[j]);
//         j++;
//     }
//     return sorted;
// }
// // 사용 예
// const unsortedArray4 = [38, 27, 43, 3, 9, 82, 10];
// console.log("Merge Sort 결과:", mergeSort(unsortedArray4));


// ex2 Quick Sort는 배열에서 기준값(pivot)을 선택하여, 기준보다 작은 값과 큰 값으로 
// 분할한 후 재귀적으로정렬하는 방식이다. 평균적으로 O(n log n)의 시간 복잡도를 가지며,
//  불균형하게 분할될 경우 O(n²)의 최악의 성능을 보일 수 있다.
// function quickSort(arr) {
//     if (arr.length < 2) return arr; // 기저 조건
//     const pivot = arr[Math.floor(arr.length / 2)];
//     const left = [];
//     const right = [];
//     const equal = [];
//     // pivot 을 기준으로 원소들을 구분함
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else if (arr[i] > pivot) {
//             right.push(arr[i]);
//         } else {
//             equal.push(arr[i]);
//         }
//     }
//     // 재귀적으로 정렬 후 병합함
//     return quickSort(left).concat(equal, quickSort(right));
// }
// // 사용 예
// const unsortedArray5 = [10, 7, 8, 9, 1, 5];
// console.log("Quick Sort 결과:", quickSort(unsortedArray5));


// ex3. Radix Sort는 정수 데이터를 자릿수별로 분할하여 정렬을 수행하는 알고리즘이다.
//  각 자리수를 기준으로 여러 번의 반복 정렬을 진행함으로써 전체 배열을 정렬한다.
//  음수 정수의 경우 별도의 처리가 필요하나, 본 예제에서는 양의 정수에 한정한다. 
// 시간 복잡도는 O(nk)이며, k는 숫자의 최대 자릿수이다.
// function getDigit(num, place) {
//     return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
// }
// function digitCount(num) {
//     if (num === 0) return 1;
//     return Math.floor(Math.log10(Math.abs(num))) + 1;
// }
// function mostDigits(nums) {
//     let maxDigits = 0;
//     for (let i = 0; i < nums.length; i++) {
//         maxDigits = Math.max(maxDigits, digitCount(nums[i]));
//     }
//     return maxDigits;
// }
// function radixSort(arr) {
//     const maxDigitCount = mostDigits(arr);
//     for (let k = 0; k < maxDigitCount; k++) {
//         let buckets = Array.from({ length: 10 }, () => []);
//         for (let i = 0; i < arr.length; i++) {
//             let digit = getDigit(arr[i], k);
//             buckets[digit].push(arr[i]);
//         }
//         arr = [].concat(...buckets);
//     }
//     return arr;
// }
// // 사용 예
// const unsortedArray6 = [170, 45, 75, 90, 802, 24, 2, 66];
// console.log("Radix Sort 결과:", radixSort(unsortedArray6));

