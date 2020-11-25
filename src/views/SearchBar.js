import React, { useState } from 'react';
import { navigate } from '@reach/router';

const SearchBar = () => {
    const [formState, setFormState] = useState({
        option: "people",
        id: ""
    });

    function onChangeHandler(event) {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }

    function onSubmitHandler(event) {
        event.preventDefault();
        // Setting the route with inputs from SearchBar
        navigate("/" + formState.option + "/" + formState.id)

    }

    return (
        <form onSubmit={onSubmitHandler}>
            <label>Search For:</label>
            <select
                name="option"
                value={formState.option} onChange={onChangeHandler}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            <label>ID:</label>
            <input name="id" value={formState.id} onChange={onChangeHandler} />
            <button>Search</button>
        </form>
    )


}

export default SearchBar
