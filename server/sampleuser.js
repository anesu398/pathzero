import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createSampleUser = async () => {
  try {
    const sampleUser = await prisma.user.create({
      data: {
        email: 'ndabaprinco@gmail.com',
        name: 'anesundava',
        //password: '078700239', // Ensure to hash the password in a real application
        bookedVisits: [],
        favResidenciesID: []
      },
    });

    console.log('Sample user created:', sampleUser);
  } catch (error) {
    console.error('Error creating sample user:', error);
  } finally {
    await prisma.$disconnect();
  }
};

createSampleUser();
