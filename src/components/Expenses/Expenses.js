import React, { useState } from "react";
import "./ExpensesList.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
  const [selectYear, setSelectYear] = useState("2020");

  const carrySelectedYearCDH = (selectedYear) => {
    setSelectYear(selectedYear);
  };

  const filterExp = props.items.filter((each) => {
    return each.date.getFullYear().toString() === selectYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectVal={selectYear}
          onReceiveSelect={carrySelectedYearCDH}
        />
        <ExpensesChart expenses={filterExp}/>
        {/*ExpensesList cmp start*/}
        <ExpensesList items={filterExp} />
        {/*ExpensesList cmp End*/}
      </Card>
    </div>
  );
};

export default Expenses;
