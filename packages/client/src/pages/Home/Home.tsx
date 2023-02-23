import classes from './Home.module.css';
import { PageTitle } from '../../typography';
import { useNavigate } from 'react-router-dom';
import { abortOperations } from '../../utilities/abort';
import { makeActionButton } from '../../components/buttons';

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
      abortOperations();
    },
  });

  return (
    <>
      <PageTitle>Actions</PageTitle>
      <div className={classes.actionButtonsContainer}>
        {shutdownButton}
        {restartButton}
        {hibernateButton}
        {abortButton}
      </div>
    </>
  );
}
