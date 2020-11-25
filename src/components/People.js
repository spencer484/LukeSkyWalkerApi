import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const People = ({ id }) => {
    const [people, setPeople] = useState(null);

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/' + id + "/")
            .then(response => {
                setPeople(response.data);
            })
            .catch(() => navigate("/error"));
    }, [id]);

    if (people == null) {
        return "Loading..."
    }

    return (
        <div>
            <h1>{people.name}</h1>
            <p>"height": {people.height}</p>
            <p>"mass": {people.mass}</p>
            <p>"hair_color": {people.hair_color}</p>
            <p>"skin_color": {people.skin_color}</p>
        </div>
    )
}

export default People
