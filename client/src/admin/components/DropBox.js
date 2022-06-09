// import React, { useState } from "react";
// import { useDropzone } from "react-dropzone";
// import { Paragraph } from "./FontStyles";
// import { UploadIcon } from "../components/Icons";

// const DropBox = () => {
//   const [files, setFiles] = useState([]);
//   const { getRootProps, getInputProps } = useDropzone({
//     accept: "image/*",
//     onDrop: (acceptedFiles) => {
//       setFiles(
//         acceptedFiles.map((file) =>
//           Object.assign(file, {
//             preview: URL.createObjectURL(file),
//           })
//         )
//       );
//     },
//   });
//   const images = files.map((file) => (
//     <div key={file.name}>
//       <div>
//         <img src={file.preview} className="w-full" alt="preview" />
//       </div>
//     </div>
//   ));
//   return (
//     <>
//       <div className="hidden  border-2 rounded-xl border-dashed border-grey-500 2xl:py-24 2xl:px-24 w-3/5 h-full md:flex justify-center items-center">
//         <div
//           {...getRootProps()}
//           className="flex flex-col bg-grey-50 shadow-md  px-12 py-4  w-full justify-center items-center space-y-4"
//         >
//           {files.length > 0 ? (
//             <div className="w-full">{images}</div>
//           ) : (
//             <>
//               <Paragraph fontStyle=" text-lg font-semibold text-center text-grey-700">
//                 Upload transaction receipt
//               </Paragraph>
//               <input {...getInputProps()} />
//               <span className="text-green-100 text-sm">
//                 <UploadIcon />
//               </span>
//               <Paragraph fontStyle="text-sm font-normal">
//                 Drag and drop files here
//               </Paragraph>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default DropBox;
