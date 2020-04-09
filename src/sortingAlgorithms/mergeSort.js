export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }








  function bubbleSort(items, animations) {
    var length = items.length;
    //Number of passes
    for (var i = 0; i < length; i++) { 
        //Notice that j < (length - i)
        for (var j = 0; j < (length - i - 1); j++) { 
            //Compare the adjacent positions
            if(items[j] > items[j+1]) {
                //Swap the numbers

                animations.push([items[j], items[j + 1]])

                var tmp = items[j];  //Temporary variable to hold the current number
                items[j] = items[j+1]; //Replace current number with adjacent number
                items[j+1] = tmp; //Replace adjacent number with current number
            }
        }        
    }
  }






export function getBubbleSortAnimations(array) {
  const animations = []
  var arrayLength = array.length
  while (arrayLength > 0) {

      for (let i = 0; i < arrayLength - 1; i++){

          let heightOne = array[i]
          let heightTwo = array[i+1]

          animations.push([i, i + 1]) // PUSH THE TWO THINGS WE ARE LOOKING AT AND TURN THEM RED -- ALWAYS HAPPENS


          if (heightOne > heightTwo){

              animations.push([i, heightTwo]) // CHANGE FIRST HEIGHT 
              animations.push([i+1, heightOne]) // CHANGE SECOND HEIGHT

              array[i] = array[i+1]
              array[i+1] = heightOne 
          } else {
              animations.push([i, heightOne]) // KEEP THEM SAME
              animations.push([i + 1, heightTwo]) // KEEP THEM SAME 

          }


          if (i === arrayLength -2) {
              animations.push([arrayLength-1, arrayLength-1])
          } else { 
              animations.push([0, 0])
          }

      }


      arrayLength --; 

  }
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

export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  QuickSort(animations, array);
  return animations;
}


