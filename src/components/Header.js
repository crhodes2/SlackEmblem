import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import UserImages from '../images/user.png';
import '../components/Header.css';

function Header({ user, signOut }) {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..."/>
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <Name>
                    {user.name}
                </Name>
                <UserImage onClick={signOut}>
                    <img src={ user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png" } />
                </UserImage>
            </UserContainer>
        </Container>

    )
}

export default Header

const Container = styled.div `
    background: #00B0F0;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 10;
    box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`

const Main = styled.div `
    display: flex;
    margin-right: 16px;
    margin-left: 16px;
`

const SearchContainer = styled.div `
    margin-left: 16px;
    margin-right: 16px;
    min-width: 400px;
`

const Search = styled.div `
    box-shadow: inset 0 0 0 1px white;
    width: 100%;
    border-radius: 6px;
    display: flex;
    align-items: center;

    input {
        background-color: transparent;
        flex: 1;
        border: none;
        padding-left: 8px;
        padding-right: 8px;
        color: blue;
        padding-top: 4px;
        padding-bottom: 4px;
    }

    input: focus {
        outline: none;
    }
`

const UserContainer = styled.div `
    display: flex;
    align-items: center;
    padding-right: 16px;
    position: absolute;
    right: 0;
`

const Name = styled.div `
    padding-right: 16px;
`

const UserImage = styled.div `
    width: 28px;
    height: 28px;
    border: 2px solid white;
    border-radius: 3px;
    cursor: pointer;

    img {
        width: 100%;
    }
`

