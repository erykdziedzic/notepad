import React, { useEffect, useState } from 'react';
import {
  Button,
  CircularProgress,
  Collapse,
  Container,
  TextField,
  Typography,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab/';
import { useMutation, useQuery } from '@apollo/client';
import { GET_NOTES } from '../lib/queries';
import { ADD_NOTE, DELETE_NOTE } from '../lib/mutations';
import NotePreview from '../components/NotePreview';
import { useStyles } from './index.styles';

export default function Index() {
  const classes = useStyles();
  const [showError, setShowError] = useState();
  const [showFeedback, setShowFeedback] = useState();
  const [newNote, setNewNote] = useState('');
  const {
    loading,
    error: notesError,
    data: notesData,
    refetch,
  } = useQuery(GET_NOTES);
  const [addNote, { data: addNoteData }] = useMutation(ADD_NOTE);
  const [deleteNote] = useMutation(DELETE_NOTE);
  const notes = notesData?.notes;

  async function onAddNote() {
    const content = newNote;
    const date = new Date().toISOString();
    await addNote({ variables: { content, date } });
    await refetch();
    setNewNote('');
  }

  function handleOnDeleteNote(id) {
    return async () => {
      await deleteNote({ variables: { id } });
      await refetch();
      setNewNote('');
    };
  }

  useEffect(() => {
    if (addNoteData) setShowFeedback(true);
  }, [addNoteData]);

  useEffect(() => {
    if (notesError) setShowError(true);
  }, [notesError]);

  return (
    <>
      <Collapse in={showFeedback}>
        {addNoteData && (
          <Alert onClose={() => setShowFeedback(false)} severity="success">
            Dodano notatkę o id: {addNoteData.addNote.id}
          </Alert>
        )}
      </Collapse>
      <Collapse in={showError}>
        {notesError && (
          <Alert onClose={() => setShowError(false)} severity="error">
            {notesError.message}
          </Alert>
        )}
      </Collapse>
      <Container>
        <Typography className={classes.Creator__title} variant="h6">
          Notes App
        </Typography>
        <TextField
          className={classes.Creator__input}
          fullWidth
          multiline
          placeholder="Note text"
          rows={6}
          variant="outlined"
          onChange={(e) => setNewNote(e.target.value)}
          value={newNote}
        />
        <div className={classes.Creator__addButtonContainer}>
          <Button variant="contained" onClick={onAddNote}>
            Add note
          </Button>
        </div>

        <Typography className={classes.List__title} align="center" variant="h6">
          Latest notes
        </Typography>
        <div className={classes.List__container}>
          {loading && 'loading...'}
          {notes &&
            notes.map((note, index) => (
              <NotePreview
                key={index.toString()}
                note={note}
                onDelete={handleOnDeleteNote(note.id)}
              />
            ))}
        </div>
      </Container>
    </>
  );
}
