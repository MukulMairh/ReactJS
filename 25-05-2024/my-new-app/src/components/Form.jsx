import React, { useContext } from 'react'
import Button from './Button'
import Panel from './Panel'
import { CurrentUserContext } from '../App';
import { ThemeContext } from '../App';

function Form() {
    const currentUserContextValue = useContext(CurrentUserContext);
    const { currentUser, setCurrentUser } = currentUserContextValue;
    const theme = useContext(ThemeContext);

    const handleClick = () => {
        setCurrentUser("Intellipaat");
    }

    const handleLogout = () => {
        setCurrentUser("");
    }

    return (
        <Panel title={"Context Form"}>
            {
                currentUser ?
                    <React.Fragment>
                        <h1 className={`heading-${theme}`}>Welcome, {currentUser}</h1>
                        <button className={`button-${theme}`} onClick={handleLogout}>Logout</button>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <Button onClick={handleClick}>Login</Button>
                        <Button>Signup</Button>
                    </React.Fragment>
            }
        </Panel>
    )
}

export default Form
