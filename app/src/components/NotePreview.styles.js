import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
  NotePreview__container: {
    backgroundColor: grey[200],
    marginBottom: 16,
    padding: 16,
    display: 'flex',
  },
  NotePreview__leftColumn: {
    paddingRight: 8,
  },
  NotePreview__rightColumn: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
  NotePreview__date: {
    marginTop: 16,
    textDecoration: 'none',
    color: theme.palette.text.secondary,
  },
  NotePreview__content: {
    marginBottom: 16,
    whiteSpace: 'wrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 4,
    '-webkit-box-orient': 'vertical',
  },
}));
