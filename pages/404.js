import Link from "next/link"

export default function Custom404() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black text-center px-4 sm:px-6 lg:px-8">
            <h1 className="mt-8 text-4xl font-extrabold text-black dark:text-white">404 - Page Not Found</h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                Oops! The page you are looking for does not exist.
            </p>
            <div className="mt-8">
                <Link
                    className="inline-flex items-center justify-center h-10 px-5 font-medium rounded-md text-white bg-black hover:bg-gray-900"
                    href="#"
                >
                    Go Back Home
                </Link>
            </div>
        </main>
    )
}
