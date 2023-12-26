import { useRouteError } from "react-router-dom"
import Navbar from "../components/Navbar"

function ErrorPage() {
    const error = useRouteError();

    return (
        <div>
            <Navbar />
            <div>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    )
}

export default ErrorPage