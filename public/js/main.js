/**
 * Get the details of the logged in account
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

/**
 * Handles signing out the account
 */
function handleSignout() {
  // Expire the cookie
  document.cookie = 'account=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

  // Redirect to sign in page
  window.location = '/signin.html';
}
