import React, {useState} from 'react';
// import { Form } from 'react-router-dom';
import '../styles/InterestCalculator.css';

function InterestCalculator() {
    //Declare state variables to store user input
    const [shoppingTotal, setShoppingTotal] = useState('');
    const [numMonths, setNumMonths] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState(null);
    const [totalPayment, setTotalPayment] = useState(null);


    //Calculate monthly payment and total payment based on shopping total and number of months
    const CalculatePayments = () => {
        //Convert user input to numbers
        const total = Number(shoppingTotal);
        const months = Number(numMonths);

        //Calculate monthly payment and total payment with 20% interest rate
        const monthlyPayment = ((total * 0.2) + total) / months;
        const totalPayment = monthlyPayment * months;

        //Return an obkect with the calculated values
        return { 
            monthlyPayment: monthlyPayment.toFixed(2),
            totalPayment: totalPayment.toFixed(2),
        };
    };

    //Event handler to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        //Calculate payments and store the results in state
        const payments = CalculatePayments();
        setMonthlyPayment(payments.monthlyPayment);
        setTotalPayment(payments.totalPayment);
    };

    return (
        <div className="interest-calculator">
            <h2>Interest Calculator</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor='shopping-total' className='form-label'>Shopping Total:</label>
                    <input 
                        type="number"
                        id="shopping-total"
                        className="form-input"
                        value={shoppingTotal}
                        onChange={(event) => setShoppingTotal(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group ">
                    <label htmlFor="num-months" className='form-label'>Number of Months</label>
                    <input  
                        type="number"
                        id="num-months"
                        className="form-input"
                        value={numMonths}
                        onChange={(event) => setNumMonths(event.target.value)}
                        required
                    />
                </div>
                <button type="submit" className='form-button'>Calculate</button>
            </form>
            {monthlyPayment && totalPayment && (
                <div className="result">
                    <p>Monthly Payment: R{monthlyPayment}</p>
                    <p>Total Payment: R{totalPayment}</p>
                </div>
            )}
        </div>
    );
}

export default InterestCalculator;