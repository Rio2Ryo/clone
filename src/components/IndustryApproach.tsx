'use client'

export default function IndustryApproach() {
  const certifications = [
    { id: 1, src: '/organic.png', alt: '100% Organic' },
    { id: 2, src: '/vegan.png', alt: 'Certified Vegan' },
    { id: 3, src: '/gmp.png', alt: 'GMP Quality' },
    { id: 4, src: '/halal.png', alt: 'Halal' },
    { id: 5, src: '/haccp.png', alt: 'HACCP' },
    { id: 6, src: '/jfrl.png', alt: 'JFRL' },
  ]

  const trustItems = [
    { label: 'Achieve', text: '厚生労働省からヒューマングレードの食品として認定されています。' },
    { label: 'Confidence', text: '厚生労働省から化粧品や医薬部外品原料規格として認定されています。' },
    { label: 'Forever', text: '農林水産省からペットフードグレードとして認定されています。' },
  ]

  return (
    <section className="py-20 bg-black">
      <div
        className="mx-auto px-8 py-12"
        style={{
          width: '90%',
          maxWidth: '1200px',
          border: '2px solid #25c760',
          borderRadius: '8px',
        }}
      >
        {/* Title */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ color: '#25c760' }}
        >
          Our Trust
        </h2>

        {/* Gradient Line */}
        <div
          className="mx-auto mb-12"
          style={{
            width: '200px',
            height: '4px',
            background: 'linear-gradient(90deg, #25c760, #0a8f3a)',
            borderRadius: '2px',
          }}
        />

        {/* Certification Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-12">
          {certifications.map((cert) => (
            <img
              key={cert.id}
              src={cert.src}
              alt={cert.alt}
              className="h-16 md:h-20 w-auto object-contain"
            />
          ))}
        </div>

        {/* Trust Text */}
        <div className="space-y-3 text-center">
          {trustItems.map((item, index) => (
            <p key={index} className="text-sm md:text-base">
              <span className="text-green-400 font-semibold mr-4">{item.label}</span>
              <span className="text-gray-300">{item.text}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

