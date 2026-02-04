"use client";

import { LDR_TOOLS } from "@/lib/ldr-tools";
import { notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ToolPage({ params }: { params: { toolId: string } }) {
  const tool = LDR_TOOLS.find((t) => t.id === params.toolId);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  if (!tool) {
    notFound();
  }

  const handleExecute = async () => {
    setLoading(true);
    try {
        // In a real app, this would use the tool.endpoint from config
        // For now we simulate a call
        const response = await fetch(`http://localhost:3001${tool.endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ simulated: true })
        });
        const data = await response.json();
        setResult(data);
    } catch (error) {
        console.error("Tool execution failed", error);
        setResult({ error: "Failed to execute tool" });
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">{tool.name}</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
            <CardHeader>
                <CardTitle>Input Parameters</CardTitle>
                <CardDescription>Configure the agent parameters.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="p-4 border rounded-md bg-muted/20">
                        <p className="text-sm text-muted-foreground">This tool requires specific input parameters defined by the {tool.id} schema.</p>
                    </div>
                    <Button onClick={handleExecute} disabled={loading}>
                        {loading ? "Running AI Agent..." : "Execute Agent"}
                    </Button>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Results</CardTitle>
                <CardDescription>Output from the AI Agent.</CardDescription>
            </CardHeader>
            <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-auto max-h-[300px] text-sm">
                    {result ? JSON.stringify(result, null, 2) : "No results yet."}
                </pre>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
