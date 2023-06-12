'use client'

import dynamic from 'next/dynamic';

import {AboutMe} from '@component/app/components/about-me/about-me';
import {FAQ} from '@component/app/components/faq/faq';
import {Footer} from '@component/app/components/footer/footer';

import s from './page.module.css';


const Home = () => {
  return (
      <main className={s.main}>
          <AboutMe />
          <FAQ />
          <Footer />
      </main>
  );
};

export default dynamic(() => Promise.resolve(Home), {
    ssr: false
});
