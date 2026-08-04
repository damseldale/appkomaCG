"use client";

export function Canvas() {
  return (
    <section className="flex flex-1 items-center justify-center overflow-auto bg-[#1f1f1f]">
      <div className="relative rounded-xl bg-white shadow-2xl">
        {/* Area kerja 16:9 */}
        <div className="h-[720px] w-[1280px]">
          <div className="flex h-full items-center justify-center text-gray-400">
            Canvas 1280 × 720
          </div>
        </div>
      </div>
    </section>
  );
}
