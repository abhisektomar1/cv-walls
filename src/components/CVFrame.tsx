import { X } from 'lucide-react';

interface PersonalDetails {
  dateOfBirth: string;
  disability: string;
  citizenship: string;
}

interface LanguageSkillLevel {
  speaking: number;
  reading: number;
  comprehension: number;
  writing: number;
}

interface LanguageSkills {
  arabic: LanguageSkillLevel;
  english: LanguageSkillLevel;
}

interface CVData {
  personalSkills: string[];
  jobSkills: string[];
  experience: string[];
  education?: string;
  personalDetails?: PersonalDetails;
  languageSkills?: LanguageSkills;
}

interface CVFrameProps {
  englishName: string;
  arabicName: string;
  image: string;
  onClose: () => void;
  data?: CVData;
}

function SkillDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div 
          key={i} 
          className={`w-2 h-2 rounded-full ${i <= level ? 'bg-[#7e4e83]' : 'border border-[#7e4e83]'}`}
        />
      ))}
    </div>
  );
}

export default function CVFrame({ englishName, arabicName, image, onClose, data }: CVFrameProps) {
  // Default data if none provided (for other candidates if any)
  const displayData = data || {
    personalSkills: ['Strong desire to learn', 'Interested in computer programs', 'Excellent memory'],
    jobSkills: ['Ability to handle correspondence', 'Committed to accuracy'],
    experience: ['Joined Best Buddies since 2024']
  };

  return (
    <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 bg-black/5 hover:bg-black/10 rounded-full transition-colors"
      >
        <X className="w-5 h-5 text-gray-600" />
      </button>

      {/* Sidebar - Green */}
      <div className="w-full md:w-[35%] bg-[#9fd4c4] p-8 flex flex-col items-center text-center relative overflow-y-auto custom-scrollbar">
        <div className="flex flex-col items-center w-full mt-10">
          {/* Profile Image with Arch/Circle Mask effect */}
          <div className="relative w-48 h-64 mb-6">
            <div className="w-full h-full rounded-t-[100px] rounded-b-[20px] overflow-hidden border-4 border-white/20 bg-white/10">
              <img 
                src={image} 
                alt={englishName} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="w-full mb-8 text-left">
          <h2 className="text-white text-3xl font-bold mb-1 uppercase leading-tight font-sansation text-center">
            {englishName}
          </h2>
          {displayData.education && (
            <p className="text-[#3a5a4f] text-xs font-bold mt-2 text-center italic mb-6">
              {displayData.education}
            </p>
          )}

          {/* Personal Details Section */}
          {displayData.personalDetails && (
            <div className="mt-6 w-full">
              <div className="inline-block bg-[#7e4e83] text-white px-4 py-1 rounded-r-full -ml-8 mb-3 shadow-sm w-[90%]">
                <h3 className="font-bold text-sm">Personal Details</h3>
              </div>
              <div className="space-y-2 text-sm text-[#3a5a4f] font-bold px-2">
                <div className="flex justify-between">
                  <span>Date of Birth</span>
                  <span className="text-black/80 font-normal">{displayData.personalDetails.dateOfBirth}</span>
                </div>
                <div className="flex justify-between">
                  <span>Disability</span>
                  <span className="text-black/80 font-normal">{displayData.personalDetails.disability}</span>
                </div>
                <div className="flex justify-between">
                  <span>Citizenship</span>
                  <span className="text-black/80 font-normal">{displayData.personalDetails.citizenship}</span>
                </div>
              </div>
            </div>
          )}

          {/* Language Skills Section */}
          {displayData.languageSkills && (
            <div className="mt-8 w-full">
              <div className="inline-block bg-[#7e4e83] text-white px-4 py-1 rounded-r-full -ml-8 mb-3 shadow-sm w-[90%]">
                <h3 className="font-bold text-sm">Language Skills</h3>
              </div>
              
              <div className="px-2">
                <div className="flex justify-between mb-2 text-sm font-bold text-[#3a5a4f]">
                  <span></span>
                  <span>Arabic</span>
                  <span>English</span>
                </div>
                
                <div className="space-y-2 text-sm text-[#3a5a4f] font-bold">
                  <div className="flex justify-between items-center">
                    <span className="w-24">Speaking</span>
                    <SkillDots level={displayData.languageSkills.arabic.speaking} />
                    <SkillDots level={displayData.languageSkills.english.speaking} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="w-24">Reading</span>
                    <SkillDots level={displayData.languageSkills.arabic.reading} />
                    <SkillDots level={displayData.languageSkills.english.reading} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="w-24">Comprehension</span>
                    <SkillDots level={displayData.languageSkills.arabic.comprehension} />
                    <SkillDots level={displayData.languageSkills.english.comprehension} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="w-24">Writing</span>
                    <SkillDots level={displayData.languageSkills.arabic.writing} />
                    <SkillDots level={displayData.languageSkills.english.writing} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content - White */}
      <div className="w-full md:w-[65%] bg-white p-8 md:p-12 overflow-y-auto">
        <div className="max-w-2xl mx-auto space-y-10">
          
          {/* Personal Skills */}
          <section>
            <div className="inline-block bg-[#7e4e83] text-white px-6 py-2 rounded-full mb-4 shadow-sm">
              <h3 className="font-bold text-lg">Personal Skills</h3>
            </div>
            <ul className="space-y-2">
              {displayData.personalSkills.map((skill, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <span className="text-[#9fd4c4] mr-2 text-xl">•</span>
                  <span className="text-lg leading-relaxed">{skill}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Job Skills */}
          <section>
            <div className="inline-block bg-[#7e4e83] text-white px-6 py-2 rounded-full mb-4 shadow-sm">
              <h3 className="font-bold text-lg">Job Skills</h3>
            </div>
            <ul className="space-y-2">
              {displayData.jobSkills.map((skill, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <span className="text-[#9fd4c4] mr-2 text-xl">•</span>
                  <span className="text-lg leading-relaxed">{skill}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Professional Experience */}
          <section>
            <div className="inline-block bg-[#7e4e83] text-white px-6 py-2 rounded-full mb-4 shadow-sm">
              <h3 className="font-bold text-lg">Professional Experience</h3>
            </div>
            <ul className="space-y-2">
              {displayData.experience.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <span className="text-[#9fd4c4] mr-2 text-xl">•</span>
                  <span className="text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
