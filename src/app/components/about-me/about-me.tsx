'use client';
import React from 'react';
import {Title} from '@component/app/components/title/title';
import {Button} from '@component/app/components/button/button';
import {Container} from '@component/app/components/container/container';

import {useRouter} from 'next/navigation';
import {useMedia} from 'react-use';

import s from './about-me.module.css'
import resources from '../../../resources/resources.json';
import {desktopMediaQuery} from '@component/styles/media';

const {title, imageSrc, text, buttonText} = resources.AboutMe;

export const AboutMe: React.FC = () => {
  const router = useRouter();
  const isDesktop = useMedia(desktopMediaQuery);
  const renderTitle = () => <Title className={s.title}>{title}</Title>;
  const renderButton = () => <Button className={s.button} onClick={() => router.push('/patterns')}>{buttonText}</Button>;

  return (
    <Container className={s.aboutMe}>
        {!isDesktop && renderTitle()}
        <div className={s.content}>
            <img className={s.image} src={imageSrc} alt="" />
            <div className={s.text}>
                {isDesktop && renderTitle()}
                {text.map((item, index) => (
                    <p className={s.paragraph} key={index}>{item}</p>
                ))}
                {isDesktop && renderButton()}
            </div>
        </div>
        {!isDesktop && renderButton()}
    </Container>
  );
};
