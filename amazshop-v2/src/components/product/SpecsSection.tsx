import type { ProductSpec } from "@/types";

interface SpecsSectionProps {
  specs: ProductSpec[];
}

export default function SpecsSection({ specs }: SpecsSectionProps) {
  return (
    <div className="mt-12 bg-white/50 rounded-[32px] p-8">
      <h3 className="text-xl font-bold mb-6">Technical Specifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="flex flex-col gap-1 border-b border-main/5 pb-4"
          >
            <span className="text-[10px] font-black uppercase text-accent tracking-widest">
              {spec.label}
            </span>
            <span className="font-bold text-sm">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
