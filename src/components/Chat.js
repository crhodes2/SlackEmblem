import React, { Component } from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import Icon from '@mdi/react';
import { mdiPound } from '@mdi/js';

function Chat() {
    return (
        <div>
            <Container>
                <Details>
                    <Image>
                        <Icon path={mdiPound} title="channel" size={0.60} horizontal vertical color="darkblue"/>  
                    </Image>
                    <Font>    
                        <label>General</label>
                    </Font>
                <StarBorderIcon />
                <Font>    
                    <label>Details</label>
                </Font>
                <InfoIcon/>
                </Details>
            </Container>
        </div>
    )
}

export default Chat

const Container = styled.div `
    background: #ffffff;
    display: flex;
    position: relative;
    z-index: 10;
    padding-bottom: 42px;
    border-bottom: 1px solid #708090;
`

const Details = styled.div `
    display: flex;
    color: black;
    margin-right: 16px;
    margin-left: 16px;
    line-height: 2;
    font-family: Berlin Sans FB;
    font-style: italic;
`

const Button = styled.div `
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    user-select: text;
    color: black;
`

const Font = styled.div `
    padding-right: 10px;
`

const Image = styled.div`
`

const UserImages = styled.div`
`

const UserImage = styled.div`
`

const Name = styled.div`
`

