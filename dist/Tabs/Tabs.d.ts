import * as React from 'react';
import { ITabProps } from './Tab';
import { IPanelProps } from './Panel';
interface ITabsContext {
    activeTab: string;
    setActiveTab: (label: string) => void;
}
interface ITabsComposition {
    Tab: React.FC<ITabProps>;
    Panel: React.FC<IPanelProps>;
    children?: React.ReactNode;
}
/**
 * This component maintains internal state and provides those
 * pieces of state & functions to its children.
 *
 * Note that this component itself does not directly update state.
 */
declare const Tabs: {
    (props: ITabsComposition): JSX.Element;
    Tab: React.FC<ITabProps>;
    Panel: React.FC<IPanelProps>;
};
/**
 * This Context hook allows our child components to easily reach
 * into the Tabs context and get the pieces it needs.
 *
 * Bonus: it even makes sure the component is used within a
 * Tabs component!
 */
export declare const useTabs: () => ITabsContext;
export { Tabs };
