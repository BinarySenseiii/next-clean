/** @format */

import type React from 'react';
import { memo } from 'react';

import { cn } from '~/core/lib/utils';

export const validatePasswordRequirements = (password: string) =>
  passwordRequirements.every(({ re }) => re.test(password));

interface PasswordRequirement {
  re: RegExp;
  label: string;
}

interface RenderPasswordRequirementsProps {
  password: string;
}

const passwordRequirements: PasswordRequirement[] = [
  {
    re: /[0-9]/,
    label: 'Includes number',
  },
  {
    re: /[a-z]/,
    label: 'Includes lowercase letter',
  },
  {
    re: /[A-Z]/,
    label: 'Includes uppercase letter',
  },
  {
    re: /[$&+,:;=?@#|'<>.^*()%!-]/,
    label: 'Includes special symbol',
  },
];

export const RenderPasswordRequirements: React.FC<RenderPasswordRequirementsProps> = memo(
  ({ password }) => {
    return (
      <ul className='space-y-0.5'>
        {passwordRequirements.map((req, index) => (
          <li
            key={index}
            className={cn('text-xs italic text-red-500', {
              'text-green-500': req.re.test(password),
            })}
          >
            {req.label}
          </li>
        ))}
      </ul>
    );
  },
);

RenderPasswordRequirements.displayName = 'RenderPasswordRequirements';
