'use client';

import React from 'react';
import dynamic from 'next/dynamic';

import {CollabsInfo} from '@component/app/collabs/components/collabs-info/collabs-info';
import {CollabsList} from '@component/app/collabs/components/collabs-list/collabs-list';
import {Footer} from '@component/app/components/footer/footer';

const CollabsPage: React.FC = () => {
  return (
      <main>
          <CollabsInfo />
          <CollabsList />
          <Footer />
      </main>
  );
};

export default dynamic(() => Promise.resolve(CollabsPage), {
  ssr: false
});

