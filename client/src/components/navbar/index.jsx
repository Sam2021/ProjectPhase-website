import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Logo } from "../logo";
import { Marginer } from "../marginer";

import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import axios from 'axios'

const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BrandContainer = styled.div``;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const AnchorLink = styled(Link)`
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: contrast(0.6);
  }
`;
const LoginButton = styled(Button)`
  background-color: transparent;
  border: none;

  &:hover {
    background-color: transparent;
    border: none;
    color: rgb(212, 212, 212);
  }
`;

function Navbar(props) {
  const auth = useSelector(state => state.auth)

    const {user, isLogged} = auth


    const handleLogout = async () => {
        try {
            await axios.get('/user/logout')
            localStorage.removeItem('firstLogin')
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
    }

    const userLink = () => {
        return(
          <NavbarContainer>
            <Marginer direction="horizontal" margin={20} />
            <AnchorLink to="/profile"> </AnchorLink>
            <AnchorLink to="/profile"> </AnchorLink>
            <AnchorLink to="/profile"> </AnchorLink>
            <AnchorLink to="/profile"> </AnchorLink>
            <AnchorLink to="/profile">{user.name} </AnchorLink>
            <Marginer direction="horizontal" margin={8} />
            <AnchorLink to="/"onClick={handleLogout}><Button size={1}>Logout</Button></AnchorLink>

          </NavbarContainer>      
            );
     
    }

    const transForm = {
        transform: isLogged ? "translateY(-5px)" : 0
    }

  return (
    <NavbarContainer>
      <BrandContainer>
        <Logo inline />
      </BrandContainer>
      {
                    isLogged
                    ? userLink()
                    :
      <AccessibilityContainer>
      <Marginer direction="horizontal" margin={20} />
      <AnchorLink to="/Register"><Button size={1}>Register</Button></AnchorLink>
        <Marginer direction="horizontal" margin={11} />
        <AnchorLink to="/Login"><Button size={1}>Login</Button></AnchorLink>
      </AccessibilityContainer>
}
    </NavbarContainer>
  );
}

export default Navbar
