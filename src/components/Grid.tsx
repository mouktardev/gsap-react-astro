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
        <section className="container mx-auto max-w-[800px]">
            <ul className='flex gap-5'>
                {animationTypes.map((animation, index) => (
                    <button key={index} type="button" className="p-5 text-white font-bold text-lg" onClick={() => animationStateUpdate(animation)}>{animation}</button>
                ))}
            </ul>
            <Animate className='' anim={animationValueHolder}>
                <Card />
            </Animate>
        </section>
    )
}