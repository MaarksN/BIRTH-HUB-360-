import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ToolCardProps {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export function ToolCard({ id, name, description, icon }: ToolCardProps) {
  return (
    <Link href={`/revops/${id}`} className="block transition-all hover:scale-105">
      <Card className="h-full hover:border-primary/50 cursor-pointer">
        <CardHeader>
          <CardTitle className="text-lg flex items-center justify-between">
            {name}
            {/* Icon placeholder */}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm text-primary font-medium">
            Open Tool <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
