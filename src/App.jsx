import { BrowserRouter, NavLink, Route } from 'react-router-dom';
const Profile=()=>{return <h2> Профиль</h2>;};
const Messages=()=>{return <h2> Сообщения</h2>;};
const Settings=()=>{return <h2> Настройки</h2>;};
const Frends=()=>{return <h2> Друзья</h2>;};

function App() {
  return (
<div className="container-fluid">
<BrowserRouter>
<div className="row mt-5">
<div className="col-3">
<div className="nav flex-column nav-pills" id="v-pills-tab" >
<NavLink className="nav-link" to="profile" >Профиль</NavLink>
<NavLink className="nav-link"  to="messages" >Сообщения</NavLink>
<NavLink className="nav-link"  to="settings">Настройки</NavLink>
<NavLink className="nav-link " to="frends" >Мои друзья</NavLink>
</div>
</div>
<div className="col-9">

<Route path="/profile" component={Profile}/>
<Route path="/messages" component={Messages}/>
<Route path="/settings" component={Settings}/>
<Route path="/frends" component={Frends}/>

</div>
</div>
</BrowserRouter>
</div>
  );
}
export default App;