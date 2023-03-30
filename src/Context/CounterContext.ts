import { createContext } from "react";

export interface IStateContextType {
	count: number;
	setCount: (v: number) => void;
}

export const StateContext = createContext<IStateContextType>({
	count: 0,
	setCount: () => {},
});
