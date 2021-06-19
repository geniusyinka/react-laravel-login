import React from 'react';

function Dash(props) {

    //console.log(authUser.name)
    return (

        <div>
            <p>Welcome to your portfolio! <b>{authUser.name}</b></p>
            <a href="/logout">Logout!</a>
        </div>
    );
}

export default Dash;