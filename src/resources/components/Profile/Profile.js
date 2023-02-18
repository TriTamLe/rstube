import '../../css/Profile/Profile.css';
import { useEffect, useRef, useState } from 'react';
import profileController from '../../../app/controllers/profile.controller';

const Profile = ({ avatar, fullname }) => {
  const [openDrop, setOpenDrop] = useState(false);
  const dropdown_menu = useRef();

  const editInfo = () => {
    return profileController.editInfo;
  };
  function logOut() {
    return profileController.logOut();
  }

  useEffect(() => {
    const clodeDropdown = e => {
      var path = e.path || (e.composedPath && e.composedPath());
      const bool = path.some(ele => ele === dropdown_menu.current);
      if (bool) {
        setOpenDrop(pre => {
          return pre;
        });
      } else setOpenDrop(false);
    };

    document.body.addEventListener('click', clodeDropdown);
    return () => {
      document.body.removeEventListener('click', clodeDropdown);
    };
  }, []);

  return (
    <div className='profile'>
      <div className={'info'}>
        <h3>{fullname}</h3>
        <div
          className={'avatar'}
          onClick={() => {
            setOpenDrop(prevState => !prevState);
          }}
          ref={dropdown_menu}
        >
          <img src={avatar} alt={'avatar'} />
        </div>
      </div>

      <div className={openDrop ? 'dropdown-menu opened' : 'dropdown-menu'}>
        <div
          className={'dropdown-item'}
          id='drop-profile-edit'
          onClick={() => {
            editInfo();
          }}
        >
          Chỉnh sửa thông tin
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
    </div>
  );
};

export default Profile;
