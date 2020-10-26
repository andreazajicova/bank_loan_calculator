import React from 'react';
import './stylesheet/Header.css';

export default function Header() {
    const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
    const today = new Date();
    return (
        <div className="App__header">
            <div className="App__date">
                {today.toLocaleDateString(undefined, options)}
            </div>

            <h1>Loan Calculator</h1>
        </div>
    )
}

