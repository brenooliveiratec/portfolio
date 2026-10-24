import { Network, Webhook } from "lucide-react";

type TechnologyIconProps = {
  name: string;
  size?: number;
};

const technologyLogos: Record<string, string | undefined> = {
  React: "/images/technologies/react.svg",
  TypeScript: "/images/technologies/typescript.svg",
  "Node.js": "/images/technologies/nodejs.svg",
  "React Router": "/images/technologies/reactrouter.svg",
  Supabase: "/images/technologies/supabase.svg",
  PostgreSQL: "/images/technologies/postgresql.svg",
  Prisma: "/images/technologies/prisma.svg",
  Docker: "/images/technologies/docker.svg",
  Git: "/images/technologies/git.svg",
  GitHub: "/images/technologies/github.svg",
};

export default function TechnologyIcon({
  name,
  size = 24,
}: TechnologyIconProps) {
  if (name === "APIs REST") {
    return (
      <Network
        size={size}
        strokeWidth={1.8}
        aria-hidden="true"
        focusable="false"
      />
    );
  }

  if (name === "Webhooks") {
    return (
      <Webhook
        size={size}
        strokeWidth={1.8}
        aria-hidden="true"
        focusable="false"
      />
    );
  }

  const logo = technologyLogos[name];

  if (!logo) return null;

  return <img src={logo} alt="" width={size} height={size} draggable={false} />;
}
