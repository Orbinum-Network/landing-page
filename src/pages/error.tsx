import { Link } from "react-router";

export function ErrorPage() {
    return (
        <div className="min-h-screen bg-secondary-950 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 text-center">
                <div className="mb-8">
                    <h2 className="mt-6 text-6xl font-extrabold text-secondary-100">404</h2>
                    <p className="mt-2 text-3xl font-bold text-secondary-100">Page not found</p>
                </div>
                <div className="mt-8">
                    <Link to="/"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-focus">
                        <svg className="mr-2 -ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18m-9-9l9 9-9 9" />
                        </svg>
                        Go back home
                    </Link>
                </div>
            </div>
        </div>
    )
}
