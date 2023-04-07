import { atom } from "nanostores";

export type animationStateValues = undefined | "FadeIn" | "FadeOut";

export const animationState = atom<animationStateValues>();

export function animationStateUpdate(animation: animationStateValues) {
	animationState.set(animation);
}
