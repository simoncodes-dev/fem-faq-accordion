import "./Accordion.css";
import { useState } from "react";

function Accordion({ title, answer }) {
    const [open, setOpen] = useState(false);

    const toggleFaq = () => {
        setOpen(!open);
    };
    return (
        <article className="faq">
            <div className="title" onClick={toggleFaq}>
                {title}
                <span className="open-btn">
                    <button onClick={toggleFaq}>
                        <img
                            onClick={toggleFaq}
                            src={open ? "./icon-minus.svg" : "./icon-plus.svg"}
                            alt={`Expand ${title}`}
                        />
                    </button>
                </span>
            </div>
            <div className={`answer ${open ? "answer-open" : ""}`}>
                {answer}
            </div>
        </article>
    );
}

export default Accordion;
