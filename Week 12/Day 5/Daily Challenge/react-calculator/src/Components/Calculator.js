import React, { useState } from 'react';
import styles from './Calculator.module.css'; // Import CSS module

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('+');
    const [result, setResult] = useState('');

    const handleCalculate = () => {
        let number1 = parseFloat(num1);
        let number2 = parseFloat(num2);

        if (!isNaN(number1) && !isNaN(number2)) {
            switch (operation) {
                case '+':
                    setResult(number1 + number2);
                    break;
                case '-':
                    setResult(number1 - number2);
                    break;
                case '*':
                    setResult(number1 * number2);
                    break;
                case '/':
                    setResult(number1 / number2);
                    break;
                default:
                    setResult('');
            }
        } else {
            setResult('');
        }
    };

    return (
        <div className={`container ${styles.calculator} mt-5`}>
            <div className="card">
                <h5 className={`card-header bg-primary text-white ${styles['card-header']}`}>React Calculator</h5>
                <div className={`card-body ${styles['card-body']}`}>
                    <div className="row">
                        <div className="col">
                            <input
                                type="number"
                                className="form-control"
                                value={num1}
                                onChange={(e) => setNum1(e.target.value)}
                                placeholder="Enter number 1"
                            />
                        </div>
                        <div className="col">
                            <select
                                className="form-control"
                                value={operation}
                                onChange={(e) => setOperation(e.target.value)}
                            >
                                <option value="+">+</option>
                                <option value="-">-</option>
                                <option value="*">*</option>
                                <option value="/">/</option>
                            </select>
                        </div>
                        <div className="col">
                            <input
                                type="number"
                                className="form-control"
                                value={num2}
                                onChange={(e) => setNum2(e.target.value)}
                                placeholder="Enter number 2"
                            />
                        </div>
                        <div className="col">
                            <button className={`btn btn-primary ${styles['btn-calculate']}`} onClick={handleCalculate}>
                                Calculate
                            </button>
                        </div>
                    </div>
                    {result !== '' && (
                        <div className={styles.result}>
                            <h5>
                                Result: {num1} {operation} {num2} = {result}
                            </h5>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Calculator;
