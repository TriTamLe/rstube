import '../../css/Login/Login.css';
import Buttons from '../Buttons/Buton';

const Register = () => {
  const register = () => {};

  return (
    <div className='register'>
      <div className='register-frame'>
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
            type='text'
            name='fullname_register'
            placeholder='Nguyen Van A'
          />
          <label htmlFor='email_login'>Email</label>
          <input
            type='email'
            name='email_register'
            placeholder='someone@something.com'
            required
          />
          <label htmlFor='username_register'>Tên đăng nhập</label>
          <input
            type='text'
            name='username_register'
            placeholder='RSTubeUser'
            required
          />
          <label htmlFor='pass_register'>Mật khẩu</label>
          <input
            type='password'
            name='pass_register'
            placeholder='qwe123!@#QWE'
            required
          />
          <label htmlFor='confpass_register'>Xác nhận mật khẩu</label>
          <input
            type='password'
            name='confpass_register'
            placeholder='qwe123!@#QWE'
            required
          />
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
