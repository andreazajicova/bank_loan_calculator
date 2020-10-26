import React, { useState } from 'react';
import Header from './components/Header';
import LoanInput from './components/LoanInput';
import LoanOutput from './components/LoanOutput';
import './App.css';

const App = () => {

  const [submitClick, setSubmitClick] = useState(false);
  const [currentInterest, setCurrentInterest] = useState(3.5);
  const [carLoanInterest, setCarLoanInterest] = useState(3.5);
  const [houseLoanInterest, setHouseLoanInterest] = useState(3.5);
  const [spendingLoanInterest, setSpendingLoanInterest] = useState(1);
  const [otherLoanInterest, setOtherLoanInterest] = useState(3.5);
  const [loanAmount, setLoanAmount] = useState(0);
  const [years, setYears] = useState(0);
  const [monthlyInterests, setMonthlyInterests] = useState([]);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
    
  const saveLoanAmount = (event) => {
    const loan = +(event.target.value);
    if (loan > 10000000) {
      alert('The maximum possible loan amount is 10000000 kr.')
    } 
    setLoanAmount(loan);
  }

  const saveYears = (event) => {
    event.preventDefault();
    let years = +(event.target.value);
    if (years > 50) {
      alert('Paybacktime must be maximum 50 years.');
    }
    setYears(years);
  }

  const calculatedLoanResults = (e) => {
    e.preventDefault();
    setSubmitClick(true);
    let array = [];
    const months = years * 12;
    const monthlyPayment = Math.round((loanAmount / months) * 100) / 100;
    let balance = loanAmount - monthlyPayment;
    const firstMonhtlyInterest = Math.round((((loanAmount / 100) * currentInterest) / 12) * 100) / 100;
    array.push(firstMonhtlyInterest);
    setMonthlyPayment(monthlyPayment);

    if(balance && balance > monthlyPayment) {
      for(let i = 0; i < months; i++) {
        const yearlyInterest = Math.round((((balance / 100) * currentInterest)) * 100) / 100;
        const monthlyInterest = Math.round((yearlyInterest / 12) * 100) / 100;
        balance -= monthlyPayment;
        console.log(monthlyInterest);
        array.push(monthlyInterest);
        setMonthlyInterests(array);
        
      }
    }     
  }
  
  
  const setInterest = () => {
    const type = document.getElementById("select_id").value;
    if (type === 'house') {
      setCurrentInterest(houseLoanInterest);
    } else if (type === 'car') {
      setCurrentInterest(carLoanInterest)
    } else if (type === 'spending') {
      setCurrentInterest(spendingLoanInterest);
    } else {
      setCurrentInterest(otherLoanInterest);
    }
  }

  return (
    <div className="App">
      
        <Header />
      
        <LoanInput 
          setInterest={setInterest}
          saveLoanAmount={saveLoanAmount}
          currentInterest={currentInterest}
          saveYears={saveYears}
          calculatedLoanResults={calculatedLoanResults}
        />

      { submitClick ? 
        (<LoanOutput 
          years={years}
          monthlyInterests={monthlyInterests}
          monthlyPayment={monthlyPayment}
          currentInterest={currentInterest}
        />
        ) : (
          ''
        )
      }
    </div>
  );
}

export default App;
