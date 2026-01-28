import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCheckCircle,
  FaLightbulb,
} from "react-icons/fa";
import { projectsData } from "../data/projectsData";

const ProjectDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="btn btn-primary">
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link to="/#projects" className="btn btn-ghost gap-2 mb-8">
          <FaArrowLeft />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {project.name}
          </h1>
          <p className="text-xl text-base-content/70 max-w-3xl">
            {project.shortDescription}
          </p>
        </div>

        {/* Project Image */}
        <div className="mb-12">
          <img
            src={project.image}
            alt={project.name}
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Description */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-4">About This Project</h2>
              <div className="prose prose-lg max-w-none text-base-content/80">
                {project.fullDescription.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="bg-base-200 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaCheckCircle className="text-warning" />
                Challenges Faced
              </h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-warning/20 text-warning rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-base-content/80">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Improvements */}
            <div className="bg-base-200 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaLightbulb className="text-info" />
                Future Improvements
              </h2>
              <ul className="space-y-4">
                {project.futureImprovements.map((improvement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-info/20 text-info rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-base-content/80">{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Action Buttons */}
            <div className="bg-base-200 p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-4">Project Links</h3>
              <div className="space-y-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full gap-2"
                >
                  <FaExternalLinkAlt />
                  View Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline w-full gap-2"
                >
                  <FaGithub />
                  View Source Code
                </a>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-base-200 p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="badge badge-primary badge-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-base-200 p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-4">Project Info</h3>
              <ul className="space-y-3 text-base-content/70">
                <li className="flex justify-between">
                  <span>Status:</span>
                  <span className="badge badge-success">Completed</span>
                </li>
                <li className="flex justify-between">
                  <span>Category:</span>
                  <span className="font-medium">Web Application</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation to Other Projects */}
        <div className="mt-16 pt-12 border-t border-base-300">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projectsData
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.id}
                  to={`/project/${p.id}`}
                  className="card bg-base-200 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <figure>
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-40 object-cover"
                    />
                  </figure>
                  <div className="card-body p-4">
                    <h4 className="card-title text-lg">{p.name}</h4>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
