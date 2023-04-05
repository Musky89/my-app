import React, { useState } from 'react';
import './FileImportExport.css';

const FileImportExport = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const importFile = (event) => {
    event.preventDefault();
    console.log('Imported file:', selectedFile);
    setSelectedFile(null);
  };

  const exportFile = (event) => {
    event.preventDefault();
    console.log('Exporting file...');
  };

  return (
    <div className="file-import-export">
      <h2>File Import/Export</h2>
      <form onSubmit={importFile}>
        <label htmlFor="fileInput">Import File:</label>
        <input type="file" name="fileInput" onChange={handleFileInput} />
        <button type="submit">Import</button>
      </form>
      <form onSubmit={exportFile}>
        <label htmlFor="fileFormat">Export File:</label>
        <select name="fileFormat">
          <option value="pdf">PDF</option>
          <option value="png">PNG</option>
          <option value="jpg">JPG</option>
        </select>
        <button type="submit">Export</button>
      </form>
    </div>
  );
};

export default FileImportExport;
