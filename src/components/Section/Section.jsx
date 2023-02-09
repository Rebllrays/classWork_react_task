import React from 'react';
import Table from 'react-bootstrap/Table';

const Section = ({users}) => {
    return ( 
        <>
        <div> 
        <Table striped bordered hover className='my-5 m-auto w-75'>
                <thead style={{backgroundColor: "#8794C0"}}>
                  <tr>
                    <th>#ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                  </tr>
                </thead>
            {users.map(item=> (

                <tbody key={item.id}>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.lastName}</td>
                    <th>{item.age}</th>
                  </tr>
                </tbody>
              
            ))}
            </Table>
        </div>
        
        </>
    );
};

export default Section;
