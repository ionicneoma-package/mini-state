import React from "react";
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
	type UpdateType = React.Dispatch<React.SetStateAction<typeof initialState>>;
	const defaultDispatch: UpdateType = () => initialState;
	const Context = React.createContext({
		state: initialState,
		dispatch: defaultDispatch
	});
	const Provider = (props: React.PropsWithChildren<{}>) => {
		const [state, dispatch] = React.useState<S>(initialState);
		return <Context.Provider value={{ state, dispatch }} {...props} />;
	};
	return [Context, Provider] as const;
}

export default createStateCTX;
