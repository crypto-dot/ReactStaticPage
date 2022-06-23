import reactLogo from '../logo.svg';
export default function Nav() {
return (
    <nav className = 'navBar'>
        <div className = 'navBarLeft'>
            <img className= 'logo' src = {reactLogo}/>
            <h2>ReactFacts</h2>
          </div>
        <h2>React Course - Project 1</h2>
    </nav>
)
};