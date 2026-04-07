type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (!items.length) return null;

  return (
    <nav aria-label="パンくず" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <a href={item.href} className="transition hover:text-slate-900 hover:underline">
                  {item.label}
                </a>
              ) : (
                <span className={isLast ? "font-medium text-slate-700" : ""}>
                  {item.label}
                </span>
              )}

              {!isLast && <span className="text-slate-400">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}