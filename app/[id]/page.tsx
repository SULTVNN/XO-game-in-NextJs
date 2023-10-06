'use client'

import Link from 'next/link'
import Style from './page.module.css'
import { useRouter } from 'next/navigation'

export default function about() {
    const router = useRouter();

    return (
        <main className={Style.main}>
            <button type="button" onClick={() => router.push('/')}>
                home
            </button>
        </main>
    )
}