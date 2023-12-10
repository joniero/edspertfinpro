import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="flex flex-row h-14 bg-tahiti pl-24 pt-2 pr-16 justify-between">
                <div className="text-white w-1/2 pt-1"><a href="/" >LOGO</a></div>
                <div className="flex flex-row w-1/2">
                    <div className="flex flex-row w-4/5">
                        <ul className="flex flex-row  text-white justify-center pt-1 ">
                            <li className="w-32">
                            <a href="#" >Program</a>
                            </li>
                            <li className="w-32">
                            <a href="#" >Bidang Ilmu</a>
                            </li>
                            <li className="w-32">
                            <a href="#" >Tentang edspert</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/5">
                    <button className="bg-red-500 border-none  text-white px-4 py-2 rounded-full hover:bg-red-400 active:bg-red-700 focus:bg-red-500"  >
                        Masuk/Daftar
                    </button>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>

        

    );
}

export default Layout;