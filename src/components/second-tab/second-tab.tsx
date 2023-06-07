import styles from './second-tab.module.scss';
import classNames from 'classnames';

export interface SecondTabProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SecondTab = ({ className }: SecondTabProps) => {
    return (
    <div className="SecondTab"> <iframe className="FirstTab" src="https://app.powerbi.com/view?r=eyJrIjoiMzk2MjI0OGQtODAwZi00NmEzLTk5NTUtZWE3MDM5YWRhNTU1IiwidCI6IjIyOTY1N2RhLTg2YzItNGUwOS05MzRlLTYwYWMyZDA4ZGY2ZCIsImMiOjJ9"></iframe>
    </div> )
};
