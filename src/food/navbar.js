import { Card } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <Card
             className='bg-orange-600 fixed top-0 left-0 w-full z-50 mb-0'
        >
            <nav className="flex flex-row gap-4 text-white 
        font-bold justify-around ">
                <Link to="/">Food</Link>
                <Link to="/me">About</Link>
            </nav>
        </Card>
    );
}

export default Navbar;
