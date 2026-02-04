export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-muted/40 p-4">
        <h1 className="text-xl font-bold tracking-tight">Onboarding - Implementation</h1>
      </header>
      <main className="flex-1 p-4 md:p-8 pt-6">
        {children}
      </main>
    </div>
  );
}
