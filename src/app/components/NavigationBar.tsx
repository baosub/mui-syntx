import React from 'react'
import Link from "next/link";


const NavigationBar = () => {
    return (
        <>

            <Link href="/">
                <h4>Home</h4>
            </Link>

             <Link href="/first">
              <h4>First</h4> 
            </Link>

            <Link href="/second">
                <h4>Second</h4>
            </Link>


        </>
    )
}

export default NavigationBar
