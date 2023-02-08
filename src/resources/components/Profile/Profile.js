import '../../css/Profile/Profile.css';
import { useState } from 'react';
import profileController from '../../../app/controllers/ProfileController';

const Profile = ({ avatar, fullname }) => {
  const [openDrop, setOpenDrop] = useState(false);
  const editInfo = () => {
    return profileController.editInfo;
  };
  function logOut() {
    return profileController.logOut();
  }

  return (
    <div className='profile'>
      <div className={'info'}>
        <h3>{fullname}</h3>
        <div
          className={'avatar'}
          onClick={() => {
            setOpenDrop(prevState => !prevState);
          }}
        >
          <img src={avatar} alt={'avatar'} />
        </div>
      </div>
      {openDrop && (
        <div className={'dropdown-menu'}>
          <div
            className={'dropdown-item'}
            id='drop-profile-edit'
            onClick={() => {
              editInfo();
            }}
          >
            Chỉnh sửa thông tin cá nhân
          </div>
          <div
            className={'dropdown-item'}
            id='drop-profile-logout'
            onClick={() => {
              logOut();
            }}
          >
            Đăng xuất
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
