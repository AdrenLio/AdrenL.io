'use client';

import axios from 'axios';
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal"; 
import Modal from "./Modal"
import Heading from "../Heading";
import Input from "../inputs/Input"
import {toast} from "react-hot-toast";
import Button from "../Button";
import {signIn} from "next-auth/react";

const RegisterModal= () => {
    const RegisterModalHook=useRegisterModal();
    const LoginModalHook=useLoginModal();
    const [isLoading, setIsLoading]=useState(false);

    const { register, handleSubmit, formState: { errors, } } = useForm<FieldValues> ({ 
        defaultValues: {
            name: '', email: '', password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios.post("/api/register", data)
            .then(() => {
                toast('Check your email to verify the account!', {icon: '✅'});
                RegisterModalHook.onClose();
            })
            .catch((error) => { 
                if(error.response.status == 409) {
                    return toast.error("Email is already registered!");   
                }

                toast.error("Something went wrong");
            })
            .finally(() => {
                setIsLoading(false);
            })
    };

    const toggle = useCallback(() => {
        RegisterModalHook.onClose();
        LoginModalHook.onOpen();
    }, [LoginModalHook, RegisterModalHook]);

    const bodyContent= (
        <div className="flex flex-col gap-4">
            <Heading title="Welcome to AdrenL" subtitle="Create an account!"/>
            <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required/>
            <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required/>
            <Input id="password" type="password" label="Password" disabled={isLoading} register={register} errors={errors} required/>
        </div>
    );

    const footerContent= (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button outline label="Continue with Google" icon={FcGoogle} onClick={() => signIn('google')}/>
            <div className="justify-center flex flex-row items-center gap-2">
                <div>
                    Already have an account?
                </div>
                <div onClick={toggle} className="text-neutral-800 cursor-pointer hover:underline">
                    Log in
                </div>
            </div>
        </div>
    );

    return (
        <Modal disabled={isLoading} isOpen={RegisterModalHook.isOpen} title="Register" actionLabel="Continue"
        onClose={RegisterModalHook.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent} footer={footerContent}/>
    );
}

export default RegisterModal;