import {
  AreaChart,
  BookOpen,
  Download
} from 'lucide-react';

function FeaturesSection() {

const services = [
  {
    icon: <BookOpen aria-hidden="true" size={72} strokeWidth={1.4} />,
    title: 'Easy Wins',
    body: 'Get your best looking smile now.',
  },
  {
    icon: <AreaChart aria-hidden="true" size={72} strokeWidth={1.4} />,
    title: 'Concrete',
    body: 'Defalcate is most focused in helping you discover your most beautiful smile.',
  },
  {
    icon: <Download aria-hidden="true" size={72} strokeWidth={1.4} />,
    title: 'Hack Growth',
    body: 'Overcame any hurdle or any other problem.',
  },
];


    function SectionHeading({ kicker, title, body }) {
  return (
    <div className="mx-auto max-w-[692px] text-center">
      {kicker && (
        <p className="text-xl leading-[30px] tracking-[0.2px] text-[#737373]">{kicker}</p>
      )}
      <h2 className="mt-2.5 text-2xl font-bold leading-8 tracking-[0.1px] text-[#252b42]">
        {title}
      </h2>
      {body && (
        <p className="mx-auto mt-2.5 max-w-[469px] text-sm font-normal leading-5 tracking-[0.2px] text-[#737373]">
          {body}
        </p>
      )}
    </div>
  );
}

  return (
    <section className="bg-white">
      <div className="mx-auto min-h-[632px] max-w-[1050px] px-6 py-20 md:px-0">
        <SectionHeading
          body="Problems trying to resolve the conflict between"
          kicker="Featured Products"
          title="THE BEST SERVICES"
        />
        <div className="mt-20 grid gap-[30px] md:grid-cols-3">
          {services.map((service) => (
            <article
              className="flex min-h-[254px] flex-col items-center px-10 pt-[35px] text-center"
              key={service.title}
            >
              <div className="text-[#23a6f0]">{service.icon}</div>
              <h3 className="mt-5 text-2xl font-bold leading-8 tracking-[0.1px] text-[#252b42]">
                {service.title}
              </h3>
              <p className="mt-5 max-w-[232px] text-sm font-bold leading-5 tracking-[0.2px] text-[#737373]">
                {service.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default FeaturesSection;
