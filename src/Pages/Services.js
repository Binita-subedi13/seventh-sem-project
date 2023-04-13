import React from 'react';

function Programs() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-4">Our Services</h1>
      <div className="flex flex-wrap justify-center">
        <div className="bg-white shadow rounded-lg p-6 m-4 w-80">
          <h2 className="text-lg font-bold mb-2">Online Fundraising</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae nulla non magna
            consectetur pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae. Sed tincidunt quam vel arcu vulputate, eget vestibulum sapien
            lobortis. Ut vel nisl eros. Nulla facilisi. Praesent scelerisque tortor at nibh
            fermentum, vel auctor augue elementum.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li className="mb-2">
              Pellentesque euismod, velit ut lacinia bibendum, erat nunc volutpat nibh, eget
              efficitur massa orci a metus.
            </li>
            <li className="mb-2">
              Sed eget est nec augue condimentum commodo. Sed ut convallis dolor, in eleifend velit.
            </li>
            <li>
              Proin nec sem vel nibh ullamcorper faucibus. Donec a magna at felis finibus bibendum
              vitae quis neque.
            </li>
          </ul>
        </div>
        <div className="bg-white shadow rounded-lg p-6 m-4 w-80">
          <h2 className="text-lg font-bold mb-2">Campaign Planning</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae nulla non magna
            consectetur pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae. Sed tincidunt quam vel arcu vulputate, eget vestibulum sapien
            lobortis. Ut vel nisl eros. Nulla facilisi. Praesent scelerisque tortor at nibh
            fermentum, vel auctor augue elementum.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li className="mb-2">
              Pellentesque euismod, velit ut lacinia bibendum, erat nunc volutpat nibh, eget
              efficitur massa orci a metus.
            </li>
            <li className="mb-2">
              Sed eget est nec augue condimentum commodo. Sed ut convallis dolor, in eleifend velit.
            </li>
            <li>
              Proin nec sem vel nibh ullamcorper faucibus. Donec a magna at felis finibus bibendum
              vitae quis neque.
            </li>
          </ul>
        </div>
        <div className="bg-white shadow rounded-lg p-6 m-4 w-80">
          <h2 className="text-lg font-bold mb-2">Donation Management</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae nulla non magna
            consectetur pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Programs;