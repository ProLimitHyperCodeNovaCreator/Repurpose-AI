import React from 'react';
import { cn } from '../../utils/helpers';

/** repurpose.ai product mark (SVG in /public). */
export const REPURPOSE_MARK_SRC = '/repurpose-mark.svg';

interface RepurposeMarkProps {
  className?: string;
  /** Accessible label; use empty string for decorative-only beside visible text */
  alt?: string;
}

const RepurposeMark: React.FC<RepurposeMarkProps> = ({ className, alt = 'repurpose.ai' }) => (
  <img
    src={REPURPOSE_MARK_SRC}
    alt={alt}
    width={48}
    height={48}
    draggable={false}
    className={cn('select-none object-contain', className)}
  />
);

export default RepurposeMark;
