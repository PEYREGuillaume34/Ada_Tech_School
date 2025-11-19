import { deleteTheme } from "../actions/theme";

export const DeleteTheme = ({ themeId }: { themeId: number }) => {
    return (
        <form action={deleteTheme}>
            <input type="hidden" name="id" value={themeId} />
            <button type="submit">supprimer</button>
        </form >
);
}