/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getDoctors } from '../../../redux/Doctors';
import './doctors.css';

const Doctors = () => {
  const doctors = useSelector(state => state.doctorReducer);
  const [doctor, setDoctor] = useState({});

  setTimeout(() => { window.location.reload(1); }, 10000);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!doctors.length) {
      dispatch(getDoctors());
    }
  }, []);

  const [body, displayBody] = useState([]);

  useEffect(() => {
    displayBody(doctors);
  }, [doctors]);

  const rndInt = Math.floor(Math.random() * 4) + 1;

  return (

    <>
      <div className="outter_container">
        <div className="contain">
          <div className="doct">
            <div className="leading">
              <h1 className="please">LEADING DOCTORS</h1>
              <h2 className="select">please select a doctor</h2>
            </div>
            <div className="doctors_row">
              <div className="shape"><div /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctors;
