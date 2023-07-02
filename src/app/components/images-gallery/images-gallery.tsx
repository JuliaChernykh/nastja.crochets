import {FC, useState} from 'react';
import {useMedia} from 'react-use';
import Slider from 'react-slick';
import cn from 'classnames';

import {Button} from '@component/app/components/button/button';
import {ExpandedImagesGallery} from '@component/app/components/expanded-images-gallery/expanded-images-gallery';
import {WithClassName} from '@component/app/types/types';
import {tabletMediaQuery} from '@component/styles/media';

import s from './images-gallery.module.css';
import '../../../styles/slick-carousel.css';

type ImagesGalleryProps = WithClassName & {
    imagesSrc: string[];
}

const PREVIEW_IMAGES_NUMBER = 1;

export const ImagesGallery: FC<ImagesGalleryProps> = ({imagesSrc, className}) => {
    const [isExpandedView, setIsExpandedView] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);
    const isTablet = useMedia(tabletMediaQuery);

    const onImgClick = (idx: number) => {
        setIsExpandedView(true);
        setSelectedImage(idx);
    }

    return (
        <>
            <ExpandedImagesGallery
                imagesSrc={imagesSrc}
                visible={isExpandedView}
                selectedImage={selectedImage}
                onClose={() => setIsExpandedView(false)}
            />
            {isTablet ? (
                <DefaultGallery imagesSrc={imagesSrc} onImgClick={onImgClick} className={className} />
            ):(
                <CarouselGallery imagesSrc={imagesSrc} />
            )}

        </>
    );
}

const CarouselGallery: FC<ImagesGalleryProps> = ({imagesSrc}) => {
    return (
        <Slider slidesToShow={1} slidesToScroll={1} speed={500} infinite={false} centerMode centerPadding={'3%'}>
            {imagesSrc.map((imageSrc, index) => (
                <img
                    className={s.image}
                    src={imageSrc}
                    alt=""
                    key={index}
                />
            ))}
        </Slider>
    )
}

type DefaultGalleryProps = ImagesGalleryProps & {
    onImgClick(number): void;
}

const DefaultGallery: FC<DefaultGalleryProps> = ({imagesSrc, onImgClick, className}) => {
    const [isAllImagesVisible, setIsAllImagesVisible] = useState(false);
    const isButtonVisible = imagesSrc.length > PREVIEW_IMAGES_NUMBER && !isAllImagesVisible;

    return (
        <div className={cn(s.gallery, className)}>
            {imagesSrc.slice(0, PREVIEW_IMAGES_NUMBER).map((imageSrc, index) => (
                <img
                    onClick={() => onImgClick(index)}
                    className={s.image}
                    src={imageSrc}
                    alt=""
                    key={index}
                />
            ))}
            {isAllImagesVisible && imagesSrc.slice(PREVIEW_IMAGES_NUMBER).map((imageSrc, index) => (
                <img
                    onClick={() => onImgClick(PREVIEW_IMAGES_NUMBER + index)}
                    className={s.image}
                    src={imageSrc}
                    alt=""
                    key={index}
                />
            ))}
            {isButtonVisible && (
                <Button
                    size="s"
                    type="filled"
                    className={s.button}
                    onClick={() => setIsAllImagesVisible(!isAllImagesVisible)}
                >
                    See more
                </Button>
            )}
        </div>
    )
}
