import { useState } from 'react';
import Form from '../Form/Form';
import RecordResult from '../RecordResult/RecordResult';
import styles from './styles.module.css';

function Main() {
  const [recordData, setRecordData] = useState({});

  function record(data) {
    setRecordData(data);
  }

  return (
    <main className={styles.main}>
      <Form record={record} />
      <RecordResult data={recordData} />
    </main>
  );
}

export default Main;
