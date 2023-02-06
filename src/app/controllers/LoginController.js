import { serverAPIs } from '../../config/server/Api';
import verify from '../../util/verify';

class LoginController {
  singin(username, password, setStatus) {
    const verifying = verify.verifyLogin({ username, password });
    if (verifying !== 'verified!') return verifying;

    const requestOption = {
      method: 'POST',
      headers: serverAPIs.POSTheader,
      body: JSON.stringify({
        username,
        password,
      }),
    };

    console.log('fetching....');
    fetch(serverAPIs.server + serverAPIs.routes.users.signIn, requestOption)
      .then(response => response.json())
      .then(data => {
        console.log('fetched!');
        if (data.success === 'false') {
          setStatus({
            success: false,
            message: data.message,
          });
          console.log(data);
          return;
        }
        localStorage.setItem('token', data.token);
        console.log(data);
        window.location.pathname = '/home';
      })
      .catch(err => {
        console.log('ERROR', err);
        return 'Error!';
      });
  }
}

export default new LoginController();
