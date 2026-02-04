import { SDR_TOOLS } from "@/lib/sdr-tools";
import { ToolCard } from "@/components/sdr/tool-card";

export default function SdrDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Inbound Tools</h2>
          <p className="text-muted-foreground">
            Qualify and engage inbound leads with AI precision.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {SDR_TOOLS.map((tool) => (
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
