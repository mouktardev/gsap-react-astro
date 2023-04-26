import Animate from '@animation/Animate';
import { animationState, animationStateUpdate, animationStateValues } from "@animation/store";
import Button from '@components/ui/Button';
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
            <div className='flex items-center sm:p-4 gap-5 '>
                <div className='flex flex-col gap-2'>
                    {animationTypes.map((animation, index) => (
                        <Button key={index} className="p-5 border border-neutral-800 dark:border-white text-neutral-800 dark:text-white font-bold text-lg sm:text-base" onClick={() => animationStateUpdate(animation)}>{animation}</Button>
                    ))}
                </div>
                <Animate anim={animationValueHolder}>
                    <div className="p-2 rounded-xl backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-3xl dark:shadow-none">
                        <h1 className='text-neutral-800 dark:text-white font-bold text-2xl p-4'>Hello World</h1>
                    </div>
                </Animate>
            </div>
        </section>
    )
}

