import {FC, useState} from 'react';
import s from './faq.module.css';
import {Container} from '@component/app/components/container/container';
import resources from '@component/resources/resources.json';
import {Title} from '@component/app/components/title/title';
import cn from 'classnames';
import {FaqIcon} from '@component/app/components/faq/faq-icon';

const {title, items} = resources.FAQ;

export const FAQ: FC = () => {
    return (
        <Container>
            <Title>{title}</Title>
            <div className={s.items}>
                {items.map(({question, answer}, index) => (
                    <FAQItem question={question} answer={answer} key={index} />
                ))}
            </div>
        </Container>
    );
}

type FAQItemProps = {
    question: string;
    answer: string;
}

const FAQItem: FC<FAQItemProps> = ({question, answer}) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div onClick={() => setIsVisible(!isVisible)} className={s.item}>
            <div className={s.question}>
                <span className={s.questionText}>{question}</span>
                <FaqIcon className={s.icon} />
            </div>
            <div className={cn(s.answer, {[s.visible]: isVisible})}>{answer}</div>
        </div>
    );
}
