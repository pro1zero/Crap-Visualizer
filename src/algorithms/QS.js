import { swap } from "./helpers";

// import {swap} from './helpers';
const quicksort = (array, position, arraySteps, colorSteps) => {
    let colorKey = colorSteps[colorSteps.length - 1].slice();
    quickSortHelper(0, array.length - 1, array, arraySteps, colorSteps, colorKey);
    colorSteps[colorSteps.length - 1] = new Array(array.length).fill(2);
};

const quickSortHelper = (start, end, array, arraySteps, colorSteps, colorKey) => {
    if(start >= end) return;
    arraySteps.push(array.slice());
    let pivot = start;
    let left = pivot + 1;
    let right = end;
    colorKey[pivot] = 3;
    colorKey[left] = 1;
    colorKey[right] = 1;
    colorSteps.push(colorKey.slice());
    while(right >= left){
        if(array[left] > array[pivot] && array[right] < array[pivot]){
            swap(array, left, right);
        }
        if(array[left] <= array[pivot]){
            left += 1;
            colorKey[left - 1] = 0;
            colorKey[left] = 1;
        }
        if(array[right] >= array[pivot]){
            right -= 1;
            colorKey[right + 1] = 0;
            colorKey[right] = 1;
        }
        arraySteps.push(array.slice());
        colorSteps.push(colorKey.slice());
    }
    colorKey[left] = 0;
    colorKey[right] = 0;
    colorKey[pivot] = 2;
    swap(array, right, pivot);
    arraySteps.push(array.slice());
    colorSteps.push(colorKey.slice());
    quickSortHelper(start, right - 1, array, arraySteps, colorSteps, colorKey);
    quickSortHelper(right + 1, end, array, arraySteps, colorSteps, colorKey);
};

export default quicksort;