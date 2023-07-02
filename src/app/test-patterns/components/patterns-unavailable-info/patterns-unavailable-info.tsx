import React, {FC, FormEvent, useState} from 'react';
import cn from 'classnames';

import resources from '@component/resources/resources.json';
import {InfoBlock} from '@component/app/components/info-block/info-block';
import {Input} from '@component/app/components/input/input';
import {validateEmail} from '@component/app/helpers/validateEmail';
import {Button} from '@component/app/components/button/button';
import {Checkbox} from '@component/app/components/checkbox/checkbox';

import s from './patterns-unavailable-info.module.css';

const { title, testingUnavailableData } = resources.TestPatternsPage;
const { imageSrc, text, subscriptionForm } = testingUnavailableData;

export const PatternsUnavailableInfo: FC = () => {

    return (
      <InfoBlock
        title={title}
        imageSrc={imageSrc}
        mainContentComponent={<PatternsUnavailableMainContent />}
      />
    );
};

const PatternsUnavailableMainContent = () => {
    const [inputValue, setInputValue] = useState('');
    const [isPolicyAccepted, setIsPolicyAccepted] = useState(false);
    const [validationError, setValidationError] = useState(false);

    const onButtonClick = () => {
        if (validateEmail(inputValue)) {
            setValidationError(false);
        } else {
            setValidationError(true);
        }
    }

    const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <>
            {text.map((item, index) => (
                <p className={s.paragraph} key={index}>
                    {item}
                </p>
            ))}
            <form className={s.form} noValidate onSubmit={onFormSubmit}>
                <Input
                    isValidationError={validationError}
                    value={inputValue}
                    onChange={setInputValue}
                    placeholderText={subscriptionForm.emailPlaceholderText}
                    errorText={subscriptionForm.emailValidationErrorText}
                    type="email"
                />
                <div className={s.policyAgreement}>
                    <Checkbox
                        className={s.checkbox}
                        isChecked={isPolicyAccepted}
                        onChange={() => setIsPolicyAccepted(!isPolicyAccepted)}
                    />
                    <span className={s.text}>{subscriptionForm.policy.text}</span>
                    <a
                        className={cn(s.text, s.link)}
                        href={subscriptionForm.policy.link.href}
                        rel="noreferrer noopener"
                        target="_blank"
                    >
                        {subscriptionForm.policy.link.text}
                    </a>
                </div>
                <Button
                    disabled={!isPolicyAccepted}
                    onClick={onButtonClick}
                >
                    {subscriptionForm.buttonText}
                </Button>
            </form>
        </>
    );
}
