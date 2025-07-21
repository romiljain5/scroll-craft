import { Rocket, ThumbsUp, Users, MessageCircle, Calendar } from "lucide-react";
import { Button } from "../../components/Button.jsx";

export default function Services() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">What We Offer</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          From strategy to execution, we help brands grow their digital presence, engage their audience, and convert followers into loyal customers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <ServiceCard
          icon={<Rocket className="w-8 h-8 text-primary" />}
          title="Social Media Strategy"
          description="Tailored strategies to align with your brand goals, audience insights, and competitive landscape."
        />
        <ServiceCard
          icon={<Calendar className="w-8 h-8 text-primary" />}
          title="Content Creation & Scheduling"
          description="High-quality, scroll-stopping visuals and captions—strategically scheduled to maximize engagement."
        />
        <ServiceCard
          icon={<ThumbsUp className="w-8 h-8 text-primary" />}
          title="Ad Campaign Management"
          description="Data-driven paid campaigns that drive ROI across platforms like Meta, TikTok, and LinkedIn."
        />
        <ServiceCard
          icon={<Users className="w-8 h-8 text-primary" />}
          title="Influencer Collaboration"
          description="Partnering with the right creators to amplify your reach and authenticity through influencer marketing."
        />
        <ServiceCard
          icon={<MessageCircle className="w-8 h-8 text-primary" />}
          title="Community Engagement"
          description="We foster real-time conversations with your followers to build loyalty and brand trust."
        />
      </div>

      <div className="text-center pt-8">
        <h3 className="text-2xl font-semibold">Ready to elevate your brand?</h3>
        <p className="text-muted-foreground mb-6">
          Let’s create something amazing together. Get a free consultation today.
        </p>
        <Button size="lg">Get Started</Button>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="flex items-start space-x-4 bg-muted/30 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
      <div>{icon}</div>
      <div>
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  );
}
