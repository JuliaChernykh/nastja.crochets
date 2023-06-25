'use client';

import React from 'react';
import {useRouter} from 'next/navigation';

import resources from '@component/resources/resources.json';
import {InfoBlock} from '@component/app/components/info-block/info-block';

import s from './about-me-info.module.css';

export const AboutMeInfo: React.FC = () => {
  const router = useRouter();

  const TextComponent = () => (
      <>
        {resources.AboutMe.text.map((item, index) => (
            <p className={s.paragraph} key={index}>{item}</p>
        ))}
      </>
  )

  return (
    <InfoBlock {...resources.AboutMe} onButtonClick={() => router.push('/patterns')} mainContentComponent={<TextComponent/>} />
  );
};
