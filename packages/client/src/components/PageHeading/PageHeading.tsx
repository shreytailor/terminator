import './PageHeading.module.css';
import classes from './PageHeading.module.css';

interface PageHeadingProps {
  text: string;
}
export function PageHeading({ text }: PageHeadingProps) {
  return <h2 className={classes.pageHeading}>{text}</h2>;
}
