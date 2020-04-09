
export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    QuickSort(animations, array);
    return animations;
  }
  
  // Find a "pivot" element in the array to compare all other
  // elements against and then shift elements before or after
  // pivot depending on their values
  function QuickSort(animations, arr, left = 0, right = arr.length - 1) {
    let len = arr.length,
        index
  
    if(len > 1) {
  
      index = partition(animations, arr, left, right)
  
      animations.push([index,-1]) // push index at 0, -1 means pivot
  
      if(left < index - 1) {
        QuickSort(animations, arr, left, index - 1, animations)
      } 
  
      if(index < right) {
        QuickSort(animations, arr, index, right)
      }
  
    }
  
    return arr
  
  }
  
  function partition(animations, arr, left, right) {
    let middle = Math.floor((right + left) / 2),
        pivot = arr[middle],
        i = left,                 // Start pointer at the first item in the array
        j = right                 // Start pointer at the last item in the array
  
    while(i <= j) {
  
      // Move left pointer to the right until the value at the
      // left is greater than the pivot value
  
  
      while(arr[i] < pivot) {
  
        animations.push([i,-2]) // -2 means we are comparing if the values on the left are less than the pivot
  
        i++
  
      }
  
      // Move right pointer to the left until the value at the
      // right is less than the pivot value
      while(arr[j] > pivot) {
  
        animations.push([j,-3]) // -3 means we are comparing if the values on the right are greater than the pivot
  
  
        j--
      }
  
      // If the left pointer is less than or equal to the 
      // right pointer, then swap values
      if(i <= j) {
  
        animations.push([i,-4]) // -4 means we are comparing i and j 
        animations.push([j,-4]) // --4
  
        let temp = arr[i]
        arr[i] =  arr[j]  // ES6 destructuring swap
        arr[j] = temp
  
  
        animations.push([i,j]) // i, j means we are swapping i and j 
  
        i++
        j--
      }
    }
  
    return i
  
  }
  
  
  