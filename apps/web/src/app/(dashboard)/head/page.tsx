import { HEAD_TOOLS } from "@/lib/head-tools";
import { ToolCard } from "@/components/head/tool-card";

export default function HeadDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Leadership Tools</h2>
          <p className="text-muted-foreground">
            Manage team performance and health.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {HEAD_TOOLS.map((tool) => (
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
