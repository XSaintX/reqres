import React from 'react'

const Edit = ({ userName, handleOnChange }) => (
    <form>
        <label>Name</label>
        <input type="text" name="name" value={userName} onChange={handleOnChange} />
        <label>Job</label>
        <input type="text" name="job" />
    </form>
);

export default Edit;
