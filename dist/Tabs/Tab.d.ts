import * as React from "react";
export interface ITabProps {
    children: string;
    label: string;
}
/**
 * This component allows changing of the active Tab.
 */
export declare const Tab: React.FC<ITabProps>;
