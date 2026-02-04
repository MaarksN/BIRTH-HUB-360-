import { ONBOARDING_TOOLS } from "@/lib/onboarding-tools";
import { ToolCard } from "@/components/onboarding/tool-card";

export default function OnboardingDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Implementation Tools</h2>
          <p className="text-muted-foreground">
            Streamline customer onboarding and time-to-value.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {ONBOARDING_TOOLS.map((tool) => (
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
