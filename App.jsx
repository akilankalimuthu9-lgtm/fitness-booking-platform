
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
        <p>Discover fitness classes, trainers and manage your fitness bookings.</p>
        <Link className="button" to="/classes">Browse Classes</Link>
      </section>
      <section className="grid">
        <div className="card"><h3>Fitness Classes</h3><p>Explore available fitness sessions.</p></div>
        <div className="card"><h3>Trainers</h3><p>View trainers and their specializations.</p></div>
        <div className="card"><h3>Bookings</h3><p>Manage your fitness bookings.</p></div>
      </section>
    </main>
  );
}

function Classes() {
  return (
    <main className="container">
      <h2>Fitness Classes</h2>
      <p>Choose a class that suits your fitness goals.</p>
      <section className="grid">
        {fitnessClasses.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.name}</h3>
            <p>Trainer: {item.trainer}</p>
            <p>Time: {item.time}</p>
            <p>Price: {item.price}</p>
            <button className="button" onClick={() => alert(`You selected ${item.name}. Booking functionality is not connected yet.`)}>
              Select Class
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}

function App() {
  return (
    <>
      <nav className="nav">
        <Link className="brand" to="/">Fitness Booking</Link>
        <div><Link to="/">Home</Link><Link to="/classes">Classes</Link></div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="*" element={<main className="container"><h2>Page not found</h2><Link className="button" to="/">Go Home</Link></main>} />
      </Routes>
    </>
  );
}

export default App;
