import './App.css';
import {
    Route,
    Routes,
    NavLink
} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
 
// function App() {
//     return (
//         <div className="App">
//             <div>
//                 <div style={{
//                     display: 'flex',
//                     justifyContent: 'space-evenly',
//                     background: 'white',
//                     fontSize: '20px',
//                     fontWeight: '800px',
//                     textDecoration: 'none',
//                     color: 'black'
//                 }}>
//                     <NavLink to={'/'}
//                         style={{  textDecoration: 'none' }}>
//                         Все о товаре
//                     </NavLink>
//                     <NavLink to={'/about'}
//                         style={
//                             {
//                                 textDecoration: 'none'
//                             }}>
//                         Характеристика
//                     </NavLink>
//                     <NavLink to={'/contact'}
//                         style={
//                             {
//                                  listStyle: 'none'
//                             }}>
//                         <li style={{display: 'inline-block'}}>Отзывы
//                         <li style={{display: 'inline-block', marginLeft: '10px', color: 'black'}}>209</li> 
//                             </li>
//                     </NavLink>
//                     <NavLink to={'/about2'}
//                         style={
//                             {
//                                 textDecoration: 'none'
//                             }}>
//                         <li style={{display: 'inline-block'}}>Вопросы 
//                         <li style={{display: 'inline-block', marginLeft: '10px', color: 'black'}}>10</li> 
//                         </li>
//                     </NavLink>
//                     <NavLink to={'/home2'}
//                         style={
//                             {
//                                 textDecoration: 'none'
//                             }}>
//                         <li style={{display: 'inline-block', textDecoration: 'black'}}>Видео
//                         <li style={{display: 'inline-block', marginLeft: '10px', color: 'black'}}>9</li> 
//                         </li>
//                     </NavLink>
//                     <NavLink to={'contact2'}
//                         style={
//                             {
//                                 textDecoration: 'none'
//                             }}>
//                         Покупают вместе
//                     </NavLink>
//                 </div>
//             </div>
//             <Routes>
//                 <Route path="/"
//                     element={<Home />} />
//                 <Route path="/about"
//                     element={<About />} />
//                 <Route path="/contact"
//                     element={<Contact />} />
//             </Routes>
//         </div>
//     );
// }
 
// export default App;

function App() {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div style={{marginLeft: '10px'}} className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" activeClassName="active">
                                Все о товаре
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" activeClassName="active">
                                Характеристика
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link" activeClassName="active">
                                <span>Отзывы</span>
                                <span style={{marginLeft: '5px', color: 'black'}} className="review-count">209</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about2" className="nav-link" activeClassName="active">
                                Вопросы <span className="review-count" style={{color: 'black'}}>10</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/home2" className="nav-link" activeClassName="active">
                                Видео <span className="review-count" style={{color: 'black'}}>9</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact2" className="nav-link" activeClassName="active">
                                Покупают вместе
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home2" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/about2" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contact2" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;
