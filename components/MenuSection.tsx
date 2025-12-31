const menuItems = [
  {
    title: "View Products",
    subtitle: "পণ্যের তালিকা · Collections & weekly offers",
    detail:
      "Displays featured categories, pricing highlights, and direct checkout links. Easy to extend with your e-commerce catalogue."
  },
  {
    title: "Talk to Admin",
    subtitle: "Live support · Human handover",
    detail:
      "Captures the user intent, tags the conversation, and escalates to you via Messenger notification with context."
  },
  {
    title: "FAQ",
    subtitle: "Top 6 questions answered instantly",
    detail:
      "Curated responses for delivery, payments, warranty, sizing, and return policy — all available in Bangla & English."
  }
];

const MenuSection = () => {
  return (
    <section className="section">
      <h2>Main menu experience (Persistent Menu)</h2>
      <p>
        The bot keeps a fixed three-button menu so customers never get lost.
        Every action can be tracked and extended with your website or Shopify
        store later.
      </p>
      <div className="menu-buttons">
        {menuItems.map((item) => (
          <div key={item.title} className="menu-button">
            <div>
              <strong>{item.title}</strong>
              <small>{item.subtitle}</small>
            </div>
            <span style={{ color: "var(--primary)" }}>›</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "24px" }} className="card">
        <h3>24/7 automation</h3>
        <p>
          • Instant replies on weekends and holidays{" "}
          <br />
          • Smart fallback messages when the bot does not understand{" "}
          <br />• Option to capture phone/email for complex issues
        </p>
      </div>
    </section>
  );
};

export default MenuSection;
