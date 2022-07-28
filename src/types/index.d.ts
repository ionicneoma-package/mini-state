import React from "react"

type C<T> = React.PropsWithChildren<T>;
type R<S, A> = React.Reducer<S, A>;
type D<A> = React.Dispatch<A>;
type Dispatch<T> = React.Dispatch<React.SetStateAction<T>>;
type CTX<State> = {
    state: State;
    dispatch: any;
}

