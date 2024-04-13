import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const searchString = req.query.queryString
  const searchStringTokens = searchString.split(" ")
  const pos = searchStringTokens[0]
  const first = searchStringTokens[1]
  const last = searchStringTokens[2]
  console.log(searchStringTokens)

  const resultPlayers = await prisma.players.findMany({
    where: {
      firstname: {
        startsWith: first
      },
      lastname:{
        startsWith: last
      },
      position:pos,
    },
    take: 10
  })
  res.json(resultPlayers)
}