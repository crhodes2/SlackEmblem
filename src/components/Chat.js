import React from 'react'
import styled from 'styled-components'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import '../components/Chat.css';

function Chat() {
    return (
        <Container>
            {/* Header */}
            <Header>
                <Channel>
                    <ChannelName>
                    ⚔ general-meeting <Star />
                    </ChannelName>
                    <ChannelInfo>
                    Announcements from the castle to the people
                    </ChannelInfo>
                </Channel>
                <ChannelDetails>
                    <div>
                        Details
                    </div>
                    <Info />
                </ChannelDetails>
            </Header>

            <MessageContainer>
                <ChatMessage/>
            </MessageContainer>
            <ChatInput />
        </Container>
    )
}

export default Chat

const Container = styled.div `
    display: grid;
    grid-template-rows: 64px auto min-content;
`

const Channel = styled.div `   
`

const ChannelDetails = styled.div `
    display: flex;
    align-items: center;
    color: #606060;
`
const ChannelName = styled.div `
    display: flex;
    font-weight: 700;
`
const ChannelInfo = styled.div `
    font-weight: 400;
    color: #606060;
    font-size: 13px;
    margin-top: 8px;
`
const Info = styled(InfoOutlinedIcon)`
    margin-left: 10px;
`
const Star = styled(StarBorderOutlinedIcon)`
    margin-left: 5px;
`
const Header = styled.div `
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(83,39,83,.13);
    justify-content: space-between;
    background: #66ccff70;
`

const MessageContainer = styled.div `


`




