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
  document.addEventListener('DOMContentLoaded', function () {
    const util = document.getElementById('utility');
    if (util) {
        util.addEventListener('click', function () {
            window.location.href = 'utilityBills.html';
        });
    }

});
document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('home');
    if (homeButton) {
      homeButton.addEventListener('click', function() {
        window.location.href = 'client.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    const reportButton = document.getElementById('report');
    if (reportButton) {
      reportButton.addEventListener('click', function() {
        window.location.href = 'Report.html';
      });
    }
  });