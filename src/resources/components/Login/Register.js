import '../../css/Login/Login.css';
import Buttons from '../Buttons/Buton';

const Register = () => {
  const register = () => {};

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
          <label htmlFor='fullname_login'>Fullname</label>
          <input type='text' name='fullname_login' placeholder='Nguyen Van A' />
          <label htmlFor='email_login'>Email</label>
          <input
            type='email'
            name='email_login'
            placeholder='someone@something.com'
          />
          <label htmlFor='username_login'>Username</label>
          <input type='text' name='username_login' placeholder='RSTubeUser' />
          <label htmlFor='pass_login'>Password</label>
          <input
            type='password'
            name='pasword_login'
            placeholder='qwe123!@#QWE'
          />
          <div className='login_buttons'>
            <Buttons kind='secondary' value='Đăng nhập' link='/login' />
            <Buttons kind='primary' value='Đăng ký' onclick={register} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
