import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const secret = process.env.WP_PREVIEW_SECRET;
  if (!secret || req.query.secret !== secret) {
    return res.status(401).json({ message: 'Invalid preview token' });
  }
  const slug = (req.query.slug as string) || '';
  if (!slug) return res.status(400).json({ message: 'Missing slug' });

  res.setPreviewData({});
  res.writeHead(307, { Location: `/${slug}` });
  res.end();
}
