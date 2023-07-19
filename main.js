function ExpenseListItem(text, amount) {
  return `<li>
    <p>${text}</p>
    <p class="item-amount">${amount}</p>$
    <button class="delete-expense">DELETE</button>
    </li>`;
}
let total_price = 0;
function AddToExpenseList() {
  let input_name = $("#expense-name");
  let input_amount = $("#expense-amount");
  const expense_list = $(".expense-list");

  if ((expense_list.lenght = 0)) {
    expense_list.append(expenseItem);
  }
  if (input_name.val().trim() === "") {
    input_name.addClass("not-valid");
    return;
  } else {
    input_name.removeClass("not-valid");
  }
  if (input_amount.val().trim() === "" || isNaN(input_amount.val())) {
    input_amount.addClass("not-valid");
    return;
  } else {
    input_amount.removeClass("not-valid");
  }
  const expense_item = $(ExpenseListItem(input_name.val(), input_amount.val()));

  // totalPrice = parseInt($(".total-amount").text());
  total_price += parseInt(input_amount.val());
  $(".total-amount").text(total_price);

  expense_item.find(".delete-expense").click(function () {
    expense_item.remove();
    let item_price = parseInt(expense_item.find(".item-amount").text());

    total_price -= item_price;
    $(".total-amount").text(total_price);
    return total_price;
  });

  // $(".total-amount").text = totalPrice;
  expense_list.append(expense_item);
  input_name.val("");
  input_amount.val("");
}

$(document).ready(function () {
  const add_button = $(".add-expense");

  add_button.click(AddToExpenseList);
});
