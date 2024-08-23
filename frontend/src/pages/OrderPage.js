import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import moment from 'moment';
import displayUSDCurrency from '../helpers/displayCurrency';

const OrderPage = () => {
  const [data, setData] = useState([]);

  const fetchOrderDetails = async () => {
    const response = await fetch(SummaryApi.getOrder.url, {
      method: SummaryApi.getOrder.method,
      credentials: 'include',
    });

    const responseData = await response.json();
    setData(responseData.data);

    console.log('order list', responseData);
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      {!data.length ? (
        <p className="text-center text-lg font-semibold text-gray-700">No Order available</p>
      ) : (
        <div className="space-y-6">
          {data.map((item, index) => (
            <div
              className="bg-white shadow-lg rounded-lg p-4 sm:p-6 transition-transform transform hover:shadow-xl"
              key={item.userId + index}
            >
              <p className="text-gray-800 text-lg font-semibold mb-4">
                {moment(item.createdAt).format('LL')}
              </p>
              <div className="border-t pt-4 space-y-4">
                {item?.productDetails.map((product, index) => (
                  <div
                    className="flex gap-6 items-center border-b border-gray-200 pb-4"
                    key={product.productId + index}
                  >
                    <img
                      src={product.image[0]}
                      alt={product.name}
                      className="w-28 h-28 object-cover rounded-lg shadow-sm"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-lg text-gray-900">
                        {product.name}
                      </div>
                      <div className="flex items-center gap-4 mt-2 text-gray-700">
                        <span className="text-lg text-red-600">
                          {displayUSDCurrency(product.price)}
                        </span>
                        <span>Quantity: {product.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Payment Details:</h3>
                  <p className="text-gray-700">Method: {item.paymentDetails.payment_method_types}</p>
                  <p className="text-gray-700">Status: {item.paymentDetails.payment_status}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Shipping Details:</h3>
                  {item.shipping_options.map((shipping) => (
                    <p key={shipping.shipping_rate} className="text-gray-700">
                      Shipping Amount: {displayUSDCurrency(shipping.shipping_amount)}
                    </p>
                  ))}
                </div>
                <div className="text-right font-bold text-xl text-gray-900">
                  Total Amount: {displayUSDCurrency(item.totalAmount)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderPage;
