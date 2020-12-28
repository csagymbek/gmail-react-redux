import "../styles/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase";

export default function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch(selectUser);

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout({}));
    });
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail_Icon.svg"
          alt="Gmail"
        />
        <h2>Gmail</h2>
      </div>
      <div className="header__mid">
        <SearchIcon />
        <input type="text" placeholder="Search" />
        <ArrowDropDownIcon className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar src={user?.photoUrl} onClick={signOut} />
      </div>
    </div>
  );
}
