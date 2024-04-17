import { FeatureCard } from '../components/FeatureCard/FeatureCard';
import iconPen from '../assets/icon-pen.svg';
import iconClock from '../assets/icon-clock.svg';
import iconHeart from '../assets/icon-heart.svg';

export const Feature = () => {
  return (
    <section className="flex gap-[16px] mt-[146px] px-[151px]">
      <FeatureCard
        icon={iconPen}
        isExpanded={false}
        title="Modern & Trendy Design"
        description="Dictas scaevola democritum cu his, magna abhorreant dissentias ut"
      />
      <FeatureCard
        icon={iconClock}
        isExpanded={true}
        title="Save your Time"
        description="oportere patrioque sit et, eum ne prima nemore perfecto. Eu cibo quidam eleifend per."
      />
      <FeatureCard
        icon={iconHeart}
        isExpanded={false}
        title="Made with Love"
        description="Inimicus hendrerit an duo, feugiat adipiscing everti nostrum id."
      />
    </section>
  )
}