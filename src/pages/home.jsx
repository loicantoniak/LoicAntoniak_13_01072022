import React from "react"
// Icons
import chat from "../assets/icons/icon-chat.png"
import money from "../assets/icons/icon-money.png"
import security from "../assets/icons/icon-security.png"
import FeatureItem from "../components/featureItem/FeatureItem"

const MAPPING_FEATURES = [
  {
    icon: { icon: chat, alt: "Chat Icon" },
    title: "You are our #1 priority",
    text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    icon: { icon: money, alt: "Money Icon" },
    title: "More savings means higher rates",
    text: "The more you save with us, the higher your interest rate will be!",
  },
  {
    icon: { icon: security, alt: "Security Icon" },
    title: "Security you can trust",
    text: "We use top of the line encryption to make sure your data and money is always safe.",
  },
]

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </div>
      </section>

      <section className="features">
        {MAPPING_FEATURES.map((feature, i) => (
          <FeatureItem key={i} icon={feature.icon} title={feature.title} text={feature.text} />
        ))}
      </section>
    </main>
  )
}
