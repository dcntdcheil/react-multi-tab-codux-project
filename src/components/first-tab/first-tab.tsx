import styles from './first-tab.module.scss';
import classNames from 'classnames';
import { models } from 'powerbi-client';



export interface FirstTabProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FirstTab = ({ className }: FirstTabProps) => {
    return (
    <div className="FirstTab">
    <iframe className="FirstTab" src="https://app.powerbi.com/view?r=eyJrIjoiYTllNmY0MWEtMTIxZC00NDM2LWFjMzAtYzdhYWM5NGE2ZDRkIiwidCI6IjIyOTY1N2RhLTg2YzItNGUwOS05MzRlLTYwYWMyZDA4ZGY2ZCIsImMiOjJ9"></iframe>
    </div> )
};
