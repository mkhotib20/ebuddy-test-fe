'server only';

import { headers } from 'next/headers';

type DefaultData = Record<string, unknown>;

interface BaseFetchResult<DT> {
  data?: DT;
  error?: Error;
}

const GENERIC_ERROR_WORDING = 'Oops, something went wrong. Please try again later.';

const baseFetcher = async <DT = DefaultData>(url: string, init?: RequestInit): Promise<BaseFetchResult<DT>> => {
  const currentUrl = process.env.NEXT_PUBLIC_BASE_APP_URL;

  const rsp = await fetch(`${currentUrl}${url}`, {
    ...init,
    headers: headers(),
  });
  const jsonData = await rsp.json();

  if (!rsp.ok) {
    return { error: new Error(jsonData.message || GENERIC_ERROR_WORDING) };
  }

  return { data: jsonData };
};

export default baseFetcher;
