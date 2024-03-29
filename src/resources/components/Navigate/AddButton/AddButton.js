import '../../../css/Navigate/AddButton/AddButton.css';
import AddButtonIcon from '../../Icons/add_icon/AddButtonIcon';
import Menu from '../Menu/Menu';
import { useEffect, useState, useRef } from 'react';

function AddButton(props) {
  const [isOpen, setIsOpen] = useState(false);
  const addBtn = useRef();

  useEffect(() => {
    const closeMenu = e => {
      var path = e.path || (e.composedPath && e.composedPath());
      if (path.some(ele => ele === addBtn.current)) {
        if (path[0] === addBtn.current) setIsOpen(false);
        else setIsOpen(prev => !prev);
      } else setIsOpen(false);
    };

    document.body.addEventListener('click', closeMenu);
    return () => {
      document.body.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <div className={'addButton' + (isOpen ? ' active' : '')}>
      <div className='addingMenu'>
        <Menu type='0' />
      </div>
      <br />
      <div className='icon' ref={addBtn}>
        <AddButtonIcon />
      </div>
    </div>
  );
}

export default AddButton;
