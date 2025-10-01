import Image from 'next/image'

const reasons = [
  {
    number: '01',
    title: 'Professionelle Expertise',
    description:
      'Unsere erfahrenen Aufbereiter verwenden erstklassige Produkte und Techniken für beste Ergebnisse.',
  },
  {
    number: '02',
    title: 'Premium-Qualitätsprodukte',
    description:
      'Wir verwenden nur hochwertige, umweltfreundliche Aufbereitungsprodukte, die sicher für Ihr Auto und die Umwelt sind.',
  },
  {
    number: '03',
    title: 'Liebe zum Detail',
    description:
      'Wir konzentrieren uns auf jeden Zentimeter Ihres Fahrzeugs und liefern ein makelloses Finish, das Erwartungen übertrifft.',
  },
  {
    number: '04',
    title: 'Kundenzufriedenheit garantiert',
    description:
      'Wir priorisieren Ihre Zufriedenheit und bieten personalisierten Service und herausragende Ergebnisse jedes Mal.',
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <p className="text-yellow-400 text-sm font-semibold mb-4 uppercase tracking-wider">
              WARUM WIR?
            </p>

            {/* Stats */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-7xl font-bold text-yellow-400">100</span>
                <span className="text-4xl font-bold text-yellow-400">%</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                <strong className="text-white">Viele haben die Freude</strong>{' '}
                an unserem Service erlebt und viele haben uns ihre Fahrzeuge
                anvertraut
              </p>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Unübertroffene Qualität, Präzision und Pflege für Ihr Auto
            </h2>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Exzellenz in jedem Detail
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Wir liefern unübertroffene Qualität, Präzision und Sorgfalt bei
                jedem Autoaufbereitungsservice, den wir anbieten. Von
                akribischer Reinigung bis hin zu fachkundiger Politur wird jedes
                Detail mit Professionalität behandelt, um sicherzustellen, dass
                Ihr Fahrzeug absolut bestens aussieht.
              </p>
            </div>

            {/* Reasons Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="text-yellow-400 text-xl font-bold">
                      {reason.number}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">
                      {reason.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/images/luxury-car-being-professionally-detailed-polished-.jpg"
              alt="Professional car detailing quality"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
