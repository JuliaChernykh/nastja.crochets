import {FC, useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';

import {CloseIcon} from '@component/app/components/icons/close-icon/close-icon';

import s from './expanded-images-gallery.module.css';

type ExpandedImagesGalleryProps = {
    imagesSrc: string[];
    visible?: boolean;
    onClose(): void;
    selectedImage: number;
}

export const ExpandedImagesGallery: FC<ExpandedImagesGalleryProps> = ({imagesSrc, visible, onClose, selectedImage}) => {
    const ref = useRef<null | HTMLImageElement>(null);
    useEffect(() => {
        if (visible) {
            document.body.style.overflow = 'hidden';
            ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'center'});
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [visible])

    useEffect(() => {
        const closeOnEscapeKey = (e: KeyboardEvent) => e.key === 'Escape' ? onClose() : null;
        document.body.addEventListener('keydown', closeOnEscapeKey);
        return () => {
            document.body.removeEventListener('keydown', closeOnEscapeKey);
        };
    }, [onClose]);

    if (!visible) {
        return null;
    }
    return createPortal(
        <div className={s.expandedImagesWrapper}>
            <div className={s.expandedImagesContainer}>
                <div onClick={onClose} className={s.closeButton}><CloseIcon /></div>
                {imagesSrc.map((imageSrc, index) => (
                    <img className={s.expandedImage} src={imageSrc} alt="" key={index} ref={selectedImage === index ? ref : null} />
                ))}
            </div>
        </div>,
        document.getElementById('root') as Element
    )
}
