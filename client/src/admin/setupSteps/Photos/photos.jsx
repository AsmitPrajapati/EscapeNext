
import { useState, useEffect, useRef } from "react";
import styles from "./photos.module.css";
import { IoImageSharp } from "react-icons/io5";


export default function PhotosStep({ data, onChange, onValidityChange }) {
  const [photos, setPhotos] = useState([]);
  const fileInputRef = useRef(null);

  // Restore previous photos
  useEffect(() => {
    if (Array.isArray(data)) setPhotos(data);
  }, [data]);

  // Send changes upstream
  useEffect(() => {
    if (typeof onChange === "function") {
      onChange(photos);
    }
    if (typeof onValidityChange === "function") {
      onValidityChange(photos.length > 0);
    }
  }, [photos, onChange, onValidityChange]);

  const addPhotos = (files) => {
    const arr = Array.from(files);
    setPhotos((prev) => [...prev, ...arr]);
  };

  const handleUploadButton = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = (e) => {
    addPhotos(e.target.files);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    addPhotos(e.dataTransfer.files);
  };

  const handleDragOver = (e) => e.preventDefault();

  const removePhoto = (index) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };





  return (
    <div className={styles.container} onDrop={handleDrop} onDragOver={handleDragOver}>

      <input
        type="file"
        multiple
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileUpload}
        className={styles.uploadInput}
      />


      <div className={styles.instr}>
        <p className={styles.instrHeading}>Instructions</p>
        <p className={styles.instrPoint}>Low resolution image below 800x 1200px</p>
        <p className={styles.instrPoint}>High resolution image above 1536 X 2048 x</p>
        <p className={styles.instrPoint}>Max allowed size is 30 MB</p>
        <p className={styles.instrPoint}>5 files allowed  at once</p>
        <p className={styles.instrPoint}>
          It is recommended to add facade, lobby and reception images for property and bed and washroom images for rooms.
        </p>
      </div>

      <div className={styles.uploadArea}>
        {photos.length > 0 ? (
          <div className={styles.photoGallery}>
            {photos.map((photo, index) => (
              <div key={index} className={styles.photoItem}>
                <div className={styles.photoWrapper}>
                  <img className={styles.photoImage}
                    src={typeof photo === "string" ? photo : URL.createObjectURL(photo)}
                    alt={`Photo ${index + 1}`}
                  />
                  <button type="button" className={styles.photoRemove} onClick={() => removePhoto(index)}>
                    ×
                  </button>
                </div>
                <div className={styles.photoLabel}>Photo {index + 1}</div>
              </div>
            ))}
          </div>
        ):(
          <div className={styles.placeholderIcon}>
            <IoImageSharp size={102}/>
          </div> 
        )}
  
        <button type="button" className={styles.uploadButton} onClick={handleUploadButton}>
          Upload File
        </button>
        <p className={styles.uploadText}>or drag and drop here</p>

      </div>
    </div>
  );
}
