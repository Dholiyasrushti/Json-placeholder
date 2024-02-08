import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./Home";

function Comments(){
    let [addpost,setpost]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(function (response) {
            // handle success
            console.log(response);
            setpost(response.data);
            // setloanding(false);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    },[])
    return(
        <>
            <div>
                <Home></Home>
                <table  className="border">
                    <tr className="blod">
                        <td>User Id</td>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Body</td>
                    </tr>
                    {
                        addpost.map((ele,ind)=>{
                            return(
                                <tr>
                                    <td>{ele.postId}</td>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.body}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
            
        </>
    )
}
export default Comments;