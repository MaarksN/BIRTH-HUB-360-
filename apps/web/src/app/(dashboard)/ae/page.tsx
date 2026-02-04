import { AE_TOOLS } from "@/lib/ae-tools";
import { ToolCard } from "@/components/ae/tool-card";

export default function AeDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Closer Tools</h2>
          <p className="text-muted-foreground">
            Close deals faster with predictive AI insights.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {AE_TOOLS.map((tool) => (
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
