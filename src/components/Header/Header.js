import React from "react";
import YoutubeSearchedForIcon from "@material-ui/icons/YoutubeSearchedFor";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useAuthState } from "react-firebase-hooks/auth";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { Avatar } from "@material-ui/core";
import styled from "styled-components";
import { auth } from "../../firebase";

function Header() {
  const [user] = useAuthState(auth);
  
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar onClick={() => auth.signOut()} src={user?.photoURL} alt={user?.displayName} />
        <ScheduleIcon />
      </HeaderLeft>
      <HeaderMiddle>
        <YoutubeSearchedForIcon />
        <input placeholder="Search" />
      </HeaderMiddle>
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
const HeaderContainer = styled.div`
  position: fixed;
  color: white;
  display: flex;
  padding: 10px 0;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: var(--slack-color);
`;
const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  margin-left: 20px;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;
const HeaderMiddle = styled.div`
  display: flex;
  flex: 0.4;
  padding: 0 50px;
  opacity: 1;
  color: grey;
  text-align: center;
  border: 1px solid grey;
  border-radius: 6px;
  > input {
    color: white;
    text-align: center;
    border: none;
    min-width: 30vw;
    outline: 0;
    background-color: transparent;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  flex: 0.3;
  align-items: flex-end;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
