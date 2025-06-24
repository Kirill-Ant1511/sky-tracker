import type { IFlight } from "../../types/IFlight";

export const FLIGHTS: IFlight[] = [
  {
    logo: "/turkish.png",
    planeNumber: "TK143",
    flightNumber: "TC-JFP",
    from: "Sofia",
    fromCode: "SOF",
    to: "Beijing",
    toCode: "PEK",
    status: 50
  },

  {
    logo: "/Rynair.jpg",
    planeNumber: "RN1782",
    flightNumber: "D-AISP",
    from: "Dublin",
    fromCode: "DUB",
    to: "Laranca",
    toCode: "LCA",
    status: 60
  },

  {
    logo: "/s7.png",
    planeNumber: "S7124",
    flightNumber: "RA-74415",
    from: "Nice",
    fromCode: "NCE",
    to: "Tbilisi",
    toCode: "TBS",
    status: 68
  },

  {
    logo: "/swiss.png",
    planeNumber: "LX318",
    flightNumber: "HB-JHK",
    from: "Porto",
    fromCode: "OPO",
    to: "Baku",
    toCode: "GYD",
    status: 80
  },

  {
    logo: "/lufthansa.jpg",
    planeNumber: "LH401",
    flightNumber: "D-AIXD",
    from: "Burgas",
    fromCode: "BOJ",
    to: "Muscat",
    toCode: "MCT",
    status: 40
  }
]