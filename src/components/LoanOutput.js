import React from 'react';
import { v4 as uuid_v4 } from "uuid";

export default function LoanOutput({ 
    years,
    currentInterest,
    monthlyPayment,
    monthlyInterests

}) {

    return (
        <div className="Loan__wrapper">
            <p>Your payback time is: {years} year(s).</p>
            <p>With {currentInterest} % yearly interest the payback of your loan looks like following: </p>
            
            <div>
                <p>Your fixed payment every month: <strong>{monthlyPayment}</strong></p>
            </div>

            <div>
                <p>Your interest month by month:</p>
                { monthlyInterests && monthlyInterests.map(interest => {
                    return (
                        <div key={uuid_v4()}>
                            <strong> {interest} kr</strong>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
