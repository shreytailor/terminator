import { Link } from 'react-router-dom';
import classes from './NavigationBar.module.css';
import { NavigationTitle } from '../../typography';

export function NavigationBar() {
  return (
    <Link to="/">
      <NavigationTitle className={classes.navigationTitle}>
        Terminator
      </NavigationTitle>
    </Link>
  );
}
