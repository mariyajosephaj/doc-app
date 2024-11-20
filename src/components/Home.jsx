import React, { useEffect, useState } from 'react'
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
 import { Button} from '@mui/material';

const Home = () => {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
      const fetchDocuments = async () => {
        const querySnapshot = await getDocs(collection(db, "documents"));
        const docs = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setDocuments(docs);
      };
    
      fetchDocuments();
    }, []);
  return (
    <>
    <div>
      <h1 className='text-center mt-5 text-success fw-bold'>Your Documents</h1>
      <div className='row mt-5 '>
        {documents.map((doc) => (
          <div className='col-3 border rounded shadow m-2 bg-danger-subtle' key={doc.id}>
            <Link to={`/editor/${doc.id}`}>
              <Button className='mt-2' variant="contained" color="success">{doc.title}</Button>
              <div className='mt-2' dangerouslySetInnerHTML={{ __html: doc.content }}></div>
              {/* <p className='mt-2'>{doc.content}</p> */}
            </Link>
          </div>
        ))}
      </div>
      <Link to="/editor/new">
        <div className='text-center'>
        <Button className='mt-5' variant="contained" color="success">Create New Document</Button>
        </div>
      </Link>
    </div>
   
    </>
  )
}

export default Home