import React, {FC} from 'react';

import {InfoBlock} from '@component/app/components/info-block/info-block';
import resources from '@component/resources/resources.json';

import s from './patterns-available-info.module.css';

const { title, testingAvailableData } = resources.TestPatternsPage;
const { text, imagesSrc, buttonText } = testingAvailableData;

export const PatternsAvailableInfo: FC = () => {
    return (
        <InfoBlock
            title={title}
            mainContentComponent={<TextComponent />}
            buttonText={buttonText}
            onButtonClick={() => {}}
            imageSrc={imagesSrc}
        />
    );
}

const TextComponent = () => (
    <>
        <h2 className={s.title}>{testingAvailableData.title}</h2>
        {text.map((item, index) => (
            <p className={s.paragraph} key={index}>{item}</p>
        ))}
    </>
)
