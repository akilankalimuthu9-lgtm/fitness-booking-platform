
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const fitnessClasses = [
  { id: 1, name: 'Yoga', trainer: 'Priya', time: '7:00 AM', price: '₹300' },
  { id: 2, name: 'Strength Training', trainer: 'Arun', time: '9:00 AM', price: '₹500' },
  { id: 3, name: 'Zumba', trainer: 'Kavya', time: '5:00 PM', price: '₹350' },
  { id: 4, name: 'Cardio Fitness', trainer: 'Rahul', time: '6:00 PM', price: '₹400' }
];

function Home() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">MERN Stack Project</p>
        <h1>Personalized Fitness Class Booking Platform</h1>
        <p>Discover fitness classes and trainers.</p>
        <Link className="button" to="/classes">Browse Classes</Link>
      </section>
    </main>
  );
}

function Classes() {
  const [selected, setSelected] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  function submitBooking(event) {
    event.preventDefault();
    setMessage(
      `Demo booking submitted for ${selected.name}, for ${name}. It has not been saved permanently.`
    );
  }

  return (
    <main className="container">
      <h2>Fitness Classes</h2>
      <section className="grid">
        {fitnessClasses.map(item => (
          <div className="card" key={item.id}>
            <h3>{item.name}</h3>
            <p>Trainer: {item.trainer}</p>
            <p>Time: {item.time}</p>
            <p>Price: {item.price}</p>
            <button className="button" onClick={() => {
              setSelected(item);
              setMessage('');
            }}>
              Book Class
            </button>
          </div>
        ))}
      </section>

      {selected && (
        <section className="card">
          <h2>Book {selected.name}</h2>
          <form onSubmit={submitBooking}>
            <p>
              <label>Your Name
                <input required value={name}
                  onChange={e => setName(e.target.value)} />
              </label>
            </p>
            <p>
              <label>Email
                <input required type="email" value={email}
                  onChange={e => setEmail(e.target.value)} />
              </label>
            </p>
            <p>
              <label>Booking Date
                <input required type="date"
                  min={new Date().toISOString().slice(0, 10)}
                  value={date}
                  onChange={e => setDate(e.target.value)} />
              </label>
            </p>
            <button className="button" type="submit">Submit Booking</button>
            <button type="button" onClick={() => setSelected(null)}>
              Cancel
            </button>
          </form>
          {message && <p role="status">{message}</p>}
        </section>
      )}
    </main>
  );
}

function App() {
  return (
    <>
      <nav className="nav">
        <Link className="brand" to="/">Fitness Booking</Link>
        <div>
          <Link to="/">Home</Link>
          <Link to="/classes">Classes</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="*" element={<main className="container"><h2>Page not found</h2><Link to="/">Go Home</Link></main>} />
      </Routes>
    </>
  );
}

export default App;
