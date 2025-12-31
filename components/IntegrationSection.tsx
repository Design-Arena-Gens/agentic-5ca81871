const IntegrationSection = () => {
  return (
    <section className="section">
      <h2>Ready for future integrations</h2>
      <p>
        We structured the bot with modular actions so that when your website or
        e-commerce store is ready, we can connect it in minutes.
      </p>
      <div className="grid three">
        <article className="card">
          <h3>Shop integration hooks</h3>
          <p>
            Persistent menu buttons can deep-link to product collections, track
            UTM parameters, and trigger checkout flows.
          </p>
        </article>
        <article className="card">
          <h3>Automation platform agnostic</h3>
          <p>
            Built on top of Meta&apos;s official Messenger API via Manychat or
            custom Node webhook — easy to migrate or extend.
          </p>
        </article>
        <article className="card">
          <h3>Analytics & insights</h3>
          <p>
            Conversation tags, conversion tracking, and support tickets can sync
            to Google Sheets, Airtable, or your CRM.
          </p>
        </article>
      </div>
    </section>
  );
};

export default IntegrationSection;
