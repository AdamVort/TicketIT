"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { signIn } from "next-auth/react";

const LoginPage = () => {
    const [loginForm, setLoginForm] = useState({
        username: '',
        pass: ''
    })
    
    return ( 
        <div className="container flex flex-col items-center justify-center h-full w-96">
            <div className='h-[150px] flex flex-col justify-between'>
                <Input type="text" onChange={e => setLoginForm({...loginForm, username: e.target.value})}/>
                <Input type="password" onChange={e => setLoginForm({...loginForm, pass: e.target.value})}/>
                <Button>LOGIN</Button>
            </div>
        </div>
    );
}
 
export default LoginPage;