import React from "react";
import Label from "../../components/element/Label";
import Input from "../../components/element/Input";
import Button from "../../components/element/Button";
import Anchor from "../../components/element/Anchor";
function LoginPage() {
    return (
        <>
            <div className="self-center text-xl font-light text-gray-600">
                Login Account
            </div>
            <div className="mt-4">
                <form autoComplete="off">
                    {/* email */}
                    <div className="mb-5">
                        <Label text="Email" />
                        <Input />
                    </div>

                    {/* passowrd */}
                    <div className="mb-5">
                        <Label text="Password" />
                        <Input />
                        <Anchor
                            text="Forgot password?"
                            to="/forgotpassword"
                        ></Anchor>
                    </div>
                    <div className="flex w-full mt-6">
                        <Button type="submit">Sign In</Button>
                    </div>
                </form>
            </div>
            <div className="flex items-center justify-center mt-6">
                <Anchor
                    text="You don&#x27;t have an account?"
                    to="/register"
                ></Anchor>
            </div>
        </>
    );
}

export default LoginPage;
