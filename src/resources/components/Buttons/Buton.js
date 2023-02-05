import '../../css/App.css';
import { Link } from 'react-router-dom';

const Buttons = ({ kind, link, value, onclick }) => {
  return (
    <div>
      <a href={link}>
        <button className={`btn btn-` + kind} onClick={onclick}>
          {value}
        </button>
      </a>
    </div>
  );
};

export default Buttons;
