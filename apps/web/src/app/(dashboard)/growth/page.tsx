import { GROWTH_TOOLS } from "@/lib/growth-tools";
import { ToolCard } from "@/components/growth/tool-card";

export default function GrowthDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Growth Tools</h2>
          <p className="text-muted-foreground">
            Accelerate acquisition and retention.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {GROWTH_TOOLS.map((tool) => (
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
