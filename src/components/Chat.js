import React, { Component } from 'react'
import styled from 'styled-components'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Icon from '@mdi/react';
import { mdiPound } from '@mdi/js';
import "../components/Chat.css";
import ChatInput from './ChatInput';

function Chat() {
    return (
        <div>
            <Container>
                <ChatHeader>
                    <div className="chat_header_left">
                        <ChannelName>
                            <strong>⚔general-meeting</strong>
                            <StarBorderOutlinedIcon />
                        </ChannelName>
                        <p className="chat_small_details">
                            Announcements from the castle to the people
                        </p>
                    </div>
                    <div className="chat_header_right">
                        <p>Details <Info /> </p>
                    </div>
                </ChatHeader>
                <MessageContainer>

                </MessageContainer>
                <ChatInput>

                </ChatInput>
            </Container>
        </div>
    )
}

export default Chat

const Container = styled.div `
    display: grid;
    grid-template-rows: 64px auto min-content;
`
const Channel = styled.div `

`
const ChannelName = styled.div `
    font-weight: 700;
    // display: flex;
    // text-transform: lowercase;
`
const ChannelDetails = styled.div `
    display: flex;
    align-items: center;
`

const ChannelInfo = styled.div `
    font-weight: 400;
    color: #606060;
    font-size: 13px;
    margin-top: 8px;
`

const Header = styled.div `
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(83, 39, 83, .13);
    justify-content: space-between;
`


const MessageContainer = styled.div `

`



const ChatRoom = styled.div `
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    padding-bottom: 150px;
`

const ChatHeader = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`
const Info = styled(InfoOutlinedIcon)`
    margin-left: 10px;
`



