import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input  type="text" 
                            id="description" 
                            placeholder="Details of transaction"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input  type="Number"
                            id="transactionamount"
                            placeholder="Enter transaction amount"
                    />
                </div>
                <button className="btn">
                        Add Transaction
                </button>
           </form>
        </div>
    )
}
