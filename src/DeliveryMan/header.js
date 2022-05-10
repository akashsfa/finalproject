import React from 'react';
import {Link} from 'react-router-dom';
function header()
{
return(
<div>
<Link to="/dashboard"><b>Dashboard</b></Link> &nbsp;&nbsp;&nbsp;
<Link to="/orderlist"><b>Orderlist</b></Link> &nbsp;&nbsp;&nbsp;
<Link to="/logout"><b>Log Out</b></Link> </div>
)
}
export default header;

