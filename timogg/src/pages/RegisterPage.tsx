import { useNavigate } from 'react-router-dom';
import useAuthStore from '../storage/useAuthStore.tsx';
import { useEffect, useState } from 'react';
import { checkRegister } from '../utils/checkRegister.tsx';
import AdditionalInfoSection from '../components/register/AdditionalInfoSection.tsx';
import Button from '../components/common/Button.tsx';

interface TermsSectionProps {
  title: string;
  checkboxText: string;
  checked: boolean;
  onChange: () => void;
  showError: boolean;
}

const TermsSection = ({
  title,
  checkboxText,
  checked,
  onChange,
  showError,
}: TermsSectionProps) => {
  return (
    <div className="w-full flex justify-center flex-col">
      <p className="ml-10 mb-2 text-body3-13-bold">{title}</p>
      <textarea
        className="w-full text-primary-gray p-10 rounded-10 border-primary-gray border-2 resize-none h-[150px]"
        readOnly
      />
      <div
        className={`mt-6 mr-10 flex gap-2 items-center justify-end ${showError ? 'animate-shake' : ''}`}
      >
        <input
          type="checkbox"
          className={`${showError ? 'border-red-500' : ''}`}
          checked={checked}
          onChange={onChange}
        />
        <p
          className={`text-body4-12-regular ${showError ? 'text-red-500' : ''}`}
        >
          {checkboxText}
        </p>
      </div>
    </div>
  );
};

function RegisterPage() {
  const router = useNavigate();
  const { userData } = useAuthStore.getState();
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  useEffect(() => {
    checkRegister().then(result => {
      if (result) {
        router('/', { replace: true });
      }
    });
  }, [userData]);

  const handleNextClick = () => {
    if (!agreeTerms || !agreePrivacy) {
      setShowError(true);
    } else {
      setShowError(false);
      setShowAdditionalInfo(true);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col overflow-y-auto py-50">
      {!showAdditionalInfo ? (
        <>
          <div className="text-center mb-[40px]">
            <h1 className="text-[36px] mb-[12px] font-medium text-[#DDDDDD]">
              회원가입
            </h1>
            <p className="text-[14px]">
              서비스 이용을 위한 약관 동의 및 추가 정보 입력
            </p>
          </div>

          <div className="w-full items-center flex flex-col gap-40 px-30 max-w-[800px]">
            <div className="w-full flex flex-col items-center gap-40">
              <TermsSection
                title="서비스 이용약관"
                checkboxText="[필수] 서비스 이용약관에 동의합니다."
                checked={agreeTerms}
                onChange={() => {
                  setAgreeTerms(!agreeTerms);
                }}
                showError={showError && !agreeTerms}
              />
              <TermsSection
                title="개인정보 수집 및 이용 동의"
                checkboxText="[필수] 개인정보 수집 및 이용에 동의합니다."
                checked={agreePrivacy}
                onChange={() => setAgreePrivacy(!agreePrivacy)}
                showError={showError && !agreePrivacy}
              />
            </div>
            <Button label="다음" width={'100%'} onSubmit={handleNextClick} />
          </div>
        </>
      ) : (
        <AdditionalInfoSection />
      )}
    </div>
  );
}

export default RegisterPage;
