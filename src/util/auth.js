class Authentication {
  verifyLogin({ username, password }) {
    const errors = [];
    if (!username) errors.push('Not username');
    if (!password) errors.push('Not password');
    return errors;
  }
  verifyRegister({ fullname, email, username, password, confirmPass }) {
    const errors = [];
    if (!fullname) errors.push('Not fullname');
    if (!email) errors.push('Not email');
    if (!username) errors.push('Not username');
    if (!password) errors.push('Not password');
    if (!confirmPass || password !== confirmPass)
      errors.push('Password not confirmed');
    return errors;
  }
}

export default new Authentication();
