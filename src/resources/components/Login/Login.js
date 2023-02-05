import '../../css/Login/Login.css';
import Buttons from '../Buttons/Buton';

const Login = () => {
  const login = () => {};

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
          <label htmlFor='email_login'>Email</label>
          <input
            type='email'
            name='email_login'
            placeholder='someone@something.com'
          />
          <label htmlFor='pass_login'>Password</label>
          <input
            type='password'
            name='pasword_login'
            placeholder='qwe123!@#QWE'
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
