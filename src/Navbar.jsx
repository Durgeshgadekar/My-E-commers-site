import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  // background-color: #333;
  color:black;
`;



const NavLin = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.div`
  color:black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SearchBar = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
`;

const handleSignIn = () => {
 alert('sign is cliked!')
}


const Navbar = () => {
  return (
    <NavbarContainer>
    
    <h4>Shopi</h4>
      <a href="_blank">All</a>
      <a href="https://api.escuelajs.co/api/v1/categories">Catagories</a>
      <a href="#">Myorders</a>
      <a href="#">Mycart</a>
   


      

      <a onClick={handleSignIn}>Sign In</a>
    </NavbarContainer>
  );
};

export default Navbar;
