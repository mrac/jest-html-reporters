import React from 'react'
import { Icon, Modal } from 'antd'
import DiffImageInfoItem from './DiffImageInfoItem'

function info(imageUrl) {
  const closeDialog = () => {
    Modal.destroyAll();
  };

  Modal.error({
    title: 'Diff Image',
    width: 'calc(100% - 40px)',
    style: { top: '20px' },
    maskClosable: true,
    content: (
      <DiffImageInfoItem data={imageUrl} onClick={closeDialog} />
    ),
  })
}

const DiffImageButton = ({ failureMessage, transformFailureMessageToImagePath }) => {
  const imageUrl = transformFailureMessageToImagePath ? transformFailureMessageToImagePath(failureMessage) : "";

  if (!imageUrl) return null

  return <div
    className='error_button'
    onClick={() => info(imageUrl)}>
    <Icon type='file-exclamation' theme='filled' /> Diff
  </div>
}

export default DiffImageButton
