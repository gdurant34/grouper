import React from "react";
import { useRecoilValue } from "recoil";
import { groupsStateAtom } from "../atom";
import GroupCard from "./GroupCard";

const Homepage = () => {
  const groups = useRecoilValue(groupsStateAtom);

  return (
    <div className="p-4 bg-gray-200 flex items-center justify-center">
      <div className="max-w-5xl">
        <div className="grid sm:grid-cols-2 gap-4">
          {groups.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
