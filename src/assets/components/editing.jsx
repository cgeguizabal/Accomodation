import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import accommodationGet from "../Services/getting";
import accommodationGetById from "../Services/gettingById";
import accommodationPut from "../Services/updating";

function Editing() {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (data) => {
    try {
      const newInfo = await accommodationPut(id, data);
      navigate("/");
    } catch (error) {
      console.error(`Can't be updated`);
    }
  };

  const getAccommodationById = async (id) => {
    const accomodations = await accommodationGet();

    const accommodationsId = await accomodations.map((data) => data.id);

    const numericId = Number(id);

    if (accommodationsId.some((place) => place === numericId)) {
      const placeById = await accommodationGetById(id);

      setValue("name", placeById.name);
      setValue("description", placeById.description);
      setValue("address", placeById.address);
    } else {
      console.log("no place found");
    }
  };

  useEffect(() => {
    getAccommodationById(id);
  });

  return (
    <div>
      <h1>Accommodations form</h1>
      <form onSubmit={handleSubmit(update)}>
        <div>
          <label>name</label>
          <input type="text" {...register("name")} />
        </div>
        <div>
          <label>description</label>
          <input type="text" {...register("description")} />
        </div>
        <div>
          <label>address</label>
          <input type="text" {...register("address")} />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}

export default Editing;
