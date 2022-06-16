import { DataGrid } from "@mui/x-data-grid";

import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProduct } from "../../api/apiCalls";
const ProductGrid = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);
  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center justify-center">
            <img
              className="w-12 h-12"
              src={params.row.img}
              alt={params.row.title}
            />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    { field: "material", headerName: "Material", width: 160 },
    { field: "price", headerName: "Price", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`../product/${params.row._id}`}>
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
          rows={products}
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

export default ProductGrid;
