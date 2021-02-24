import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {sidebarItemsData} from '../data/SidebarData'
import AddIcon from '@material-ui/icons/Add';

function Sidebar() {
    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    Fire Emblem Worlds
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkspaceContainer>
            <MainChannel>
                {
                    sidebarItemsData.map(item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }
            </MainChannel>

            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Worlds
                    </div>
                    <AddIcon />

                </NewChannelContainer>
                <ChannelList>
                    <Channel>
                        # World of Awakening 
                    </Channel>
                    <Channel>
                        # World of Fates
                    </Channel>
                    <Channel>
                        # World of Mystery
                    </Channel>
                    <Channel>
                        # World of Radiance
                    </Channel>
                    <Channel>
                        # World of Binding
                    </Channel>
                    <Channel>
                        # World of Blazing
                    </Channel>
                </ChannelList>
            </ChannelsContainer>
        
        </Container>
    )
}

export default Sidebar

const Container = styled.div `
    background: #87cefa;
`

const WorkspaceContainer = styled.div `
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid #532753;
`

const Name = styled.div `
    
`

const NewMessage = styled.div `
    width: 36px;
    height: 36px;
    background: white;
    color: #3F0E40;
    fill: #3F0E40;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
`

const MainChannel = styled.div `
    padding-top: 20px;
`

const MainChannelItem = styled.div `
    color: rgb(0,255,255);
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background:  #0072A0;
    }
`

const ChannelsContainer = styled.div `
    color: rgb(50,140,255);
    margin-top: 10px;
`

const NewChannelContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding-left: 19px;
    padding-right: 12px;
`
const ChannelList = styled.div `
`

const Channel = styled.div `
    height: 28px;
    display: flex;
    align-items: center;
    margin-left: 19px;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: #0072A0;
    }
`