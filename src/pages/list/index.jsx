import { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../store/product/action";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

const ListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { entities, loading } = useSelector((state) => state.product);

  const fetchProducts = async () => {
    dispatch(getAllProduct());
  };

  const goToDetail = (productId) => {
    navigate(`detail/${productId}`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div  className="bg-whitebluebg" >
      <div className="bg-tahiti flex flex-row justify-between items-center mb-16 h-56 p-24">
        <div className="w-1/2 items-center justify-between">
          <h1 className="text-white text-xl font-bold">Jadi expert bersama</h1>
          <h1 className="text-white text-xl font-bold mb-2">edspert.id</h1>
          <p className="text-gray-200 font-thin">Tingkatkan skill dan pengetahuan bersama para mentor</p>
          <p className="text-gray-200 font-thin mb-1">terbaik di bidangnya, untuk siapkan karir impian anda.</p>          
        </div>
        <div className="w-1/2 flex relative  justify-between">
            <img src="rect_blue.png" alt="Banner image 1" className="absolute w-36 h-auto object-cover z-10 ml-12 mt-20" />
            <img src="person_banner.png" alt="Banner image 2" className="w-80 h-auto object-cover z-30" />
            <img src="rect_yellow.png" alt="Banner image 3" className="absolute w-28 h-auto object-cover z-20 ml-36 mt-12" />
        </div>
      </div>
    
      <Container style={{}}>
      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
        {loading ? (
          <Loader />
        ) : (
          entities.map((item) => (
            <Card
              onClick={() => goToDetail(item.id)}
              key={item.id}
              style={{ width: "18rem", cursor: "pointer" }}
            >
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <p>$ {item.price}</p>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </Container>
    <footer className="bg-white p-[20px] text-black text-center mt-4">
        <p>&copy; 2023</p>
      </footer>
    </div>
  );
};

export default ListPage;
