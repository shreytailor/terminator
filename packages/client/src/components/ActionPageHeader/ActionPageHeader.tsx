import { PageTitle } from '../../typography';
import classes from './ActionPageHeader.module.css';
import { IoArrowBackCircleOutline } from 'react-icons/all';
import { useNavigate } from 'react-router-dom';

interface ActionPageHeaderProps {
  title: string;
}

export function ActionPageHeader({ title }: ActionPageHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className={classes.wrapper}>
      <IoArrowBackCircleOutline
        className={classes.backButton}
        size={32}
        color="hsla(29, 83%, 42%, 1)"
        onClick={() => {
          navigate(-1);
        }}
      />
      <PageTitle>{title}</PageTitle>
    </div>
  );
}
