import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AutoCompleteText from './components/Main';



// class App extends Component {
//     render () {
//         return (
//             <div className="App">
//             <div className="App-Component">
//             <div className="App-Component">
//                 <AutoCompleteText />
//             </div>
//             </div>
//             </div>
//         );
//     }
// }

ReactDOM.render(<AppRouter />, document.getElementById('app'));


