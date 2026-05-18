import React from 'react'

const DetailModal = ({isOpen, product, onClose}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-container">
        <h1>Modal</h1>
     
    </div>
  )
}

export default DetailModal
