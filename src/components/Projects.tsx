import { projectData } from "@/constants/projectData";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  return (
    <section className="projects flex justify-center items-center flex-wrap py-16 gap-4 min-h-screen relative">
      {projectData.map((project, index) => (
        <ProjectCard
          key={index}
          imageSource={project.imageSource}
          imageAlt={project.imageAlt}
          heading={project.heading}
          linkHref={project.linkHref}
        />
      ))}
    </section>
  );
}
