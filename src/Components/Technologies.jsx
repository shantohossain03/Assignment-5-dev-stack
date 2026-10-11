import React, { use, useState } from 'react'

import TechnologyCard from './TechnologyCard';
import SelectedCard from './SelectedCard';
import { toast } from 'react-toastify';


export default function Technologies({TechnologiesPromise}) {
    const technologies = use(TechnologiesPromise);
    // console.log(technologies, "from hook")

    const [selected, setSelected] = useState([]);

    function addTech(tech) {
        setSelected([...selected, tech]);
        toast.success(`${tech.name} added to your stack successfully.`);
    }

    function removeTech(techId) {
        const tech = selected.find((item) => item.id === techId);
     setSelected(selected.filter((item) => item.id !== techId));
     toast.info(`${tech.name} removed from your stack.`);
    }

    function removeAll() {
        
        setSelected([]);
        toast.error("Your stack has been cleared!");
    }

  return (
    <div className='container px-20 mx-auto mt-20'>
        
            <h1 className='font-bold text-3xl'>Explore The <span className='text-fuchsia-500'>Technologies</span></h1>
            <p className='text-md mt-3'>Pick one technology per category to build your ideal stack.</p>
            <h2>{technologies[3].name}</h2>

        <div className='grid grid-cols-4 gap-5 mt-10'>

            <div className='col-span-3 grid grid-cols-3 gap-5'>
                {
                    technologies.map((technology) => (
                        <TechnologyCard  
                            key={technology.id}
                            technology={technology}
                            addTech={addTech}
                            isAdded={selected.some((item) => item.id === technology.id)}
                        />

                    ))
                }
            </div>


            <div>
                <SelectedCard  selected={selected} removeTech={removeTech} removeAll={removeAll} />
            </div>

        </div>
        

        
    </div>
  )
}



