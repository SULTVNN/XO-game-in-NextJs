import Link from 'next/link'
import Style from './page.module.css'
export default function about (){
    return(
        <main className={Style.main}>
            <p>Hello in about routing</p>
            <Link href="/">GO to Home</Link>
        </main>
    )
}