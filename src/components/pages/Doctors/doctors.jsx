/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
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
            <div className="shape">
              <div className="inner" />
            </div>
            <div className="doctors_row">
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
            <div className="shape opposite">
              <div className="inner">
                <i className="fab fa-accessible-icon" />
              </div>
            </div>
            <div className="doctors_row_mobile">
              <div className="mb_shape">
                <div className="mb_inner" />
              </div>
              <div className="doctor_list_mob">
                {doctors.map(doctor => (
                  <div className="doctor_mob">
                    <div className="circle_mob" style={{ marginRight: '10px' }}>
                      <img src="https://res.cloudinary.com/erezfriemagor/image/upload/v1634377712/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="doctors" />
                    </div>
                    <div><h2 className="doctor_name">{doctor.name}</h2></div>
                  </div>

                ))}
              </div>
              <div className="mb_shape rotate">
                <div className="mb_inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctors;
