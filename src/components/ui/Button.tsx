import gsap from "gsap";
import { MouseEventHandler, ReactNode, useRef } from 'react';

type Props = {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>
    className?: string;
};

export default function Button({ children, className, onClick }: Props) {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const handlePress = () => {
        gsap.to(buttonRef.current, 0.2, { scale: 0.85, opacity: 0.7, ease: "elastic.out(1, 0.3)" });
    };

    const handleRelease = () => {
        gsap.to(buttonRef.current, 0.2, { scale: 1, opacity: 1 });
    };

    return (
        <button
            type="button"
            className={className}
            ref={buttonRef}
            onMouseDown={handlePress}
            onMouseUp={handleRelease}
            onTouchStart={handlePress}
            onTouchEnd={handleRelease}
            onClick={onClick}
        >
            {children}
        </button>
    )
}