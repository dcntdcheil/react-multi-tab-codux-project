import styles from './tabs.module.scss';
import classNames from 'classnames';
import React, { useState } from 'react';
import { FirstTab } from '../first-tab/first-tab';
import { SecondTab } from '../second-tab/second-tab';
import { ThirdTab } from '../third-tab/third-tab';

export interface TabsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Tabs = ({ className }: TabsProps) => {
    const [activeTab, setActiveTab] = useState('tab1');
    //  Functions to handle Tab Switching
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab('tab1');
    };
    const handleTab2 = () => {
        // update the state to tab2
        setActiveTab('tab2');
    };
    const handleTab3 = () => {
        // update the state to tab2
        setActiveTab('tab3');
    };
    const testing = () => {
        if (activeTab == 'tab1') {
            setTimeout(() => setActiveTab('tab2'), 30000);
        }
        if (activeTab == 'tab2') {
            setTimeout(() => setActiveTab('tab3'), 30000);
        }
        if (activeTab == 'tab3') {
            setTimeout(() => setActiveTab('tab1'), 30000);
        }
    };
    testing();
    return (
        <div className="Tabs">
            <ul className="nav">
                <li className={activeTab === 'tab1' ? 'active' : ''} onClick={handleTab1}>
                    IM
                </li>
                <li className={activeTab === 'tab2' ? 'active' : ''} onClick={handleTab2}>
                    AV
                </li>
                <li className={activeTab === 'tab3' ? 'active' : ''} onClick={handleTab3}>
                    DA
                </li>
            </ul>

            <div className="outlet">
                {activeTab === 'tab1' ? (
                    <FirstTab />
                ) : activeTab === 'tab2' ? (
                    <SecondTab />
                ) : (
                    <ThirdTab />
                )}
            </div>
        </div>
    );
};
