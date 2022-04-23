import React, { useState } from "react";
import Label from "../../components/element/Label";
import Input from "../../components/element/Input";
import Button from "../../components/element/Button";
import Anchor from "../../components/element/Anchor";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../feature/auth/authSlice";
import { useNavigate } from "react-router-dom";
function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await dispatch(signIn(formData));
        if (res) {
            navigate("/");
        }
    };
    return (
        <>
            <div className="self-center text-xl font-light text-gray-600">
                Login Account
            </div>
            <div className="mt-4">
                <form onSubmit={handleSubmit}>
                    {/* email */}
                    <div className="mb-5">
                        <Label text="Email" />
                        <Input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    {/* passowrd */}
                    <div className="mb-5">
                        <Label text="Password" />
                        <Input
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
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
