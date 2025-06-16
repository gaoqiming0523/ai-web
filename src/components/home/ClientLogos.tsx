export default function ClientLogos() {
  const clientLogoImages = [
    'https://nocode.meituan.com/photo/search?keyword=business,office&width=100&height=60',
    'https://nocode.meituan.com/photo/search?keyword=technology,chip&width=100&height=60',
    'https://nocode.meituan.com/photo/search?keyword=energy,wind&width=100&height=60',
    'https://nocode.meituan.com/photo/search?keyword=building,modern&width=100&height=60',
    'https://nocode.meituan.com/photo/search?keyword=factory,industry&width=100&height=60',
    'https://nocode.meituan.com/photo/search?keyword=solar,panel&width=100&height=60'
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500 mb-6">受到行业领先企业的信任</p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {clientLogoImages.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
              <img 
                src={src} 
                alt={`合作伙伴 ${i+1}`} 
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
