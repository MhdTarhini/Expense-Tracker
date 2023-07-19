function addToExpenseList(text, amount) {
  return `<li>
    <span> ${text}</span>
    <span> ${amount}</span>
    <button class="delete">DELETE<button>
    </li>`;
}

$(document).ready(function () {
  let inputName = $("#expense-name").val();
  let inputAmount = $("#expense-amount").val();
  let expenseList = $(".expense-list");
});
