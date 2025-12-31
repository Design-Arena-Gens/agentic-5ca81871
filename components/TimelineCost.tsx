const timeline = [
  {
    tag: "Day 1",
    title: "Discovery & content prep",
    copy:
      "Collect existing FAQs, product highlights, and your brand voice guidelines. Finalise copy in Bangla & English."
  },
  {
    tag: "Day 2",
    title: "Conversation design",
    copy:
      "Build the welcome flow, persistent menu actions, and quick replies. Configure smart fallbacks and admin alerts."
  },
  {
    tag: "Day 3",
    title: "Testing & launch",
    copy:
      "Test across desktop/mobile Messenger, connect Facebook page, and deliver documentation + training video."
  }
];

const TimelineCost = () => {
  return (
    <section className="section">
      <h2>Timeline & investment</h2>
      <div className="grid" style={{ gap: "28px" }}>
        <div>
          <div className="timeline">
            {timeline.map((item) => (
              <div key={item.tag} className="timeline-item">
                <div className="timeline-tag">{item.tag}</div>
                <div className="timeline-content">
                  <span>{item.title}</span>
                  <p>{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pricing-card">
          <span style={{ fontWeight: 500, letterSpacing: "0.12em" }}>
            PROJECT FEE
          </span>
          <strong>৳18,500</strong>
          <p style={{ margin: 0 }}>
            Fixed price covering copywriting, bot build, testing, and Go-Live
            support. Includes one round of post-launch adjustments within 7
            days.
          </p>
          <hr style={{ opacity: 0.2, border: "none", borderTop: "1px solid rgba(255,255,255,0.25)" }} />
          <p style={{ margin: 0 }}>
            Optional add-ons: website/shop integration (from ৳6,000), monthly
            optimisation retainers (৳3,500).
          </p>
        </div>
      </div>
    </section>
  );
};

export default TimelineCost;
