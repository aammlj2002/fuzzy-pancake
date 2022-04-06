import React from "react";
import Label from "../../components/element/Label";
import Input from "../../components/element/Input";
import Button from "../../components/element/Button";
import Anchor from "../../components/element/Anchor";
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
                        <Label text="Username" />
                        <Input />
                    </div>

                    {/* email */}
                    <div className="mb-5">
                        <Label text="Email" />
                        <Input />
                    </div>

                    {/* passowrd */}
                    <div className="mb-5">
                        <Label text="Password" />
                        <Input />
                    </div>

                    {/* comfirm password */}
                    <div>
                        <Label text="Confirm Password" />
                        <Input />
                    </div>
                    <div className="flex w-full mt-6">
                        <Button type="submit">Sign in</Button>
                    </div>
                </form>
            </div>
            <div className="flex items-center justify-center mt-6">
                <Anchor text="Already have account?" to="/login"></Anchor>
            </div>
        </>
    );
}

export default RegisterPage;
