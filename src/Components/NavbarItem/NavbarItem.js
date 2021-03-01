import React from 'react'
import  './NavbarItem.css'

function NavbarItem({Icon,title}) {
    return (
        <div className="navbar__item">
            <Icon/>
            {title}
        </div>
    )
}

export default NavbarItem
