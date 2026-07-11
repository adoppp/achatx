export const firebaseErrorMap: Record<string, string> = {
    // Auth general
    'auth/invalid-credential': 'Invalid credentials',
    'auth/internal-error': 'Internal authentication error',
    'auth/network-request-failed': 'Network error. Check your connection',
    'auth/too-many-requests': 'Too many attempts. Try again later',
    'auth/user-token-expired': 'Session expired. Please sign in again',
    'auth/web-storage-unsupported': 'Browser storage is not supported',
    'auth/app-deleted': 'Application configuration error',
    'auth/app-not-authorized': 'Application is not authorized',
    'auth/argument-error': 'Invalid request arguments',
    'auth/invalid-api-key': 'Invalid API key',
    'auth/operation-not-allowed': 'Operation is not allowed',

    // Email / password
    'auth/email-already-in-use': 'Email is already in use',
    'auth/invalid-email': 'Invalid email address',
    'auth/user-disabled': 'This account has been disabled',
    'auth/user-not-found': 'User not found',
    'auth/wrong-password': 'Incorrect password',
    'auth/weak-password': 'Password is too weak',
    'auth/missing-password': 'Password is required',

    // Account
    'auth/requires-recent-login': 'Please sign in again to continue',
    'auth/account-exists-with-different-credential':
        'Account already exists with different sign-in method',
    'auth/credential-already-in-use': 'Credential is already associated with another account',

    // Verification
    'auth/expired-action-code': 'Action code has expired',
    'auth/invalid-action-code': 'Invalid action code',
    'auth/missing-action-code': 'Missing action code',

    // Popup / OAuth
    'auth/popup-blocked': 'Popup was blocked by the browser',
    'auth/popup-closed-by-user': 'Popup was closed before completing sign in',
    'auth/cancelled-popup-request': 'Popup request was cancelled',

    // Phone auth
    'auth/invalid-phone-number': 'Invalid phone number',
    'auth/missing-phone-number': 'Phone number is required',
    'auth/quota-exceeded': 'SMS quota exceeded',
    'auth/code-expired': 'Verification code expired',
    'auth/invalid-verification-code': 'Invalid verification code',
    'auth/invalid-verification-id': 'Invalid verification ID',

    // Multi-factor
    'auth/multi-factor-auth-required': 'Multi-factor authentication required',
    'auth/maximum-second-factor-count-exceeded': 'Maximum second factor count exceeded',

    // Provider
    'auth/provider-already-linked': 'Provider already linked',
    'auth/no-such-provider': 'Provider not found',

    // Token / session
    'auth/id-token-expired': 'Session expired',
    'auth/id-token-revoked': 'Session revoked',

    // Default
    default: 'Unexpected error',
};
