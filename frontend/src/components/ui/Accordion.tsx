import { useState } from 'react';

export type FaqItem = {
  q: string;
  a: string;
};

export function Accordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div className="faq-item" key={`${item.q}-${index}`}>
            <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : index)}>
              {item.q}
              <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            <div className={`faq-panel ${isOpen ? 'open' : ''}`}>
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
