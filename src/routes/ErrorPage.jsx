import { useRouteError } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useTranslation } from "react-i18next";

function ErrorPage() {
    const { t } = useTranslation('errorPage')

    const error = useRouteError()

    return (
        <div>
            <Navbar />
            <main>
                <div id="error">
                    <h1>{t('ops')}</h1>
                    <p>{t('sorry')}</p>
                    <p>
                        <i>{error.statusText || error.message}</i>
                    </p>
                </div>
            </main>
        </div>
    )
}

export default ErrorPage