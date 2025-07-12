import React, { Fragment, ReactNode, useMemo } from 'react';

export const SectionValidator = ({ value, children }: { value: unknown; children: ReactNode }) => {
  const isValid = useMemo(() => {
    if (typeof value === 'string') return value.length > 0;
    if (Array.isArray(value)) return value.length > 0;
    return false;
  }, [value]);

  if (!isValid) return null;

  return <Fragment>{children}</Fragment>;
};

export { SectionValidator as ValidSectionRenderer };
