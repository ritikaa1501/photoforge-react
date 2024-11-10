import { HiShoppingBag } from "react-icons/hi2";
import { RiHeartAdd2Fill } from "react-icons/ri";
import ImageCard from "./ImageCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { setAllPosts } from "../../store/slices/postSlice";

const PhotoGalary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const posts = useSelector((state) => state.posts.allPosts);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const getAllImages = async () => {
    if (posts.length > 0) return;
    const res = await axios.get(import.meta.env.VITE_API_URL + "/post/getAll");
    const { data } = await res.data;
    console.log(data);
    dispatch(setAllPosts(data));
  };

  const purchaseImage = async (price, id, postUrl, author, title) => {
    if (!isAuthenticated) {
      toast.error("Please login to purchase asset");
      navigate("/login");
      return;
    }

    try {
      const res = await axios.post(
        import.meta.env.VITE_API_URL + "/payment/generate",
        {
          price,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );

      const { data } = await res.data;
      await handlePaymentVerify(data, id, postUrl, author, title, price);
      // will use using a function here to handle the payment verification
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handlePaymentVerify = async (
    data,
    id,
    postUrl,
    author,
    title,
    price
  ) => {
    const options = {
      key: import.meta.env.RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "Ritika",
      order_id: data.id,
      theme: {
        color: "#5f63b8",
      },
      handler: async (response) => {
        try {
          const res = await axios.post(
            import.meta.env.VITE_API_URL + "/payment/verify",
            {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              postId: id,
              postUrl,
              author,
              title,
              price,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }
          );
          const data = await res.data;
          toast.success(data.message);
        } catch (error) {
          toast.error(error.response.data.message);
        }
      },
    };
    const razorpayWindow = new window.Razorpay(options);
    razorpayWindow.open();
  };


  useEffect(() => {
    getAllImages();
  }, []);

    


  return (
    <div className="my-50 bg-#DD7D5D flex flex-col justify-center items-center">
        <h3 className="text-3xl font-semibold my-5">Photos</h3>
        
        {/*All my photos will be listed inside this div*/}       
        <div div className="grid grid-cols-1 sm:grid-cols-4 gap-5 mb-20">
           {/* Image card  */}
           {posts?.map(({ _id, title, image, price, author }) => {
          return (
            <ImageCard
              key={_id}
              id={_id}
              title={title}
              author={author}
              img={image}
              price={price}
              icon1={<HiShoppingBag 
                title="Cart"
                onClick={() =>
                  purchaseImage(price, _id, image, author, title)
                }
                className="text-3xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"
                 />
                  } 
              icon2={ <RiHeartAdd2Fill className="text-3xl text-red-600 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
              />
            );
          })}         
    </div>
    </div>
  ) ;
};

export default PhotoGalary;
