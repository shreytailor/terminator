import classes from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import { PageHeading } from '../../components/PageHeading';
import { ActionButton } from '../../components/ActionButton/ActionButton';

export function Home() {
  const navigate = useNavigate();

  const onShutdownActionClick = () => {
    navigate('/shutdown');
  };

  return (
    <>
      <PageHeading text="Actions" />
      <div className={classes.actionButtonsContainer}>
        <ActionButton variant="shutdown" onClick={onShutdownActionClick} />
        <ActionButton variant="restart" />
        <ActionButton variant="hibernate" />
        <ActionButton variant="abort" />
      </div>
    </>
  );
}
