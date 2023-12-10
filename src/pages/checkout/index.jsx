import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../store/product/action";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";

const CheckoutPage = () => {
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
    <div className="bg-whitebluebg pt-4" >
      <div className="flex flex-row ">
        <p className="pl-16 text-blue-600">Checkout</p>
        <p className="pl-3">&gt; Instruksi Bayar</p>
      </div>
      <h1 className="pl-16 pt-4 font-bold">Checkout</h1>
      <div className="flex flex-col mt-4">
        <div className="flex flex-row ml-20">
          <div className="w-1/4 bg-white mr-5 rounded-md shadow-md">
            <p className="text-lg px-3 py-3">Pilih Metode Pembayaran</p>
          </div>
          <div className="w-3/4 bg-white ml-5 mr-28 rounded-md shadow-md">
            <h3 className="text-lg px-3 py-3">Ringkasan Pesanan</h3>
            <div className="flex flex-row">
              <div className="w-1/4" >
                <Image
                  rounded
                  src={entity.image}
                  style={{ height: "80%", width: "80%", objectFit: "contain" }}
                />
              </div>
              <div className="w-3/4" >
                <h3>{entity.title}</h3>                
                <p>{entity.description}</p>
            </div>
              
            </div>
            <p className="text-lg px-3 py-3">Total Pembayaran {entity.price}</p>
            <button onClick={() => navigate(`../instruksibayar/${id}`)} className="bg-blue-700 w-36 ml-16
            border-none mb-10  text-white px-10 py-2 rounded-3xl hover:bg-blue-900 active:bg-blue-500 focus:bg-blue-300 "  >
              Bayar</button>
          </div>
        </div>
      </div>

      <footer className="bg-white p-[20px] text-black text-center mt-4">
        <p>&copy; 2023</p>
      </footer>
    </div>
  );
};

export default CheckoutPage;