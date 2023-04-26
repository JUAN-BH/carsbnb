import React, { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';

export default function Question({ q, a }) {
  const [isQuestion, setIsQuestion] = useState(false);

  function hanldeOpenAnsw() {
    setIsQuestion(!isQuestion);
  }

  return (
    <div className="questionCon">
      <div
        className={`question ${isQuestion && 'questionActive'}`}
        onClick={hanldeOpenAnsw}
        aria-hidden="true"
      >
        <p>{q}</p>
        <IconChevronDown />
      </div>
      <p className={`answ ${isQuestion && 'answActive'}`}>
        {isQuestion ? a : ' '}
      </p>
    </div>
  );
}
