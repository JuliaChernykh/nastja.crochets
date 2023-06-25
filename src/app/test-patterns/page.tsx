'use client';

import React from 'react';
import dynamic from 'next/dynamic';

import {
    PatternsUnavailableInfo
} from '@component/app/test-patterns/components/patterns-unavailable-info/patterns-unavailable-info';
import {Footer} from '@component/app/components/footer/footer';

const TestPatternsPage: React.FC = () => {
  return (
      <main>
          <PatternsUnavailableInfo/>
          <Footer />
      </main>
  );
};

export default dynamic(() => Promise.resolve(TestPatternsPage), {
    ssr: false
});
