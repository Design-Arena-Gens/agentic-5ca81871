const faqs = [
  {
    question: "Will the bot reply in Bangla or English?",
    answer:
      "Both! আমরা মূল বার্তা এবং সমস্ত দ্রুত উত্তরে দ্বিভাষিক কপি ব্যবহার করেছি যাতে প্রত্যেক গ্রাহক স্বাচ্ছন্দ্য বোধ করে।"
  },
  {
    question: "How do I switch to a human when needed?",
    answer:
      "Users can press “Talk to Admin”. We trigger a notification to your page inbox, tag the conversation, and pause automation until you respond."
  },
  {
    question: "Can we connect it with our website or shop?",
    answer:
      "Absolutely. The architecture is ready for Shopify, WooCommerce, or custom websites via quick links and webhook integrations."
  },
  {
    question: "What happens if the bot doesn’t know the answer?",
    answer:
      "We provide a gentle fallback in Bangla & English asking the user to rephrase or leave contact details so the admin can follow up."
  }
];

const FAQSection = () => {
  return (
    <section className="section">
      <h2>FAQ · প্রশ্নোত্তর</h2>
      <div className="faq">
        {faqs.map((faq) => (
          <article key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
