import s from "./page.module.css";
import Link from "next/link";
import { Hero } from "@component/app/components/hero/hero";

const Home = () => {
  return (
    <>
      <Hero />
      <main className={s.main}>
        <h3 className={s.title}>this is nastja.crochets website!!!</h3>
        <Link href="/patterns">patterns</Link>
        <Link href="/collabs">collabs</Link>
        <Link href="/test-patterns">become a tester</Link>
      </main>
    </>
  );
};

export default Home;
