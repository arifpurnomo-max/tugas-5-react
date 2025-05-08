import { useParams, useLocation } from "react-router-dom";

function User() {
    const { name, email } = useParams();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const id = query.get("id");

    return (
        <>
            <h3>Component Render:</h3>
            <p>User: {name}</p>
            <p>Email: {email}</p>
            <p>ID: {id}</p>
        </>
    );
}

export default User;
