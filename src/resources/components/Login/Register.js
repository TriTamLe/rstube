import { useState } from 'react';
import '../../css/Login/Login.css';
import Buttons from '../Buttons/Buton';
import LoginController from '../../../app/controllers/login.controller';

const Register = () => {
  const [status, setStatus] = useState({
    success: true,
    messages: null,
  });
  const [isFetching, setIsFetching] = useState(false);

  const register = () => {
    const fullname = document.getElementById('fullname_register').value;
    const email = document.getElementById('email_register').value;
    const username = document.getElementById('username_register').value;
    const password = document.getElementById('pass_register').value;
    const confirmPass = document.getElementById('confpass_register').value;

    setStatus({
      success: true,
      messages: null,
    });
    const params = {
      fullname,
      email,
      username,
      password,
      confirmPass,
    };

    LoginController.register(params, setStatus, setIsFetching);
  };

  return (
    <div className='register'>
      <div
        className={
          isFetching ? 'register-frame border-dance' : 'register-frame'
        }
      >
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
          <label htmlFor='fullname_register'>Tên đầy đủ</label>
          <input
            disabled={isFetching}
            type='text'
            name='fullname_register'
            id='fullname_register'
            placeholder='Nguyen Van A'
          />

          {!status.success &&
            status.messages.some(ele => ele === 'Not fullname') && (
              <p className='alert fullname'>Vui lòng nhập tên đầy đủ</p>
            )}

          <label htmlFor='email_login'>Email</label>
          <input
            disabled={isFetching}
            type='email'
            name='email_register'
            id='email_register'
            placeholder='someone@something.com'
            required
          />

          {!status.success &&
            status.messages.some(ele => ele === 'Not email') && (
              <p className='alert email'>Vui lòng nhập email</p>
            )}
          {!status.success &&
            status.messages.some(ele => ele === 'Email had existed!') && (
              <p className='alert email'>Email này đã tồn tại</p>
            )}

          <label htmlFor='username_register'>Tên đăng nhập</label>
          <input
            disabled={isFetching}
            type='text'
            name='username_register'
            id='username_register'
            placeholder='RSTubeUser'
            required
          />

          {!status.success &&
            status.messages.some(ele => ele === 'Not username') && (
              <p className='alert username'>Vui lòng nhập tên đăng nhập</p>
            )}
          {!status.success &&
            status.messages.some(ele => ele === 'Username had existed!') && (
              <p className='alert username'>Tên đăng nhập này đã tồn tại</p>
            )}

          <label htmlFor='pass_register'>Mật khẩu</label>
          <input
            disabled={isFetching}
            type='password'
            name='pass_register'
            id='pass_register'
            placeholder='*********'
            required
          />

          {!status.success &&
            status.messages.some(ele => ele === 'Not password') && (
              <p className='alert password'>Vui lòng nhập mật khẩu</p>
            )}

          <label htmlFor='confpass_register'>Xác nhận mật khẩu</label>
          <input
            disabled={isFetching}
            type='password'
            name='confpass_register'
            id='confpass_register'
            placeholder='*********'
            required
          />

          {!status.success &&
            status.messages.some(ele => ele === 'Password not confirmed') && (
              <p className='alert confirmPass'>Mật khẩu xác nhận không khớp</p>
            )}

          <div className='register_buttons'>
            <Buttons kind='secondary' value='Đăng nhập' link='/login' />
            <Buttons kind='primary' value='Đăng ký' onclick={register} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
