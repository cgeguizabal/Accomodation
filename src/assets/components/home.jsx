import { useForm } from "react-hook-form";
import accommodationPost from "../Services/posting";
import Accommodation from "./accomodation";

function Home() {
  const { register, handleSubmit } = useForm();

  const accomodationForm = async (data) => {
    console.log(data);
    const response = await accommodationPost(data);
    console.log(response);
  };

  return (
    <>
      <div>
        <h1>Accommodations form</h1>
        <form action="" onSubmit={handleSubmit(accomodationForm)}>
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
        <Accommodation />
      </div>
    </>
  );
}

export default Home;
