import { serverAPIs } from '../../config/server/Api';
import verify from '../../util/verify';

class LoginController {
  singin(username, password, setStatus, setIsFetching) {
    const verifying = verify.verifyLogin({ username, password });

    if (verifying.length !== 0) {
      console.log(verifying);
      setStatus({
        success: false,
        messages: verifying,
      });
      return;
    }

    const requestOption = {
      method: 'POST',
      headers: serverAPIs.POSTheader,
      body: JSON.stringify({
        username,
        password,
      }),
    };

    console.log('fetching....');
    setIsFetching(true);
    setTimeout(() => {
      fetch(serverAPIs.server + serverAPIs.routes.users.signIn, requestOption)
        .then(response => response.json())
        .then(data => {
          console.log('fetched!');
          if (data.success === false) {
            setStatus({
              success: false,
              messages: [data.message],
            });
            setIsFetching(false);
            return;
          }
          setIsFetching(false);
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
          console.log(data);
          window.location.pathname = '/home';
        })
        .catch(err => {
          console.log('ERROR', err);
          return 'Error!';
        });
    }, 2000);
  }

  register(params, setStatus, setIsFetching) {
    const verifying = verify.verifyRegister(params);
    if (verifying.length !== 0) {
      setStatus({
        success: false,
        messages: verifying,
      });
      return;
    }

    const requestOption = {
      method: 'POST',
      headers: serverAPIs.POSTheader,
      body: JSON.stringify(params),
    };

    console.log('fetching...');
    setIsFetching(true);
    setTimeout(() => {
      fetch(serverAPIs.server + serverAPIs.routes.users.register, requestOption)
        .then(response => response.json())
        .then(data => {
          console.log('fetched!');

          if (data.success === false) {
            setStatus({
              success: false,
              messages: [data.message],
            });
            setIsFetching(false);

            return;
          }
          setIsFetching(false);
          return;
        });
    }, 2000);
  }
}

export default new LoginController();
