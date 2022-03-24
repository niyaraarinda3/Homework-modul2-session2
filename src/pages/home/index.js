import KodeForm from "../../components/kodeForm";
import KodeSong from "../../components/kodeSong";
import data from "../../data/data";

function Home() {
  return <
    KodeSong data={data} 
    />;
}
export default Home;