import {FC, useState} from 'react';
import cn from 'classnames';

import {MenuIcon} from '@component/app/components/header/components/icons/MenuIcon';

import s from './navigation-panel.module.css';
import {CloseIcon} from '@component/app/components/icons/close-icon/close-icon';
import {createPortal} from 'react-dom';

type NavigationPanelProps = {
    items: {
        text: string;
        href: string;
    }[];
}

export const NavigationPanel: FC<NavigationPanelProps> = ({items}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button className={s.button} onClick={() => setIsOpen(true)}>
                <MenuIcon />
            </button>
            {createPortal(
                <div className={cn(s.panel, {[s.visible]: isOpen})}>
                    {items.map((item, index) => (
                        <a className={s.link} href={item.href} key={index} rel="noreferrer noopener">{item.text}</a>
                    ))}
                    <button className={s.closeButton} onClick={() => setIsOpen(false)}>
                        <CloseIcon/>
                    </button>
                </div>,
                document.getElementById('root') as Element
            )}
        </>
    );
}
