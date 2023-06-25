import {FC} from 'react';

import resources from '@component/resources/resources.json';
import {Container} from '@component/app/components/container/container';

import s from './collabs-list.module.css';

const {collabsList} = resources.CollabsPage;

export const CollabsList: FC = () => {
    return (
        <Container className={s.collabsList}>
            {collabsList.map(({title, description, link, imageSrc}, index) => (
                <div className={s.item} key={index}>
                    {imageSrc !== undefined && <img className={s.image} src={imageSrc} alt="" />}
                    <div>
                        <h2 className={s.title}>{title}</h2>
                        <p className={s.description}>{description}</p>
                        <a className={s.link} href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</a>
                    </div>
                </div>
            ))}
        </Container>
    );
}
