type Stage = {
  id: string;
  name: string;
  done?: boolean;
  current?: boolean;
};

export default function StageProgress({ stages }: { stages: Stage[] }) {
  const completed = stages.filter((s) => s.done).length;
  const pct = Math.round((completed / stages.length) * 100);

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm text-muted-foreground">Deal progress</div>
        <div className="text-sm font-medium">{pct}%</div>
      </div>
      <div className="h-2 w-full rounded-full bg-muted/60">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {stages.map((s) => (
          <div key={s.id} className="text-xs">
            <span className={
              s.done ? "text-foreground" : s.current ? "text-primary" : "text-muted-foreground"
            }>
              • {s.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
