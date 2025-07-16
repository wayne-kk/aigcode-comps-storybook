import React from 'react';

export interface FeatureComponentProps {
  subtitle?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
}

const FeatureComponent: React.FC<FeatureComponentProps> = ({
  subtitle = '📆 Schedule a Demo',
  title = 'Tailored AI Agents For Your Growth',
  description = 'Watch a live demonstration of how our AI agents work together to generate leads, nurture relationships, and drive growth - all managed through simple conversations with your personal AI assistants',
  imageSrc = 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
}) => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.Cal) {
        // @ts-ignore
        window.Cal('init', 'demo', { origin: 'https://cal.com' });
        // @ts-ignore
        window.Cal.ns.demo('inline', {
          elementOrSelector: '#my-cal-inline',
          config: { layout: 'month_view' },
          calLink: 'team/revscale/demo',
        });
        // @ts-ignore
        window.Cal.ns.demo('ui', {
          cssVarsPerTheme: {
            light: { 'cal-brand': '#477DA7' },
            dark: { 'cal-brand': '#AEE4E6' },
          },
          hideEventTypeDetails: false,
          layout: 'month_view',
        });
      }
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main
      className="min-h-screen bg-[#fafafa] flex flex-col items-center px-2 sm:px-4 md:px-12 lg:px-[320px] py-0 text-[#333] font-sans"
      aria-label="Schedule Demo Section"
    >
      <header className="w-full flex flex-col items-center mt-4 mb-0">
        <div className="flex justify-center">
          <span
            className="inline-flex items-center px-3 py-1 rounded-md bg-white border border-[#e5e7eb] text-xs font-medium text-[#444] shadow-sm mb-8 select-none transition
              hover:bg-[#f3f4f6] focus:outline-none focus:ring-2 focus:ring-[#477DA7] focus:ring-offset-2"
            tabIndex={0}
            aria-label={subtitle}
          >
            {subtitle}
          </span>
        </div>
        <h1
          className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-extrabold text-center leading-[1.05] tracking-tight mb-6 text-[#111] break-words"
          style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
        >
          {title}
        </h1>
        <p className="max-w-2xl text-center text-base md:text-lg text-[#333] mb-12 leading-relaxed">{description}</p>
      </header>
      <section className="w-full flex justify-center">
        <div className="w-full max-w-5xl">
          <div
            className="rounded-2xl bg-white border border-[#e5e7eb] overflow-hidden shadow-sm"
          >
            <div
              className="w-full overflow-hidden"
              style={{
                background: 'transparent',
              }}
              aria-label="Feature Image"
            >
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-auto object-contain"
                style={{
                  width: '100%',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FeatureComponent;
