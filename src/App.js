import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function App() {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ myAddress, setMyAddress] = useState("");
  const [ detailAddress, setDetailAddress ] = useState("");
  const [ myZoneCode, setMyZoneCode ] = useState("");
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleComplete = (data) => {

    setMyAddress(data.address);
    setMyZoneCode(data.zonecode);
    setIsOpen(false);
    console.log(data.address);
    console.log(data.zonecode);
  };

  const changeHandler = (e) => {
    setDetailAddress(e.target.value)
  }

  const clickHandler = () => {
    if(detailAddress === "") {
      alert("상세 주소를 입력해주세요.");
    } else {
      console.log(myAddress, myZoneCode, detailAddress);
    }
  }
  console.log(myAddress,"주소");
  return (
    <>
      <Button onClick={handleOpen}>우편번호 검색</Button>
      <br />
      <input value={myZoneCode} readOnly placeholder='우편번호' />
      <br />
      <input value={myAddress} readOnly placeholder='도로명 주소' />
      <br />
      { myAddress === '' ?  null : <input type="text" onChange={changeHandler} value={detailAddress} placeholder="상세주소"/>  }
      
      <br />
      <button onClick={clickHandler}>클릭</button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography visible={true} onOk={handleOk} onCancel={handleClose}>
          <DaumPostcode onComplete={handleComplete} />;
          </Typography>
        </Box>
      </Modal>
    </>
  );
}


export default App;
