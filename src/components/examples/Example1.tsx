import Animate from '@animation/Animate';
import { animationState, animationStateUpdate, animationStateValues } from "@animation/store";
import { useStore } from '@nanostores/react';

const animationTypes: animationStateValues[] = ["FadeIn", "FadeOut", "TextReplace"]

export default function Example1() {
    const animationValueHolder = useStore(animationState)

    // useEffect(() => {
    //     console.log(animationValueHolder);
    // }, [animationValueHolder])

    return (
        <section className="container mx-auto max-w-[800px]">
            <div className='overflow-hidden border dark:border-white my-10'>
                <img className="w-full object-cover" src="/asset/Banner.png" alt="banner" />
            </div>
            <div className='flex justify-center items-center gap-5 p-4'>
                <ul className='space-y-5'>
                    {animationTypes.map((animation, index) => (
                        <button key={index} type="button" className="w-full p-5 border border-neutral-800 dark:border-white text-neutral-800 dark:text-white font-bold text-lg sm:text-base" onClick={() => animationStateUpdate(animation)}>{animation}</button>
                    ))}
                </ul>
                <Animate className='' anim={animationValueHolder}>
                    <Card />
                </Animate>
            </div>
        </section>
    )
}

function Card() {
    return (
        <div className="max-w-[15rem] p-2 rounded-xl backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-3xl dark:shadow-none">
            <h1 className='text-neutral-800 dark:text-white font-bold text-6xl p-4'>Hello World</h1>
        </div>
    )
}