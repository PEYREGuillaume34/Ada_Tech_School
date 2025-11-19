"use client"

import { addTheme } from "../actions/theme";

export const AddTheme = () => {
    return (
        <form action={addTheme}>

            <input type="text" name="title" />
            <button type="submit">Add Theme</button>
        </form>
    );
}



    