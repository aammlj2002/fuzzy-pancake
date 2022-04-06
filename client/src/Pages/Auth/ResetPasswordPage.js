import React from "react";
import Label from "../../components/element/Label";
import Input from "../../components/element/Input";
import Button from "../../components/element/Button";
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
                        <Label text="Password" />
                        <Input />
                    </div>

                    {/* comfirm password */}
                    <div className="mb-5">
                        <Label text="Password" />
                        <Input />
                    </div>
                    <div className="flex w-full mt-6">
                        <Button type="submit">Reset Password</Button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ResetPassword;
