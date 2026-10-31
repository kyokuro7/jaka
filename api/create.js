import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  const apiUrl = 'https://ilovetempmail.com/api/v1/mailbox/create';
  try {
    const r = await fetch(apiUrl);
    const data = await r.json();            // {mailbox: 'abcd1234', address: 'abcd1234@ilovetempmail.com'}
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: 'Failed to create mailbox' });
  }
}
