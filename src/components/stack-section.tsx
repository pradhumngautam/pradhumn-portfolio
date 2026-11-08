import SectionFrame from "@/components/section-frame";
import { stack } from "@/lib/profile";
export default function StackSection() {
  return (
    <SectionFrame
      id="stack"
      number="05"
      title="Stack"
      description="Tools I use to turn designs into working systems."
    >
      <dl className="stack-list">
        {stack.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </SectionFrame>
  );
}
