import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./Home";

function Post(){
    let [addpost,setpost]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
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
                        <td>Title</td>
                        <td>Body</td>
                    </tr>
                    {
                        addpost.map((ele,ind)=>{
                            return(
                                <tr>
                                    <td>{ele.userId}</td>
                                    <td>{ele.id}</td>
                                    <td>{ele.title}</td>
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
export default Post;