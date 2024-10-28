import Feature from "../Feature/Feature";

const Option = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-gradient-to-r from-red-300 via-red-500 to-orange-300 p-4 rounded-md text-white">
            <h1 className=" text-center">
                <span className="text-2xl font-bold">{price}</span>
                <span className="text-xl">/mon</span>
            </h1>
            <p className="text-2xl font-semibold text-center">{name}</p>
            <div className="space-y-1 mt-4 pl-6 ">
                {
                    features.map(feature => <Feature feature={feature}/>)
                }
            </div>
            <button className="bg-pink-400 py-1 mt-5 rounded-md hover:bg-pink-900 hover:font-bold hover:cursor-progress hover:text-green-400 w-full">Buy now</button>
        </div>
    );
};

export default Option;