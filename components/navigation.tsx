"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation(){
    const path = usePathname();
    const [count, setCount] = useState(0)
    return (
        <nav>
            <ul>
                <li>
                    <Link href = "/">영수증스캔</Link>{path === "/" ? "🔥":""}
                    </li>
                    <li>
                    <Link href = "/about-us">도전기간</Link>{path === "/about-us" ? "🔥":""}
                    </li>
                    
                   {/* <li><button onClick={() => setCount(c =>c+1)}>{count}</button></li>*/}
                </ul>
        </nav>
    );
}