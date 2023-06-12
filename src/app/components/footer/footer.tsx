import {FC, useState} from 'react';
import {useMedia} from 'react-use';

import {Container} from '@component/app/components/container/container';
import {ArrowDown} from '@component/app/components/faq/arrow-down';
import resources from '../../../resources/resources.json';
import {tabletMediaQuery} from '@component/styles/media';

import s from './footer.module.css';
import cn from 'classnames';

const {items} = resources.Footer;

export const Footer: FC = () => {
    const isTablet = useMedia(tabletMediaQuery)

    if (!isTablet) {
        return (
            <Container className={s.footer} wrapperClassName={s.footerWrapper}>
                {items.map(({title, links}, index) => (
                    <FooterBlockMobile title={title} links={links} key={index} />
                ))}
            </Container>
        )
    }
    return (
        <Container className={s.footer} wrapperClassName={s.footerWrapper}>
            <div className={s.content}>
                {items.map(({title, links}, index) => (
                    <div className={s.block} key={index}>
                        <h1 className={s.title}>{title}</h1>
                        {links.map((item, index) => (
                            <a className={s.link} href={item.href} target="_blank" rel="noopener noreferrer" key={index}>
                                {item.iconSrc && <img className={s.icon} src={item.iconSrc} alt=""/>}
                                {item.text}
                            </a>
                        ))}
                    </div>
                ))}
            </div>
        </Container>
    );
}

type FooterBlock = {
    title: string;
    links: {
        text: string;
        href: string;
        iconSrc?: string;
    }[];
}

const FooterBlockMobile: FC<FooterBlock> = ({title, links}) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className={s.block}>
            <div onClick={() => setIsVisible(!isVisible)} className={cn(s.title, s.clickable)}>
                {title}
                <ArrowDown className={cn(s.arrowDown, {[s.opened]: isVisible})} />
            </div>
            <div className={cn(s.links, {[s.visible]: isVisible})}>
                {links.map((item, index) => (
                    <a className={s.link} href={item.href} target="_blank" rel="noopener noreferrer" key={index}>
                        {item.iconSrc && <img className={s.icon} src={item.iconSrc} alt=""/>}
                        {item.text}
                    </a>
                ))}
            </div>
        </div>
    )
}
