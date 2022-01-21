
const mergesort = (array, position, arraySteps, colorSteps) => {
    mergesortHelper(array, arraySteps, colorSteps);
    colorSteps[colorSteps.length - 1] = new Array(array.length).fill(2);
};

const mergesortHelper = (array, arraySteps, colorSteps) =>{
    if(array.length <= 1) return;
    let colorKey = colorSteps[colorSteps.length - 1].slice();
    let middle = array.length / 2;
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);
    arraySteps.push(array.slice());
    colorKey[middle] = 3;
    colorSteps.push(colorKey.slice());
    colorKey[middle] = 0;
    // mergesortHelper(left, arraySteps, colorSteps);
    return merge(mergesortHelper(left, arraySteps, colorSteps), mergesortHelper(right, arraySteps, colorSteps), arraySteps, colorKey, colorSteps);
};

const merge = (left, right, arraySteps, colorKey, colorSteps) =>{
    let result = new Array(left.length + right.length);
    let i = 0, j = 0, k = 0;
    while(i < left.length && j < right.length) {
        if(left[i] <= right[j]) {
            result[k++] = left[i++];
        }
        else {
            result[k++] = right[j++];
        }
    }
    while(i < left.length) {
        result[k++] = left[i++];
    }
    while(j < right.length) {
        result[k++] = right[j++];
    }
    arraySteps.push(left.slice());
    colorSteps.push(colorKey.slice());
    return result;
};
export default mergesort;