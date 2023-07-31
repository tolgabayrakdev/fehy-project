import { Button, Input, InputGroup, InputRightElement, useToast } from "@chakra-ui/react"
import React, { useState } from "react";
import { Link } from "react-router-dom";
type Props = {}

export default function Register({ }: Props) {
    const toast = useToast();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);


    const handleLogin = async (e: React.FormEvent) => {
        setLoading(false);
        setTimeout(() => {
            setLoading(true);
        }, 1500)
        e.preventDefault();
        const result = await fetch("http://localhost:5000", {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: username, email: email, password: password })
        })
        if (result.status === 200) {
        } else if (result.status === 400) {

        } else {
            toast({
                title: "Ups",
                description: "Something going wrong!",
                status: "warning",
                duration: 1500,
                isClosable: true
            })
        }
    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                {
                    loading ? <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                            <div className="mt-2">
                                <Input onChange={(e) => setUsername(e.target.value)} placeholder='Basic usage' />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <Input onChange={(e) => setEmail(e.target.value)} placeholder='Basic usage' />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>

                            </div>
                            <div className="mt-2">
                                <InputGroup size='md'>
                                    <Input
                                        onChange={(e) => setPassword(e.target.value)}
                                        pr='4.5rem'
                                        type={show ? 'text' : 'password'}
                                        placeholder='Enter password'
                                    />
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                                            {show ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Sign up</button>
                        </div>
                    </form> : <p className="text-center text-xl">Loading...</p>
                }


                <p className="mt-10 text-center text-sm text-gray-500">
                    Are you a member? <Link to="/auth/signin" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">Sign up</Link>
                </p>
            </div>
        </div>
    )
}