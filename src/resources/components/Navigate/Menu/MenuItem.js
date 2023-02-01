import AddChannelIcon from '../../Icons/add_icon/AddChannelICon';
import AddNewBoardIcon from '../../Icons/add_icon/AddNewBoardIcon';
import DeleteIcon from '../../Icons/delete_icon/DeleteIcon';
import '../../../css/Navigate/Menu/Menu.css';

function MenuItem(props) {
  const icon = props.icon;

  return (
    <div className='item' id={props.itemId}>
      <div className='itemIcon'>
        {icon === 'delete' ? (
          <DeleteIcon prID={props.itemId} />
        ) : icon === 'add_channel' ? (
          <AddChannelIcon prID={props.itemId} />
        ) : icon === 'add_board' ? (
          <AddNewBoardIcon prID={props.itemId} />
        ) : (
          ''
        )}
      </div>
      <div className='itemTitle'>{props.title}</div>
    </div>
  );
}

export default MenuItem;
