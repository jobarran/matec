interface User {
  id?: string;
  name: string;
  lastName: string;
  email?: string;
  userType?: string;
}

interface LabourCategory {
  name: string;
}

interface LabourName {
  name: string;
  unit: string;
  labourCategory: LabourCategory;
}

interface Labour {
  id: string;
  date: Date;
  price: number;
  efficiency: number | null;
  labourProviderId: string;
  labourNameId: string;
  createdAt: Date;
  updatedAt: Date;
  labourName: LabourName;
}

interface LabourProvider {
  id: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  labours: Labour[];
}

interface Props {
  labourProviders: LabourProvider[];
}

export const LabourData = ({ labourProviders }: Props) => {

  console.log(labourProviders)

  return (

    <div className="labour-providers-container">
      <p className="font-bold text-2xl">Labour Providers</p>

      {labourProviders.map((labourProvider, index) => (
        <div key={index} className="labour-provider">
          <p className="font-bold">{labourProvider.user.name} {labourProvider.user.lastName}</p>
          <ul>
            {labourProvider.labours.map((labour, idx) => (
              <li key={idx} >
                <p>
                  <span className="font-semibold">Category:</span> {labour.labourName.labourCategory.name} -
                  <span className="font-semibold"> Name:</span> {labour.labourName.name} -
                  <span className="font-semibold"> Unit:</span> {labour.labourName.unit} -
                  <span className="font-semibold"> Price:</span> {labour.price} -
                  <span className="font-semibold"> Efficiency:</span> {labour.efficiency} {labour.labourName.unit}/h
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>


  )
}
