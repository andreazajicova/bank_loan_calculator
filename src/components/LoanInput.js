import React from 'react';
import './stylesheet/LoanInput.css'

export default function LoanInput({ 
    setInterest,
    saveLoanAmount,
    currentInterest,
    saveYears,
    calculatedLoanResults,
    
}) {


    return (
        <div className="Dashboard__wrapper">
            <div className="Dashboard__calculator">
                <form className="Dashboard__form">
                    <div className="Dashboard__select">
                        <p>Select a type of loan: </p>
                            <select className="Dashboard__value" onChange={setInterest} id="select_id" defaultValue="Select">
                                <option value="select">Select</option>
                                <option value="house">House</option>
                                <option value="car">Car</option>
                                <option value="spending">Spending</option>
                                <option value="other">Other</option>
                            </select>   
                    </div>

                    <div className="Dashboard__input">
                        <p>Loan amount:  </p>
                        <input type="number" min="10000" max="10000000" placeholder="Loan amount" onChange={saveLoanAmount}/>
                        <p> kr</p>
                    </div>

                    <div className="Dashboard__interest">
                        <p>Interest: {currentInterest} %</p>
                    </div>

                    <div className="Dashboard__payback">
                        <p>Payback time:  </p>
                        <input data-testid="years" type="number" min="1" placeholder="Number of years" onChange={saveYears}/>
                        <p> years</p>
                    </div>

                    <button data-testid="submit" className="Dashboard__button" type="submit" onClick={calculatedLoanResults}>
                        Calculate
                    </button>
                </form>
            </div>  
        </div>
    )
}
