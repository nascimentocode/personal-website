import { useRouteError } from "react-router-dom"
import Navbar from "../components/Navbar"

function ErrorPage() {
    const error = useRouteError();

    return (
        <div>
            <Navbar />
            <main>
                <div id="error">
                    <h1>Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                        <i>{error.statusText || error.message}</i>
                    </p>
                </div>
            </main>
        </div>
    )
}

export default ErrorPage