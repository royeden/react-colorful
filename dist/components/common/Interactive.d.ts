import React from "react";
export interface Interaction {
    left: number;
    top: number;
}
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    onMove: (interaction: Interaction) => void;
    onKey: (offset: Interaction) => void;
}
export declare const Interactive: React.MemoExoticComponent<({ onMove, onKey, ...rest }: Props) => JSX.Element>;
export {};
