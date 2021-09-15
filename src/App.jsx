
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
<div className="row">
<div className="col-3">
<div className="nav flex-column nav-pills" id="v-pills-tab" >
<a className="nav-link" href="profile" >Профиль</a>
<a className="nav-link"  href="messages" >Сообщения</a>
<a className="nav-link"  href="settings">Настройки</a>
<a className="nav-link " href="frends" >Мои друзья</a>
</div>
</div>
<div className="col-9">
<BrowserRouter>

</BrowserRouter>
</div>

</div>
  </div>
   
  );
}

export default App;
