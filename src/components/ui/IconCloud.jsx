import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "mongodb",
  "prisma",
  "amazonaws",
  "postgresql",
  "vercel",
  "git",
  "visualstudiocode"
];

export function IconCloudDemo() {
  return (
      <IconCloud iconSlugs={slugs} />
  );
}
