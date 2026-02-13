import Link from 'next/link';

export default function ProjectsPreview() {
  return (
    <section className="py-20 sm:py-24 bg-[#f5f3f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#1a2e1a] font-semibold tracking-widest uppercase text-sm mb-3">
            Our Latest
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Kitchen Remodel', 'Home Addition', 'Custom Build', 'Bathroom Renovation', 'Basement Finish', 'Exterior Update'].map(
            (project) => (
              <div
                key={project}
                className="aspect-[4/3] bg-gray-300 rounded-lg flex items-center justify-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-[#1a2e1a]/0 group-hover:bg-[#1a2e1a]/60 transition-colors duration-300" />
                <span className="text-gray-500 font-medium text-sm z-10 group-hover:text-white transition-colors">
                  {project}
                </span>
              </div>
            )
          )}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-block bg-[#1a2e1a] text-white px-8 py-4 rounded font-semibold hover:bg-[#2a4a2a] transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
