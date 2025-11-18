import { AccordionItem } from './types';

type Props = {
    items: AccordionItem[];
};

function Accordion({ items }: Props) {
    return (
        <div className='divide-y divide-neutral-200 border border-neutral-200 rounded-xl overflow-hidden'>
            {items.map((f) => (
                <details key={f.id} className='group'>
                    <summary className='cursor-pointer list-none px-5 py-4 flex items-center justify-between'>
                        <span className='font-medium text-neutral-900'>
                            {f.title}
                        </span>
                        <span className='ml-4 text-neutral-400 group-open:rotate-45 transition-transform text-xl select-none'>
                            +
                        </span>
                    </summary>
                    <div className='px-5 pb-5 text-neutral-700'>
                        {f.description}
                    </div>
                </details>
            ))}
        </div>
    );
}

export default Accordion;
