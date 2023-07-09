'use client'

import dynamic from 'next/dynamic';

import {AboutMeInfo} from '@component/app/components/about-me-info/about-me-info';
import {FAQ} from '@component/app/components/faq/faq';
import {Footer} from '@component/app/components/footer/footer';
import {Header} from '@component/app/components/header/header';

import s from './page.module.css';


const Home = () => {
  return (
      <main className={s.main}>
          <Header />
          <AboutMeInfo />
          <FAQ />
          <Footer />
      </main>
  );
};

export default dynamic(() => Promise.resolve(Home), {
    ssr: false
});
