'use client';

import { Nav, Container } from "@/src/content/Content";
import { cn } from "@/src/utils/pipes/classNames.pipe";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";


const navProps = 'officialColor text-white py-4';
const containerProps = 'flex flex-wrap gap-4 w-full justify-between';
const linkProps = 'p-4 block';
const logoProps = '-ml-4';
const menuButtonProps = 'md:hidden';
const ulProps = 'hidden md:flex gap-4 md:-mx-4 fixed p-4 md:py-0 top-0 md:bg-transparent officialColor right-0 bottom-0 md:w-auto w-[320px] md:relative z-20';
const overlayProps = 'hidden fixed inset-0 bg-black/40 z-10 md:hidden';

export default function Navbar() {
  const [active, setActive] = useState('');

  const loggedIn = false;

  return (
    <Nav className={cn(navProps)}>
      <Container className={cn(containerProps)}>
        <Link href='/' className={cn(linkProps, logoProps)}>Home</Link>
        <RenderLinks active={active} setActive={setActive} loggedIn={loggedIn} />
        <div onClick={() => setActive('')} className={cn(overlayProps, active)}></div>
        <button onClick={() => setActive('block')} className={cn(menuButtonProps)}>Menu</button>
      </Container>
    </Nav>
  )
}

type LinksProps = {
  loggedIn: boolean,
  active: string,
  setActive: Dispatch<SetStateAction<string>>
}

function RenderLinks({ loggedIn, active, setActive }: LinksProps) {
  if (!loggedIn) {
    return (
      <ul className={cn(ulProps, active)}>
        <li>
          <Link href='/login' onClick={() => setActive('')} className={cn(linkProps)}>Login</Link>
        </li>
        <li>
          <Link href='/register' onClick={() => setActive('')} className={cn(linkProps)}>Register</Link>
        </li>   
      </ul>
    )
  }

  return (
    <ul className={cn(ulProps, active)}>
      <li>
        <Link href='/account' onClick={() => setActive('')} className={cn(linkProps)}>Account</Link>
      </li>  
    </ul>
  )
}