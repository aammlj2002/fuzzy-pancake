import React, { useState } from "react";
import Label from "../../components/element/Label";
import Input from "../../components/element/Input";
import Button from "../../components/element/Button";
import Anchor from "../../components/element/Anchor";
import { useDispatch } from "react-redux";
import { signUp } from "../../feature/auth/authSlice";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await dispatch(signUp(formData));
        if (res) {
            navigate("/");
        }
    };
    const handleChange = (e) => {
        // get input name and set input value
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <>
            <div className="self-center text-xl font-light text-gray-600">
                Regitser Account
            </div>
            <div className="mt-4">
                <form onSubmit={handleSubmit}>
                    {/* username */}
                    <div className="mb-5">
                        <Label text="Name" />
                        <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

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
                    </div>

                    {/* comfirm password */}
                    <div>
                        <Label text="Confirm Password" />
                        <Input
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex w-full mt-6">
                        <Button type="submit">Sign up</Button>
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
