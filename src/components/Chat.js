import React, { Component } from 'react'
import styled from 'styled-components'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Icon from '@mdi/react';
import { mdiPound } from '@mdi/js';
import "../components/Chat.css";

function Chat() {
    return (
        <div>
            <ChatRoom>
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
                        <p><InfoOutlinedIcon /> Details </p>
                    </div>
                </ChatHeader>
            </ChatRoom>
        </div>
    )
}

export default Chat

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

const ChannelName = styled.div `
    display: flex;
    text-transform: lowercase;
`



