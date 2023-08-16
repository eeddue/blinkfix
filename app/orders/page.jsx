"use client";
import EmptyComponent from "@/components/EmptyComponent";
import FilterSection from "@/components/FilterSection";
import Loader from "@/components/Loader";
import OrderDetails from "@/components/modals/OrderDetails";
import RefundModal from "@/components/modals/RefundModal";
import UsersNav from "@/components/UsersNav";
import axiosFetch from "@/lib/axios";
import {
  selectModal,
  selectOrder,
  toggleRefund,
} from "@/redux/features/modals";
import { users } from "@/utils";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Orders() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const { order, refund } = useSelector(selectModal);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    axiosFetch
      .get("/orders")
      .then(({ data }) => setOrders(data.orders))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  if (loading) return <Loader />;

  if (!loading && orders.length === 0) return <EmptyComponent title="Orders" />;

  return (
    <div className="">
      <UsersNav title="Orders" />
      {/* users table */}

      <div className="overflow-x-scroll mx-4 hidden lg:block pb-[100px]">
        <table className="w-full overflow-x-scroll">
          <thead>
            <tr className="w-full flex text-white rounded-md bg-[#706462] py-2">
              <th className="flex-1">ID</th>
              <th className="flex-1">Username</th>
              <th className="flex-1">Amount</th>
              <th className="flex-1">Order Status</th>
              <th className="flex-1">Date</th>
              <th className="flex-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, i) => (
              <tr
                key={i}
                className={`${
                  i % 2 === 0 ? "bg-tp" : "bg-[#7a6f6c]"
                } w-full py-3 flex rounded-lg`}
              >
                <td className="flex-1 text-center text-sm">{order._id}</td>
                <td className="flex-1 text-center text-lg">
                  {order?.orderBy.name}
                </td>
                <td className="flex-1 text-center text-lg">
                  ${order?.totalAmount}
                </td>
                <td className="flex-1 text-center text-lg">
                  {order?.orderStatus}
                </td>
                <td className="flex-1 text-center text-lg">
                  {dayjs(order.orderDate).format("DD/MM/YYYY")}
                </td>
                <td className="flex-1">
                  <div className=" flex flex-wrap justify-center">
                    <button
                      onClick={() => dispatch(selectOrder(order))}
                      className="bg-tp shadow-lg py-1 rounded-full px-2 m-2"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => dispatch(toggleRefund())}
                      className="bg-tp shadow-lg py-1 rounded-full px-2 m-2"
                    >
                      Refund
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="lg:hidden pb-[100px]">
        {orders?.map((order, i) => (
          <div
            key={i}
            className={`${
              i % 2 === 0 ? "bg-[#95837D]" : "bg-[#7a6f6c]"
            }  py-3 flex flex-col p-4 rounded-md mb-3 sm:mx-3 max-w-[600px] md:mx-auto`}
          >
            <p className="md:text-lg">ID : {order._id}</p>
            <p className="md:text-lg">Username : {order?.orderBy.name}</p>
            <p className="md:text-lg">Amount : ${order?.totalAmount}</p>
            <p className="md:text-lg">Order Status : {order?.orderStatus}</p>
            <p className="md:text-lg">
              Date : {dayjs(order.orderDate).format("DD/MM/YYYY")}
            </p>
            <div className="md:text-lg">
              <button
                onClick={() => dispatch(selectOrder(order))}
                className="bg-tp shadow-lg py-1 rounded-full px-3 m-2"
              >
                Details
              </button>
              <button
                onClick={() => dispatch(toggleRefund())}
                className="bg-tp shadow-lg py-1 rounded-full px-3 m-2"
              >
                Refund
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal open={order != null}>
        <Box>
          <OrderDetails />
        </Box>
      </Modal>

      <Modal open={refund}>
        <Box>
          <RefundModal />
        </Box>
      </Modal>

      {/* filter */}
      <FilterSection />
    </div>
  );
}

export default Orders;
