import {
  FaAngleLeft,
  FaBell,
  FaGalacticRepublic,
  FaHand,
  FaHouseChimney,
  FaPersonDress,
  FaUser,
  FaWifi,
} from "react-icons/fa6";
import React, { PureComponent } from "react";
import { AiFillSetting } from "react-icons/ai";
import { BsArrowLeftRight } from "react-icons/bs";
import { ImBlocked } from "react-icons/im";
import { IoMdQrScanner } from "react-icons/io";
import { CgDanger } from "react-icons/cg";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const App = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
  ];

  return (
    <div className="px-2 bg-[#373a3e] h-screen">
      <div className="flex items-center ">
        <p className="px-2 py-3 bg-[#222427] rounded-full border-2 border-gray-500 text-yellow-400  flex ">
          <FaAngleLeft></FaAngleLeft>
        </p>
        <h1 className="pl-24 text-lg mb-3 pt-2 text-yellow-500">Firewall</h1>
      </div>

      <div className="bg-[#515256] flex  py-3 rounded-3xl items-center">
        <div className=" w-1/2 pl-5 ">
          <p className="text-center text-yellow-500 bg-[#222427] px-5 py-1 rounded-2xl shadow-2xl">
            Dashboard
          </p>
        </div>
        <div className="w-1/2">
          <p className="text-[#d2c7c7] pl-8">Settings</p>
        </div>
      </div>

      {/* Dashboard */}

      {/* <div className="mt-3 py-3 px-3 bg-[#24272a] rounded-2xl shadow-2xl ">
        <div className="flex items-center justify-between ">
          <p className="text-yellow-500 flex items-center">
            <FaWifi></FaWifi>
            <span className="pl-2">WiFi Connection</span>
          </p>
          <p className="text-white flex items-center">
            <span className="text-xs">Connected</span>{" "}
            <span className=" text-yellow-500">.</span>
          </p>
        </div>
        <div className="mt-2 flex gap-3 justify-between divide-x divide-yellow-500 ">
          <div className="w-1/2 text-xs">
            <div className="flex items-center justify-between mt-2">
              <p className="w-1/2 text-gray-500">WiFi Name</p>
              <p className="w-1/2 text-yellow-600">
                : <span className="pl-2">TechForing</span>
              </p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="w-1/2 text-gray-500">Network</p>
              <p className="w-1/2 text-white">
                : <span className="pl-2">Monitoring</span>
              </p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="w-1/2 text-gray-500">Firewall</p>
              <p className="w-1/2 text-white">
                : <span className="pl-2">Active</span>
              </p>
            </div>
          </div>
          <div className="w-1/2 text-xs pl-2">
            <div className="flex items-center justify-between mt-2">
              <p className="w-1/2 text-gray-500">Network Type</p>
              <p className="w-1/2 text-white">
                : <span className="pl-2 text-yellow-600">Public</span>
              </p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="w-1/2 text-gray-500">Protocol</p>
              <p className="w-1/2 text-white">
                : <span className="pl-2">WPA</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-3 ">
          <BarChart width={350} height={250} data={data}>
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#e0d552" />
            <Bar dataKey="uv" fill="#aaabab" />
          </BarChart>
        </div>
      </div>
      <div className="mt-1">
        <div className="grid grid-cols-2  place-items-center  h-56">
          <div className="bg-[#26282c] px-6 shadow-2xl py-5 rounded-2xl">
            <h3 className="text-center text-xl font-bold text-yellow-400">0</h3>
            <p className="text-sm text-white mt-2">Malicious Website</p>
          </div>
          <div className="bg-[#26282c] px-6 shadow-2xl py-5 rounded-2xl">
            <h3 className="text-center text-xl font-bold text-yellow-400">13</h3>
            <p className="text-sm text-white mt-2 px-5">Ad Blocked</p>
          </div>
          <div className="bg-[#26282c] px-3 shadow-2xl py-5 rounded-2xl">
            <h3 className="text-center text-xl font-bold text-yellow-400">6</h3>
            <p className="text-sm text-white mt-2">Unwanted codes in QR</p>
          </div>
          <div className="bg-[#26282c] px-3 shadow-2xl py-5 rounded-2xl">
            <h3 className="text-center text-xl font-bold text-yellow-400">1</h3>
            <p className="text-sm text-white mt-2 px-4">Phishing/Scam</p>
          </div>
        </div>
      </div> */}





      {/* Setting */}

      <div className="mt-7 py-3 px-3 bg-[#24272a] rounded-2xl shadow-2xl divide-y">
        <div className="flex justify-between items-center py-3">
          <div>
            <h2 className=" flex items-center text-yellow-500">
              <BsArrowLeftRight></BsArrowLeftRight>{" "}
              <span className="pl-3 ">Monitor Connections</span>
            </h2>
            <p className="text-xs">Real-Time monitoring</p>
          </div>
          <input type="checkbox" className="toggle bg-yellow-500" checked />
        </div>
        <div className="flex justify-between items-center py-3">
          <div>
            <h2 className=" flex items-center text-yellow-500">
              <FaGalacticRepublic></FaGalacticRepublic>{" "}
              <span className="pl-3 ">Malicious Website Blocker</span>
            </h2>
            <p className="text-xs">Protection against mailcious websites</p>
          </div>
          <input type="checkbox" className="toggle bg-yellow-500" checked />
        </div>
        <div className="flex justify-between items-center py-3">
          <div>
            <h2 className="  flex items-center text-yellow-500">
              <ImBlocked></ImBlocked> <span className="pl-3 ">Ad Blocker</span>
            </h2>
            <p className="text-xs">Block any unwanted Ads</p>
          </div>
          <input type="checkbox" className="toggle bg-yellow-500" checked />
        </div>
        <div className="flex justify-between items-center py-3">
          <div>
            <h2 className="  flex items-center text-yellow-500">
              <FaHand></FaHand>{" "}
              <span className="pl-3 ">Block Persistent & Distracting Ads</span>
            </h2>
            <p className="text-xs">Block destracting ads</p>
          </div>
          <input type="checkbox" className="toggle bg-yellow-500" checked />
        </div>
        <div className="flex justify-between items-center py-3">
          <div>
            <h2 className="  flex items-center text-yellow-500">
              <FaPersonDress></FaPersonDress>{" "}
              <span className="pl-3 ">Phishing/Scam Detection</span>
            </h2>
            <p className="text-xs">Detect phishing and scam attempts</p>
          </div>
          <input type="checkbox" className="toggle bg-yellow-500" checked />
        </div>
        <div className="flex justify-between items-center py-3">
          <div>
            <h2 className="  flex items-center text-yellow-500">
              <IoMdQrScanner></IoMdQrScanner>{" "}
              <span className="pl-3 ">QR Code Scanner </span>
            </h2>
            <p className="text-xs">Scan any unwanted codes before take you in</p>
          </div>
          <input type="checkbox" className="toggle bg-yellow-500" checked />
        </div>
        <div className="flex justify-between items-center py-3">
          <div className="flex gap-3 px-2">
            <h2 className=" text-4xl flex items-center text-yellow-500">
              <CgDanger></CgDanger>{" "}
            </h2>
            <p className="text-xs  text-justify text-yellow-500">Configuring firewall setings incorrectly can leave your device and personal information vulnerable to cyber attacks. Please ensure you have athoraugh understading of the settings befor making any changes</p>
          </div>
        </div>
      </div>




      {/* Footer */}
      <div className="mt-3">
        <div className="border   border-gray-500 rounded-2xl border-b-0 border-l-0 border-r-0">
          <div className="flex mt-2 justify-around ">
            <p className="text-2xl text-yellow-600">
              <FaHouseChimney></FaHouseChimney>
            </p>
            <p className="text-2xl text-white">
              <FaBell></FaBell>
            </p>
            <p className="border-2 border-gray-300 rounded-full px-4 py-5 -mt-12  bg-gray-700 text-yellow-500 font-bold">
              Scan
            </p>
            <p className="text-2xl text-white">
              <FaUser></FaUser>
            </p>
            <p className="text-2xl text-white">
              <AiFillSetting></AiFillSetting>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
