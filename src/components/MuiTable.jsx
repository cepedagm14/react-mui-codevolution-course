import React from "react";
import {
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  Table,
  TableRow,
  Paper,
} from "@mui/material";
const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="center">Gender</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.first_name}</TableCell>
              <TableCell>{item.last_name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell align="center">{item.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;

const tableData = [
  {
    id: 1,
    first_name: "Annabal",
    last_name: "Carlsen",
    email: "acarlsen0@soundcloud.com",
    gender: "Genderfluid",
    ip_address: "13.87.219.149",
  },
  {
    id: 2,
    first_name: "Tod",
    last_name: "Scadden",
    email: "tscadden1@rediff.com",
    gender: "Male",
    ip_address: "210.5.0.120",
  },
  {
    id: 3,
    first_name: "Dyann",
    last_name: "McClay",
    email: "dmcclay2@comcast.net",
    gender: "Female",
    ip_address: "13.7.195.210",
  },
  {
    id: 4,
    first_name: "Avictor",
    last_name: "Fossick",
    email: "afossick3@forbes.com",
    gender: "Male",
    ip_address: "235.121.100.149",
  },
  {
    id: 5,
    first_name: "Alvan",
    last_name: "MacCleod",
    email: "amaccleod4@china.com.cn",
    gender: "Male",
    ip_address: "98.191.0.18",
  },
  {
    id: 6,
    first_name: "Ruperta",
    last_name: "Garrard",
    email: "rgarrard5@fastcompany.com",
    gender: "Female",
    ip_address: "207.30.25.160",
  },
  {
    id: 7,
    first_name: "Barr",
    last_name: "Troker",
    email: "btroker6@wix.com",
    gender: "Male",
    ip_address: "157.70.131.109",
  },
  {
    id: 8,
    first_name: "Margalit",
    last_name: "Stickler",
    email: "mstickler7@prnewswire.com",
    gender: "Female",
    ip_address: "19.85.87.252",
  },
  {
    id: 9,
    first_name: "Elladine",
    last_name: "De Ferrari",
    email: "edeferrari8@indiegogo.com",
    gender: "Female",
    ip_address: "151.183.3.54",
  },
  {
    id: 10,
    first_name: "Hartley",
    last_name: "Carding",
    email: "hcarding9@unblog.fr",
    gender: "Non-binary",
    ip_address: "106.188.38.153",
  },
  {
    id: 11,
    first_name: "Rudiger",
    last_name: "Hartop",
    email: "rhartopa@youtu.be",
    gender: "Male",
    ip_address: "173.245.97.21",
  },
  {
    id: 12,
    first_name: "Pepe",
    last_name: "Briscam",
    email: "pbriscamb@dailymotion.com",
    gender: "Male",
    ip_address: "185.192.9.47",
  },
  {
    id: 13,
    first_name: "Isador",
    last_name: "Harbord",
    email: "iharbordc@hao123.com",
    gender: "Male",
    ip_address: "27.242.116.234",
  },
  {
    id: 14,
    first_name: "Veda",
    last_name: "Sudron",
    email: "vsudrond@woothemes.com",
    gender: "Female",
    ip_address: "124.59.170.37",
  },
  {
    id: 15,
    first_name: "Barri",
    last_name: "Lilbourne",
    email: "blilbournee@rambler.ru",
    gender: "Male",
    ip_address: "139.10.247.189",
  },
  {
    id: 16,
    first_name: "Laverna",
    last_name: "Andriss",
    email: "landrissf@globo.com",
    gender: "Female",
    ip_address: "204.19.199.14",
  },
  {
    id: 17,
    first_name: "Vyky",
    last_name: "Richardet",
    email: "vrichardetg@slideshare.net",
    gender: "Female",
    ip_address: "98.228.211.10",
  },
  {
    id: 18,
    first_name: "Foss",
    last_name: "Kearford",
    email: "fkearfordh@bluehost.com",
    gender: "Agender",
    ip_address: "47.136.38.128",
  },
  {
    id: 19,
    first_name: "Clemmy",
    last_name: "Bullivant",
    email: "cbullivanti@shutterfly.com",
    gender: "Bigender",
    ip_address: "70.250.101.37",
  },
  {
    id: 20,
    first_name: "Minny",
    last_name: "Chevolleau",
    email: "mchevolleauj@nationalgeographic.com",
    gender: "Female",
    ip_address: "51.45.108.205",
  },
];
