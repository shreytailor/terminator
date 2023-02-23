import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import classes from './PageTemplate.module.css';
import { NavigationBar } from '../../components/NavigationBar';

export function PageTemplate() {
  return (
    <div className={classes.appContainer}>
      <NavigationBar />
      <div className={classes.pageContent}>
        <Outlet />
      </div>
      <Toaster />
    </div>
  );
}
