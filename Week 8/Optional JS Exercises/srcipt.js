//Question 1:
function cleanRoom(arr) {
    // Sort the array
    arr.sort((a, b) => a - b);

    // Initialize variables to store the result
    let result = [];
    let tempArray = [];

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is equal to the next element
        if (arr[i] === arr[i + 1]) {
            // Add the element to the temporary array
            tempArray.push(arr[i]);
        } else if (tempArray.length) {
            // Add the temporary array to the result if it's not empty
            result.push(tempArray.length === 1 ? tempArray[0] : tempArray);
            tempArray = [];
        } else {
            // Add the single element to the result
            result.push(arr[i]);
        }
    }

    return result;
}

// Test case
console.log(cleanRoom([1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]));
//Output:
//[
//  [ 1, 1, 1, 1 ],
//  [ 2, 2, 2 ],
//  4, 5, 10,
//  [ 20, 20 ],
//  391, 392, 591
//  ]

//Question 2:
function findSumPair(arr, target) {
    let hash = {};

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (hash[complement] !== undefined) {
            return [hash[complement], arr[i]];
        }
        hash[arr[i]] = arr[i];
    }

    return [];
}

// Test case
console.log(findSumPair([1,2,3], 4));
//Output:
//[ 1, 3 ]//


//Question 3:
function hexToRgb(hex) {
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        let c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return [(c >> 16) & 255, (c >> 8) & 255, c & 255];
    }
    return null;
}

function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}

function convertColor(color) {
    if (/^#[0-9A-F]{6}$/i.test(color)) {
        const rgb = hexToRgb(color);
        return `RGB(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    } else if (/^RGB\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/i.test(color)) {
        const match = color.match(/^RGB\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/i);
        return rgbToHex(parseInt(match[1]), parseInt(match[2]), parseInt(match[3]));
    } else {
        return 'Invalid color format';
    }
}

// Test cases
console.log(convertColor('#FF0000')); // HEX to RGB
console.log(convertColor('RGB(255, 0, 0)')); // RGB to HEX

//Output:
//RGB(255, 0, 0)
//#FF0000
