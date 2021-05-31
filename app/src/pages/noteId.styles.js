import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
  Note__container: {
    display: 'flex',
    flexDirection: 'column',
  },
  Note__buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: 8,
    padding: 24,
  },
  Note__contentContainer: {
    backgroundColor: grey[200],
    display: 'flex',
    flexDirection: 'column',
    padding: 24,
  },
  Note__content: {},
  Note__date: {
    marginTop: 16,
    textAlign: 'right',
  },
}));
