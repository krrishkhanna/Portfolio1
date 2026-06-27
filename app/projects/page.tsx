import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="A portfolio of products, systems, and operator-style build loops."
        description="Every project is framed the same way: the problem, the insight, what got built, the role I played, the stack behind it, and the outcome it produced."
      />
      <div className="site-shell grid gap-5 pb-20 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
