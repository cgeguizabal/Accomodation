import "./App.css";
import { useForm } from "react-hook-form";
import accommodationPost from "./assets/Services/posting";
import Accommodation from "./assets/components/accomodation";

function App() {
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

export default App;
