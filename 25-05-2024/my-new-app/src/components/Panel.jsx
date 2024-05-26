import React, { useContext } from 'react'
import { ThemeContext } from '../App';

function Panel(props) {
    const theme = useContext(ThemeContext);
    console.log(theme);

    const { title, children } = props;
    const className = theme === 'dark' ? 'darkTheme' : 'lightTheme';
    return (
        <section className={`panel-${theme}`}>
            <h2 className={`heading-${theme}`}>{title}</h2>
            {children}
        </section>
    )
}

export default Panel
