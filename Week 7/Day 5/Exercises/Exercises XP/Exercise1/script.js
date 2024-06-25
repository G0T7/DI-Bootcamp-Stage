// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne();
// The value of 'a' inside funcOne will be 3, as it is reassigned to 3 inside the if block.

// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// If 'a' is declared with const instead of let, an error will occur when trying to reassign 'a' inside the if block.

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree(); // This will display "inside the funcThree function 0" because the value of 'a' is still 0.
funcTwo(); // This will change the value of 'a' to 5.
funcThree(); // This will display "inside the funcThree function 5" because the value of 'a' has been changed to 5.

// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// If 'a' is declared with const instead of let, an error will occur when trying to reassign 'a' inside the funcTwo function.

//#3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour(); // This will set the global variable 'a' to "hello".
funcFive(); // This will display "inside the funcFive function hello" because it accesses the global variable 'a' which was set to "hello" in funcFour.

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

// #4.1 - run in the console:
funcSix(); // This will display "inside the funcSix function test" because 'a' inside funcSix is a local variable with the value "test".

// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// If 'a' is declared with const instead of let, 'a' cannot be reassigned a different value, so 'a' will still be 1 globally and "test" locally inside funcSix.

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`); // This will display "in the if block 5" because 'a' inside the if block is scoped to the block and shadows the outer 'a'.
}
alert(`outside of the if block ${a}`); // This will display "outside of the if block 2" because it refers to the outer 'a'.

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// If 'a' is declared with const instead of let, 'a' cannot be reassigned a different value, but the block-scoped 'a' inside the if block will still shadow the outer 'a', resulting in the same behavior.
