import { DataGrid } from "@mui/x-data-grid";

import { DeleteOutline } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders, deleteOrder } from "../../api/apiCalls";
import { formatDate } from "../../utils/formatDate";
import { formatAmount } from "../../utils/formatAmount";
const Orders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orders = useSelector((state) => state.order.orders);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    getAllOrders(dispatch);
  }, [dispatch]);
  const handleDelete = (id) => {
    deleteOrder(id, dispatch);
  };
  const columns = [
    {
      field: "date",
      headerName: "Date",
      width: 110,
      renderCell: (params) => {
        return (
          <div
            className="flex items-center justify-center"
            onClick={() => {
              navigate("/order/" + params.row._id);
            }}
          >
            {formatDate(params.row.createdAt)}
          </div>
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 190,
      renderCell: (params) => {
        return (
          <div
            className="flex items-center justify-center"
            onClick={() => {
              navigate("/order/" + params.row._id);
            }}
          >
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "address",
      headerName: "Address",
      width: 200,
      renderCell: (params) => {
        return (
          <div
            className="flex items-center justify-center"
            onClick={() => {
              navigate("/order/" + params.row._id);
            }}
          >
            {params.row.address.line1},{params.row.address.city},
            {params.row.address.country}
          </div>
        );
      },
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 140,
      renderCell: (params) => {
        return (
          <div
            className="flex items-center justify-center"
            onClick={() => {
              navigate("/order/" + params.row._id);
            }}
          >
            {formatAmount(params.row.amount)}
          </div>
        );
      },
    },
    { field: "status", headerName: "Status", width: 160 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`../orderItem/${params.row._id}`}>
              <button className="border-0 rounded-sm px-4 py-2 bg-pry-100 text-gold my-4">
                Edit
              </button>
            </Link>
            <DeleteOutline
              className="text-red-100"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="flex h-screen">
      <div className="flex-1">
        <DataGrid
          rows={orders}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
        />
      </div>
    </div>
  );
};

export default Orders;
