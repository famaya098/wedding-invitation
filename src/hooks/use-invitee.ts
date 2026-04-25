'use client';

import { useSearchParams } from 'next/navigation';

export interface Invitee {
  name: string;
  cupos: number;
}

export function useInvitee(): Invitee {
  const params = useSearchParams();

  const name = params.get('to') ?? params.get('toName') ?? '';
  const cupos = Math.max(1, Math.min(10, parseInt(params.get('cupos') ?? '1', 10) || 1));

  return { name, cupos };
}
