import React from "react";
import Label from "../../components/element/Label";
import Input from "../../components/element/Input";
import Button from "../../components/element/Button";
import Anchor from "../../components/element/Anchor";
function ForgotPassword() {
    return (
        <>
            <div className="self-center text-xl font-light text-gray-600">
                Forgot Password
            </div>
            <div className="mt-4">
                <form autoComplete="off">
                    {/* email */}
                    <div className="mb-5">
                        <Label text="Email" />
                        <Input />
                    </div>
                    <div className="flex w-full mt-6">
                        <Button type="submit">Get Reset Link</Button>
                    </div>
                </form>
            </div>
            <div className="flex items-center justify-center mt-6">
                <Anchor text="Go to login page" to="/login"></Anchor>
            </div>
        </>
    );
}

export default ForgotPassword;
