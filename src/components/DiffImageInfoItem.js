import React from 'react'
import escapeHtml from 'escape-html'

const style = {
  width: "100%",
  border: "1px solid lightgrey"
};

const DiffImageInfoItem = ({ data, onClick }) => {
  if (!data) return null
  return <img src={escapeHtml(data)} onClick={onClick} style={style} />
}

export default DiffImageInfoItem
