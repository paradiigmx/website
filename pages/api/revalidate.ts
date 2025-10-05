import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = process.env.VERCEL_REVALIDATE_TOKEN;
  if (!token || req.headers.authorization !== `Bearer ${token}`) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const path = (req.query.path as string) || '/';
  try {
    await res.revalidate(path);
    return res.json({ revalidated: true, path });
  } catch (err: any) {
    return res.status(500).json({ message: err?.message || 'Revalidation error' });
  }
}
