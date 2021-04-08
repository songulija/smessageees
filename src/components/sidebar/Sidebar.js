import { Avatar, IconButton } from '@material-ui/core'
import { RateReviewOutlined, Search } from '@material-ui/icons'
import React from 'react'
import SidebarChat from '../sidebarChat/SidebarChat'
import './styles.css'

function Sidebar() {
    return (
        <div className='sidebar'>
            {/* first we have sideba header in in sidebar input */}
            <div className='sidebar__header'>
                <Avatar className='sidebar__avatar' />
                {/* Search box */}
                <div className='sidebar__input'>
                    <Search />
                    <input type='text' placeholder='Search' />
                </div>
                {/* wrapping  RateReviewOutlined icon in IconButton so it will be clickable*/}
                <IconButton variant='outlined' className='sidebar__inputButton'>
                    <RateReviewOutlined />
                </IconButton>
            </div>

            <div className='sidebar__chats'>
                {/* Sidebar Chat component. we will have many Chat components */}
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>

        </div>
    )
}

export default Sidebar
