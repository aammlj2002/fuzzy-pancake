import React from "react";

function ResetPassword() {
    return (
        <>
            <div className="self-center text-xl font-light text-gray-600">
                Reset Password
            </div>
            <div className="mt-4">
                <form autoComplete="off">
                    {/* password */}
                    <div className="mb-5">
                        <label className="mb-1 text-sm text-gray-900">
                            Password
                        </label>
                        <input className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent" />
                    </div>

                    {/* comfirm password */}
                    <div className="mb-5">
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
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ResetPassword;
