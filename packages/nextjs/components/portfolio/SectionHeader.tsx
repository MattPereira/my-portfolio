interface ISectionHeader {
  title: string;
}

export function SectionHeader({ title }: ISectionHeader) {
  return (
    <div className="flex justify-center">
      <h2
        id={title}
        className={`border border-base-content font-cubano text-5xl md:text-6xl text-center mb-14 w-full rounded-2xl py-2`}
      >
        {title}
      </h2>
    </div>
  );
}
