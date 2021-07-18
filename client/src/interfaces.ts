import { Dispatch, SetStateAction } from "react";

export type IUseState<T> = [T, Dispatch<SetStateAction<T>>];
