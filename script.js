class Budget {
  constructor() {
    //empty arrays
    this.incomes = [];
    this.expenses = [];
    this.totalBudget = 0; // no budget before inputs so start at zero

    //storing user descriptions in empty arrays
    this.incomeDescriptions = [];
    this.expenseDescriptions = [];
  }
  //Getters
  getBudget() {
    return this.totalBudget;
  }

  getExpenses() {
    return this.expenses;
  }

  getIncome() {
    return this.incomes;
  }
  //possible function to calculate recomended savings
  getSavings() {
    let savings = this.incomes * 0.2;
    return savings;
  }
  getIncomeDescription() {
    return this.incomeDescriptions;
  }
  getExpenseDescription() {
    return this.expenseDescriptions;
  }
  //setters
  addIncome(income, description) {
    let incomeNum = parseInt(income);
    this.incomes.push(incomeNum);
    this.incomeDescriptions.push(description);
    this.calculateBudget();
    // this.totalBudget += incomeNum;
  }
  addExpenses(expense, description) {
    let expenseNum = parseInt(expense);
    this.expenses.push(expenseNum);
    this.expenseDescriptions.push(description);
    this.calculateBudget();
    // this.totalBudget -= expenseNum;
    // console.log(this.totalBudget);
  }

  calculateBudget() {
    let totalIncome = 0;
    let totalExpenses = 0;

    for (let income of this.incomes) {
      totalIncome += income;
    }

    for (let expense of this.expenses) {
      totalExpenses += expense;
    }
    this.totalBudget = totalIncome - totalExpenses;
    // console.log(totalIncome);
    // console.log(totalExpenses);
    // console.log(totalIncome - totalExpenses);
    return this.totalBudget;
  }

  showIncome() {
    let totalIncome = 0;
    let totalExpenses = 0;

    for (let income of this.incomes) {
      totalIncome += income;
    }
    this.totalBudget = totalIncome - totalExpenses;
    return this.totalBudget;
  }
}

const person1 = new Budget();

//Test cases

// person1.addIncome(2000);
// person1.addIncome(300);
// person1.addIncome(200);
// person1.addExpenses(500);
// person1.addExpenses(30);

// console.log(person1.incomes);
// console.log(person1.getBudget());
function addUserIncome(event) {
  event.preventDefault();
  const incomeInput = document.getElementById("income").value;
  const incomeDescription = document.getElementById("incomeDescription").value;
  const showIncome = `${incomeDescription} : $${incomeInput} <br>`;

  person1.addIncome(incomeInput, incomeDescription);
  document.getElementById("incomeView").innerHTML += showIncome;
  document.getElementById("budgetOutput").innerHTML = "$" + person1.totalBudget;
}

// function addIncomeButton(event) {

// }
function addUserExpenses(event) {
  event.preventDefault();
  const expenseInput = document.getElementById("expenses").value;
  const expenseDescription =
    document.getElementById("expenseDescription").value;
  const showExpense = `${expenseDescription} : $${expenseInput} <br>`;

  person1.addExpenses(expenseInput, expenseDescription);
  document.getElementById("expenseView").innerHTML += showExpense;
  document.getElementById("budgetOutput").innerHTML = "$" + person1.totalBudget;
}
