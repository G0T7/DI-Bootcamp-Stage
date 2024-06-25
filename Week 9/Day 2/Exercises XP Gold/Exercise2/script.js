function keysAndValues(obj) {
    const keys = Object.keys(obj).sort();
    const values = keys.map(key => obj[key]);
    return [keys, values];
  }
  
  console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
  console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
  console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));

//Output:
//[["a", "b", "c"], [1, 2, 3]]//
//[["a", "b", "c"], ["Apple", "Microsoft", "Google"]]//
//[["key1", "key2", "key3"], [true, false, undefined]]//
