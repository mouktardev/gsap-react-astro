import * as Icons from '@svg/Icons'
import Button from './Button'
type Props = {}

export default function Card({ }: Props) {
    return (
        <div className='w-[300px] h-[500px] bg-gradient-to-t from-blue-950  backdrop-blur-md bg-black/30 shadow-md shadow-neutral-500/30 border-[0.5px] border-neutral-300/20 overflow-hidden rounded-lg'>
            <div style={{ background: "url('asset/noise.png')" }} className="absolute inset-0 bg-left opacity-[0.10]"></div>
            <div className="w-full flex items-center p-5 backdrop-blur-md bg-black/30 border-b-[0.5px] border-neutral-300/20">
                <Button>
                    <Icons.Dots className='h-7 w-7 text-neutral-300' />
                </Button>
            </div>
        </div>
    )
}