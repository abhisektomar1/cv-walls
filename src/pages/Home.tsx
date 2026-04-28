
import { useState, useEffect, useRef } from 'react';
import { X, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import CVFrame from '../components/CVFrame';
import img1 from '@assets/05-53_Naif_Hossam_Alawar_1768302842944.jpg';
import img2 from '@assets/Abdulaziz_Ali_Abdullah_Al-Suwaidi_1768302842944.jpg';
import img3 from '@assets/Ahmed_Ayoub_Hassan_1768302842944.jpg';
import img4 from '@assets/Aisha_Abdulla_Almursi_1768302842944.jpg';
import img5 from '@assets/Bilal_Mohammed_Nathif_Shareef_1768302842945.jpg';
import img6 from '@assets/Ebrahim_Mohammad_Nazir_1768302842945.jpg';
import img7 from '@assets/IMG_7579_Soltan_Mohammad_Golam_1768302842945.jpg';
import img8 from '@assets/IMG_7580_Laith_Yahya_Dahbour_1768302842945.jpg';
import img9 from '@assets/IMG_7582_Mohammed_Hamad_Al-kubaisi_1768302842945.jpg';
import img10 from '@assets/IMG_7583_Yazan_Zaki_Hassan_Al-Mufdi_1768302842945.jpg';
import img11 from '@assets/IMG_7584_Salah_Mohamed_Jomaa_1768302842945.jpg';
import img12 from '@assets/IMG_7586_Adam_Noufel_Afzan_1768302842946.jpg';
import img13 from '@assets/IMG_7587_Abi_Kamal_1768302842946.jpg';
import img14 from '@assets/IMG_7589_Ahmed_Maged_Ali_1768302842946.jpg';
import img15 from '@assets/Alanoud_Khalid_Al-_Abdulla_1768307919969.jpeg';
import img34 from '@assets/Maryam_Hussein_Kafaja_1768307919969.jpeg';
import img35 from '@assets/Mohamed_Jawad_Mohsin_1768307919969.jpeg';
import img36 from '@assets/Mohamed_Mohsin_Ahmed_1768312075817.jpeg';
import img37 from '@assets/Roan_Ali_Al_Kholy_1768307919970.jpeg';
import img16 from '@assets/IMG_7611_Abdulrahman_Jassim_Mohammed_Al-Fawal_1768302842946.jpg';
import img17 from '@assets/IMG_7612_Hamad_Mohammed_Mubarak_Al-Ahbabi_1768302842946.jpg';
import img18 from '@assets/IMG_7613_Samer_Mohamed_Essa_1768302842946.jpg';
import img19 from '@assets/IMG_7614_Zeyad_Ebrahem_Toghan_1768302842947.jpg';
import img20 from '@assets/IMG_7615_Abdulrahman_Ali_Rashed_1768302842947.jpg';
import img21 from '@assets/IMG_7617_Ahmed_Magdi_Badawy_1768307591019.jpg';
import img22 from '@assets/IMG_7618_Shahed_Mahmod_1768307591019.jpg';
import img23 from '@assets/IMG_7620_Judy_Abdelrahim_Albagha_1768307591020.jpg';
import img24 from '@assets/IMG_7621_Marwa_Mohammed_Al-Tamimi_1768307591020.jpg';
import img25 from '@assets/IMG_7622_Ahmed_Abdullah_Ejdoude_1768307591020.jpg';
import img26 from '@assets/IMG_8487_Abdullah_Faisal_Bidwan_1768307591020.jpg';
import img27 from '@assets/Loloa_Mahmoud_Kamal_1768307591020.jpg';
import img28 from '@assets/Mohammed_Asfandyar_Imtiaz_Ahmed_1768307591020.jpg';
import img29 from '@assets/Mohammed_Omar_Tawfiq_Anwar_1768307591020.jpg';
import img30 from '@assets/Nayef_Fahad_Dhaher_Al-Nasser_1768307591020.jpg';
import img31 from '@assets/Omar_Ibrahim_Ali_Al-Khawaldeh_1768307591020.jpg';
import img32 from '@assets/Shuaa_Fahed_Al-Abdulla_1768307591021.jpg';
import img33 from '@assets/Yousef_Fouad_Ahmed_Al-Owa_1768307591021.jpg';

import ghaiaLogo from '@assets/image_1768202195653.png';
import echoLogo from '@assets/image_1768393822626.png';
import shafallahLogo from '@assets/image_1768202223390.png';
import boardFrameImage from '@assets/image_1768205411427.png';
import boardFrameMobile from '@assets/Screenshot_2026-01-13_at_8.57.25_AM_1768287448171.png';
import mobileWheels from '@assets/image_1768291434979.png';
import cvPlaceholder from '@assets/Screenshot_2026-01-13_at_12.06.14_PM_1768298967161.png';
import cvImage1 from '@assets/Abdullrahman_Jasem_Alfawal_1768308396945.png';
import cvImage2 from '@assets/Abdullah_Faisal_Bidwan_1768308396945.png';
import cvImage3 from '@assets/Abdulrahman_Ali_Rashed_1768308396945.png';
import cvImage4 from '@assets/Ahmed_Abdullah_Ejdoude_1768308396946.png';
import cvImage5 from '@assets/Ahmed_Ayoub_Hassan_1768308396946.png';
import cvImage6 from '@assets/Ahmed_Magdi_Badawy_1768308396946.png';
import cvImage7 from '@assets/Ahmed_Maged_Ali_1768308396946.png';
import cvImage8 from '@assets/Aisha_Abdulla_Almursi_1768308396946.png';
import cvImage9 from '@assets/Alanoud_Khalid_Al-Abdulla_1768308396946.png';
import cvImage10 from '@assets/Aseel_Maher_Ahmed_1768308396947.png';
import cvImage11 from '@assets/Belal_Muhammad_Sharif_1768308396947.png';
import cvImage12 from '@assets/Ebrahim_Mohammad_Nazir_1768308396947.png';
import cvImage13 from '@assets/Hamad_Mohammed_Al-hebabi_1768308396947.png';
import cvImage14 from '@assets/Jaber_Wasim_Alsabie_1768308396948.png';
import cvImage15 from '@assets/Judy_Abdelrahim_Albagha_1768309651704.png';
import cvImage16 from '@assets/Laith_Yahya_Dahbour_1768308396948.png';
import cvImage17 from '@assets/Haya_Mohamed_Almusallam_1768308396947.png';
import cvImage18 from '@assets/Loloa_Mahmoud_Kamal_CV-1.png';
import cvImage19 from '@assets/Marwa_Mohammed_Al-tamimi_CV-1.png';
import cvImage20 from '@assets/Maryam_Hussein_Kafaja_CV-1.png';
import cvImage21 from '@assets/Mohamed_Jawad_Mohsin_CV-1.png';
import cvImage22 from '@assets/Abdulaziz_Ali_Al-Suwaidi_1768308396945.png';
import cvImage23 from '@assets/Adam_Naufal_Afzam_1768309497012.png';
import cvImage24 from '@assets/Mohammed_Hamad_Al-kubaisi_1768309396332.png';
import cvImage25 from '@assets/Muhammadisfandyar_Saiq_1768309681312.png';
import cvImage26 from '@assets/Muhammad_Omar_Taufiq_1768309709555.png';
import cvImage27 from '@assets/Naif_Hossam_Alawar_1768309317915.png';
import cvImage28 from '@assets/Nayef_Fahad_Al-Nasser_1768309739734.png';
import cvImage29 from '@assets/Omar_Alkhawaldeh_1768309791870.png';
import cvImage30 from '@assets/Roan_Ali_Al_Kholy_1768309891870.png';
import cvImage31 from '@assets/Salah_Mohamed_Jomaa_1768309486398.png';
import cvImage32 from '@assets/Samer_Mohamed_Essa_1768309608910.png';
import cvImage33 from '@assets/Shahed_Mahmod_1768309639737.png';
import cvImage34 from '@assets/Shuaa_Fahed_Al-abdulla_1768309810633.png';
import cvImage35 from '@assets/Soltan_Mohammad_Golam_1768309346776.png';
import cvImage36 from '@assets/Yazan_Zaki_Almfadi_1768309477317.png';
import cvImage37 from '@assets/Yousef_Fouad_Ahmed_Al-owa_1768309834387.png';
import cvImage38 from '@assets/Zeyad_Ebrahem_Toghan_1768309623580.png';
import cvImage39 from '@assets/Mohamed_Mohsin_Ahmed_1768312277965.png';
import cvImageLayali from '@assets/Layali_Sameer_Saed-1.png';
import cvImageZeyad from '@assets/Zeyad_Mohamed_Abdelmonem-1.png';
import imgPlaceholder from '@assets/blank-profile-picture-973460_1280_1768316183507.png';
import imgHaya from '@assets/image_1768383725002.png';
import imgHedayah from '@assets/WhatsApp_Image_2026-01-14_at_11.55.00_(1)_1768387418308.jpeg';
import cvHedayah from '@assets/Screenshot_2026-01-14_at_1.02.39_PM_1768388565613.png';
import imgNaifNew from '@assets/05-53_Naif_Hossam_Alawar_1768390280361.jpg';
import cvNaifNew from '@assets/Screenshot_2026-01-14_at_2.19.22_PM_1768393165655.png';
import imgAhmad from '@assets/IMG_7597_Ahmad_Khalid_Al_Abdulla_1768392437085.jpg';
import cvAhmad from '@assets/Screenshot_2026-01-14_at_2.16.56_PM_1768393020152.png';
import imgOubay from '@assets/image_1768397748450.png';
import cvOubay from '@assets/Screenshot_2026-01-14_at_3.39.10_PM_1768397954447.png';
import cvAdamNew from '@assets/Screenshot_2026-01-15_at_1.59.24_PM_1768478381505.png';
import cvYousefNew from '@assets/Screenshot_2026-01-15_at_4.58.50_PM_1768489137030.png';

// CV Data Interfaces
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

const hedayahCVData: CVData = {
  personalSkills: [
    'Possesses a strong memory.',
    'Proficient in reading the Quran.',
    'Good typing skills in English.',
    'Talented in acting and role-playing.',
    'Limited mathematical abilities.'
  ],
  jobSkills: [
    'Ability to perform correspondence tasks.',
    'Experience in design.',
    'Commitment to completing tasks accurately.',
    'Experience using computer programs and PowerPoint.',
    'Experience in cooking skills.'
  ],
  experience: [
    'Joined the Best Buddies Qatar since 2019.',
    'Participated in design and artistic work for celebrations and events, 2017.',
    'Distinguished in acting and participated in plays and artistic works in the UK, such as Wizard of Oz and Tortoise, 2017.',
    'Online marketing course at Best Buddies, 2023.',
    'First Aid course, 2023.',
    'Home gardening, 2024.',
    'Various skill development courses at Best Buddies, including sports, arts, and culture.',
    'Runshaw College of Design and Arts in the UK, 2019.'
  ],
  education: 'Runshaw College of Design and Arts in the UK, 2019.',
  personalDetails: {
    dateOfBirth: '11/10/1998',
    disability: 'Down Syndrome',
    citizenship: 'British'
  },
  languageSkills: {
    arabic: {
      speaking: 4,
      reading: 4,
      comprehension: 4,
      writing: 0
    },
    english: {
      speaking: 5,
      reading: 5,
      comprehension: 5,
      writing: 5
    }
  }
};

const profileData = [
  { image: imgNaifNew, arabicName: 'نايف حسام الأعور', englishName: 'Naif Hossam Alawar', cvImage: cvNaifNew },
  { image: img2, arabicName: 'عبدالعزيز علي السويدي', englishName: 'Abdulaziz Ali Al-Suwaidi', cvImage: cvImage22, customPosition: 'center 25%', isHired: true },
  { image: imgAhmad, arabicName: 'أحمد خالد العبدالله', englishName: 'Ahmad Khalid Al Abdulla', cvImage: cvAhmad, customPosition: 'center 25%' },
  { image: img3, arabicName: 'أحمد أيوب حسن', englishName: 'Ahmed Ayoub Hassan', cvImage: cvImage5, customPosition: 'center 20%' },
  { image: img4, arabicName: 'عائشة عبدالله المرسي', englishName: 'Aisha Abdulla Almursi', cvImage: cvImage8 },
  { image: img5, arabicName: 'بلال محمد شريف', englishName: 'Bilal Mohammed Shareef', cvImage: cvImage11, customPosition: 'center 35%', customScale: 1.25 },
  { image: img6, arabicName: 'إبراهيم محمد نظير', englishName: 'Ebrahim Mohammad Nazir', cvImage: cvImage12 },
  { image: img7, arabicName: 'سلطان محمد غلام', englishName: 'Soltan Mohammad Golam', cvImage: cvImage35 },
  { image: img8, arabicName: 'ليث يحيى دحبور', englishName: 'Laith Yahya Dahbour', cvImage: cvImage16 },
  { image: img9, arabicName: 'محمد حمد الكبيسي', englishName: 'Mohammed Hamad Al-kubaisi', cvImage: cvImage24 },
  { image: img10, arabicName: 'يزن زكي المفضي', englishName: 'Yazan Zaki Al-Mufdi', cvImage: cvImage36 },
  { image: img11, arabicName: 'صلاح محمد جمعة', englishName: 'Salah Mohamed Jomaa', cvImage: cvImage31 },
  { image: img12, arabicName: 'ادم افزان', englishName: 'Adam Naufal Afzam', cvImage: cvAdamNew },
  { image: img14, arabicName: 'أحمد ماجد علي', englishName: 'Ahmed Maged Ali', cvImage: cvImage7 },
  { image: img15, arabicName: 'العنود خالد العبدالله', englishName: 'Alanoud Khalid Al-Abdulla', cvImage: cvImage9, customPosition: 'center 35%', customScale: 1.25 },
  { image: img16, arabicName: 'عبدالرحمن جاسم الفوال', englishName: 'Abdulrahman Jassim Al-Fawal', cvImage: cvImage1 },
  { image: img17, arabicName: 'حمد محمد الحبابى', englishName: 'Hamad Mohammed Al-Ahbabi', cvImage: cvImage13 },
  { image: img18, arabicName: 'سامر محمد عيسى', englishName: 'Samer Mohamed Essa', cvImage: cvImage32 },
  { image: img19, arabicName: 'زياد ابراهيم طوغان', englishName: 'Zeyad Ebrahem Toghan', cvImage: cvImage38, customPosition: 'center 45%', customScale: 1.5 },
  { image: img20, arabicName: 'عبدالرحمن علي راشد', englishName: 'Abdulrahman Ali Rashed', cvImage: cvImage3 },
  { image: img21, arabicName: 'أحمد مجدي بدوي', englishName: 'Ahmed Magdi Badawy', cvImage: cvImage6 },
  { image: img22, arabicName: 'شهد محمود الناصر', englishName: 'Shahed Mahmod', cvImage: cvImage33 },
  { image: img23, arabicName: 'جودي عبدالرحيم البغا', englishName: 'Judy Abdelrahim Albagha', cvImage: cvImage15 },
  { image: img24, arabicName: 'مروة محمد التميمي', englishName: 'Marwa Mohammed Al-Tamimi', cvImage: cvImage19 },
  { image: img25, arabicName: 'أحمد عبدالله اجدود', englishName: 'Ahmed Abdullah Ejdoude', cvImage: cvImage4, customPosition: 'center 45%', customScale: 1.5 },
  { image: img26, arabicName: 'عبدالله فيصل بدوان', englishName: 'Abdullah Faisal Bidwan', cvImage: cvImage2 },
  { image: img27, arabicName: 'لولوة محمود كمال', englishName: 'Loloa Mahmoud Kamal', cvImage: cvImage18 },
  { image: img28, arabicName: 'محمد أسفنديار إمتياز أحمد', englishName: 'Mohammed Asfandyar Ahmed', cvImage: cvImage25 },
  { image: img29, arabicName: 'محمد عمر توفيق', englishName: 'Mohammed Omar Tawfiq Anwar', cvImage: cvImage26 },
  { image: img30, arabicName: 'نايف فهد ظاهر الناصر', englishName: 'Nayef Fahad Al-Nasser', cvImage: cvImage28 },
  { image: img31, arabicName: 'عمر إبراهيم الخوالدة', englishName: 'Omar Ibrahim Al-Khawaldeh', cvImage: cvImage29 },
  { image: img32, arabicName: 'شعاع فهد العبدالله', englishName: 'Shuaa Fahed Al-Abdulla', cvImage: cvImage34 },
  { image: img33, arabicName: 'يوسف أحمد العوه', englishName: 'Yousef Alawa', cvImage: cvYousefNew },
  { image: img34, arabicName: 'مريم حسين خفاجة', englishName: 'Maryam Hussein Kafaja', cvImage: cvImage20, customPosition: 'center 60%', customScale: 1.6 },
  { image: img35, arabicName: 'محمد جواد محسن', englishName: 'Mohamed Jawad Mohsin', cvImage: cvImage21 },
  { image: img36, arabicName: 'محمد محسن أحمد', englishName: 'Mohamed Mohsin Ahmed', cvImage: cvImage39 },
  { image: img37, arabicName: 'روان علي الخولي', englishName: 'Roan Ali Al Kholy', cvImage: cvImage30, customPosition: 'center 20%', customScale: 1.25 },
  { image: imgPlaceholder, arabicName: 'أسيل ماهر أحمد', englishName: 'Aseel Maher Ahmed', cvImage: cvImage10, isPlaceholder: true },
  { image: imgPlaceholder, arabicName: 'هيا محمد المسلم', englishName: 'Haya Mohamed Almusallam', cvImage: cvImage17 },
  { image: imgPlaceholder, arabicName: 'جابر وسيم السبع', englishName: 'Jaber Wasim Alsabie', cvImage: cvImage14, isPlaceholder: true },
  { image: imgPlaceholder, arabicName: 'ليالي سمير سعيد', englishName: 'Layali Sameer Saed', cvImage: cvImageLayali, isPlaceholder: true },
  { image: imgPlaceholder, arabicName: 'زياد محمد عبدالمنعم', englishName: 'Zeyad Mohamed Abdelmonem', cvImage: cvImageZeyad, isPlaceholder: true },
  { image: imgHedayah, arabicName: 'هداية محمد دولة', englishName: 'Hedayah Mohammad Dauleh', cvImage: cvHedayah },
  { image: imgOubay, arabicName: 'أبي كمال', englishName: 'Oubay Kemel', cvImage: cvOubay },
];

interface ProfileCardProps {
  image: string;
  arabicName: string;
  englishName: string;
  index: number;
  onViewCV: () => void;
  isPlaceholder?: boolean;
  customPosition?: string;
  customScale?: number;
  isHired?: boolean;
}

function ProfileCard({ image, arabicName, englishName, index, onViewCV, isPlaceholder, customPosition, customScale, isHired }: ProfileCardProps) {
  return (
    <div
      className="relative w-full aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden cursor-default animate-in fade-in slide-in-from-bottom-4 duration-300 mobile-profile-card md:!transform-none"
      style={{ animationDelay: `${Math.min(index * 30, 300)}ms`, animationFillMode: 'both' }}
      data-testid={`profile-card-${index}`}
    >
      {isHired && (
        <div 
          className="absolute top-0 left-0 right-0 z-10 flex items-center justify-center bg-[#c50000]"
          style={{ 
            height: '45px',
            borderTopLeftRadius: 'inherit',
            borderTopRightRadius: 'inherit'
          }}
        >
          <span 
            className="text-white text-[24px] font-normal leading-normal" 
            style={{ fontFamily: 'Sansation, sans-serif' }}
          >
            Hired
          </span>
        </div>
      )}
      <img
        src={image}
        alt={englishName}
        className={`w-full h-full ${isPlaceholder ? 'object-contain bg-[#d1d5db]' : 'object-cover'}`}
        style={{ 
          objectPosition: isPlaceholder ? 'top' : (customPosition || 'center 5%'),
          transform: customScale ? `scale(${customScale})` : undefined
        }}
      />
      {/* Desktop overlay with separate name section and button */}
      <div 
        className="absolute bottom-2 left-2 right-2 profile-overlay rounded-xl px-[10px] pt-[10px] pb-[15px] hidden md:flex flex-col items-center justify-between"
        style={{ height: '135px' }}
      >
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-white text-sm font-medium text-center line-clamp-1" style={{ fontFamily: "'Helvetica Neue LT Arabic', 'Helvetica Neue', sans-serif" }}>
            {arabicName}
          </span>
          <span className="text-white text-sm text-center line-clamp-1" style={{ fontFamily: 'Sansation, sans-serif' }}>
            {englishName}
          </span>
        </div>
        
        <button
          onClick={onViewCV}
          className="teal-gradient rounded-xl py-2 flex flex-col items-center gap-0.5 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          style={{ width: '100%' }}
          data-testid={`view-cv-button-desktop-${index}`}
        >
          <span className="text-black text-[14px]" style={{ fontFamily: "'Helvetica Neue LT Arabic', 'Helvetica Neue', sans-serif" }}>
            عرض السيرة الذاتية
          </span>
          <span className="text-black font-bold text-[14px]" style={{ fontFamily: 'Sansation, sans-serif' }}>
            View CV
          </span>
        </button>
      </div>
      {/* Mobile overlay - new design from Frame_127 */}
      <div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-end gap-2 px-[10px] pt-[10px] pb-[15px] bg-[#4d4b61cc] backdrop-blur-[2px] rounded-[10px] shadow-[0_4px_16.3px_rgba(0,0,0,0.25)] md:hidden z-20"
        style={{ width: '92%' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white text-[14px] font-medium leading-[18px] text-center line-clamp-1" style={{ fontFamily: "'Helvetica Neue LT Arabic', 'Helvetica Neue', sans-serif" }}>
            {arabicName}
          </span>
          <span className="text-white text-[14px] font-normal leading-[18px] text-center line-clamp-1" style={{ fontFamily: 'Sansation, sans-serif' }}>
            {englishName}
          </span>
        </div>
        
        <button
          onClick={onViewCV}
          className="flex flex-col items-center justify-center gap-[3px] w-full h-[42px] bg-gradient-to-r from-[#b6e7df] to-[#8fd1c4] rounded-[14px] shadow-[0_4px_24px_rgba(147,203,195,0.25)] cursor-pointer"
          data-testid={`view-cv-button-${index}`}
        >
          <span className="text-black text-[14px] font-normal leading-[17px] text-center" style={{ fontFamily: "'Helvetica Neue LT Arabic', 'Helvetica Neue', sans-serif" }}>
            عرض السيرة الذاتية
          </span>
          <span className="text-black text-[14px] font-bold leading-[17px] text-center" style={{ fontFamily: 'Sansation, sans-serif' }}>
            View CV
          </span>
        </button>
      </div>
    </div>
  );
}

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  candidateName: string;
  arabicName: string;
  image: string;
  cvImage?: string;
  cvData?: CVData;
}

function CVModal({ isOpen, onClose, candidateName, arabicName, image, cvImage, cvData }: CVModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsLoading(true); // Reset loading state when modal opens
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, cvImage]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      {/* Blur backdrop */}
      <div 
        className="absolute inset-0 bg-black/60"
        style={{ backdropFilter: 'blur(8px)' }}
      />
      
      {/* Modal container */}
      <div 
        className="relative z-10 animate-in fade-in zoom-in-95 duration-100 w-full max-w-5xl md:mx-4"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: '100dvh', height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        {cvImage ? (
          <div className="relative w-full rounded-none md:rounded-2xl shadow-2xl bg-white h-full flex flex-col overflow-hidden">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors backdrop-blur-sm"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
            <div className="relative w-full overflow-y-auto flex-1 overscroll-contain">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
                  <Loader2 className="w-10 h-10 animate-spin text-teal-600" />
                </div>
              )}
              
              {cvImage?.toLowerCase().endsWith('.pdf') ? (
                <iframe 
                  src={cvImage} 
                  title="Candidate CV"
                  className="w-full h-full min-h-[500px]"
                  style={{ border: 'none' }}
                  onLoad={() => setIsLoading(false)}
                />
              ) : (
                <img 
                  src={cvImage} 
                  alt="Candidate CV" 
                  className={`w-full h-auto transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                  onLoad={() => setIsLoading(false)}
                />
              )}
            </div>
          </div>
        ) : (
          <CVFrame
            englishName={candidateName}
            arabicName={arabicName}
            image={image}
            onClose={onClose}
            data={cvData}
          />
        )}
      </div>
    </div>
  );
}

function MobileBoardFrame() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none md:hidden flex flex-col items-center" style={{ zIndex: 0 }}>
      {/* Board Background - fills most of the height */}
      <div 
        className="w-full bg-[#7597a4] rounded-[6px] shadow-[0_4px_16.3px_#00000040]" 
        style={{ height: 'calc(100% - 50px)', marginBottom: '-15px', zIndex: 1 }}
      />
      
      {/* Wheels Image */}
      <div className="relative w-full flex justify-center mt-[4px]" style={{ zIndex: 0 }}>
        <img 
          src={mobileWheels} 
          alt="Board wheels" 
          className="w-[340px] h-auto object-contain opacity-90"
        />
      </div>
    </div>
  );
}

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<{ englishName: string; arabicName: string; image: string; cvImage?: string; cvData?: CVData } | null>(null);

  // Preload CV images in background after mount
  useEffect(() => {
    // Small delay to prioritize initial page load
    const timeoutId = setTimeout(() => {
      profileData.forEach((profile) => {
        if (profile.cvImage) {
          const img = new Image();
          img.src = profile.cvImage;
        }
      });
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  // Use the profiles as defined in profileData
  const profiles = profileData;

  const handleViewCV = (englishName: string, arabicName: string, image: string, cvImage?: string, cvData?: CVData) => {
    setSelectedCandidate({
      englishName,
      arabicName,
      image,
      cvImage,
      cvData
    });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedCandidate(null);
  };

  return (
    <>
      <div 
        className="min-h-screen w-full overflow-x-hidden relative" 
        style={{ 
          background: '#5b3c5d'
        }}
      >
        {/* Grid overlay - first layer from background */}
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        {/* Gradient overlay on top of grid - fades grid at bottom */}
        <div 
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, transparent 30%, #63718e 70%, #63718e 100%)'
          }}
        />
        {/* Ellipse gradient overlay - above grid, below logos */}
        <div 
          className="absolute pointer-events-none z-[5]"
          style={{
            top: '-100px',
            left: '-150px',
            width: '410px',
            height: '410px',
            opacity: 0.8,
            filter: 'blur(91.35px)',
            background: 'radial-gradient(50% 50% at 50% 50%, rgba(124, 143, 182, 0.7) 0%, rgba(99, 113, 142, 0.7) 57.96%)',
            borderRadius: '410px'
          }}
        />

        <div className="relative z-10 flex flex-col items-center pt-8 md:pt-6 pb-8 md:pb-16 px-2 md:px-4">
        <div
          className="logo-header rounded-2xl md:rounded-3xl px-4 md:px-10 py-3 md:py-6 max-w-5xl w-full mb-4 md:mb-6 animate-in fade-in slide-in-from-top-4 duration-500 flex justify-center items-center gap-3 md:gap-8"
          style={{ 
            background: 'rgba(98, 75, 105, 0.8)',
            border: '1px solid rgba(122, 111, 133, 0.5)',
            backdropFilter: 'blur(2px)',
            boxShadow: '25px 23px 90.8px rgba(0,0,0,0.3)'
          }}
          data-testid="logo-header"
        >
          <img src={ghaiaLogo} alt="Ghaia.ai" className="h-6 md:h-10 object-contain" />
          <div className="w-px h-12 md:h-24 bg-white/20" />
          <img src={echoLogo} alt="Echo" className="h-12 md:h-24 object-contain" />
          <div className="w-px h-12 md:h-24 bg-white/20" />
          <img src={shafallahLogo} alt="Shafallah" className="h-10 md:h-20 object-contain" />
        </div>

        <div
          className="glass-card rounded-2xl md:rounded-3xl px-4 md:px-8 py-4 md:py-6 max-w-[320px] md:max-w-[630px] w-full mb-4 md:mb-6 animate-in fade-in slide-in-from-top-4 duration-500"
          style={{ boxShadow: '25px 23px 70.8px rgba(0,0,0,0.2)', animationDelay: '100ms', animationFillMode: 'both' }}
        >
          <div className="flex flex-col items-center gap-2 md:gap-3">
            <h1 
              className="text-white text-center font-bold text-[30px] leading-[34px] md:text-[44px] md:leading-[48px]"
              style={{ fontFamily: "'Helvetica Neue LT Arabic', 'Helvetica Neue', sans-serif", letterSpacing: '-0.26px' }}
            >جدارية الفرص</h1>
            <h2 
              className="text-center font-bold text-[28px] leading-[32px] md:text-[42px] md:leading-[46px]"
              style={{ 
                fontFamily: 'Sansation, sans-serif', 
                letterSpacing: '-0.26px',
                color: '#8fd1c4'
              }}
            >Wall of Opportunities</h2>
          </div>
        </div>

        <Link
          to="/about-echo"
          className="teal-gradient rounded-[20px] md:rounded-[26px] px-5 py-3 md:px-8 md:py-4 mb-6 md:mb-8 no-underline shadow-[0_4px_24px_rgba(147,203,195,0.25)] hover:scale-[1.02] transition-transform"
          data-testid="learn-more-echo-button"
        >
          <div className="flex flex-col items-center gap-1">
            <span
              className="text-black text-[16px] leading-[20px] md:text-[26px] md:leading-[30px] text-center"
              style={{ fontFamily: "'Helvetica Neue LT Arabic', 'Helvetica Neue', sans-serif" }}
            >
              تعرف أكثر عن صدى
            </span>
            <span
              className="text-black font-bold text-[16px] leading-[20px] md:text-[26px] md:leading-[30px] text-center"
              style={{ fontFamily: 'Sansation, sans-serif' }}
            >
              Learn More about ECHO
            </span>
          </div>
        </Link>

        <div 
          className="relative w-full mb-8 md:mb-16 animate-in fade-in slide-in-from-bottom-6 duration-700" 
          style={{ animationDelay: '200ms', animationFillMode: 'both', maxWidth: 'calc(100vw - 16px)' }}
        >
          {/* Board Frame PNG Background */}
          <img 
            src={boardFrameImage} 
            alt="Board frame" 
            className="absolute inset-0 w-full h-full object-fill pointer-events-none hidden md:block"
            style={{ zIndex: 0 }}
          />
          {/* Mobile Board Frame - CSS Implementation */}
          <MobileBoardFrame />
          
          {/* Profile Cards Grid */}
          <div className="relative z-10 px-3 pt-3 pb-32 sm:p-6 md:px-[120px] md:pt-[120px] md:pb-24">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-6">
              {profiles.map((profile, index) => (
                <ProfileCard
                  key={index}
                  image={profile.image}
                  arabicName={profile.arabicName}
                  englishName={profile.englishName}
                  index={index}
                  onViewCV={() => handleViewCV(profile.englishName, profile.arabicName, profile.image, profile.cvImage, (profile as any).cvData)}
                  isPlaceholder={profile.isPlaceholder}
                  customPosition={profile.customPosition}
                  customScale={profile.customScale}
                  isHired={(profile as any).isHired}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className="flex flex-col items-center gap-4 md:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 mt-[0px] mb-[0px]"
          style={{ animationDelay: '400ms', animationFillMode: 'both' }}
        >
          <div className="flex flex-col items-center gap-1 md:gap-2">
            <p 
              className="text-white md:text-[44px] text-center px-2 text-[20px]"
              style={{ fontFamily: "'Helvetica Neue LT Arabic', 'Helvetica Neue', sans-serif" }}
            >
              الدمج يبدأ بالفعل! تواصل مع فريق التوظيف
            </p>
            <p 
              className="md:text-[44px] text-center font-bold px-2 text-[20px]"
              style={{ 
                fontFamily: 'Sansation, sans-serif',
                color: '#8dd4cc'
              }}
            >
              Turn Inclusion Into Action. Get In Touch With The Hiring Team
            </p>
          </div>
          
          <a
            href="mailto:isham@shafallah.org.qa"
            className="teal-gradient rounded-xl md:rounded-2xl px-5 py-2 md:px-0 md:py-0 flex flex-col items-center gap-0.5 md:gap-1 hover:scale-105 active:scale-98 transition-transform no-underline md:pl-[74px] md:pr-[74px] md:pt-[20px] md:pb-[20px]"
            style={{ boxShadow: '0 4px 24px rgba(147, 203, 195, 0.25)' }}
            data-testid="connect-today-button"
          >
            <span className="text-black text-sm md:text-base" style={{ fontFamily: "'Helvetica Neue LT Arabic', 'Helvetica Neue', sans-serif" }}>
              تواصل اليوم
            </span>
            <span className="text-black text-sm md:text-base font-bold" style={{ fontFamily: 'Sansation, sans-serif' }}>
              Connect Today
            </span>
          </a>
        </div>
      </div>
      {/* CV Modal */}
      <CVModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        candidateName={selectedCandidate?.englishName || ''}
        arabicName={selectedCandidate?.arabicName || ''}
        image={selectedCandidate?.image || ''}
        cvImage={selectedCandidate?.cvImage}
      />
      </div>
    </>
  );
}
