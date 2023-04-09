import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ReactNode, useLayoutEffect, useRef } from "react";
import { animationStateUpdate, animationStateValues } from "./store";

gsap.registerPlugin(TextPlugin);

type Props = {
	className?: string;
	children: ReactNode;
	anim: animationStateValues;
};

export default function Animate({ className, children, anim }: Props) {
	const el = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			if (el.current) {
				switch (anim) {
					case "FadeIn":
						gsap.from(el.current.children, {
							xPercent: 100,
							autoAlpha: 0,
							duration: 1.5,
							ease: "power2.inOut",
							onComplete: animationStateUpdate,
							onCompleteParams: [undefined],
						});
						break;
					case "FadeOut":
						gsap.to(el.current.children, {
							xPercent: 100,
							autoAlpha: 0,
							duration: 1.5,
							ease: "power2.inOut",
							onComplete: animationStateUpdate,
							onCompleteParams: [undefined],
						});
						break;
					case "TextReplace":
						gsap.to(el.current.children[0].children[0], {
							text: {
								value: "This is New",
								newClass: "font-light",
							},
							duration: 2,
							ease: "power2.inOut",
							onComplete: animationStateUpdate,
							onCompleteParams: [undefined],
						});
						break;
					default:
						break;
				}
			}
		});
		return () => ctx.revert();
	}, [anim]);

	return (
		<div className={className} ref={el}>
			{children}
		</div>
	);
}