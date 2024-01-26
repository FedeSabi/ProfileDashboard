
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { FaChartLine } from "react-icons/fa6";
import { RiHashtag } from "react-icons/ri";
import mujer3 from "./assets/mujer-3.jpg";
import chica2 from "./assets/chica2.jpg";
import chica3 from "./assets/chica-3.jpg";
import chica4 from "./assets/chica-4.jpg";
import chica5 from "./assets/chica-5.jpg";

function App() {
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-fuchsia-50 p-8 h-[100vh] overflow-scroll">
        <Header />
        {/* Section 1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
          {/*Card 1 */}
          <div className="bg-red-400 p-8 rounded-xl text-white flex flex-col gap-6">
            <FaChartLine className="text-7xl" />
            <h4 className="text-2xl">Earnings</h4>
            <div className="text-4xl">
              <span className="text-5xl text-white">&#36; 1,254</span>
            </div>
            <span className="py-1 px-3 bg-fuchsia-800/50 rounded-full text-center">
              + 10% since last month
            </span>
          </div>
          {/*Card 2 */}
          <div className="p-4 bg-white rounded-xl flex flex-col justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-4 bg-red-100 rounded-lg p-4">
              <span className="bg-red-400 text-fuchsia-200 text-2xl font-bold p-4 rounded-xl">
                98
              </span>
              <div>
                <h3 className="font-bold text-xl">Rank</h3>
                <p className="text-fuchsia-500">In top 30%</p>
              </div>
            </div>
            <div className=" bg-red-100 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-red-400 text-fuchsia-200 text-2xl font-bold p-4 rounded-xl">
                  32
                </span>
                <div>
                  <h3 className="font-bold text-xl">Contents</h3>
                  <p className="text-fuchsia-500">8 this month</p>
                </div>
              </div>
              <div className=" flex items-center gap-2 text-sm">
                <span className=" bg-red-300/50 py-1 px-4 rounded-full  text-fuchsia-500 ">
                  mobile app
                </span>
                <span className=" bg-red-300/50 py-1 px-4 rounded-full  text-fuchsia-500 ">
                  Branding
                </span>
              </div>
            </div>
          </div>
          {/*Card 3 */}
          <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
            <h1 className="text-2xl font-bold mb-8">Your projects</h1>
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <div className="flex items-start gap-8 mb-8">
                <img
                  src={mujer3}
                  alt="mujer3"
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold">Logo design for Bakery</h3>
                  <p>1 day remaining</p>
                </div>
              </div>
              <div className="flex items-start gap-8 mb-4">
                <img
                  src={chica2}
                  alt="chica2"
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold">Personal branding project</h3>
                  <p>5 days remaining</p>
                </div>
              </div>
              <div className="flex justify-end">
                <a
                  href="#"
                  className=" hover:text-red-400 underline font-medium"
                >
                  See all projects
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*Section 2 */}
        <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
          <div>
            <h1 className="text-2xl font-bold mb-8">Recent invoices</h1>
            <div className="bg-white p-8 rounded-xl shadow-xl mb-8 flex flex-col gap-8">
              {/*Cards 1 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-8 mb-4">
                  <img
                    src={chica3}
                    alt="chica3"
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">Alexandra Willians</h3>
                    <p>Influencer</p>
                  </div>
                </div>
                <div>
                  <span className="bg-red-200 text-fuchsia-600  py-1 px-3 rounded-full font-medium">
                    Paid
                  </span>
                </div>
                <span className="font-bold">&#36; 1,200.87</span>
              </div>
              {/*Cards 2 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-8 mb-4">
                  <img
                    src={chica4}
                    alt="chica4"
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">Mary Janet Phillips</h3>
                    <p>Influencer</p>
                  </div>
                </div>
                <div>
                  <span className="bg-red-200 text-fuchsia-600 py-1 px-3 rounded-full font-medium">
                    Late
                  </span>
                </div>
                <span className="font-bold">&#36; 12,900.88</span>
              </div>
            </div>
            <div className="bg-fuchsia-900 text-red-300 p-8 rounded-xl shadow-xl flex items-center justify-between flex-wrap xl:flex-nowrap gap-8">
              <div>
                <RiHashtag className="text-4xl rotate-12" />
              </div>
              <div>
                <h5 className="font-bold text-white">Engage with clients</h5>
                <p>Join slack channel</p>
              </div>
              <div className="w-full xl:w-auto">
                <button className="bg-red-400 py-2 px-4 text-white rounded-xl w-full">
                  Join now
                </button>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-8">Recommended project</h1>
            <div className="bg-white p-8 rounded-xl shadow-xl mb-8 gap-8">
              <div className=" flex flex-col xl:flex-row xl:items-center justify-between gap-6 mb-5">
                <div className="flex items-center gap-4 mb-5">
                  <div>
                    <img
                      src={chica5}
                      alt="chica 5"
                      className="w-14 h-14 object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Juliet Morgan</h3>
                    <p className="text-gray-500">Update 10m ago</p>
                  </div>
                </div>
                <div>
                  <span className="bg-red-400 py-2 px-4 rounded-full text-white">
                    Desing
                  </span>
                </div>
              </div>
              <div className="mb-5">
                <h5 className="text-lg font-bold">
                  Need a designer to form branding essentials for my business.
                </h5>
                <p>
                  looking for a talend brand designer to create all the branding
                  materials my new startup.
                </p>
              </div>
              <div className="bg-red-200 flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4 rounded-lg mb-7">
                <div>
                  <sup className="text-sm">&#36;</sup><span className="text-2xl font-bold mr-2">8,700</span><span className="text-sm">/ month</span>
                </div>
                <div>
                  <span className="border border-fuchsia-900 py-2 px-4 rounded-full gap-4">Full time</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
