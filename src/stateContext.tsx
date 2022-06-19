import React, { Dispatch } from "react";

/**
 * This function gives you ability to create context in simple way
 * @returns
 * `Context` and `Provider`
 *
 */
function createStateCTX<S>(initialState: S) {
	if (typeof initialState === "undefined") {
		throw new Error("InitialState is a required parameter in this function");
	}
	const defaultDispatch: Dispatch<typeof initialState> = () => initialState;
	const Context = React.createContext({
		state: initialState,
		dispacth: defaultDispatch
	});
	const Provider = (props: React.PropsWithChildren<{}>) => {
		const [state, dispacth] = React.useState<S>(initialState);
		return <Context.Provider value={{ state, dispacth }} {...props} />;
	};
	return [Context, Provider] as const;
}

export default createStateCTX;
