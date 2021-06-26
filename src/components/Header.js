import React from 'react'

const Header = () => {
    return (
        <div className="header">
            <h1>Create something awesome!</h1>
            <p>Whatever you need to get done, we've got you covered.</p>
            <ul class="progress-bar">
                <li>Create Request<span>1/3</span></li>
                <li>Requirement Brief<span>2/3</span></li>
                <li>Confirm Payment<span>3/3</span></li>
            </ul>
        </div>
    )
}

export default Header
