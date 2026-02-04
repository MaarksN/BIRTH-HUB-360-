import { BDR_TOOLS } from "@/lib/bdr-tools";
import { ToolCard } from "@/components/bdr/tool-card";

export default function BdrDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Outbound Tools</h2>
          <p className="text-muted-foreground">
            Hunt and engage with target accounts using AI-powered tools.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {BDR_TOOLS.map((tool) => (
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
