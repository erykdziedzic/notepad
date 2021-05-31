import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  Creator__title: {
    marginTop: 16,
  },
  Creator__input: {
    marginTop: 16,
  },
  Creator__addButtonContainer: {
    marginTop: 16,
    display: 'flex',
    justifyContent: 'center',
  },
  List__title: {
    marginTop: 16,
    marginBottom: 16,
  },
  List__container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
