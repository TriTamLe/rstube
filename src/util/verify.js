class Verify {
  verifyLogin({ username, password }) {
    if (!username && !password) return 'No Input';
    if (!username) return 'Not Username';
    if (!password) return 'Not Password';
    return 'verified!';
  }
  verifyRegister({ email, username, password, confirmPass }) {
    if (!email) return 'Not email';
    if (!username) return 'Not username';
    if (!password) return 'Not password';
    if (password !== confirmPass) return 'Password not confirmed';
    return 'verified!';
  }
}

export default new Verify();
