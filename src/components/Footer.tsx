import * as Icons from "@svg/Icons";
type Props = {
	version: string;
};

export default function Footer({ version }: Props) {
	return (
		<footer className="relative mt-auto px-4 py-5 overflow-hidden">
			<div className="absolute mask inset-0 border-t dark:border-white border-neutral-800" />
			<div className="container relative mx-auto max-w-[800px] flex sm:flex-col justify-between items-center gap-2 ">
				<span className="text-neutral-800 dark:text-white sm:text-center sm:text-base uppercase">
					MouktarDev©2023
				</span>
				<p className="text-neutral-800 dark:text-white sm:text-center text-sm">
					Built with <a href="https://astro.build">{version}</a>
				</p>
				<div className="flex gap-4 sm:justify-center">
					<a
						className="text-neutral-800 dark:text-white text-xl sm:text-center sm:text-base uppercase"
						href=""
					>
						<Icons.Twitter className="relative w-5 h-5 text-neutral-600 dark:text-white" />
					</a>
					<a
						className="text-neutral-800 dark:text-white text-xl sm:text-center sm:text-base uppercase"
						href=""
					>
						<Icons.instagram className="relative w-5 h-5 text-neutral-600 dark:text-white" />
					</a>
					<a
						className="text-neutral-800 dark:text-white text-xl sm:text-center sm:text-base uppercase"
						href=""
					>
						<Icons.Youtube className="relative w-5 h-5 text-neutral-600 dark:text-white" />
					</a>
				</div>
			</div>
		</footer>
	);
}
