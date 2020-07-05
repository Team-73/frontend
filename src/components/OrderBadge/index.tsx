import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import ReceiptIcon from '@material-ui/icons/Receipt';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

const OrderBadge: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge badgeContent={4} color="error">
        <ReceiptIcon />
      </Badge>
    </div>
  );
};

export default OrderBadge;
