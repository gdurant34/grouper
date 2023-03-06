import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { groupStateAtom } from "../atom";

const GroupCard = ({ group }) => {
  const navigate = useNavigate();
  const setGroup = useSetRecoilState(groupStateAtom);

  const handleGroupPage = () => {
    setGroup(group);
    navigate("/group");
  };

  return (
    <div className="bg-white border-gray-300 border rounded-md shadow-lg p-4">
      <div className="space-y-2 flex flex-col h-full">
        <div className="min-w-full grow space-y-2">
          <h1 className="text-xl font-bold">{group.name}</h1>
          <p className="text-gray-800">{group.description}</p>
        </div>

        <div>
          <button className="bg-blue-200 mr-2 rounded-md shadow-md px-3 py-1 transition-all animate hover:bg-blue-200 hover:text-blue-800">
            Join
          </button>
          <button
            className="bg-blue-200 mr-2 rounded-md shadow-md px-3 py-1"
            onClick={handleGroupPage}
          >
            go to group page
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
