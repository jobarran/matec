import bcryptjs from 'bcryptjs';

interface SeedUser {
  email: string;
  password: string;
  name: string;
  lastName: string;
  userType: 'ADMIN' | 'REGULAR'
}

interface SeedLabourCategory {
  name: string;
}

interface SeedLabourName {
  name: string;
  labourCategoryRef: string;
  unit: string
}

interface SeedMaterialName {
  name: string
}

interface SeedMaterial {
  date: string,
  price: number,
  materialNameRef: string,
  unit: string,
  quantity: number
}

interface SeedLabour {
  date: string;
  price: number;
  efficiency?: number;
}

interface SeedData {
  users: SeedUser[];
  labourCategories: SeedLabourCategory[]
  labourNames: SeedLabourName[]
  materialName: SeedMaterialName[]
  material: SeedMaterial[]
  labour: SeedLabour[];
}

export const initialData: SeedData = {

  users: [
    {
      email: 'joaquinbarrandeguy@gmail.com',
      name: 'Joaquin',
      lastName: 'Barrandeguy',
      password: bcryptjs.hashSync('123456'),
      userType: 'ADMIN'
    },
    {
      email: 'martinadeluca@gmail.com',
      name: 'Martina',
      lastName: 'De Luca',
      password: bcryptjs.hashSync('123456'),
      userType: 'REGULAR'
    },
    {
      email: 'agusbarrandeguy@gmail.com',
      name: 'Agustin',
      lastName: 'Barrandeguy',
      password: bcryptjs.hashSync('123456'),
      userType: 'REGULAR'
    },
    {
      email: 'delfibarrandeguy@gmail.com',
      name: 'Delfina',
      lastName: 'Barrandeguy',
      password: bcryptjs.hashSync('123456'),
      userType: 'REGULAR'
    },
    {
      email: 'torobarrandeguy@gmail.com',
      name: 'Toro',
      lastName: 'Barrandeguy',
      password: bcryptjs.hashSync('123456'),
      userType: 'REGULAR'
    },
  ],
  labourCategories: [
    { name: 'mamposteria' },
    { name: 'revoque' },
    { name: 'pintura' },
    { name: 'contrapiso y carpeta' },
  ],
  labourNames: [
    { name: 'Mampostería ladrillo comun 15cm', labourCategoryRef: 'mamposteria', unit:'m2' },
    { name: 'Mampostería ladrillo hueco 12 x 18 x 33', labourCategoryRef: 'mamposteria', unit:'m2' },
    { name: 'Mampostería ladrillode HCCA 12.5 x 50 x 25', labourCategoryRef: 'mamposteria', unit:'m2' },
    { name: 'Revoque grueso interior', labourCategoryRef: 'revoque', unit:'m2' },
    { name: 'Revoque fino interior', labourCategoryRef: 'revoque', unit:'m2' },
    { name: 'Revoque bajo revestimiento', labourCategoryRef: 'revoque', unit:'m2' },
    { name: 'Pintura latex s/muro interior', labourCategoryRef: 'pintura', unit:'m2' },
    { name: 'Pintura latex s/cielorraso', labourCategoryRef: 'pintura', unit:'m2' },
    { name: 'Enduido', labourCategoryRef: 'pintura', unit:'m2' },
    { name: 'Contrapiso c/pendiente s/losa', labourCategoryRef: 'contrapiso y carpeta', unit:'m2' },
    { name: 'Contrapiso s/terreno natural e=12cm', labourCategoryRef: 'contrapiso y carpeta', unit:'m2' },
    { name: 'Carpeta de nivelación e=3cm', labourCategoryRef: 'contrapiso y carpeta', unit:'m2' },
  ],
  materialName: [
    { name: 'Ladrillo comun' },
    { name: 'Cemento' },
    { name: 'Cal' },
    { name: 'Arena' },
    { name: 'Cascote' },
    { name: 'Ladrillo hueco 12 x 18 x 33' },
    { name: 'Ladrillo HCCA 12.5 x 50 x 25' },
  ],
  material: [
    { date: new Date().toISOString(), price: 15, materialNameRef: 'Ladrillo comun', unit: 'u', quantity: 1 },
    { date: new Date().toISOString(), price: 20, materialNameRef: 'Cemento', unit: 'kg', quantity: 50 },
    { date: new Date().toISOString(), price: 12, materialNameRef: 'Cal', unit: 'kg', quantity: 30 },
    { date: new Date().toISOString(), price: 100000, materialNameRef: 'Arena', unit: 'm3', quantity: 1000 },
    { date: new Date().toISOString(), price: 150000, materialNameRef: 'Cascote', unit: 'm3', quantity: 1000 },
    { date: new Date().toISOString(), price: 17, materialNameRef: 'Ladrillo hueco 12 x 18 x 33', unit: 'u', quantity: 1 },
    { date: new Date().toISOString(), price: 15, materialNameRef: 'Ladrillo HCCA 12.5 x 50 x 25', unit: 'u', quantity: 1 },
  ],
  labour: [
    { date: new Date().toISOString(), price: 50 },
    { date: new Date().toISOString(), price: 60 },
  ],
};