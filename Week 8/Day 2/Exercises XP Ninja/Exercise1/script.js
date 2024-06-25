
const mergeWords = (string) => (nextString) => {
  if (nextString === undefined) {
      return string;
  } else {
      return mergeWords(string + ' ' + nextString);
  }
};

mergeWords('There')('is')('no')('spoon.')();

//'There is no spoon.'//