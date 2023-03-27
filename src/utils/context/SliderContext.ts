import { createContext } from "react";

export type SliderContextType = {
	goToSlide: (number: number) => void;
	changeSlide: (direction?: number) => void;
	childsCount: number;
	activeSlide: number;
	childs: JSX.Element[];
};

export const SliderContext = createContext<SliderContextType | null>(null);
