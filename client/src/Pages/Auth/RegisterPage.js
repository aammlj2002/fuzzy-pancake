import React from "react";
import { Link } from "react-router-dom";
function RegisterPage() {
    return (
        <>
            <div className="self-center text-xl font-light text-gray-600">
                Regitser Account
            </div>
            <div className="mt-4">
                <form autoComplete="off">
                    {/* username */}
                    <div className="mb-5">
                        <label className="mb-1 text-sm text-gray-900">
                            Username
                        </label>
                        <input className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent" />
                    </div>

                    {/* email */}
                    <div className="mb-5">
                        <label className="mb-1 text-sm text-gray-900">
                            Email
                        </label>
                        <input className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent" />
                    </div>

                    {/* passowrd */}
                    <div className="mb-5">
                        <label className="mb-1 text-sm text-gray-900">
                            Password
                        </label>
                        <input className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent" />
                    </div>

                    {/* comfirm password */}
                    <div>
                        <label className="mb-1 text-sm text-gray-900">
                            Confirm Password
                        </label>
                        <input className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent" />
                    </div>
                    <div className="flex w-full mt-6">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
                        >
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex items-center justify-center mt-6">
                <Link
                    className="inline-flex items-center text-sm font-light text-center text-gray-500 underline hover:text-gray-700"
                    to="/login"
                >
                    <span className="ml-2">Already have account?</span>
                </Link>
            </div>
        </>
    );
}

export default RegisterPage;