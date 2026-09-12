import React, { use, useState } from 'react';
import type { techType } from '../../technoType';
import { CiCircleRemove } from 'react-icons/ci';
// import TechCard from './TechCard';

interface ItechAllCard {
    techPromise : Promise<techType[]>
}

const TechAllCard = ({techPromise} : ItechAllCard) => {
    const [stack, setStack] = useState<techType[]>([])
    // const [inStack, setInStack] = useState<string[]>([])
    const data = use(techPromise)

    const handleAddToStack = (technology : techType) => {
        if (stack.some(item => item.id === technology.id)){
            setStack(stack.filter(item => item.id !== technology.id))
        }else{
        setStack([...stack, technology])
        }
    }

    const handleRemover = (id: string):void => {
        setStack(stack.filter(item => item.id !== id))
    }


    const handleRemoveAll = () => {
        setStack([])
    }

    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-4xl font-bold my-3'>Explore the <span className='bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent'>Technologies</span></h2>
            <p className='text-[#64748B] mb-4'>Pick one technology per category to build your ideal stack.</p>
                {/* boxes */}
            <div className='grid grid-cols-12 gap-6'>
                {/* 70%-left */}
                <div className='col-span-9 h-100'>
                    <div className='grid grid-cols-3 gap-6'>
                        {data.map((technology) => {
                            return (
                                <div key={technology.id} className={`border my-3 p-5 w-full rounded-2xl hover:transition-transform duration-300 hover:scale-105 ${stack.some(item => item.id === technology.id) ? 'border-pink-400 shadow-pink-200 border-2' : 'border-[#e0e9f3]'}`}>

                                    <div className='flex justify-between mb-3 ml-4'>
                                        <img className='w-9 h-9' src={technology.icon} alt="" />
                                        <p>{technology.badge}</p>
                                    </div>

                                    <h2 className='font-semibold text-2xl mb-2'>{technology.name}</h2>
                                    <p className='text-[#64748B] mb-5'>{technology.description}</p>

                                    <div className='gap-3 mb-3 flex justify-between items-center'>
                                        <p className='text-[#475569] bg-[#F1F5F9] p-2 rounded-md'>{technology.category}</p>
                                        <p className='text-[#64748B]'>{technology.difficulty}</p>
                                        <p className='text-[#334155]'>{`⭐${technology.rating}`}</p>
                                    </div>

                                    <button onClick={() => handleAddToStack(technology)} className={`py-2 rounded-md px-17.5 hover:cursor-pointer ${stack.some(item => item.id === technology.id) ? 'text-pink-700 bg-pink-200 px-[60px]' : 'bg-[#0A0F1D] text-white'}`}>{stack.some(item => item.id === technology.id) ? "Added to Stack" : "Add to Stack" }</button>
                                </div>
                            )
                        })}       
                    </div>
                </div>

                    {/* 30%-right */}
                <div className='gap-y-0.5 bg-white shadow col-span-3 rounded-2xl mr-4 mt-[16px]'>

                     <div className='m-[30px]'>
                        <h2 className='font-semibold text-xl'>Your Stack</h2>
                        <p className='text-[#94A3B8] pt-[10px]'>{stack.length === 0 ? "No technologies selected yet." : stack.map((item) => {
                                return(
                                <div key={item.id} className='flex rounded-md border-[#E2E8F0] border border-2 p-3 gap-4 mb-4'>
                                    <div>
                                        <img className='w-9 h-9 mt-2' src={item.icon} alt="" />
                                    </div>
                                    <div>
                                        <h2 className='font-semibold text-xl text-[#0F172A]'>{item.name}</h2>
                                        <p className='text-[#94A3B8]'>{item.category}</p>
                                    </div>
                                    <button onClick={() => handleRemover(item.id)} className='cursor-pointer'><CiCircleRemove size={30} /></button>
                                </div>
                            )})}</p>
                    </div>
                    {
                        stack.length === 0 ? "" : <button onClick={handleRemoveAll} className='py-2 px-[50px] ml-[35px] border border-[#ED8C85 text-[#D82C20] font-semibold rounded-md'>Remove All</button>
                    }

                    <div className='m-[30px] w-[200px] h-[50px]'>
                        <p className={`${stack.length === 0} ? text-[#94A3B8] rounded-2xl border-dashed p-7 border border-[#94A3B8] : border-0`}>{stack.length === 0 ? "Your stack is empty." : ""}</p>
                    </div>
                </div>
            </div>
        </div>
    )
    
}


export default TechAllCard;