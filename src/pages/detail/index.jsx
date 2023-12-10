import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../store/product/action";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const { entity } = useSelector((state) => state.product);
  const [fasilitas, setFasilitas] = useState([]);
  const [materi, setMateri] = useState([]);

  const dispatch = useDispatch();
  const fetchProduct = (productId) => {
    dispatch(getProductDetail(productId));
  };
  useEffect(() => {
    fetchProduct(id);
  }, []);

  const mockFasilitas = [
    { id: 1, name: "E - Sertifikat" },
    { id: 2, name: "Portofolio" },
    { id: 3, name: "Job Connector" },
    { id: 4, name: "Career Development" },
  ];

  const mockMateri = [
    { id: 1, name: "Pengenalan Programming Laravel", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dui quam, egestas rutrum mi quis, ullamcorper ultricies metus. Fusce consectetur urna in mi euismod euismod. Morbi risus ipsum, consequat et gravida sit amet, lobortis sed tellus." },
    { id: 2, name: "Materi Bootcamp Laravel 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dui quam, egestas rutrum mi quis, ullamcorper ultricies metus. Fusce consectetur urna in mi euismod euismod. Morbi risus ipsum, consequat et gravida sit amet, lobortis sed tellus." },
    { id: 3, name: "Materi Bootcamp Laravel 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dui quam, egestas rutrum mi quis, ullamcorper ultricies metus. Fusce consectetur urna in mi euismod euismod. Morbi risus ipsum, consequat et gravida sit amet, lobortis sed tellus." },
    { id: 4, name: "Materi Bootcamp Laravel 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dui quam, egestas rutrum mi quis, ullamcorper ultricies metus. Fusce consectetur urna in mi euismod euismod. Morbi risus ipsum, consequat et gravida sit amet, lobortis sed tellus." },
    { id: 5, name: "Materi Bootcamp Laravel 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dui quam, egestas rutrum mi quis, ullamcorper ultricies metus. Fusce consectetur urna in mi euismod euismod. Morbi risus ipsum, consequat et gravida sit amet, lobortis sed tellus." },
    { id: 6, name: "Materi Bootcamp Laravel 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dui quam, egestas rutrum mi quis, ullamcorper ultricies metus. Fusce consectetur urna in mi euismod euismod. Morbi risus ipsum, consequat et gravida sit amet, lobortis sed tellus." },
  ];

  useEffect(() => {
    setFasilitas(mockFasilitas);
    setMateri(mockMateri);
  }, []);

  return (
    <div className="bg-whitebluebg" >
      <div className="bg-tahiti flex flex-row justify-between items-center mb-16 h-56 p-24">
        <div className="w-1/2 items-center justify-between">
          <h1 className="text-white text-xl font-bold">{entity.title}</h1>
          <p className="text-gray-200 font-thin">{entity.description}</p>
        </div>
        <div className="w-1/2 flex relative  justify-between">
          <img src="../../person_banner.png" alt="Banner image 2" className="w-56 h-auto object-cover z-30 mt-10" />
          <img src="../../rect_yellow.png" alt="Banner image 3" className="absolute w-32 h-auto object-cover z-20 ml-20 mt-8" />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row ml-20">
          <div className="w-1/4 bg-white mr-5 rounded-md shadow-md">
            <p className="text-lg px-5 py-2">Materi</p>
            <p className="text-lg px-5 py-2">Fasilitas</p>
            <p  className="text-lg font-semibold px-5 py-2">{entity.price}</p>
            <button onClick={() => navigate(`../checkout/${id}`)} className="bg-yellow-500 border-none mb-10 justify-between items-center mx-6
             text-white px-10 py-2 rounded-3xl hover:bg-yellow-200 active:bg-yellow-800 focus:bg-yellow-500 w-52 "  >
              Masuk/Daftar</button>
          </div>
          <div className="w-3/4 bg-white ml-5 mr-28 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mt-4 pl-5">Materi</h3>
            {
              materi.map((item) => (
                <>
                <h3 className="text-lg font-semibold pl-5 ">{item.name}</h3>
                <p className="text-gray-700 text-sm mb-1 pl-5">{item.description}</p>
                </>
              ))
            }
            <div className="mt-10"></div>
          </div>
        </div>
        <div className="flex flex-row mt-3">
          <div className="w-1/4 ml-24"></div>
          <div className="w-3/4 bg-white ml-5 mr-28 rounded-md shadow-md">
            <h3 className="text-lg font-semibold pl-5 mt-3 ">Fasilitas</h3>
            {
              fasilitas.map((item) => (
                <h3  className="text-lg pl-5" >{item.name}</h3>
              ))
            }
            <div className="mt-3"></div>
          </div>
        </div>
      </div>
      <div className="bg-tahiti h-48 justify-center flex flex-col items-center mt-4" >
        <p className="text-white font-bold text-center py-3">Sudah siap bergabung?</p>
        <button onClick={() => navigate(`../checkout/${id}`)} className="bg-yellow-500 border-none mb-10  text-white px-10 py-2 rounded-3xl hover:bg-yellow-200 active:bg-yellow-800 focus:bg-yellow-500 "  >
          Masuk/Daftar</button>
      </div>
      <footer className="bg-white p-[20px] text-black text-center mt-4">
        <p>&copy; 2023</p>
      </footer>
    </div>
  );
};

export default DetailPage;
