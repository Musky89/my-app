import React, { useState } from 'react';
import './Reporting.css';

const Reporting = () => {
  const [reportFormat, setReportFormat] = useState('pdf');

  const handleChange = (event) => {
    setReportFormat(event.target.value);
  };

  const generateReport = (event) => {
    event.preventDefault();
    console.log('Generating report in', reportFormat, 'format...');
  };

  return (
    <div className="reporting">
      <h2>Reporting</h2>
      <form onSubmit={generateReport}>
        <label htmlFor="reportFormat">Report Format:</label>
        <select name="reportFormat" value={reportFormat} onChange={handleChange}>
          <option value="pdf">PDF</option>
          <option value="excel">Excel</option>
          <option value="csv">CSV</option>
        </select>
        <button type="submit">Generate Report</button>
      </form>
    </div>
  );
};

export default Reporting;
