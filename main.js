function addToExpenseList(text, amount) {
  return `<ul class="expense-item">
    <li> ${text}</li>
    <li> ${amount}</li>
    <li> <button class="delete">DELETE<button></li>
    </ul> `;
}

$(document).ready(function () {
  let inputName = $("#expense-name").val();
});
