import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const searchString = req.query.queryString
  const searchStringTokens = searchString.split(" ")
  // searchStringTokens[0] = "(<" + searchStringTokens[0];
  // searchStringTokens[1] = ">" + searchStringTokens[1] + ")";

  // const modifiedSearchString = searchStringTokens.join(" ");

  const resultPlayers = await prisma.players.findMany({
    where: {
      lastname:{
        startsWith: searchStringTokens[1]
      },
      firstname: {
        startsWith: searchStringTokens[0]
      },
    },
    take: 5
  })
  res.json(resultPlayers)
}