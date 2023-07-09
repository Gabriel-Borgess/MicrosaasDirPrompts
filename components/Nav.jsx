"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {signIn, signOut, useSession, getProviders } from "next-auth/react";
export default function Nav() {

  const {data: session} = useSession();
 

  const [providers, setProviders ] = useState(null);
  const [toggleDropdown, setToogleDropdown] = useState (false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);


  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className='flex-gap-2 flex-center'>
    <Image
    src="/assets/images/logo.svg"
    alt="Microsaas Prompts Logo"
    width={90}
    height={90}
    className='object-contain'
    /> 
    <p className="logo_text text-center">MicroSaaS Prompts </p>
    </Link>
    
    {/*Desktop nav */}
     {/* Desktop nav */}
  <div className="sm:flex hidden">
    {session?.user ? (
      <div className="flex gap-3 md:gap-5">
        <Link href="/create-prompt" className="black_btn">
          Criar Prompt
        </Link>
        <button type="button" onClick={signOut} className="outline_btn">
          Sair
        </button>
        <Link href="/profile">
          <Image
            src={session?.user.image}
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
          />
        </Link>
      </div>
    ) : (
      <>
      {providers &&
      Object.values(providers).map((provider) => (
        <button
          type="button"
          key={provider.name}
          onClick={() => signIn(provider.id)}
          className="black_btn"
        >
          Entrar
        </button>
      ))}
      </>
    )}
    
  </div>

{/*Mobile Nav */}
<div className='sm:hidden flex relative'>
  {session?.user ? (
    <div className='flex'>
       <Image
            src={session?.user.image}
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
            onClick={() => setToogleDropdown((prev) => !prev)}
        />
        {toggleDropdown && (<div className='dropdown'>
          <Link 
          href="/profile"
          className='dropdown_link'
          onClick={() => setToogleDropdown(false)}> 
          Perfil
          </Link> 
          <Link 
          href="/create-prompt"
          className='dropdown_link'
          onClick={() => setToogleDropdown(false)}> 
          Criar Prompt
          </Link> 
          <button 
            type="button"
            onClick={() => {setToogleDropdown(false);
            signOut();
            }}
            className='mt-5 w-full black_btn'
          >Sair
          </button>
          </div>
      )}
    </div>
):(
  <>
  {providers &&
  Object.values(providers).map((provider) => (
    <button
      type="button"
      key={provider.name}
      onClick={() => signIn(provider.id)}
      className="black_btn"> Entrar
    </button>
  ))}
  </>
)} 
  
</div>
</nav>

    
    
  )
}
