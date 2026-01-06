import React, { useState } from 'react';
import LeaderBoardTable from './LeaderBoardTable';
import Discussion from './Discussion';

const Engagement = () => {
  const [activeTab, setActiveTab] = useState('leaderboard');
  const [leaderboardActive, setLeaderboardActive] = useState(true);

  // Future tables can be added to this object
  const tabContent = {
    leaderboard: <LeaderBoardTable leaderboardActive={leaderboardActive} setLeaderboardActive={setLeaderboardActive} />,
    discussion: <Discussion></Discussion>
  };

  return (
    <div className="w-full text-gray-300 font-sans">
      
      {/* 1. Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm mb-4">
        <span className="text-white">Engagement</span>
        <span className="text-white text-lg">»</span>
        <span className="text-white font-medium capitalize">
          {activeTab.replace('_', ' ')} Settings
        </span>
      </div>

      {/* 2. Tab Navigation Buttons */}
            <div className="w-full overflow-x-auto no-scrollbar mb-8">
      <div className="gap-2 flex items-center bg-[#1A1A1A] p-0.5 rounded-xl border border-white/5 w-max md:w-fit shadow-2xl">
        {[
          { id: 'leaderboard', label: 'Leaderboard Settings' },
          { id: 'discussion', label: 'Discussion Forum Moderation' }
        ].map((tab) => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-1.5 rounded-lg text-sm transition-all border ${
              activeTab === tab.id 
              ? "bg-[#2A2A2A] text-white border-white/5 shadow-md" 
              : "text-gray-500 border-transparent hover:bg-white/5"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      </div>

      {/* <h1 className="text-xl font-bold text-white mb-6 capitalize">
        {activeTab.replace('_', ' ')} Settings
      </h1> */}

      {/* 3. Render the selected Child Component */}
      {tabContent[activeTab]}

    </div>
  );
};

export default Engagement;