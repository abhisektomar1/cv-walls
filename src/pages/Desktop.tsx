import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useNavigate } from "react-router-dom";

interface ContentSection {
  title: {
    main: string;
    arabic: string | null;
  };
  content: string;
}

interface PartnerCategory {
  arabic: string;
  english: string;
}

const contentSections: ContentSection[] = [
  {
    title: {
      main: "About ECHO",
      arabic: "(صدى)",
    },
    content:
      "ECHO is a national platform launched by Best Buddies Qatar under the umbrella of the Shafallah Center for Persons with Disabilities. It is designed to amplify voices that are often unheard by creating a space where lived experiences are shared directly by those most impacted. ECHO is not positioned as a one-off event, but as a growing national movement with a distinct purpose: providing a stage for voices that are too often left unheard A core pillar of ECHO is the preparation that precedes the stage. Speakers participate in structured ambassador and self-advocacy training over several weeks, equipping them with the skills, confidence, and tools needed to express themselves, advocate for their rights, and engage meaningfully in public dialogue.",
  },
  {
    title: {
      main: "Ghaia.ai Partnership – Workplace AI Coach & One Community, One Canvas",
      arabic: null,
    },
    content:
      "Our partnership with Ghaia.ai is central to extending ECHO beyond the physical stage. Ghaia.ai leads the event's tech activation, showcasing how accessibility-focused technology and artificial intelligence enable participation, expression, and inclusion for persons with disabilities through the Workplace AI Coach built on G Agent.\nThis use case showcases a workplace assistant that supports persons with intellectual disabilities during structured work tasks. It demonstrates how G Agent can observe tasks through a camera-enabled device, provide step-by-step guidance, and support independent task completion.\nIn parallel, we collaborate on One Community, One Canvas, a global interactive initiative inviting participants from Qatar and more than 50 countries to contribute one word answering the question: What does inclusion mean to you? Using AI, these contributions are transformed into a single digital artwork that visually represents diverse voices united by a shared message. Together, the activation and artwork demonstrate how technology can amplify human voices—not replace them—and reinforce the belief that inclusion has no boundaries and extends beyond borders.",
  },
  {
    title: {
      main: "About Best Buddies Qatar",
      arabic: null,
    },
    content:
      "Best Buddies Qatar operates under the Shafallah Center for Persons with Disabilities and is part of the global Best Buddies network active in more than 50 countries. The program focuses on friendship, leadership development, and integrated employment for persons with intellectual and developmental disabilities, with the aim of enabling meaningful inclusion and participation across society.",
  },
];

const partnerCategories: PartnerCategory[] = [
  {
    arabic: "راعي المستضيف",
    english: "Hosting Partner",
  },
  {
    arabic: "راعي الدمج",
    english: "Inclusion Champion",
  },
];

const bottomPartnerCategories: PartnerCategory[] = [
  {
    arabic: "شريك الهدايا",
    english: "Gift Partner",
  },
  {
    arabic: "شريك التقني",
    english: "Tech partner",
  },
  {
    arabic: "راعي المقهى الشامل",
    english: "inclusive cafe",
  },
];

const partnerLogos = [
  {
    src: "/figmaAssets/-wasayef------.png",
    alt: "Wasayef",
    className: "w-[247px] h-[166px] object-cover",
  },
  {
    src: "/figmaAssets/ghaia-logo-white-1.png",
    alt: "Ghaia logo white",
    className: "w-96 h-[97px]",
  },
  {
    src: "/figmaAssets/qinwan-mainlogo-digital-black.png",
    alt: "Qinwan mainlogo",
    className: "w-[242px] h-[245px] object-cover",
  },
];

const HorizontalDivider = () => (
  <svg width="220" viewBox="0 0 220 1" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M220 0.5H0" stroke="white" />
  </svg>
);

const MobilePartnersSection = () => (
  <div className="flex flex-col items-center gap-[40px] px-4 mt-8 mb-8 lg:hidden">
    {/* Our Partners heading */}
    <div className="flex flex-col w-[300px] h-[92px] items-center justify-center gap-3 px-[22px] py-[6px] bg-[#0000004d] rounded-[18.5px]">
      <span className="[font-family:'Helvetica_Neue_LT_Arabic',Helvetica] font-normal text-white text-[28px] text-center leading-[24px] [direction:rtl]">
        شركاؤنا
      </span>
      <span className="[font-family:'Sansation',Helvetica] font-bold text-[#8fd1c4] text-[28px] text-center leading-[24px]">
        Our Partners
      </span>
    </div>

    <HorizontalDivider />

    {/* Hosting Partner with Msheireb Properties logo */}
    <div className="flex flex-col items-center gap-[18px]">
      <div className="flex flex-col w-[300px] h-[105px] items-center justify-center gap-3 px-[22px] py-[6px] bg-[#0000004d] rounded-[18.5px]">
        <span className="[font-family:'Helvetica_Neue_LT_Arabic',Helvetica] font-normal text-white text-[28px] text-center leading-[24px] [direction:rtl]">
          راعي المستضيف
        </span>
        <span className="[font-family:'Sansation',Helvetica] font-bold text-[#8fd1c4] text-[28px] text-center leading-[24px]">
          Hosting Partner
        </span>
      </div>
      <img
        src="/figmaAssets/msheireb-properties-logo.png"
        alt="Msheireb Properties"
        className="w-[200px] h-auto object-contain"
      />
    </div>

    <HorizontalDivider />

    {/* Inclusion Champion with QNB logo */}
    <div className="flex flex-col items-center gap-[18px]">
      <div className="flex flex-col w-[300px] h-[105px] items-center justify-center gap-3 px-[22px] py-[6px] bg-[#0000004d] rounded-[18.5px]">
        <span className="[font-family:'Helvetica_Neue_LT_Arabic',Helvetica] font-normal text-white text-[28px] text-center leading-[24px] [direction:rtl]">
          راعي الدمج
        </span>
        <span className="[font-family:'Sansation',Helvetica] font-bold text-[#8fd1c4] text-[28px] text-center leading-[24px]">
          Inclusion Champion
        </span>
      </div>
      <img
        src="/figmaAssets/qnb-logo.png"
        alt="QNB"
        className="w-[140px] h-auto object-contain"
      />
    </div>

    <HorizontalDivider />

    {/* Inclusive Cafe with Qinwan logo */}
    <div className="flex flex-col items-center gap-[18px]">
      <div className="flex flex-col w-[300px] h-[105px] items-center justify-center gap-3 px-[22px] py-[6px] bg-[#0000004d] rounded-[18.5px]">
        <span className="[font-family:'Helvetica_Neue_LT_Arabic',Helvetica] font-normal text-white text-[28px] text-center leading-[24px] [direction:rtl]">
          راعي المقهى الشامل
        </span>
        <span className="[font-family:'Sansation',Helvetica] font-bold text-[#8fd1c4] text-[28px] text-center leading-[24px]">
          inclusive cafe
        </span>
      </div>
      <img
        src="/figmaAssets/qinwan-logo.png"
        alt="Qinwan"
        className="w-[140px] h-auto object-contain brightness-0 invert"
      />
    </div>

    <HorizontalDivider />

    {/* Tech Partner with Ghaia.ai logo */}
    <div className="flex flex-col items-center gap-[18px]">
      <div className="flex flex-col w-[300px] h-[105px] items-center justify-center gap-3 px-[22px] py-[6px] bg-[#0000004d] rounded-[18.5px]">
        <span className="[font-family:'Helvetica_Neue_LT_Arabic',Helvetica] font-normal text-white text-[28px] text-center leading-[24px] [direction:rtl]">
          شريك التقني
        </span>
        <span className="[font-family:'Sansation',Helvetica] font-bold text-[#8fd1c4] text-[28px] text-center leading-[24px]">
          Tech partner
        </span>
      </div>
      <img
        src="/figmaAssets/ghaia-logo-white-1.png"
        alt="Ghaia.ai"
        className="w-[180px] h-auto object-contain"
      />
    </div>

    <HorizontalDivider />

    {/* Gift Partner with Wasayef logo */}
    <div className="flex flex-col items-center gap-[18px]">
      <div className="flex flex-col w-[300px] h-[105px] items-center justify-center gap-3 px-[22px] py-[6px] bg-[#0000004d] rounded-[18.5px]">
        <span className="[font-family:'Helvetica_Neue_LT_Arabic',Helvetica] font-normal text-white text-[28px] text-center leading-[24px] [direction:rtl]">
          شريك الهدايا
        </span>
        <span className="[font-family:'Sansation',Helvetica] font-bold text-[#8fd1c4] text-[28px] text-center leading-[24px]">
          Gift Partner
        </span>
      </div>
      <img
        src="/figmaAssets/wasayef-logo.png"
        alt="Wasayef"
        className="w-[120px] h-auto object-contain brightness-0 invert"
      />
    </div>
  </div>
);

export const Desktop = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#5b3c5d] overflow-hidden w-full lg:min-w-[1440px] min-h-screen lg:min-h-[3156px] relative">
      {/* Background frame - desktop only */}
      <img
        className="absolute top-0 left-0 w-[1440px] h-[3156px] hidden lg:block"
        alt="Frame"
        src="/figmaAssets/frame-14.svg"
      />
      {/* Decorative blur elements */}
      <div className="absolute top-[-51px] -left-20 w-[410px] h-[410px] rounded-[205px] blur-[91.35px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(124,143,182,0.7)_0%,rgba(99,113,142,0.7)_58%)] opacity-80" />
      <div className="hidden lg:block absolute top-[-2756px] left-0 w-full h-[7285px] bg-[linear-gradient(180deg,rgba(91,59,93,0)_31%,rgba(99,113,142,1)_48%)]" />
      
      {/* Go back button */}
      <div className="absolute top-4 left-4 lg:top-[50px] lg:left-[50px] z-20">
        <Button 
          onClick={() => navigate("/")}
          className="flex flex-col w-[120px] lg:w-[143px] h-auto items-center justify-center gap-[3px] px-4 lg:px-[27px] py-2 rounded-[14px] shadow-[0px_4px_24px_#93cbc340] bg-[linear-gradient(63deg,rgba(182,231,223,1)_0%,rgba(143,209,196,1)_100%)] hover:bg-[linear-gradient(63deg,rgba(182,231,223,0.9)_0%,rgba(143,209,196,0.9)_100%)]"
          data-testid="button-go-back"
        >
        <div className="w-full [font-family:'Helvetica_Neue_LT_Arabic',Helvetica] font-bold text-black text-center tracking-[0] [direction:rtl] text-[14px] lg:text-[16px]">
          ارجع
        </div>
        <div className="w-full [font-family:'Sansation',Helvetica] font-bold text-black text-center tracking-[0] text-[14px] lg:text-[16px]">
          Go back
        </div>
        </Button>
      </div>
      
      {/* Decorative blur circles - desktop only */}
      <div className="hidden lg:block absolute top-[2127px] left-[-833px] w-[1918px] h-[1918px] bg-[#6c6c83] rounded-[959px] blur-[200px]" />
      <div className="hidden lg:block absolute top-[2161px] left-[669px] w-[1918px] h-[1918px] bg-[#6b9285cc] rounded-[959px] blur-[200px]" />
      
      {/* Header logo */}
      <img
        className="absolute top-16 lg:top-0 left-1/2 transform -translate-x-1/2 scale-110 lg:scale-100 w-full lg:w-[992px] h-auto lg:h-[380px]"
        alt="Frame"
        src="/figmaAssets/frame-151.svg"
      />
      
      {/* Main content section */}
      <section className="relative lg:absolute flex flex-col items-center gap-6 lg:gap-10 p-4 lg:p-10 mt-[200px] lg:mt-0 mx-4 lg:mx-0 lg:top-[328px] lg:left-[calc(50.00%_-_697px)] rounded-[20px] lg:rounded-[30px] border border-solid border-[#7a6f8580] shadow-[25px_23px_70.8px_#00000033] backdrop-blur-[1px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(1px)_brightness(100%)] bg-[linear-gradient(90deg,rgba(123,119,147,0.6)_0%,rgba(93,77,105,0.6)_100%)]">
        {contentSections.map((section, index) => (
          <Card
            key={index}
            className="flex flex-col items-start justify-center gap-2.5 p-4 lg:p-[30px] self-stretch w-full flex-[0_0_auto] bg-[#524456] rounded-[20px] lg:rounded-[30px] border-0"
          >
            <CardContent className="p-0 w-full">
              <h2 className="self-stretch mt-[-1.00px] mb-2.5 [font-family:'Sansation',Helvetica] text-[#96d5c9] text-xl lg:text-[34px] text-left tracking-[0] leading-[28px] lg:leading-[48px]">
                <span className="font-bold">{section.title.main}</span>
                {section.title.arabic && (
                  <>
                    <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium">
                      &nbsp;
                    </span>
                    <span className="[font-family:'Helvetica_Neue_LT_Arabic',Helvetica] [direction:rtl]">
                      {section.title.arabic}
                    </span>
                  </>
                )}
              </h2>

              <p className="w-full lg:w-[1255px] [font-family:'Sansation',Helvetica] font-normal text-white text-base lg:text-2xl tracking-[0] leading-[28px] lg:leading-[48px] whitespace-pre-line">
                {section.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Mobile Partners Section */}
      <MobilePartnersSection />
      
      {/* ============ DESKTOP PARTNERS SECTION (unchanged) ============ */}
      
      {/* Our Partners heading - desktop only */}
      <div className="hidden lg:flex flex-col w-[372px] h-[114px] items-center justify-center gap-[15px] px-[27px] py-2 absolute top-[2047px] left-[calc(50.00%_-_186px)] bg-[#0000004c] rounded-[23px]">
        <div className="w-fit [font-family:'Helvetica_Neue_LT_Arabic',Helvetica] font-normal text-white text-[35px] text-center tracking-[0] leading-[30px] whitespace-nowrap [direction:rtl]">
          شركاؤنا
        </div>
        <div className="w-fit [font-family:'Sansation',Helvetica] font-bold text-[#8fd1c4] text-[35px] text-center tracking-[0] leading-[30px] whitespace-nowrap">
          Our Partners
        </div>
      </div>
      
      {/* Top Partner Categories Row - desktop only */}
      <div className="hidden lg:flex items-center justify-center gap-[120px] absolute top-[2255px] left-1/2 transform -translate-x-1/2">
        {partnerCategories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col w-[372px] h-[130px] items-center justify-center gap-[15px] px-[27px] py-2 bg-[#0000004c] rounded-[23px]"
          >
            <div
              className="[font-family:'Helvetica_Neue_LT_Arabic',Helvetica] font-normal text-white text-[35px] leading-[30px] text-center tracking-[0] [direction:rtl]"
            >
              {category.arabic}
            </div>
            <div className="w-fit [font-family:'Sansation',Helvetica] font-bold text-[#8fd1c4] text-[35px] text-center tracking-[0] leading-[30px] whitespace-nowrap">
              {category.english}
            </div>
          </div>
        ))}
      </div>
      
      {/* Top Partner Logos (Msheireb & QNB) with divider line - desktop only */}
      <div className="hidden lg:flex w-[919px] h-[220px] items-center justify-center absolute top-[2444px] left-1/2 transform -translate-x-1/2 relative">
        <img
          className="h-[104px] w-auto object-contain"
          alt="Partner Logos"
          src="/figmaAssets/frame-175.svg"
        />
        <svg className="absolute left-1/2 transform -translate-x-1/2" height="220" viewBox="0 0 1 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 0V220" stroke="white" strokeWidth="1" />
        </svg>
      </div>
      
      {/* Bottom Partner Categories Row - desktop only */}
      <div className="hidden lg:flex items-center justify-center gap-[125px] absolute top-[2704px] left-1/2 transform -translate-x-1/2">
        {bottomPartnerCategories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col w-[320px] h-[130px] items-center justify-center gap-[15px] px-[27px] py-2 bg-[#0000004c] rounded-[23px] pl-[27px] pr-[27px]"
          >
            <div
              className={`[font-family:'Helvetica_Neue_LT_Arabic',Helvetica] font-normal text-white text-[30px] ${index === 2 ? "leading-[27px]" : "leading-[30px]"} text-center tracking-[0] [direction:rtl]`}
            >
              {category.arabic}
            </div>
            <div className="w-fit [font-family:'Sansation',Helvetica] font-bold text-[#8fd1c4] text-[30px] text-center tracking-[0] leading-[30px] whitespace-nowrap">
              {category.english}
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom Partner Logos with divider lines - desktop only */}
      <div className="hidden lg:flex items-center justify-center absolute top-[2861px] left-1/2 transform -translate-x-1/2 w-[1120px]">
        <img
          className="w-full h-[220px] object-contain brightness-0 invert"
          alt="Partner logos with dividers"
          src="/figmaAssets/partner-logos-with-dividers.png"
        />
      </div>
    </div>
  );
};
