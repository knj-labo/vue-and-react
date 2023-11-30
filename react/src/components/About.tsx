import { FC } from 'react';
import { Link } from "react-router-dom";

export const About: FC = () => {
    return (
        <div id="about">
            <h1>About</h1>
            <h2>React</h2>
            <Link to="/">Home</Link>
            <Link to="/edit">Edit</Link>
        </div>
    );
}