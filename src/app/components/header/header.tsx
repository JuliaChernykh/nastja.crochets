import {FC} from 'react';
import {useMedia} from 'react-use';
import {useRouter} from 'next/navigation';

import resources from '@component/resources/resources.json';
import {Container} from '@component/app/components/container/container';
import {desktopMediaQuery, tabletMediaQuery} from '@component/styles/media';

import s from './header.module.css';
import cn from 'classnames';
import {NavigationPanel} from '@component/app/components/header/components/navigation-panel/navigation-panel';


const {navigationLinks, logoText, logoIconSrc} = resources.Header;

export const Header: FC = () => {
    const router = useRouter();
    const isDesktop = useMedia(desktopMediaQuery);
    const isTablet = useMedia(tabletMediaQuery);

    return (
        <Container className={s.header} wrapperClassName={s.headerWrapper}>
            <div className={cn(s.panel, s.clickable)} onClick={() => router.push('/')}>
                {isDesktop && <img className={s.logoImg} src={logoIconSrc} alt="logo"/>}
                <h2 className={s.logoTitle}>{logoText}</h2>
            </div>
            {isTablet ? (
                <div className={s.panel}>
                    {navigationLinks.map((item, index) => (
                        <a className={s.link} href={item.href} key={index} rel="noreferrer noopener">{item.text}</a>
                    ))}
                </div>
            ) : (
                <NavigationPanel items={navigationLinks} />
            )}
        </Container>
    );
}
