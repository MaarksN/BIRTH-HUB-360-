import { LDR_TOOLS } from "@/lib/ldr-tools";
import { ToolCard } from "@/components/ldr/tool-card";

export default function LdrDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Tools & Agents</h2>
          <p className="text-muted-foreground">
            Manage your market intelligence operations with AI-powered tools.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {LDR_TOOLS.map((tool) => (
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
