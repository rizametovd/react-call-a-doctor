import styles from './styles.module.css';

function RecordResult({ data }) {
  const { address, acronym, date } = data;
  return (
    <>
      {data.acronym && (
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Номер записи</h1>
          <span className={styles.text}>{`
          ${address.data.country}/${address.data.region_iso_code}/${acronym}/GLAT${address.data.geo_lat}-GLON${address.data.geo_lon}/${date}`}</span>
        </div>
      )}
    </>
  );
}

export default RecordResult;
