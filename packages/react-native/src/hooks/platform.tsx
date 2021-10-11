import { useCallback, useEffect, useState } from 'react';
import { getPlatformLanguage } from '../modules';

const usePlatformLanguage = () => {
  const [platformLanguage, setPlatformLanguage] = useState<IsoCode | null>(
    null
  );

  const fetchPlatformLanguage = useCallback(async () => {
    const language = await getPlatformLanguage();
    setPlatformLanguage(language as IsoCode);
  }, []);

  useEffect(() => {
    void fetchPlatformLanguage();
  }, []);

  return platformLanguage;
};

export { usePlatformLanguage };
