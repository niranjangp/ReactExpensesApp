import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setShowExpForm(false);
  };

  const [showExpForm, setShowExpForm] = useState(false);
  const showExpFormHandler = () => {
    setShowExpForm(true);
  };

  const handleCancel = (eventName) => {
    if (eventName === "cancel") {
      setShowExpForm(false);
    }
  };

  return (
    <div className="new-expense">
      {showExpForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onHandleCancel={handleCancel}
        />
      ) : (
        <button onClick={showExpFormHandler} name="addNewExpBtn">
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
