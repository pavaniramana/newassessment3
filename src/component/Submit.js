import React,{useState} from 'react'
import './StylingApp.css'

function Submit() {

    const [IsToggle, setIsToggle] = useState(true)
    const [data,setData] = useState(
    {
        username:"",
        department:"",
        rating:''
    }
    );

    // console.log(data);

    const [record, setRecord] = useState([]);

    const HandleInput = (e) => {
        const name = e.target.name;
        // console.log(name);
        const value = e.target.value;
        // console.log(value);

        setData({...data, [name]: value });
    }

    const HandleSubmit = (e)=> {
        e.preventDefault()

        const newData = {...data, id:new Date().getTime().toString()}
        console.log(data);

        setIsToggle(false)

        setRecord([...record,newData]);

        setData({ 
            username:"", 
            department:"", 
            rating:''
        });
    }
    return (
        <>
        {IsToggle ? 
            <div className='box'>
                <h1>Employment Form</h1>
                <form onSubmit={HandleSubmit}>                    
                    <label className='text'>Name:<input type="text" autoComplete='off' className='box1' name='username' value={data.username} onChange={HandleInput}></input></label>    
                    <br />                    
                    <label className='text'>Deaprtment:<input type="text" autoComplete='off' className='box1' name='department' value={data.department} onChange={HandleInput}></input></label>    
                    <br />                   
                    <label className='text'>Rating:<input type="number" autoComplete='off' className='box1' name='rating' value={data.rating} onChange={HandleInput}></input></label>
                    <br />
                    <button className='btn'>Submit</button>
                </form>
            </div>
            :
            <div className='nxtbox'>
                 {
                    record.map((curElem)=>{
                        const{id, username, department, rating} = curElem;
                        return (
                            <div key={id} className='innerbox'>
                               <span>Name:{username} ||</span>
                               <span>Department:{department} ||</span>
                               <span>Rating:{rating} ||</span>
                            </div>
                        )
                    })
                }
                    <button onClick = {() =>setIsToggle(true)} className='btn2'>GO Back</button>
            </div>
                
        }
         
        </>
    )
}

export default Submit;
