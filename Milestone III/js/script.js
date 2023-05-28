document.addEventListener('DOMContentLoaded', function () {
    const getStartedButton = document.getElementById('getStartedButton');
    if (getStartedButton) {
      getStartedButton.addEventListener('click', function () {
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
    const loginButton = document.getElementById('loginButton');
  
    loginButton.addEventListener('click', function (event) {
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
  
  document.addEventListener('DOMContentLoaded', function () {
    const homeButton = document.getElementById('home');
    if (homeButton) {
      homeButton.addEventListener('click', function () {
        window.location.href = 'client.html';
      });
    }
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const reportButton = document.getElementById('report');
    if (reportButton) {
      reportButton.addEventListener('click', function () {
        window.location.href = 'Report.html';
      });
    }
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const redeemButtons = document.getElementsByClassName('redeem-points-button');
  
    // Add event listeners to all redeem buttons
    for (let i = 0; i < redeemButtons.length; i++) {
      redeemButtons[i].addEventListener('click', function () {
        const pointsCell = this.parentNode.parentNode.querySelector('.points');
        const currentPoints = parseInt(pointsCell.textContent);
        const pointsInput = this.parentNode.querySelector('.redeem-points-input').value;
        const pointsToRedeem = parseInt(pointsInput);
  
        if (isNaN(pointsToRedeem) || pointsToRedeem < 0 || pointsToRedeem > currentPoints) {
          alert('Invalid number of points');
        } else {
          const newPoints = currentPoints - pointsToRedeem;
          pointsCell.textContent = newPoints;
        }
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const viewBankAccountsButton = document.getElementById('loansButton');
    if (viewBankAccountsButton) {
        viewBankAccountsButton.addEventListener('click', function () {
            window.location.href = 'loans.html';
        });
    }

});
  
  document.addEventListener('DOMContentLoaded', function () {
    const getStartedButton = document.getElementById('viewDetailsButton');
    if (getStartedButton) {
        getStartedButton.addEventListener('click', function () {
            window.location.href = 'viewLoanDetails.html';
        });
    }

});


    const getStartedButton = document.getElementById('openBankAccount');
    if (openBankAccount) {
      openBankAccount.addEventListener('click', function () {
        window.location.href = 'openBankAcc.html';
      });
    }

  document.getElementById('openAccountForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get selected account type and currency
    var accountType = document.getElementById('accountType').value;
    var currency = document.getElementById('currency').value;
  
    // Check if account type and currency are selected
    if (accountType === '' || currency === '') {
      alert('Please choose a bank account type and currency.');
      return; // Stop further execution
    }
  
    // Perform any desired actions with the selected values
    console.log('Selected Account Type:', accountType);
    console.log('Selected Currency:', currency);
  
    // Clear form fields (optional)
    document.getElementById('accountType').value = '';
    document.getElementById('currency').value = '';
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const viewNotifsButton = document.getElementById('reminders');
    if (viewNotifsButton) {
        viewNotifsButton.addEventListener('click', function() {
            window.location.href = 'reminders.html';
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
  const viewNotifsButton = document.getElementById('notifs');
  if (viewNotifsButton) {
      viewNotifsButton.addEventListener('click', function() {
          window.location.href = 'notifs.html';
      });
  }
});
