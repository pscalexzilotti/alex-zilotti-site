import Section from "@/components/shared/section";
import SectionHeader from "@/components/shared/section-header";
import IconCard from "@/components/shared/icon-card";
import homeData from "@/content/home.json";
import { Briefcase, Mic2, Scale, Users } from "lucide-react";

const icons = [<Briefcase size={28} />, <Mic2 size={28} />, <Scale size={28} />, <Users size={28} />];

export default function ForWhomSection() {
  return (
    <Section muted>
      <SectionHeader title="Para quem e o meu trabalho" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {homeData.forWhom.map((item, i) => (
          <IconCard key={i} icon={icons[i % icons.length]} title={item.title} text={item.text} />
        ))}
      </div>
    </Section>
  );
}
