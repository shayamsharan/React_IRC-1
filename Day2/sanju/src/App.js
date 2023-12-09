import './Assests/Css/style.css'
import Nav from'./Components/Navbar'
function App()
{
    return (
        <div>
            <Nav/>
        <form class="container shadow" >
        <h1 class="mentoion">
           LOGIN
        </h1>
        <input type="text" name="Username" id="username" placeholder="Name" className="input" />
        <input type="password" name="Password" id="pwd1" placeholder="Enter Password" classNamee="input"/>
        <input type="submit" value="Login" className="btw"/>

    </form>
    </div>
    
    )
}
export default App