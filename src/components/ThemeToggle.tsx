import useDarkMode from "@hooks/useDarkMode";
import * as Icons from "@svg/Icons";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function ThemeToggle() {
	const [isDark, toggleTheme] = useDarkMode();
	const el = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const root = document.documentElement;
		if (isDark) {
			root.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			root.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}

		const ctx = gsap.context(() => {
			if (el.current && isDark) {
				gsap.from(el.current, { x: 35 })
			} else {
				gsap.to(el.current, { x: 35 })
			}
		})
		return () => ctx.revert();
	}, [isDark]);

	return (
		<div
			className="relative max-w-[70px] ml-auto rounded-full cursor-pointer bg-neutral-200 dark:bg-neutral-800 z-20"
			onClick={toggleTheme}
		>
			<div className="w-full flex justify-between items-center rounded-full p-2">
				<Icons.Day className="w-5 text-neutral-600" />
				<Icons.Night className="w-5 text-neutral-300" />
				<div className="absolute p-3 bg-neutral-400 dark:bg-white rounded-full z-10" ref={el}></div>
			</div>
		</div>
	);
}
