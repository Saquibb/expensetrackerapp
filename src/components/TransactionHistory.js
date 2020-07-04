import React from 'react'

export const TransactionHistory = () => {
    return (
        <div>
            <h3>Tansaction History</h3>
            <ul className="list">
                <li className="plus">
                    project 1 income
                    <span>$500.00</span>
                    <button className="delete-btn">X</button>
                </li>
                <li className="minus">
                    project 1 expense
                    <span>-$200.00</span>
                    <button className="delete-btn">X</button>
                </li>
            </ul>
        </div>
    )
}
