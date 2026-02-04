import { CS_TOOLS } from "@/lib/cs-tools";
import { ToolCard } from "@/components/cs/tool-card";

export default function CsDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Success Tools</h2>
          <p className="text-muted-foreground">
            Maximize retention and customer lifetime value.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {CS_TOOLS.map((tool) => (
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
