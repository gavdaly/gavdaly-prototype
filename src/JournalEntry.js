import React from 'react'

import './JournalEntry.css'

const JournalEntry = ({title, content}) => {
  const c = { __html: content }
  return (
    <div className='journalEntry'>
      <h1>{title}</h1>
      <content dangerouslySetInnerHTML={c} />
    </div>
  )
}

export default JournalEntry
