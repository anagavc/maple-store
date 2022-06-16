import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { userRequest } from "../../api/requests";

const Enquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    const getEnquiries = async () => {
      try {
        const res = await userRequest.get("/enquiry");
        setEnquiries(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getEnquiries();
  }, []);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 280,
      renderCell: (params) => {
        return (
          <div className="flex items-center justify-center">
            {params.row._id}
          </div>
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="flex items-center justify-center">
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="flex items-center justify-center">
            {params.row.email}
          </div>
        );
      },
    },
    {
      field: "comment",
      headerName: "Comment",
      width: 1000,
      renderCell: (params) => {
        return (
          <div className="flex items-center justify-center">
            {params.row.comment}
          </div>
        );
      },
    },
  ];
  return (
    <div className="flex h-screen">
      <div className="flex-1">
        <DataGrid
          rows={enquiries}
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

export default Enquiries;
