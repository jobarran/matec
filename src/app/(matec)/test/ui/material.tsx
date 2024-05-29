import { Material } from '@/interfaces';

interface Props {
    materials: Material[];
}

export const MaterialData = ({ materials }: Props) => {

    return (

        <div>
    
          <div>materials</div>
          {
            JSON.stringify(materials)
          }
        </div>
    
    
      )
    }
    