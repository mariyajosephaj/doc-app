import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { db } from '../firebaseConfig';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { Button, TextField } from '@mui/material';

const Editor = () => {
    const { docId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [editorContent, setEditorContent] = useState('');

  useEffect(() => {
    if (docId !== 'new') {
      const fetchDocument = async () => {
        const docRef = doc(db, "documents", docId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setTitle(docSnap.data().title);
          setEditorContent(docSnap.data().content);
        } else {
          console.log("No such document!");
        }
      };
      fetchDocument();
    }
  }, [docId]);

  const saveDocument = async () => {
    if (title.trim() === '') {
      alert('Title is required');
      return;
    }

    const docRef = doc(db, "documents", docId === 'new' ? Date.now().toString() : docId);
    await setDoc(docRef, {
      title: title,
      content: editorContent,
    });

    navigate('/');
  };
  return (
    <>
    <div>
      <TextField
        label="Title"
        fullWidth
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        margin="normal"
      />
      <ReactQuill
        value={editorContent}
        onChange={setEditorContent}
        modules={{
          toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            ['link'],
            [{ 'align': [] }],
            ['clean']
          ],
        }}
      />
      <div>
        <Button variant="contained" className='mt-5' onClick={saveDocument}>Save Document</Button>
      </div>
    </div>

    </>
  )
}

export default Editor