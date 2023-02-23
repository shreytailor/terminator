import classes from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import { PageHeading } from '../../components/PageHeading';
import { makeActionButton } from '../../components/ActionButton';

export function Home() {
  const navigate = useNavigate();

  const shutdownButton = makeActionButton({
    type: 'shutdown',
    onClick: () => {
      navigate('/shutdown');
    },
  });

  const restartButton = makeActionButton({
    type: 'restart',
    onClick: () => {
      navigate('/restart');
    },
  });

  const hibernateButton = makeActionButton({
    type: 'hibernate',
    onClick: () => {
      navigate('/hibernate');
    },
  });

  const abortButton = makeActionButton({
    type: 'abort',
    onClick: () => {
      alert('All scheduled operations have been cancelled.');
    },
  });

  return (
    <>
      <PageHeading text="Actions" />
      <div className={classes.actionButtonsContainer}>
        {shutdownButton}
        {restartButton}
        {hibernateButton}
        {abortButton}
      </div>
    </>
  );
}
