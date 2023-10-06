// src/MoodTracker.js
import React, { Component } from 'react';
import '../assets/MoodTracker.css'; // Import the CSS file

class MoodTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: '',
      comment: '',
      moodHistory: [],
    };
  }

  handleMoodChange = (event) => {
    this.setState({ mood: event.target.value });
  };

  handleCommentChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleLogMood = () => {
    const { mood, comment } = this.state;
    if (mood.trim() !== '') {
      const moodEntry = { mood, comment, timestamp: new Date().toLocaleString() };
      this.setState((prevState) => ({
        moodHistory: [...prevState.moodHistory, moodEntry],
        mood: '',
        comment: '',
      }));
    }
  };

  render() {
    const { mood, comment, moodHistory } = this.state;

    return (
      <div className="MoodTracker">
        <h2>Mood Tracker</h2>
        <div className="MoodInput">
          <label>Select your mood:</label>
          <select value={mood} onChange={this.handleMoodChange}>
            <option value="">-- Select --</option>
            <option value="Happy">Happy</option>
            <option value="Sad">Sad</option>
            <option value="Angry">Angry</option>
            <option value="Calm">Calm</option>
            <option value="Excited">Excited</option>
          </select>
          <textarea
            placeholder="Optional comment..."
            value={comment}
            onChange={this.handleCommentChange}
          ></textarea>
          <button onClick={this.handleLogMood}>Log Mood</button>
        </div>
        <div className="MoodHistory">
          <h3>Mood History</h3>
          <ul>
            {moodHistory.map((entry, index) => (
              <li key={index}>
                <strong>{entry.mood}</strong> - {entry.comment} (
                {entry.timestamp})
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default MoodTracker;