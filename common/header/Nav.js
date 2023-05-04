import React from 'react';
import Link from "next/link";

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li><Link href="/">Home</Link></li>
            
            <li><Link href="/about-us">About</Link></li>

            <li><Link href="/blogs">Blog</Link></li>

            <li><Link href="/contact">Contact</Link></li>
        </ul>
    )
}
export default Nav;
