import React,{useState} from "react";
// import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { AiFillVideoCamera } from "@react-icons/all-files/ai/AiFillVideoCamera";
import { IoMdNotifications } from "@react-icons/all-files/io/IoMdNotifications";
// import { BiUserCircle } from "@react-icons/all-files/bi/BiUserCircle";
import './Header.css';
import { Link } from 'react-router-dom';
import ytlogo from "../../assets/youtube.svg";
import Avatar from 'react-avatar';


function Header() {
  const [inputSearch, setInputSearch] = useState('');
  return (
    <div className="header">
      <div className="header__left">
      <Link to='/'>
          <img src={ytlogo} alt="" className='header__logo' />
        </Link>
      </div>

      <div className="header__center">
      <input type="text" onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} />
        <Link to={`/search/${inputSearch}`}>
        <AiOutlineSearch className="header__searchbutton" />
        </Link>
      </div>

      <div className="header__right">
        <AiFillVideoCamera className="header__icon" />
        <IoMdNotifications className="header__icon" />
        <Avatar src='https://yt3.ggpht.com/tTODz_H3ya90kSWL78mMiQ8uevK8a2OvYpe7GR7s21Ad4TxZif4LeCl1U0siylWI0wVMCy4ECg=s88-c-k-c0x00ffffff-no-rj-mo' round={true} size={30} />      </div>
    </div>
  );
}
export default Header;
