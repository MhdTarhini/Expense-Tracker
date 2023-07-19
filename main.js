function ExpenseListItem(text, amount) {
  return `<li>
    <p>name: ${text}</p>
    <p> anmount : ${amount}</p>
    <button class="delete-expense">DELETE</button>
    </li>`;
}

function AddToExpenseList() {
  let inputName = $("#expense-name");
  let inputAmount = $("#expense-amount");
  const expenseList = $(".expense-list");

  if ((expenseList.lenght = 0)) {
    expenseList.append(expenseItem);
  }
  if (inputName.val().trim() === "") {
    inputName.css("border-color", "red");
    return;
  } else if (inputAmount.val().trim() === "") {
    inputAmount.css("border-color", "red");
    return;
  }
  const expenseItem = $(ExpenseListItem(inputName.val(), inputAmount.val()));
  $(".total-amount").text += inputAmount.val;
  expenseItem.find(".delete-expense").click(function () {
    expenseItem.remove();
  });

  expenseList.append(expenseItem);
  inputName.val("");
  inputAmount.val("");
}

$(document).ready(function () {
  const addButton = $(".add-expense");

  addButton.click(AddToExpenseList);
});
