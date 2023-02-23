import { PageTitle } from '../../typography';
import { IoArrowBackCircleOutline } from 'react-icons/all';
import classes from './ActionPageHeader.module.css';
interface ActionPageHeaderProps {
  title: string;
}

export function ActionPageHeader({ title }: ActionPageHeaderProps) {
  return (
    <div className={classes.wrapper}>
      <IoArrowBackCircleOutline size={32} color="hsla(29, 83%, 42%, 1)" />
      <PageTitle>{title}</PageTitle>
    </div>
  );
}
