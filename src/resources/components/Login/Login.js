import '../../css/Login/Login.css';
import LoginController from '../../../app/controllers/LoginController';
import Buttons from '../Buttons/Buton';
import { useState } from 'react';

const Login = () => {
  const [status, setStatus] = useState({
    success: true,
    messages: null,
  });

  const [isFetching, setIsFetching] = useState(false);

  const login = () => {
    const username = document.getElementById('username_login').value;
    const password = document.getElementById('password_login').value;

    setStatus({
      success: true,
      messages: null,
    });
    LoginController.singin(username, password, setStatus, setIsFetching);
  };

  return (
    <div className='login'>
      <div className={isFetching ? 'login-frame border-dance' : 'login-frame'}>
        <div className='logo'>
          <img
            src='../../../RSTubeLogo.png'
            alt='logo'
            width='120px'
            height='100px'
          />
          <p>RSTube</p>
        </div>
        <div className='form'>
          <label htmlFor='username_login'>Tên đăng nhập</label>
          <input
            type='text'
            name='username_login'
            id='username_login'
            placeholder='RSTubeUser1'
            required
          />
          {!status.success &&
            status.messages.some(ele => ele === 'Not username') && (
              <p className='alert username'>Vui lòng nhập tên đăng nhập</p>
            )}

          {!status.success &&
            status.messages.some(ele => ele === 'Username not existed') && (
              <p className='alert username'>Tên đăng nhập không tồn tại</p>
            )}
          <label htmlFor='password_login'>Mật khẩu</label>
          <input
            type='password'
            name='password_login'
            id='password_login'
            placeholder='...'
            required
          />
          {!status.success &&
            status.messages.some(ele => ele === 'Not password') && (
              <p className='alert password'>Vui lòng nhập mật khẩu</p>
            )}
          {!status.success &&
            status.messages.some(ele => ele === 'Incorrect password') && (
              <p className='alert password'>Mật khẩu không chính xác</p>
            )}

          <div className='login_buttons'>
            <Buttons kind='secondary' value='Đăng ký' link='/register' />
            <Buttons kind='primary' value='Đăng nhập' onclick={login} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
