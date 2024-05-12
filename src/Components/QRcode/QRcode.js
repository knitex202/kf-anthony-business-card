import React from 'react'
import "./QRcode.css"
import qrcode from "../../Assets/frame.png"

function QRcode() {
  return (
    <>
    <img src={qrcode} height={300} alt="" />
    </>
  )
}

export default QRcode