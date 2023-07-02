'use client';

import React, {FC} from 'react';
import {useMedia} from 'react-use';
import cn from 'classnames';

import {Title} from '@component/app/components/title/title';
import {Button} from '@component/app/components/button/button';
import {Container} from '@component/app/components/container/container';
import {desktopMediaQuery, tabletMediaQuery} from '@component/styles/media';
import {ImagesGallery} from '@component/app/components/images-gallery/images-gallery';

import s from './info-block.module.css';

type MainInfoBlockProps = {
    title: string;
    buttonText?: string;
    onButtonClick?: () => void;
    imageSrc: string | string[];
    mainContentComponent?: JSX.Element;
}

export const InfoBlock: FC<MainInfoBlockProps> = ({title, buttonText, onButtonClick, imageSrc, mainContentComponent}) => {
    const isTablet = useMedia(tabletMediaQuery);
    const isDesktop = useMedia(desktopMediaQuery);
    const withGallery = typeof imageSrc !== 'string';
    const renderTitle = () => <Title className={s.title}>{title}</Title>;
    const renderButton = () => {
        if (!buttonText || !onButtonClick) {
            return null;
        }
        return <Button className={s.button} onClick={onButtonClick}>{buttonText}</Button>;
    };

    return (
        <Container className={cn(s.mainInfoBlock, {[s.withGallery]: withGallery})} fullPage>
            {(!isDesktop || withGallery) && renderTitle()}
            <div className={cn(s.content, {[s.withGallery]: withGallery})}>
                {typeof imageSrc === 'string' ? (
                    <img className={s.image} src={imageSrc} alt=""/>
                ):(
                    <ImagesGallery className={s.gallery} imagesSrc={imageSrc} />
                )}
                <div className={s.text}>
                    {(isDesktop && !withGallery) && renderTitle()}
                    {mainContentComponent}
                    {isTablet && renderButton()}
                </div>
            </div>
            {!isTablet && renderButton()}
        </Container>
    );
};
