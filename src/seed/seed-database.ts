import { PrismaClient } from '@prisma/client';
import { initialData } from './seed';

const prisma = new PrismaClient();

async function main() {
  // Clear previous records
  await prisma.labourMaterialRelation.deleteMany({});
  await prisma.material.deleteMany({});
  await prisma.labour.deleteMany({});
  await prisma.materialName.deleteMany({});
  await prisma.labourName.deleteMany({});
  await prisma.labourCategory.deleteMany({});
  await prisma.materialProvider.deleteMany({});
  await prisma.labourProvider.deleteMany({});

  // Find the user with the specified email
  const userToExclude = await prisma.user.findUnique({
    where: { email: 'jbarrandeguy@gmail.com' },
  });

  // Prevent deletion if user exists
  if (userToExclude) {
    console.log(`User with email ${userToExclude.email} will not be deleted.`);
  } else {
    // Delete all users except the one to exclude
    await prisma.user.deleteMany({
      where: {
        email: {
          not: 'jbarrandeguy@gmail.com',
        },
      },
    });
  }

  const { users, labourCategories, labourNames, materialName, material, labour } = initialData;

  // Create users
  await prisma.user.createMany({ data: users });

  // Create material name
  await prisma.materialName.createMany({ data: materialName });

  // Create material providers
  const materialProviderUsers = await prisma.user.findMany({
    where: {
      userType: 'REGULAR',
    },
  });

  for (const user of materialProviderUsers) {
    const provider = await prisma.materialProvider.create({
      data: {
        userId: user.id,
      },
    });

    // Create material instances for this provider
    for (const mat of material) {
      const materialNameInstance = await prisma.materialName.findFirst({
        where: { name: mat.materialNameRef },
      });

      if (!materialNameInstance) {
        console.error(`Material name "${mat.materialNameRef}" not found.`);
        return;
      }

      await prisma.material.create({
        data: {
          date: new Date(mat.date),
          providerId: provider.id,
          materialNameId: materialNameInstance.id,
          price: mat.price,
          unit: mat.unit,
          quantity: mat.quantity,
        },
      });
    }
  }

  // Create labour categories
  await prisma.labourCategory.createMany({ data: labourCategories });

  // Create labour names
  for (const category of initialData.labourCategories) {
    const labourNamesForCategory = initialData.labourNames.filter(name => name.labourCategoryRef === category.name);

    for (const labourName of labourNamesForCategory) {
      const foundCategory = await prisma.labourCategory.findFirst({
        where: { name: category.name },
      });

      if (!foundCategory) {
        console.error(`Labour category "${category.name}" not found.`);
        return;
      }

      await prisma.labourName.create({
        data: {
          name: labourName.name,
          labourCategoryId: foundCategory.id,
          unit: labourName.unit
        },
      });
    }
  }

  // Create labour providers
  const regularUsers = await prisma.user.findMany({
    where: {
      userType: 'REGULAR',
    },
  });

  for (const user of regularUsers) {
    const labourProvider = await prisma.labourProvider.create({
      data: {
        userId: user.id,
      },
    });

    // Create a labour for each labour name and replicate it for each labour provider
    for (const category of initialData.labourCategories) {
      const labourNamesForCategory = initialData.labourNames.filter(name => name.labourCategoryRef === category.name);

      for (const labourName of labourNamesForCategory) {
        const foundLabourName = await prisma.labourName.findFirst({
          where: { name: labourName.name },
        });

        if (!foundLabourName) {
          console.error(`Labour name "${labourName.name}" not found.`);
          return;
        }

        // Generate random price between 5000 and 20000
        const price = Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000;

        await prisma.labour.create({
          data: {
            date: new Date().toISOString(), // Example date, change as needed
            price: price,
            labourNameId: foundLabourName.id,
            labourProviderId: labourProvider.id,
            efficiency: 0
          },
        });

      }
    }
  }

  // create LabourMaterialRelation
  const labours = await prisma.labour.findMany();

  for (const labour of labours) {
    // Get the corresponding LabourName for the current Labour
    const labourName = await prisma.labourName.findFirst({
      where: {
        id: labour.labourNameId,
      },
    });

    if (!labourName) {
      console.error(`Labour name not found for Labour ${labour.id}`);
      return;
    }

    // Check if LabourMaterialRelation already exists for this LabourName
    const existingRelation = await prisma.labourMaterialRelation.findFirst({
      where: {
        labourId: labour.id,
      },
    });

    // If LabourMaterialRelation already exists, continue to the next Labour
    if (existingRelation) {
      console.log(`LabourMaterialRelation already exists for Labour ${labour.id}`);
      continue;
    }

    // Find up to 3 unique materials for this Labour
    const materials = await prisma.material.findMany({
      take: 3,
    });

    for (const material of materials) {
      // Generate a random quantity (between 1 and 100)
      const quantity = Math.floor(Math.random() * 100) + 1;

      await prisma.labourMaterialRelation.create({
        data: {
          labourId: labour.id,
          materialId: material.id,
          quantity: quantity,
        },
      })
    }
  }

  console.log('Seed data created successfully');
}

(() => {

  if (process.env.NODE_ENV === 'production') return;


  main();

})();