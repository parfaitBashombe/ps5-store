type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

const SectionTitle = ({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionTitleProps) => {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <span className="eyebrow-badge mb-4 inline-flex">{eyebrow}</span>
      ) : null}

      <h2
        className="font-display text-3xl font-bold tracking-tight md:text-4xl"
        style={{ color: "var(--foreground)" }}
      >
        {title}
      </h2>

      {description ? (
        <p
          className="mt-4 text-base leading-7 md:text-lg"
          style={{ color: "var(--muted-foreground)" }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionTitle;
