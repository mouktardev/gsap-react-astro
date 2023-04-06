import { useCallback, useState } from "react";

export default function useToggle(onOpen = false) {
	const [isOpen, setIsOpen] = useState(onOpen);
	const toggle = useCallback(() => setIsOpen((isOpen) => !isOpen), []);
	return [isOpen, toggle];
}
