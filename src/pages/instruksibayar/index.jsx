import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../store/product/action";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const InstruksiBayarPage = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const { entity } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const fetchProduct = (productId) => {
    dispatch(getProductDetail(productId));
  };
  useEffect(() => {
    fetchProduct(id);
  }, []);
  return (
    <div className="bg-whitebluebg pt-16" >
      <div className="flex flex-row ">
        <p className="pl-16">Checkout &gt; </p>
        <p className="pl-3  text-blue-600">Instruksi Bayar</p>
      </div>
      <h1 className="pl-16 pt-4 font-bold">Instruksi Bayar</h1>

      <div className="flex flex-col">
        <div className="flex flex-row ml-20 bg-white mr-5 rounded-md shadow-md">
          <div className="w-1/4 pt-8 pb-8">
            <div className="flex flex-row">
              <div className="w-1/2 pl-5" >
                <Image
                  rounded
                  src={entity.image}
                  style={{ height: "80%", width: "80%", objectFit: "contain" }}
                />
              </div>
              <div className="w-1/2" >
                <h3 className="font-semibold">{entity.title}</h3>
              </div>
            </div>
            <h3 className="font-semibold px-3 py-2">Metode Pembayaran</h3>
          </div>

          <div className="w-3/4 ml-10 pt-8">
            <h3 className="font-bold">Instruksi Pembayaran</h3>
          </div>
        </div>
      </div>

      <div className="bg-tahiti h-48 justify-center flex flex-col items-center mt-4" >
        <p className="text-white font-bold text-center py-3">Sudah Transfer? Lakukan verifikasi pembayaran segera!</p>
        <button onClick={() => navigate(`../`)} className="bg-yellow-500 border-none mb-10  text-white px-10 py-2 rounded-3xl hover:bg-yellow-200 active:bg-yellow-800 focus:bg-yellow-500 "  >
          Verifikasi Pembayaran</button>
      </div>

      <footer className="bg-white p-[20px] text-black text-center mt-4">
        <p>&copy; 2023</p>
      </footer>
    </div>
  );
};

export default InstruksiBayarPage;