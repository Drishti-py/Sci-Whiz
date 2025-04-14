import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const { selectedTags = [], age } = location.state || {};

    return (
        <div>
            <h2>Navbar for Age Group: {age}</h2>
            <ul>
                {selectedTags.map(tag => (
                    <li key={tag}>
                        <Link to={`/${tag.toLowerCase()}`} style={{ textDecoration: 'none', color: '#4f46e5' }}>
                            {tag}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;




