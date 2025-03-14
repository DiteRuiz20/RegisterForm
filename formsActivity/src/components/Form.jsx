import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export default function RegistrationForm() {

    const schema = yup.object().shape({
        name: yup.string()
            .required("Name is required"),
        lastName: yup.string()
            .required("Last name is required"),
        age: yup.number()
            .required("Age is required")
            .min(18, "You must be at least 18 years old")
            .integer("Age must be a valid number")
            .typeError("Age must be a number"),
        phone: yup.string()
            .matches(/^\d{10}$/, "Phone must be a 10-digit number")
            .required("Phone number is required"),
        password: yup.string()
            .required("Password is required")
            .min(4, "Password must be at least 4 characters")
            .max(10, "Password must be at most 10 characters"),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password'), null], "Passwords must match")
            .required("Confirm Password is required")
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function onSubmit(data) {
        console.log("Form Submitted:", data);
    }

    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' placeholder='Name' {...register("name")} />
                <p>{errors.name?.message}</p>

                <input type='text' placeholder='Last Name' {...register("lastName")} />
                <p>{errors.lastName?.message}</p>

                <input type='number' placeholder='Age' {...register("age")} />
                <p>{errors.age?.message}</p>

                <input type='text' placeholder='Phone' {...register("phone")} />
                <p>{errors.phone?.message}</p>

                <input type='password' placeholder='Password' {...register("password")} />
                <p>{errors.password?.message}</p>

                <input type='password' placeholder='Confirm Password' {...register("confirmPassword")} />
                <p>{errors.confirmPassword?.message}</p>

                <button type='submit'>Register</button>
            </form>
        </div>
    );
}
