import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { authMiddleware } from '../../utils/authMiddleware';

const prisma = new PrismaClient();

export default authMiddleware(async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const conversation = await prisma.conversation.findUnique({
      where: { id: Number(id) },
      include: { messages: true },
    });
    if (!conversation) return res.status(404).json({ error: 'Conversation not found' });
    return res.status(200).json(conversation);
  }

  if (req.method === 'POST') {
    const { text } = req.body;
    const newMessage = await prisma.message.create({
      data: {
        text,
        sender: 'User',
        conversation: { connect: { id: Number(id) } },
      },
    });
    return res.status(200).json(newMessage);
  }
});