

const AllCarRow = ({singleCar}) => {
    const { _id, photo, name, seller, email, category, price, rating, quantity, details } = singleCar
    return (
        <tr>
        <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {photo && <img src={photo} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
                <div>
                    <div className="font-bold">{seller}</div>
                    <div className="text-sm opacity-50">{name}</div>
                </div>
            </div>
        </td>
        <td>
            {category} 
            <br />
            <span className="badge badge-ghost badge-sm">{quantity}</span>
        </td>
        <td>{email}</td>
        <th>
            <button className="btn btn-ghost btn-xs">details</button>
        </th>
        <td>
           asdas
        </td>
    </tr>
    );
};

export default AllCarRow;