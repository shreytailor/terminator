import React from 'react';
import classes from './ActionPageTemplate.module.css';
import { makeScheduleButton } from '../../buttons';
import { ActionPageHeader } from '../../ActionPageHeader';

interface ActionPageTemplateProps {
  pageTitle: string;
  onSubmit: () => void;
  children?: React.ReactNode;
}

export function ActionPageTemplate({
  pageTitle,
  onSubmit,
  children,
}: ActionPageTemplateProps) {
  const scheduleButton = makeScheduleButton({
    onClick: onSubmit,
  });

  return (
    <div className={classes.wrapper}>
      <ActionPageHeader title={pageTitle} />
      <div className={classes.inputWrapper}>{children}</div>
      {scheduleButton}
    </div>
  );
}
