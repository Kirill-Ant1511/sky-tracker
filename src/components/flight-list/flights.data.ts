import type { IFlight } from "../../types/IFlight";

export const FLIGHTS: IFlight[] = [
  {
    company: {
      logo: "/aircompany/turkish.svg",
      name: "Turkish Airlines"
    },

    plane: {
      planeType: "Airbus-A330",
      planePhoto: "/airplane/turkish_airbus-A330.png",
      planeNumber: "TK143"
    },

    flightInfo: {
      flightNumber: "TC-JFP",
      from: "Sofia",
      fromCode: "SOF",
      fromTimestamp: "UTC+2",
      to: "Beijing",
      toCode: "PEK",
      toTimestamp: "UTC+4",
      totalDistace: 3756,
      fromSheduled: new Date,
      toSheduled: new Date,
    },
    speed: 800,
    altitude: 10200,
    createCountry: "🇹🇷 Turkish",
    
    status: 60 
  },

  {
    company: {
      logo: "/aircompany/ryanair.svg",
      name: "Ryanair"
    },
    plane: {
      planeType: "Boeing-737",
      planePhoto: "/airplane/Ryanair_Boeing-737-800.png",
      planeNumber: "RN1782"
    },

    flightInfo: {
      flightNumber: "D-AISP",
      from: "Dublin",
      fromCode: "DUB",
      fromTimestamp: "UTC+2",
      to: "Laranca",
      toCode: "LCA",
      toTimestamp: "UTC+4",
      totalDistace: 3756,
      fromSheduled: new Date,
      toSheduled: new Date,
    },
    speed: 780,
    altitude: 11220,
    createCountry: "🇮🇪 Ireland",
    
    status: 60 
  },

  {
    company: {
      logo: "/aircompany/s7.svg",
      name: "S7"
    },
    plane: {
      planeType: "Airbus-A320",
      planePhoto: "/airplane/s7_Airbus-A320.png",
      planeNumber: "S7124",
    },
    flightInfo: {
      flightNumber: "RA-74415",
      from: "Nice",
      fromCode: "NCE",
      fromTimestamp: "UTC+2",
      to: "Tbilisi",
      toCode: "TBS",
      toTimestamp: "UTC+4",
      totalDistace: 3756,
      fromSheduled: new Date,
      toSheduled: new Date,
    },
    speed: 780,
    altitude: 11220,
    createCountry: "🇮🇪 Ireland",
    
    status: 60
  },

  {
    company: {
      logo: "/aircompany/swiss.svg",
      name: "Swiss"
    },
    plane: {
      planeType: "Airbus-A321",
      planePhoto: "/airplane/SWISS_Airbus-A321.png",
      planeNumber: "LX318",
    },
    flightInfo: {
      flightNumber: "HB-JHK",
      from: "Porto",
      fromCode: "OPO",
      fromTimestamp: "UTC+2",
      to: "Baku",
      toCode: "GYD",
      toTimestamp: "UTC+4",
      totalDistace: 3756,
      fromSheduled: new Date,
      toSheduled: new Date,
    },
    
    speed: 780,
    altitude: 11220,
    createCountry: "🇮🇪 Ireland",
    
    status: 60
  },

  {
    company: {
      logo: "/aircompany/lufthansa.svg",
      name: "Lufthansa"
    },
    plane: {
      planeType: "Airbus-A321",
      planePhoto: "/airplane/Lufthansa_Airbus-A350-900.png",
      planeNumber: "LH401",
    },
    flightInfo: {
      flightNumber: "D-AIXD",
      from: "Burgas",
      fromCode: "BOJ",
      fromTimestamp: "UTC+2",
      to: "Muscat",
      toCode: "MCT",
      toTimestamp: "UTC+4",
      fromSheduled: new Date,
      toSheduled: new Date,
      totalDistace: 3756
    },
    
    speed: 780,
    altitude: 11220,
    createCountry: "🇮🇪 Ireland",
    status: 60
  }
]