import { getAllLabourProviders, getAllLabours, getAllMaterials } from "@/actions";
import { LabourData } from "./ui/labours";
import { MaterialData } from "./ui/material";
import { Labour } from "@/interfaces";


export default async function TestPage() {

    const { labourProviders = [] } = await getAllLabourProviders();
    const { materials = [] } = await getAllMaterials();

    
    return (
        <div>
            <div className="flex flex-col items-center">
                <h1>Test Page</h1>
                <LabourData labourProviders={labourProviders} />
                <MaterialData materials={materials}/>
            </div>
        </div>
    );
}