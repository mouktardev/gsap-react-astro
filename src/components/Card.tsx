
type Props = {}

export default function Card({ }: Props) {
    return (
        <div className="max-w-[15rem] p-2 rounded-xl backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-3xl dark:shadow-none">
            <h1 className='text-white font-bold text-6xl p-4'>Hello World</h1>
        </div>
    )
}