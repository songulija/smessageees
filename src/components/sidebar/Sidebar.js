import { Avatar } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React from 'react'
import './styles.css'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar />
                {/* Search box */}
                <div className='sidebar__input'>
                    <Search />
                    <input type='text' placeholder='Search' />
                </div>
            </div>

            <div className='sidebar__chats'>

            </div>

        </div>
    )
}

export default Sidebar
