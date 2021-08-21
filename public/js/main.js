/**
 * Get the details of the signed in account
 */
function getSignedInAccount() {
  let account;

  if (document.cookie !== '') {
    // Find the cookie
    const regex = /account=(.[^;]*)/gi;
    const match = regex.exec(document.cookie);
    // Parse the value
    account = JSON.parse(decodeURIComponent(match[1]));
  }

  return account;
}
// Store globally
window.getSignedInAccount = getSignedInAccount;

/**
 * Handles signing out the account
 */
function handleSignout() {
  // Expire the cookie
  document.cookie = 'account=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

  // Redirect to sign in page
  window.location = '/signin.html';
}

/**
 * Hide or show signed in account
 */
function toggleSignedInAccount() {
  // Get the signed in account
  const account = getSignedInAccount();

  // Elements
  const currentAccount = document.getElementById('currentAccount');
  const accountOptions = document.getElementById('accountOptions');

  // Check if an account is signed in
  if (account) {
    // Set the account details
    currentAccount.querySelector('img').src = account.image_url || 'https://dummyimage.com/128x128';
    currentAccount.querySelector('h4').textContent = `${account.first_name || ''} ${account.last_name || ''}`;
    currentAccount.querySelector('p').textContent = account.email || '';
    if (accountOptions) {
      // Hide sign in/sign out options
      accountOptions.classList.add('hidden');
    }
    // Show account details
    currentAccount.classList.remove('hidden');
  }
}
