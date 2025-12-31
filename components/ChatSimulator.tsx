'use client';

import { useEffect, useMemo, useState } from "react";

type Sender = "bot" | "user";

type Message = {
  id: string;
  from: Sender;
  text: string;
};

type QuickReply = {
  id: string;
  label: string;
  payload: string;
};

const initialBotMessages: Message[] = [
  {
    id: "welcome",
    from: "bot",
    text:
      "👋 হ্যালো! আমি MD Siam Islam পেজের সহকারী। Need help in Bangla or English? Tap a quick reply below."
  },
  {
    id: "menu",
    from: "bot",
    text:
      "Main menu: ১) View Products • ২) Talk to Admin • ৩) FAQ. I can also answer common questions instantly."
  }
];

const quickReplyMap: Record<
  string,
  {
    user: string;
    bot: string;
  }
> = {
  products:
    {
      user: "Show me the latest products, please!",
      bot:
        "Here are our highlighted categories:\n• Premium Islamic Attire (শর্ট ড্রেস থেকে জুব্বা)\n• Lifestyle Accessories\n• Special Offers of the week.\n\nTap the 'View Products' button anytime for the full list."
    },
  warranty: {
    user: "Do you offer product warranties?",
    bot:
      "Yes! ✅ Most products include a 7-day replacement guarantee and extended support for premium collections. বিস্তারিত জানার জন্য পণ্য তালিকা দেখুন।"
  },
  delivery: {
    user: "How fast is delivery?",
    bot:
      "We dispatch within 24 hours inside Dhaka and 2-4 days nationwide. আন্তর্জাতিক শিপমেন্টের জন্য দয়া করে Admin এর সাথে যোগাযোগ করুন."
  },
  admin: {
    user: "I want to talk to a human.",
    bot:
      "No problem! আমি এখনই আপনার অনুরোধ পাঠিয়ে দিচ্ছি। An admin will respond within 15 minutes during business hours."
  },
  hours: {
    user: "What are your support hours?",
    bot:
      "The bot replies instantly 24/7. Live admin support: 10am–10pm (GMT+6) every day. জরুরি কিছু হলে quick form এর মাধ্যমে আমাদের জানান।"
  }
};

const quickReplies: QuickReply[] = [
  { id: "products", label: "🛍️ View Products", payload: "products" },
  { id: "delivery", label: "🚚 Delivery Time", payload: "delivery" },
  { id: "warranty", label: "🛡️ Warranty", payload: "warranty" },
  { id: "admin", label: "👨‍💻 Talk to Admin", payload: "admin" },
  { id: "hours", label: "⏰ Support Hours", payload: "hours" }
];

const ChatSimulator = () => {
  const [messages, setMessages] = useState<Message[]>(initialBotMessages);
  const [cooldown, setCooldown] = useState(false);

  const availableReplies = useMemo(() => quickReplies, []);

  useEffect(() => {
    if (!cooldown) {
      return;
    }
    const timer = setTimeout(() => setCooldown(false), 600);
    return () => clearTimeout(timer);
  }, [cooldown]);

  const handleReply = (payload: string) => {
    if (cooldown) return;

    const reply = quickReplyMap[payload];
    if (!reply) return;

    setMessages((prev) => [
      ...prev,
      {
        id: `${payload}-user-${Date.now()}`,
        from: "user",
        text: reply.user
      }
    ]);

    setCooldown(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `${payload}-bot-${Date.now()}`,
          from: "bot",
          text: reply.bot
        }
      ]);
    }, 350);
  };

  return (
    <section className="section">
      <h2>Preview the Messenger conversation flow</h2>
      <p>
        Experience how the bot greets visitors, guides them through the menu,
        and answers popular questions without human involvement.
      </p>
      <div className="chat-surface">
        <div className="chat-messages">
          {messages.map((message) => {
            const lines = message.text.split("\n");
            return (
              <div
                key={message.id}
                className={`bubble ${message.from === "bot" ? "bot" : "user"}`}
              >
                {lines.map((chunk, index) => (
                  <span key={index}>
                    {chunk}
                    {index !== lines.length - 1 && <br />}
                  </span>
                ))}
              </div>
            );
          })}
        </div>
        <div>
          <span style={{ display: "block", marginBottom: "10px", color: "var(--text-light)", fontWeight: 600 }}>
            Quick replies · দ্রুত উত্তর
          </span>
          <div className="quick-replies">
            {availableReplies.map((reply) => (
              <button
                key={reply.id}
                className="quick-reply"
                type="button"
                onClick={() => handleReply(reply.payload)}
              >
                {reply.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSimulator;
