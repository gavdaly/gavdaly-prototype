import React, { Component } from 'react'
import JournalEntry from './JournalEntry'

class Journal extends Component {
  state = { journal: [] }
  componentDidMount() {
    const location = 'https://gavdaly.com/wp-json/wp/v2/journal'
    fetch(location).then(response => {
      return response.json()
    })
    .then(journal => {
      this.setState({journal})
    })
    .catch(function(error) { console.log(error) })
  }
  render() {
    const journalEntries = this.state.journal.map(j => {
      return <JournalEntry
        key={j.id}
        title={j.title.rendered}
        content={j.content.rendered}
      />
    })
    return (
      <div>
        {journalEntries}
      </div>
    )
  }
}

export default Journal
