import { CloudDecoration } from "./cloudDecoration"

interface MasterSectionProps {
  id: string
}

export function MasterSection({ id }: MasterSectionProps) {
  return (
    <section id={id} className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400">The Dao Master</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">Find and meet your Master Discoverer</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="w-full md:w-1/3 aspect-square relative">
            <div className="absolute inset-0 rounded-l-full bg-amber-400/20 overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 p-4">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="bg-amber-400/30"></div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 aspect-square relative">
            <div className="absolute inset-0 rounded-r-full bg-amber-400/20 overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 p-4">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="bg-amber-400/30"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl
            aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia.
          </p>
          <button className="mt-8 bg-amber-400 hover:bg-amber-500 text-blue-950 font-bold py-3 px-8 rounded-full transition-colors">
            Connect with Master
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <CloudDecoration className="absolute top-1/4 -right-20 w-64 h-auto text-amber-400/20 transform rotate-12" />
      <CloudDecoration className="absolute bottom-1/4 -left-20 w-48 h-auto text-amber-400/20 transform -rotate-12" />
    </section>
  )
}
