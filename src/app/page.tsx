"use client";

export default function Home() {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
            <div className="w-full max-w-4xl px-6 py-10 text-center">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Welcome to the Home Page</h1>
                <p className="text-xl text-gray-600 mb-8">This is the main content of the home page. We are happy to have you here!</p>

                {/*/!* Features Section *!/*/}
                {/*<div className="bg-white shadow-lg rounded-lg p-8 mb-8">*/}
                {/*    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Key Features:</h2>*/}
                {/*    <ul className="space-y-4 text-left text-lg text-gray-700">*/}
                {/*        <li className="flex items-start">*/}
                {/*            <span className="text-blue-500 mr-2">✔</span> Responsive design that adapts to any screen size.*/}
                {/*        </li>*/}
                {/*        <li className="flex items-start">*/}
                {/*            <span className="text-blue-500 mr-2">✔</span> Fast performance to ensure smooth user experience.*/}
                {/*        </li>*/}
                {/*        <li className="flex items-start">*/}
                {/*            <span className="text-blue-500 mr-2">✔</span> Easy to use with intuitive navigation and interfaces.*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</div>*/}

                {/* Thank You Message */}
                <p className="text-lg text-gray-600 mt-4">
                    Thank you for visiting! We hope you enjoy exploring our website. Feel free to reach out if you have any questions.
                </p>
            </div>
        </div>
    );
}
