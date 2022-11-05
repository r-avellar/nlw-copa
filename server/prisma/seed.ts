import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main(){
    const user = await prisma.user.create({
        data: {
            name: 'John Doe',
            email: 'john.doe@gmail.com',
            avatarURL: 'https://github.com/r-avellar.png'
        }
    })

    const poll = await prisma.poll.create({
        data:{
            title: 'Example Poll',
            code: 'BOL123',
            ownerId: user.id,

            participants: {
                create:{
                    userId: user.id
                }
            }
        }
    })
    
    await prisma.game.create({
        data: {
            date: '2022-11-28T13:00:00.276Z',
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'CH'
        }
    })

    await prisma.game.create({
        data: {
            date: '2022-11-24T16:00:00.276Z',
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'RS',

            guesses: {
                create:{
                    firstTeamPoints: 3,
                    secondTeamPoints: 1,

                    participant: {
                        connect:{
                            userId_pollId:{
                                userId: user.id,
                                pollId: poll.id
                            }
                        }
                    }
                }
            }
        }
    })

}

main()