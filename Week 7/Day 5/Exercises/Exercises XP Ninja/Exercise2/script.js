function string_chop(str, chunkLength) {
    const chunks = [];
    for (let i = 0; i < str.length; i += chunkLength) {
        chunks.push(str.slice(i, i + chunkLength));
    }
    return chunks;
}

console.log(string_chop('developers', 2));
