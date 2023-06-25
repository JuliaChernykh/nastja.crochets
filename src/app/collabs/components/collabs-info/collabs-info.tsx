import React, {FC} from 'react';

import resources from '@component/resources/resources.json';
import {InfoBlock} from '@component/app/components/info-block/info-block';
import {openEmailClient} from '@component/app/helpers/openEmailClient';

import s from './collabs-info.module.css';

const {collabsInfo} = resources.CollabsPage;
const {email, subject, text} = collabsInfo.contactData;

export const CollabsInfo: FC = () => {
    const TextComponent = () => (
        <>
            {collabsInfo.text.map((item, index) => (
                <p className={s.paragraph} key={index}>{item}</p>
            ))}
        </>
    )
    return (
        <InfoBlock {...collabsInfo} onButtonClick={() => openEmailClient(email, subject, text)} mainContentComponent={<TextComponent/>} />
    );
}
