import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  // Languages available
  const locales = [
    { code: 'en-gb', name: 'English' },
    { code: 'zh-cn', name: '中文' }
  ];
  
  // Get current language
  const currentLocale = locales.find(l => l.code === locale) || locales[0];
  
  // State for dropdown
  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setIsOpen(false);
    
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);
  
  return (
    <div 
      className="nx-relative" 
      onClick={(e) => e.stopPropagation()}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="nx-text-sm nx-font-medium nx-p-2 nx-rounded nx-flex nx-items-center nx-gap-1"
        aria-label="Select language"
      >
        {currentLocale.name}
        <svg 
          width="12" 
          height="12" 
          viewBox="0 0 12 12"
          fill="none"
          className="nx-ml-1"
        >
          <path 
            d="M2 4L6 8L10 4" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </button>
      
      {isOpen && (
        <div 
          className="nx-absolute nx-right-0 nx-top-full nx-mt-1 nx-min-w-[120px] nx-rounded nx-bg-white nx-p-1 nx-shadow-lg nx-ring-1 nx-ring-black/5 nx-z-50 dark:nx-bg-neutral-800 dark:nx-ring-white/20"
        >
          {locales.map((l) => (
            <Link
              key={l.code}
              href={asPath}
              locale={l.code}
              className={`nx-block nx-px-2 nx-py-1 nx-text-sm nx-rounded ${
                locale === l.code 
                  ? 'nx-bg-primary-100 nx-text-primary-900 dark:nx-bg-primary-900/10 dark:nx-text-primary-50' 
                  : 'nx-text-gray-700 hover:nx-bg-gray-100 dark:nx-text-neutral-200 dark:hover:nx-bg-neutral-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {l.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 