import React, { useEffect, useState } from 'react';
import Leader from '../Leader/Leader';

const Leaders = () => {
    const [leaders, setLeaders] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setLeaders(data));
    }, []);
    return (
        <div className="container d-flex">
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                    leaders.map(leader => <Leader className=""
                        key={leader.key}
                        leader={leader}
                        ></Leader>)
                }
            </div>
            <div className="text-center">
                <h3>Member Added:</h3>
                <h3>Total Cost: $100</h3>
                <button>Create Club</button>
            </div>
        </div>
    );
};

export default Leaders;