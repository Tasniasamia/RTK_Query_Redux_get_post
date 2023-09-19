import { useGetPostNameQuery } from "../../Redux/Api";

const Specefic = () => {
    const {data}=useGetPostNameQuery(1);
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default Specefic;