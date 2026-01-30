import React, { useState } from 'react';
import { Briefcase, Shuffle, AlertCircle, BookOpen, Wallet, Mail, ShieldCheck, MonitorPlay, ChevronDown } from 'lucide-react';
import './Accordion.css';

const AccordionItem = ({ item, isOpen, onToggle }) => {
    return (
        <div className="accordion-item">
            <button className="accordion-header" onClick={onToggle}>
                <div className="accordion-header-content">
                    {item.icon}
                    <span className="accordion-question">{item.question}</span>
                </div>
                <ChevronDown size={20} className={`accordion-chevron ${isOpen ? 'open' : ''}`} />
            </button>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                <div className="accordion-answer">
                    <p>{item.answer}</p>
                </div>
            </div>
        </div>
    );
};

const Accordion = ({ data, defaultOpen = null }) => {
    const [openIndex, setOpenIndex] = useState(defaultOpen);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion-container">
            <h1 className="accordion-title">General Questions</h1>
            <div className="accordion-list">
                {data.map((item, index) => (
                    <AccordionItem
                        key={index}
                        item={item}
                        isOpen={openIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Accordion;
