// DetailPage.js

import React from "react";
import { useParams } from "react-router-dom";
import EventInCards from "../components/Content/EventInCards";

const DetailPage = () => {
  const { id } = useParams();

  // Fetch fundraising data using 'id' from API or other data source
  // Replace the following placeholders with actual data
  const fundraisingData = {
    title: "Help Children in Need",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel cursus lacus. Phasellus rutrum augue vel tempor aliquet. Sed ac lacinia felis. Ut blandit, odio nec malesuada blandit, sapien mi ultricies lacus, ut blandit mauris mauris a lacus. Cras vel faucibus libero, vel elementum augue. Suspendisse sagittis augue id velit consequat, ut bibendum est tristique. Pellentesque accumsan ullamcorper arcu, vel finibus lectus interdum a.",
    goal: 5000,
    raised: 2450,
    donors: 123,
    daysLeft: 10,
    image: "/Assets/Photos/event-photo2.jpg",
  };

  return (
    <div>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white max-w-4xl p-8 rounded-lg shadow-md m-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">{fundraisingData.title}</h1>
          <span className="text-gray-500">
            {fundraisingData.daysLeft} days left
          </span>
        </div>
        <div className="mb-6">
          <img
            src={fundraisingData.image}
            alt={fundraisingData.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <p className="text-gray-600 mb-6">{fundraisingData.description}</p>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold">Raised</h2>
            <p className="text-2xl font-semibold text-green-600">
              ${fundraisingData.raised}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Goal</h2>
            <p className="text-2xl font-semibold">${fundraisingData.goal}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Donors</h2>
            <p className="text-2xl font-semibold">{fundraisingData.donors}</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Donate Now
          </button>
        </div>
      </div>
      
    </div>
    <EventInCards/>
    </div>
    
  );
};

export default DetailPage;
