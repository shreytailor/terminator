import classes from './Home.module.css';
import { PageHeading } from '../../components/PageHeading';
import { ActionButton } from '../../components/ActionButton/ActionButton';

export function Home() {
  return (
    <>
      <PageHeading text="Actions" />
      <div className={classes.actionButtonsContainer}>
        <ActionButton variant="shutdown" />
        <ActionButton variant="restart" />
        <ActionButton variant="hibernate" />
        <ActionButton variant="abort" />
      </div>
    </>
  );
}
