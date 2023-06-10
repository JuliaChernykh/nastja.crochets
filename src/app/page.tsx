import s from './page.module.css';
import { AboutMe } from '@component/app/components/about-me/about-me';
import dynamic from 'next/dynamic'

const Home = () => {
  return (
    <main className={s.main}>
      <AboutMe />
    </main>
  );
};

export default dynamic(() => Promise.resolve(Home), {
    ssr: false
});
