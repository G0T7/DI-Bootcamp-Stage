function removeCertainValues(array) {
    return array.filter(value => {
        return (
            value !== null &&
            value !== 0 &&
            value !== "" &&
            value !== false &&
            value !== undefined &&
            !Number.isNaN(value)
        );
    });
}

const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
const result = removeCertainValues(sampleArray);
console.log(result); // Output: [15, -22, 47]
