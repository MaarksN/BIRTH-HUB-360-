import { REVOPS_TOOLS } from "@/lib/revops-tools";
import { ToolCard } from "@/components/revops/tool-card";

export default function RevOpsDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Ops Tools</h2>
          <p className="text-muted-foreground">
            Optimize revenue operations and data integrity.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {REVOPS_TOOLS.map((tool) => (
          <ToolCard
            key={tool.id}
            id={tool.id}
            name={tool.name}
            description={tool.description}
            icon={tool.icon}
          />
        ))}
      </div>
    </div>
  );
}
