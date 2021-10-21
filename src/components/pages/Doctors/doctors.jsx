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
              <div className="shape">
                <div className="inner">
                  <i className="fa fa-car fa-lg" />
                </div>
              </div>
              <div className="doctors_list">
                {doctors.map(doctor => (
                  <div className="doctor">
                    <div className="circle" style={{ marginRight: '10px' }}>
                      <img src="https://res.cloudinary.com/erezfriemagor/image/upload/v1634377712/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="doctors" />
                    </div>
                    <div><h2 style={{ marginLeft: '80px' }}>{doctor.name}</h2></div>
                  </div>

                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctors;
