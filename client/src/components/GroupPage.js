import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { groupStateAtom } from "../atom";

const GroupPage = () => {
  const navigate = useNavigate();
  const [group, setGroup] = useRecoilState(groupStateAtom);

  function handleHome() {
    // TODO: useEffect to clear side effect: clearing group
    setGroup({});
    navigate("/");
  }

  return (
    <div className="bg-white border-gray-300 border shadow-lg p-4">
      <div className="min-w-full grow space-y-2">
        <h1 className="text-xl font-bold">{group.name}</h1>
        <p className="text-gray-800">{group.description}</p>

        <button
          className="bg-blue-200 mr-2 rounded-md shadow-md px-3 py-1 transition-all animate hover:bg-blue-200 hover:text-blue-800 hover:scale-105"
          onClick={handleHome}
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default GroupPage;
