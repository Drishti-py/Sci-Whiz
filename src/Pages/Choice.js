import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';



export const ageBasedTags = {
    '5-10': ['Dashboard', 'Games', 'Activity5-8'],
    '11-17': ['Drawing', 'Quiz', 'Activity9-12'],
    '18+': ['Contact', 'Quiz', 'Activity13-17']
};
const Choice = () => {
    const [selectedAgeGroup, setSelectedAgeGroup] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const navigate = useNavigate();

    const handleTagClick = (tag) => {
        setSelectedTags(prevTags =>
            prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]
        );
    };

    const handleSubmit = () => {
        navigate('/Navbar', { state: { selectedTags, age: selectedAgeGroup } });
    };

    return (
        <div>
            <h2>Select Your Age Group</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
                {['5-10', '11-17', '18+'].map((age) => (
                    <button
                        key={age}
                        onClick={() => setSelectedAgeGroup(age)}
                        style={{
                            padding: '10px 20px',
                            borderRadius: '25px',
                            backgroundColor: selectedAgeGroup === age ? '#4f46e5' : '#ccc',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        {age}
                    </button>
                ))}
            </div>

            {/* Show navbar tag options only after age group is selected */}
            {selectedAgeGroup && (
                <>
                    <h2>Select Navbar Options</h2>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        {ageBasedTags[selectedAgeGroup].map((tag) => (
                            <button
                                key={tag}
                                onClick={() => handleTagClick(tag)}
                                style={{
                                    padding: '10px 20px',
                                    borderRadius: '25px',
                                    backgroundColor: selectedTags.includes(tag) ? '#4f46e5' : '#ccc',
                                    color: 'white',
                                    border: 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </>
            )}

            <br />
            <button onClick={handleSubmit} disabled={selectedTags.length === 0}>
                Submit
            </button>
        </div>
    );
};

export default Choice;


