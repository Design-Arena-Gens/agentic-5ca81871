const Hero = () => {
  return (
    <section className="section">
      <div className="pill">MD Siam Islam · Facebook Messenger Bot</div>
      <div className="hero">
        <div>
          <h1>
            Always-on support for your community{" "}
            <span style={{ color: "var(--primary)" }}>— দিন-রাত এক ক্লিকেই</span>
          </h1>
          <p>
            We crafted a bilingual Messenger experience that greets visitors,
            answers popular questions instantly, and routes important
            conversations straight to you.
          </p>
          <div className="badge-row">
            <span className="badge">Bangla + English flow</span>
            <span className="badge">Optimised for mobile Messenger</span>
            <span className="badge">Built for MD Siam Islam</span>
          </div>
        </div>
        <div className="card dual-language">
          <span>স্বাগতম বার্তা (Bangla)</span>
          <p>
            হ্যালো! 👋 আমি <strong>MD Siam Islam</strong> পেজের স্মার্ট সহকারী।
            আমি পণ্য তথ্য, দ্রুত উত্তর এবং যেকোনো সময় সাহায্য করতে প্রস্তুত।
          </p>
          <span>Welcome Message (English)</span>
          <p>
            Hi there! 👋 You&apos;re chatting with the smart assistant for{" "}
            <strong>MD Siam Islam</strong>. Tap the menu to explore products,
            FAQs, or talk to the admin instantly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
