import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, photo, name, price, quantity } = coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });

              // Remove the coffee from the state
              const remainingCoffees = coffees.filter((cof) => cof._id !== id);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    <div className="border-2 flex items-center justify-center">
      <figure>
        <img src={photo} alt={`${name} image`} />
      </figure>
      <div className="flex justify-around items-center w-full">
        <div>
          <h2 className="">{name}</h2>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className="card-actions">
          <div className="join join-vertical space-y-2">
            <Link to={`/coffee/${_id}`} className="btn join-item">
              View Details
            </Link>
            <Link to={`/updateCoffee/${_id}`} className="btn join-item">
              Edit
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn join-item">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
