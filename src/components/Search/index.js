import React from "react";
import "./style.css"

function Search(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">Employee Search:</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search by name or email"
                    id="search"
                />

            </div>
        </form>
    );
}

export default Search;
