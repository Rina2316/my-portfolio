import { ParagraphProps } from "./Paragraph.props";
import styles from "./Paragraph.module.scss"
import cn from 'classnames'

export default function Paragraph({ size = 'm', children, className, ...props }: ParagraphProps): JSX.Element {

    return (
        <p className={cn(styles.paragraph,
            className, {
            [styles.s]: size == 's',
            [styles.m]: size == 'm',
            [styles.l]: size == 'l'
        })}
            {...props}>
            {children}
        </p>
    )
}