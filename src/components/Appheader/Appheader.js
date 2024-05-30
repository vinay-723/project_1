import { Link } from 'react-router-dom';
import './Appheader.css';
function Appheader(){
    return (
        <div>
            <h1 className="header">
            <Link to='/'>this is header payroll</Link></h1>
            <Link to='/login'>login</Link>
        </div>
    )
}
export default Appheader;