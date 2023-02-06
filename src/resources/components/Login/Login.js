import '../../css/Login/Login.css';
import LoginController from '../../../app/controllers/LoginController';
import Buttons from '../Buttons/Buton';
import { useState } from 'react';

const Login = () => {
  const [status, setStatus] = useState({
    success: true,
    message: 'Đăng nhập thành công',
  });

  const login = () => {
    const username = document.getElementById('username_login').value;
    const password = document.getElementById('password_login').value;
    return LoginController.singin(username, password, setStatus);
  };

  return (
    <div className='login'>
      <div className='login-frame'>
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
          <label htmlFor='password_login'>Mật khẩu</label>
          <input
            type='password'
            name='password_login'
            id='password_login'
            placeholder='qwe123!@#QWE'
            required
          />
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
