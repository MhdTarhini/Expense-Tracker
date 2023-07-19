function ExpenseListItem(text, amount) {
  return `<li>
    <span> ${text}</span>
    <span> ${amount}</span>
    <button class="delete-expense">DELETE<button>
    </li>`;
}

function AddToExpenseList() {
  let inputName = $("#expense-name");
  let inputAmount = $("#expense-amount");
  const expenseList = $(".expense-list");

  if (inputName.val().trim() === "") {
    inputName.css("border-color", "red");
    return;
    return;
  } else if (inputAmount.val().trim() === "") {
    inputAmount.css("border-color", "red");
    return;
  }
  const expenseItem = $(ExpenseListItem(inputName.val(), inputAmount.val()));

  expenseItem.find(".delete-expense").click(function () {
    expenseItem.remove();
  });

  expenseList.append(expenseItem);
  inputName.val("");
}

$(document).ready(function () {
  const addButton = $(".add-expense");

  addButton.click(AddToExpenseList);
});
