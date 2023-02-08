import "../../css/Profile/Profile.css";
import {useState} from "react";

const Profile = ({avatar, fullname
}) =>{

    const [openDrop, setOpenDrop] = useState(false);
    const editInfo = () =>{

    }
    const logOut = () =>{

    }

    return(
        <div className="profile">
            <div className={"info"}>
                <h3>{fullname}</h3>
                <div className={"avatar"} onClick={()=>{setOpenDrop(prevState => !prevState)}}>
                    <img src={avatar} alt={"avatar"}/>
                </div>
            </div>
            {openDrop&&<div className={"dropdown-menu"}>
                <div className={"dropdown-item"} id={"drop-profile-edit"} onClick={editInfo}>Chỉnh sửa thông tin cá nhân</div>
                <div className={"dropdown-item"} id={"drop-profile-logout"} onClick={logOut}>Đăng xuất</div>
            </div>}
        </div>
    )
}

export  default  Profile;