import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from '../componentes/Loading';

function PopularCreators() {
  const [admin, setAdmin] = useState([]);
  // const [isLoader, setIsLoader] = useState(true);
  // console.log(admin);
  useEffect(() => {
    const fetchAdmins = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_APP_BACKEND_URL}/user/admins`,
        {
          withCredentials: true,
        }
      );
      console.log(data);
      setAdmin(data);
      // setIsLoader(false);
    };
    fetchAdmins();
  }, []);

  // if (isLoader) {
  //   return <Loader/>
  // }
  return (
    <div className=" md:mx-10 px-5 p-5  my-5 mb-5">
       <span className="inline-block text font-medium uppercase tracking-widest text-slate-500 border-t-2 border-slate-900 dark:border-slate-100 pt-2 mb-1">
        Popular Creators
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 rounded-lg my-5 shadow-md p-2 pt-8">
        {admin && admin.length > 0 ? (
          admin.slice(0, 4).map((element) => {
            return (
              <div key={element._id}>
                <div className="flex items-center flex-col group">
                  <img
                    src={element.profileImage.url}
                    alt="blog"
                    className="w-3/4 h-72 md:w-56 md:h-56 object-cover border border-black rounded-full group-hover:rounded-lg group-hover:border-none group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300 items-center ease-in-out"
                  />
                  <div className="text-center">
                    <p className="font-semibold uppercase mt-2 group-hover:-translate-y-9 group-hover:text-slate-100 transition-all duration-300 group-hover:scale-110">{element.name}</p>
                    <p className="text-gray-600 text-xs capitalize group-hover:-translate-y-5 transition-all duration-300 group-hover:scale-90">{element.role}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div> </div>
        )}
      </div>
    </div>
  );
}

export default PopularCreators;