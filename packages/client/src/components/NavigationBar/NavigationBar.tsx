import { Link } from 'react-router-dom';
import classes from './NavigationBar.module.css';

export function NavigationBar() {
  return (
    <Link to="/">
      <h1 className={classes.navigationHeading}>Terminator</h1>
    </Link>
  );
}
