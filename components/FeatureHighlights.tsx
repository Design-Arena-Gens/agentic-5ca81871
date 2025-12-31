type Feature = {
  title: string;
  description: string;
  detail: string;
};

const features: Feature[] = [
  {
    title: "Personalized welcome",
    description: "Auto greets every visitor in Bangla & English",
    detail:
      "Delivers a warm greeting that mirrors your brand voice and nudges visitors towards the main menu buttons."
  },
  {
    title: "Menu driven journeys",
    description: "Products · Talk to Admin · FAQ – just one tap away",
    detail:
      "Messenger persistent menu keeps customers oriented while a guided carousel showcases top offerings."
  },
  {
    title: "Smart quick replies",
    description: "Instant answers to the most common questions",
    detail:
      "We map your frequent inquiries into quick replies so users get help within seconds, 24/7."
  }
];

const FeatureHighlights = () => {
  return (
    <section className="section">
      <h2>What your assistant delivers day one</h2>
      <div className="grid three">
        {features.map((feature) => (
          <article key={feature.title} className="card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <p style={{ marginTop: "12px" }}>{feature.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeatureHighlights;
