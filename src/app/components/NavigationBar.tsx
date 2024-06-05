import React from 'react'
import Link from "next/link";


const NavigationBar = () => {
    return (
        <>

            <span> <Link href="/">
                <h4>Home</h4>
            </Link></span>

            <span> <Link href="/first">
              <h4>First(mui layout components)</h4> 
            </Link></span>

            <span> <Link href="/second">
                <h4>Second(css flexbox with mui Box component)</h4>
            </Link></span>

            <span> <Link href="/third">
                <h4>Third(responsive Design with sx property)</h4>
            </Link></span>



        </>
    )
}

export default NavigationBar
