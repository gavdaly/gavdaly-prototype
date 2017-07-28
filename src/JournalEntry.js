import React from 'react'

const JournalEntry = ({title, content}) => {
  const c = { __html: content }
  return (
    <div>
      <h1>{title}</h1>
      <content dangerouslySetInnerHTML={c} />
    </div>
  )
}

export default JournalEntry
