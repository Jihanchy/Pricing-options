
const Link = ({route}) => {
    return (
        <li className="ml-5 px-5 hover:bg-slate-100 hover:text-black rounded-md">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;