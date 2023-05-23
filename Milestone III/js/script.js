document.addEventListener('DOMContentLoaded', function () {
    const getStartedButton = document.getElementById('getStartedButton');
    if (getStartedButton) {
        getStartedButton.addEventListener('click', function () {
            window.location.href = 'LoginRegister.html';
        });
    }

    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.addEventListener('click', function () {
            window.location.href = 'Login.html';
        });
    }
});

const users = [
    {
        username: 'perrie',
        password: 'yeganen',
        UserRole: 'banker',
    },
    {
        username: 'shafeei',
        password: 'aboshafa3a',
        UserRole: 'admin',
    },
    {
        username: 'darenren',
        password: 'kickboxer',
        UserRole: 'client',
    },
];

document.addEventListener('DOMContentLoaded', function () {
    const loginButton2 = document.getElementById('loginButton2');

    loginButton2.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Find the user based on entered username and password
        const user = users.find((user) => user.username === username && user.password === password);

        if (user) {
            // Redirect user based on their role
            switch (user.UserRole) {
                case 'banker':
                    window.location.href = 'banker.html';
                    break;
                case 'admin':
                    window.location.href = 'admin.html';
                    break;
                case 'client':
                    window.location.href = 'client.html';
                    break;
                // Add more cases if needed
            }
        } else {
            // Handle invalid login credentials
            alert('Invalid username or password');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const CreditCardButton = document.getElementById('CreditCardButton');
    if (CreditCardButton) {
        CreditCardButton.addEventListener('click', function () {
            window.location.href = 'CreditCard.html';
        });
    }

});

document.addEventListener('DOMContentLoaded', function () {
    const viewBankAccountsButton = document.getElementById('viewBankAccountsButton');
    if (viewBankAccountsButton) {
        viewBankAccountsButton.addEventListener('click', function () {
            window.location.href = 'ViewCurrentBankAccounts.html';
        });
    }

});


document.addEventListener('DOMContentLoaded', function () {
    const CCtransactions = document.getElementById('CCtransactions');
    if (CCtransactions) {
        CCtransactions.addEventListener('click', function () {
            window.location.href = 'CCtransactions.html';
        });
    }

});
document.addEventListener('DOMContentLoaded', function () {
    const transferbutton = document.getElementById('transferbutton');
    if (transferbutton) {
        transferbutton.addEventListener('click', function () {
            window.location.href = 'transfer.html';
        });
    }

});
document.addEventListener('DOMContentLoaded', function () {
    const bills = document.getElementById('billButton');
    if (bills) {
        billButton.addEventListener('click', function () {
            window.location.href = 'billPayments.html';
        });
    }

});
document.addEventListener('DOMContentLoaded', function () {
    const ccbills = document.getElementById('ccBill');
    if (ccbills) {
        ccBill.addEventListener('click', function () {
            window.location.href = 'CCBillsPayments.html';
        });
    }

});
// Add your custom JavaScript code here
document.getElementById('creditCard').addEventListener('change', function() {
    var selectedCard = this.value;
    var amountField = document.getElementById('amount');
    var dueDateField = document.getElementById('dueDate');
    var minimumPaymentField = document.getElementById('minimumPayment');
  
    // Update form fields based on the selected credit card
    if (selectedCard === 'card1') {
      amountField.value = '100.00';
      dueDateField.value = '2023-06-01';
      minimumPaymentField.value = '50.00';
    } else if (selectedCard === 'card2') {
      amountField.value = '200.00';
      dueDateField.value = '2023-06-15';
      minimumPaymentField.value = '75.00';
    } else if (selectedCard === 'card3') {
      amountField.value = '150.00';
      dueDateField.value = '2023-06-30';
      minimumPaymentField.value = '60.00';
    } else {
      amountField.value = '';
      dueDateField.value = '';
      minimumPaymentField.value = '';
    }
  });
  const confirmButton = document.getElementById('pay');
  const confirmationBox = document.getElementById('confirmationBox');
  const confirmYes = document.getElementById('confirmYes');
  const confirmNo = document.getElementById('confirmNo');
  const modalOverlay = document.getElementById('modalOverlay');
  
  confirmButton.addEventListener('click', function() {
    confirmationBox.style.display = 'block';
    modalOverlay.style.display = 'block';
  });
  
  confirmYes.addEventListener('click', function() {
    // Code to execute when confirmed
    confirmationBox.style.display = 'none';
    modalOverlay.style.display = 'none';
  });
  
  confirmNo.addEventListener('click', function() {
    // Code to execute when not confirmed
    confirmationBox.style.display = 'none';
    modalOverlay.style.display = 'none';
  });
  