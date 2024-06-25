function search_word(str, word) {
    const regex = new RegExp(word, 'g');
    const matches = str.match(regex);
    const count = matches ? matches.length : 0;
    return `'${word}' was found ${count} times.`;
}

console.log(search_word('The quick brown fox', 'fox'));
