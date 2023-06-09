'use client';

import React from 'react';
import dynamic from 'next/dynamic';

import resources from '@component/resources/resources.json';
import {PatternsAvailableInfo} from './components/patterns-available-info/patterns-available-info';
import {PatternsUnavailableInfo} from './components/patterns-unavailable-info/patterns-unavailable-info';
import {Footer} from '@component/app/components/footer/footer';
import {Header} from '@component/app/components/header/header';

const TestPatternsPage: React.FC = () => {
  return (
      <main>
          <Header />
          {resources.TestPatternsPage.isTestingAvailable ? <PatternsAvailableInfo/> : <PatternsUnavailableInfo />}
          <Footer />
      </main>
  );
};

export default dynamic(() => Promise.resolve(TestPatternsPage), {
    ssr: false
});
