import React from 'react';

const logo = '/logo.png';

function Header({ children }) {
    return (
        <div className="Header">
            <img src={logo} width="150" alt="FPSC_Logo" />
            <div className="Title text-align-center">
                <h1 className="TitleName">Federal Public Service Commission, Pakistan</h1>
                {children}
            </div>
        </div>
    );
}

export default Header;
