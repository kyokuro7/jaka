import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { mailbox, limit = 20 } = req.query;
  if (!mailbox) {
    res.status(400).json({ error: 'mailbox query required' });
    return;
  }
  const apiUrl = `https://ilovetempmail.com/api/v1/mailbox/${encodeURIComponent(mailbox)}?limit=${limit}`;
  try {
    const r = await fetch(apiUrl);
    const data = await r.json();            // {messages: [{id,…},…]}
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: 'Failed fetch messages' });
  }
}
