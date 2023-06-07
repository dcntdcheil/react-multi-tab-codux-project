import styles from './third-tab.module.scss';
import classNames from 'classnames';

export interface ThirdTabProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ThirdTab = ({ className }: ThirdTabProps) => {
    return (
    <div className="ThirdTab"> <iframe className="FirstTab" src="https://app.powerbi.com/view?r=eyJrIjoiODlhMjM4NjAtYzE2ZS00ZGQ2LWFkODctNDQ0MTFiOGFjZmFkIiwidCI6IjIyOTY1N2RhLTg2YzItNGUwOS05MzRlLTYwYWMyZDA4ZGY2ZCIsImMiOjJ9"></iframe>
    </div> )
};
