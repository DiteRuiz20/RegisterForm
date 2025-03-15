import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

export default function Login() {
    const navigate = useNavigate();

    const [loginError, setLoginError] = useState(null);
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));

    const schema = yup.object().shape({
        phone: yup.string()
            .matches(/^\d{10}$/, "Phone must be a 10-digit number")
            .required("Phone number is required"),
        password: yup.string()
            .required("Password is required")
            .min(4, "Password must be at least 4 characters")
            .max(10, "Password must be at most 10 characters"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function onSubmit(data) {
        if (!registeredUser) {
            setLoginError("User not found");
            console.log("Login failed: User not found");
            return;
        }

        if (data.phone !== registeredUser.phone || data.password !== registeredUser.password) {
            setLoginError("Incorrect phone or password");
            console.log("Login failed: Incorrect phone or password");
            return;
        }

        setLoginError(null);
        console.log("Login successful!");
        console.log("User:", registeredUser);
        navigate('/home');
    }

    return (
        <div>
            <h2>LOGIN FORM</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Campo de teléfono */}
                <input type="text" placeholder="Phone" {...register("phone")} />
                <p>{errors.phone?.message}</p>

                {/* Campo de contraseña */}
                <input type="password" placeholder="Password" {...register("password")} />
                <p>{errors.password?.message}</p>

                {/* Mostrar mensaje de error de inicio de sesión */}
                {loginError && <p style={{ color: 'red' }}>{loginError}</p>}

                {/* Botón de envío */}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}