import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, quantity, price, taste, photo, details, supplier } =
    useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateCoffee = Object.fromEntries(formData.entries());

    // Send Updated Coffee data to DB
    fetch(`https://coffee-store-server-sigma-bice.vercel.app/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div className="p-24">
        <div className="p-12 text-center space-y-4">
          <h1 className="text-6xl">Update Coffee</h1>
        </div>
        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Coffee Name"
                defaultValue={name}
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Quantity</label>
              <input
                type="text"
                name="quantity"
                className="input w-full"
                placeholder="Quantity Name"
                defaultValue={quantity}
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Supplier</label>
              <input
                type="text"
                name="supplier"
                className="input w-full"
                placeholder="Supplier Name"
                defaultValue={supplier}
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Taste</label>
              <input
                type="text"
                name="taste"
                className="input w-full"
                placeholder="Taste Name"
                defaultValue={taste}
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Price</label>
              <input
                type="text"
                name="price"
                className="input w-full"
                placeholder="Price per cup"
                defaultValue={price}
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Details</label>
              <input
                type="text"
                name="details"
                className="input w-full"
                placeholder="Details Here"
                defaultValue={details}
              />
            </fieldset>
          </div>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 my-6">
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Photo URL"
              defaultValue={photo}
            />
          </fieldset>

          <input type="submit" className="w-full btn" value="Update Coffee" />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
