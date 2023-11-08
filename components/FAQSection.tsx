import { faq } from "@/config/site";
import FAQItem from "./FAQItem";

function FAQSection() {
  return (
    <section className='bg-zinc-950 px-4'>
      <div className='py-10 container max-w-screen-md'>
        <h2 className='text-3xl font-extrabold'>FAQ</h2>
        <p className='text-lg text-zinc-400'>Frequently Asked Questions</p>
        <div className='mt-6'>
          {faq.map((faqItem, index) => (
            <FAQItem key={`faq-${index + 1}`} {...faqItem} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
