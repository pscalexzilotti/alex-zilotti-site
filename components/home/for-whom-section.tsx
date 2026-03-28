import Section from "@/components/shared/section";
import SectionHeader from "@/components/shared/section-header";
import IconCard from "@/components/shared/icon-card";
import homeData from "@/content/home.json";

export default function ForWhomSection() {
  const { for_whom } = homeData;
  return (
    <Section muted>
      <SectionHeader title={for_whom.title} subtitle={for_whom.subtitle} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {for_whom.items.map((item, i) => (
          <IconCard key={i} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
    </Section>
  );
}
