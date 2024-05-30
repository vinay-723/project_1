import { useEffect, useState } from "react";
function Companies(){
    const[companymodels,setcompanymodels]=useState([]);

    const[loading ,setloading]=useState(true);
    async function loadCompanyData(){
        let companypromise=await fetch("https://api.github.com/users");
        let companies=await companypromise.json();
        console.log(companies);
        setcompanymodels(companies);
        setloading(false);
    }
    function onDeleteCompany(index){
        let value=window.confirm("are you sure want to delete this ?")
        if(value){
            setcompanymodels(previous=>{
                previous.splice(index,1);
                return previous.slice();
            })
        }
    }
   useEffect(()=>{
    setTimeout(()=>{
        loadCompanyData();
    },2000)
   },[])
   
   if(loading){
    return <dib>
        loading...<i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
    </dib>

    
   }
    return(
        <div>
           <div>
            <h1>companies</h1>
           </div>

           <table className="table table-hover  table-striped">
            <tbody>
                <tr>
                    <th>company name</th>
                    <th>phone number</th>
                    <th>address</th>
                    {/* <th>logo name</th> */}
                    <th>action</th>
                </tr>
                {companymodels.map((company,index)=>{
                    return (
                    <tr key={company.id}>
                          <td>{company.id}</td>
                          <td>{company.login}</td>
                          <td>{company.node_id}</td>
                          {/* <td>{companymodel.logoName}</td> */}
                          <td>
                            <button className="btn btn-outline-primary">edit</button>
                            <button className="ms-2 btn btn-outline-danger"  onClick={()=>onDeleteCompany(index)}>delete</button>
                          </td>
                    </tr>
                    );
                })};
            </tbody>
           </table>

        </div>
    );
}
export default Companies;
