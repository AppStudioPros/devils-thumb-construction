const projects = [
  'Custom Home Build',
  'Kitchen Remodel',
  'Home Addition',
  'Bathroom Renovation',
  'Basement Finish',
  'Exterior Update',
  'Garage Build',
  'Living Room Remodel',
  'HVAC Installation',
];

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-[#1a2e1a] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8a96e] font-semibold tracking-widest uppercase text-sm mb-4">
            Our Latest
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Latest Projects
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            A selection of recent work across the Colorado Front Range.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project}
                className="aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#1a2e1a]/0 group-hover:bg-[#1a2e1a]/70 transition-colors duration-300" />
                <div className="z-10 text-center">
                  <span className="text-gray-500 group-hover:text-white font-semibold transition-colors">
                    {project}
                  </span>
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 mt-1 transition-colors">
                    Coming Soon
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
