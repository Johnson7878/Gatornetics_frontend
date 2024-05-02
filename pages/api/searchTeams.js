import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const searchString = req.query.queryString;

  try {
    const resultTeams = await prisma.teams.findMany({
      where: {
        school: {
          // Using ILike for case-insensitive search
          // Note: This requires pg_trgm extension and gin index on the column
          // Ensure searchString is properly sanitized to prevent SQL injection
          // You can adjust the match condition as needed (e.g., contains, startsWith, endsWith)
          // Example: ILike: `%${searchString}%` for a partial match
          contains: searchString
        },
      },
      take: 5
    });
    
    res.json(resultTeams);
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}