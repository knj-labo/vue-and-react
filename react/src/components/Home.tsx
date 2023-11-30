import { FC } from 'react';
import {Link} from "react-router-dom";
export const Home : FC = () => {
    return (
        <div id="home">
            <h1>Home</h1>
            <h2>React</h2>
            <Link to="/about">About</Link>
            <Link to="/edit">Edit</Link>
        </div>
    );
}
