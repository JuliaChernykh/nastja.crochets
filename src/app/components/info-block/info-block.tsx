'use client';

import React, {FC} from 'react';
import {useMedia} from 'react-use';

import {Title} from '@component/app/components/title/title';
import {Button} from '@component/app/components/button/button';
import {Container} from '@component/app/components/container/container';
import {desktopMediaQuery, tabletMediaQuery} from '@component/styles/media';

import s from './info-block.module.css';

type MainInfoBlockProps = {
    title: string;
    buttonText?: string;
    onButtonClick?: () => void;
    imageSrc: string;
    mainContentComponent?: JSX.Element;
}

export const InfoBlock: FC<MainInfoBlockProps> = ({title, buttonText, onButtonClick, imageSrc, mainContentComponent}) => {
    const isTablet = useMedia(tabletMediaQuery);
    const isDesktop = useMedia(desktopMediaQuery);
    const renderTitle = () => <Title className={s.title}>{title}</Title>;
    const renderButton = () => {
        if (!buttonText || !onButtonClick) {
            return null;
        }
        return <Button className={s.button} onClick={onButtonClick}>{buttonText}</Button>;
    };

    return (
        <Container className={s.mainInfoBlock} fullPage>
            {!isDesktop && renderTitle()}
            <div className={s.content}>
                <img className={s.image} src={imageSrc} alt="" />
                <div className={s.text}>
                    {isDesktop && renderTitle()}
                    {mainContentComponent}
                    {isTablet && renderButton()}
                </div>
            </div>
            {!isTablet && renderButton()}
        </Container>
    );
};
