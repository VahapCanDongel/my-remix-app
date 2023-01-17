import AddItemPage from "./addItemPage";
import Navigation from "../components/navigation";

export default function Index() {
  return (
    <div className='w-full h-screen'>
          <Navigation/>
          <div className="flex w-full h-[100vh] justify-center items-center">
            <AddItem/>
          </div>
          
    </div>
  );
}
