interface ISectionContainer {
  children: React.ReactNode;
  bgcolor?: string;
}

export function SectionContainer({ children, bgcolor }: ISectionContainer) {
  return (
    <section className={`py-16 ${bgcolor}`}>
      <div className="container mx-auto px-5 md:px-0">{children}</div>
    </section>
  );
}
