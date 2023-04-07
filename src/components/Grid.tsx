import Animate from '@animation/Animate';
import { animationState, animationStateUpdate, animationStateValues } from "@animation/store";
import { useStore } from '@nanostores/react';
import { useEffect } from 'react';
import Card from './Card';

const animationTypes: animationStateValues[] = ["FadeIn", "FadeOut"]

export default function Grid() {
    const animationValueHolder = useStore(animationState)

    useEffect(() => {
        console.log(animationValueHolder);
    }, [animationValueHolder])

    return (
        <section className="container mx-auto max-w-[800px] my-auto">
            <div className='flex justify-center items-center gap-5 p-4'>
                <ul className='space-y-5'>
                    {animationTypes.map((animation, index) => (
                        <button key={index} type="button" className="w-full p-5 border border-neutral-800 dark:border-white text-white font-bold text-lg sm:text-base" onClick={() => animationStateUpdate(animation)}>{animation}</button>
                    ))}
                </ul>
                <Animate className='' anim={animationValueHolder}>
                    <Card />
                </Animate>
            </div>
        </section>
    )
}