import {React, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteSize, fetchAllsize } from '../../features/size/sizeSlice';

const SizeList = () => {
    const dispatch = useDispatch();
    const { sizes } = useSelector(state => state.size)

    useEffect(() => {
        dispatch(fetchAllsize())
    }, [])


    const colums = [
        {
            name: 'Size'
        },
        {
            name: 'Order'
        },
        {
            name: 'Status'
        },
    ]


    return (
        <div className='container mt-5'>
            Size List
            <table className='table'>
                <thead>
                    <tr>
                        {colums.map((colums) => (
                            <th>{colums.name}</th>
                        ))}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sizes&&sizes.map((size) => (
                            <tr key={size.id}>
                                <td>{size.size}</td>
                                <td>{size.order}</td>
                                <td>{size.status}</td>
                                <td>
                                    <button className='btn btn-danger'  onClick={() => {dispatch(deleteSize(size.id)).then(() => dispatch(fetchAllsize()))}}>Delete</button>
                                    <Link to={`sizeedit/${size.id}`}><button className='btn btn-info' >Edit</button></Link>
                                    
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SizeList