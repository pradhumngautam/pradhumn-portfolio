import SmoothReveal from "@/components/smooth-reveal";

export default function QuoteSection() {
  return (
    <SmoothReveal className="mt-14 w-full" delay={0.25}>
      <section className="relative mx-auto w-full rounded-2xl border border-dashed border-zinc-800 bg-[#141415] px-4 sm:px-6 md:px-8">
        <div className="absolute left-0 top-4 h-px w-full bg-zinc-800 sm:top-6 md:top-8" />
        <div className="absolute bottom-4 left-0 h-px w-full bg-zinc-800 sm:bottom-6 md:bottom-8" />
        <div className="relative w-full border-x border-zinc-800">
          <span className="absolute -left-[3px] top-4 h-1 w-1 rounded-full bg-emerald-400 outline outline-8 outline-[#141415] sm:top-6 md:top-8" />
          <span className="absolute -right-[3px] top-4 h-1 w-1 rounded-full bg-emerald-400 outline outline-8 outline-[#141415] sm:top-6 md:top-8" />
          <span className="absolute -bottom-[2px] -left-[3px] h-1 w-1 rounded-full bg-emerald-400 outline outline-8 outline-[#141415] sm:bottom-6 md:bottom-8" />
          <span className="absolute -bottom-[2px] -right-[3px] h-1 w-1 rounded-full bg-emerald-400 outline outline-8 outline-[#141415] sm:bottom-6 md:bottom-8" />
          <div className="relative z-20 mx-auto px-7 py-8 text-left">
            <h3 className="mb-3 font-medium text-[#EEEEEE]">Engineering principle</h3>
            <p className="italic text-[#B4B4B4]">
              “Build the simplest system that remains dependable when the happy
              path ends.”
            </p>
          </div>
        </div>
      </section>
    </SmoothReveal>
  );
}
