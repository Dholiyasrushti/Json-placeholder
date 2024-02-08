import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./Home";

function User(){
    let [addpost,setpost]=useState([]);
    let[address,setaddress]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            // handle success
            console.log(response.data);
            setpost(response.data);
            // console.log(response.data.address);
            // setaddress(response.data.address);
            // setloanding(false);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    },[])
    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(function (response) {
    //         // handle success
    //         // console.log(response.data);
    //         // setpost(response.data);
    //         console.log(response.data.address);
    //         setaddress(response.data.address);
    //         // setloanding(false);
    //       })
    //       .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //       })
    // },[])
    return(
        <>
            <div>
                <Home></Home>
                <table  className="border1">
                    <tr className="blod">
                        <td>Id</td>
                        <td>Name</td>
                        <td>User Name</td>
                        <td>Email</td>
                        <td>Address</td>
                        <td>Phone</td>
                        <td>Website</td>
                        <td>Company</td>
                    </tr>
                    {
                        addpost.map((ele,ind)=>{
                            return(
                                <tr>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.username}</td>
                                    <td>{ele.email}</td>
                                    <td>
                                    <table >
                                         <tr className="bold">
                                            <td>Street</td>
                                            <td>Suite</td>
                                            <td>City</td>
                                            <td>ZipCode</td>
                                            <td>Geo</td>
                                        </tr>
                                        <tr>
                                            <td>{ele.address.street}</td>
                                            <td>{ele.address.suite}</td>
                                            <td>{ele.address.city}</td>
                                            <td>{ele.address.zipcode}</td>
                                            <td>
                                                <table>
                                                    <tr className="bold">
                                                        <td>Lat</td>
                                                        <td>Lng</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{ele.address.geo.lat}</td>
                                                        <td>{ele.address.geo.lng}</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    </td>
                                    <td>{ele.phone}</td>
                                    <td>{ele.website}</td>
                                    <td>
                                        <table>
                                            <tr className="bold">
                                                <td>Name</td>
                                                <td>CatchPhrase</td>
                                                <td>Bs</td>
                                            </tr>
                                            <tr>
                                                <td>{ele.company.name}</td>
                                                <td>{ele.company.catchPhrase}</td>
                                                <td>{ele.company.bs}</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
            
        </>
    )
}
export default User;