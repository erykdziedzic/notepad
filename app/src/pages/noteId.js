import React, { useEffect, useState } from 'react';
import { Button, Collapse, Container } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import formatDate from '../lib/formatDate';
import { GET_NOTE } from '../lib/queries';
import { Link, useParams } from 'react-router-dom';
import { useStyles } from './noteId.styles';
import { useQuery } from '@apollo/client';
import { Alert } from '@material-ui/lab';

export default function Note() {
  let { noteId } = useParams();
  const [showError, setShowError] = useState();
  const {
    loading,
    error: notesError,
    data,
  } = useQuery(GET_NOTE, { variables: { id: noteId } });
  const note = data?.note;

  useEffect(() => {
    if (notesError) setShowError(true);
  }, [notesError]);
  const classes = useStyles();

  if (loading) return <div>loading...</div>;
  if (!note) return <div>Note not found</div>;

  return (
    <>
      <Collapse in={showError}>
        {notesError && (
          <Alert onClose={() => setShowError(false)} severity="error">
            {notesError.message}
          </Alert>
        )}
      </Collapse>
      <Container>
        <div className={classes.Note__container}>
          <div className={classes.Note__buttonsContainer}>
            <a href="/" style={{ textDecoration: 'none' }}>
              <Button variant="contained">Go back</Button>
            </a>

            <Button variant="contained" color="secondary">
              Delete
            </Button>
          </div>
          <div className={classes.Note__contentContainer}>
            <div className={classes.Note__content}>
              <ReactMarkdown>{note.content}</ReactMarkdown>
            </div>
            <div className={classes.Note__date}>{formatDate(note.date)}</div>
          </div>
        </div>
      </Container>
    </>
  );
}
