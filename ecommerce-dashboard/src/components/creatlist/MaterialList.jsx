import {React, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { deleteMaterials, fetchAllMaterials } from '../../features/materials/materialSlice';

const MaterialList = () => {
    const navigate = useNavigate
    const dispatch = useDispatch();
    const { material } = useSelector(state => state.material)
    console.log("salam",material);

    useEffect(() => {
        dispatch(fetchAllMaterials())
    }, [])

    const colums = [
        {
            name: 'Order'
        },
        {
            name: 'Name'
        },
        {
            name: 'Code'
        },
        {
            name: 'Status'
        },

    ]


    return (
        <div className='container mt-5'>
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
                        material.map((material) => (
                            <tr key={material.id}>
                                <td>{material.order}</td>
                                <td>{material.name}</td>
                                <td>{material.color_code}</td>
                                <td>{material.status}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => dispatch(deleteMaterials(material.id))}>Delete</button>
                                    <Link to={`genderedit/${material.id}`}><button className='btn btn-info' >Edit</button></Link>
                                    
                                </td>
                            </tr>
                        ))

                    }
                </tbody>
            </table>

        </div>
    )
}

export default MaterialList