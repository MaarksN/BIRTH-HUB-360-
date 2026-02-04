import { SUPPORT_TOOLS } from "@/lib/support-tools";
import { ToolCard } from "@/components/support/tool-card";

export default function SupportDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Support Tools</h2>
          <p className="text-muted-foreground">
            Resolve issues faster with AI-powered support.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {SUPPORT_TOOLS.map((tool) => (
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
