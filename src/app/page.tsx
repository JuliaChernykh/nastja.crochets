import s from './page.module.css'
import Link from "next/link";

const Home = () => {
  return (
    <main className={s.main}>
        <h3 className={s.title}>this is nastja.crochets website!!!</h3>
        <Link href="/test">go to the test page</Link>
    </main>
  )
}

export default Home;
