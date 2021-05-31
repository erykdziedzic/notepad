import React from 'react';
import { Button } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import formatDate from '../lib/formatDate';
import { useStyles } from './NotePreview.styles';
import { Link } from 'react-router-dom';

export default function NotePreview({ note, onDelete }) {
  const classes = useStyles();

  return (
    <div className={classes.NotePreview__container}>
      <div className={classes.NotePreview__leftColumn}>
        <div className={classes.NotePreview__content}>
          <ReactMarkdown>{note.content}</ReactMarkdown>
        </div>
        <a href={`/${note.id}`} className={classes.NotePreview__date}>
          {formatDate(note.date)}
        </a>
      </div>
      <div className={classes.NotePreview__rightColumn}>
        <Button variant="contained" color="secondary" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
}
