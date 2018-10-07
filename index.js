var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overWriteBestCustomer(string) {
  bestCustomer = string;
}

const leastFavoriteCustomer = 'blah';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'cheese';
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'blah';
  let favoriteCustomer = 'cheese';
}
