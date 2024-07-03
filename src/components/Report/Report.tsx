import { useEffect, useState } from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './../../../amplify_outputs.json';
import './../../index.css'; // Import the updated CSS file
import { generateClient } from 'aws-amplify/data';
import type { Schema } from './../../../amplify/data/resource';
import './Report.css'; // Import the updated CSS file

Amplify.configure(awsExports);

const client = generateClient<Schema>();

function Report() {
  const [generalReport, setgeneralReport] = useState<number | null>(null);
  const [heartRate, setHeartRate] = useState<number | null>(null);
  const [bloodSugar, setBloodSugar] = useState<number | null>(null);
  const [bloodOxygen, setBloodOxygen] = useState<number | null>(null);
  const [bloodPressure, setBloodPressure] = useState<number | null>(null);
  const [bloodTemperature, setBloodTemperature] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

        // Example: Fetching heart rate
        const generalReportData = await client.models.generalReport.getData();
        setgeneralReport(generalReportData.value);

        // Example: Fetching heart rate
        const heartRateData = await client.models.HeartRate.getData();
        setHeartRate(heartRateData.value);

        // Example: Fetching blood sugar
        const bloodSugarData = await client.models.BloodSugar.getData();
        setBloodSugar(bloodSugarData.value);

        // Example: Fetching blood glucose
        const bloodOxygenData = await client.models.BloodOxygen.getData();
        setBloodOxygen(bloodOxygenData.value);

        // Example: Fetching blood pressure
        const bloodPressureData = await client.models.BloodPressure.getData();
        setBloodPressure(bloodPressureData.value);

        // Example: Fetching blood temperature
        const bloodTemperatureData = await client.models.BloodTemperature.getData();
        setBloodTemperature(bloodTemperatureData.value);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Authenticator>
      <div className="container">
        <aside className="sidebar">
          <div className="logo">
            <h2>Logo</h2>
          </div>
          <div className="horizontal-line"></div>
          <div className="menu-header">MENU</div>
          <ul className="menu">
            <li>
              <a href="#">
                <span className="icon">🏠</span>Report
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">📊</span>Reports
              </a>
              <ul className="submenu">
                
                <li><a href="#">General Report</a></li>
                <li><a href="#">Heart Rate</a></li>
                <li><a href="#">Blood Sugar</a></li>
                <li><a href="#">Blood Oxygen</a></li>
                <li><a href="#">Blood Pressure</a></li>
                <li><a href="#">Blood Temperature</a></li>
              </ul>
            </li>
            <li>
              <a href="#">
                <span className="icon">⚙️</span>Settings
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">👤</span>Account
              </a>
            </li>
          </ul>
          <div className="menu-header">OTHERS</div>
          <ul className="menu">
            <li>
              <a href="#">
                <span className="icon">💬</span>Support
              </a>
            </li>
          </ul>
        </aside>
        <main className="content">
          <header className="header">
            <input className="search-bar" type="text" placeholder="Search..." />
            <div className="horizontal-line"></div>
          </header>
          <h1>Report</h1>
          <div>
          <div className="report-item-1">
              <h2>General Report <span className='files'> 10 files</span> {generalReport }</h2>
            </div>
                        <div className="report-item-2">
              <h2>Heart Rate <span className='files'> 2 files</span> {heartRate }</h2>
            </div>
            <div className="report-item-3">
              <h2>Blood Sugar <span className='files'> 3 files</span> {bloodSugar }</h2>
            </div>
            <div className="report-item-4">
              <h2>Blood Oxygen <span className='files'> 1 files</span> {bloodOxygen }</h2>
            </div>
            <div className="report-item-5">
              <h2>Blood Pressure <span className='files'> 1 files</span> {bloodPressure }</h2>
            </div>
            <div className="report-item-6">
              <h2>Blood Temperature <span className='files'> 1 files</span> {bloodTemperature}</h2>
            </div>
          </div>
        </main>
      </div>
    </Authenticator>
  );
}
export default Report;

