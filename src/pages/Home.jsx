import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
      setFilteredPosts(data);
    }
    catch(error) {
      console.log("Error aagya ji");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  },[])

  const filterByCategory = (category) => {
    setSelectedCategory(category);

    if (category === "all") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(
        (item) => item.category === category
      );
      setFilteredPosts(filtered);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 my-6">
        {["all", "men's clothing", "women's clothing", "jewelery", "electronics"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => filterByCategory(cat)}
              className={`px-4 py-2 rounded-full border 
                ${
                  selectedCategory === cat
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700"
                }`}
            >
              {cat.toUpperCase()}
            </button>
          )
        )}
      </div>

      {
        loading ? <Spinner />  :
        posts.length > 0 ? 
        (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            filteredPosts.map( (post) => (
            <Product key = {post.id} post={post}/>
          ) )
          }
        </div>) :
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div> 
      }
    </div>
  );
};

export default Home;
