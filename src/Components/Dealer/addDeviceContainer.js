import {React, useState, useEffect} from "react";

import "./estilos.css";

const AddDeviceContainer = () => {

    const [devices, setDevices] = useState([
        {
          "Device": "Freematics Traccar Edition    RECOMMENDED",
          "Protocol": "freematics",
          "Port": "5170"
        },
        {
          "Device": "Freematics ONE+ Model A",
          "Protocol": "freematics",
          "Port": "5170"
        },
        {
          "Device": "Freematics ONE+ Model B",
          "Protocol": "freematics",
          "Port": "5170"
        },
        {
          "Device": "Freematics ONE+ Model H",
          "Protocol": "freematics",
          "Port": "5170"
        },
        {
          "Device": "TK103-2B",
          "Protocol": "gps103",
          "Port": "5001"
        },
        {
          "Device": "TK104",
          "Protocol": "gps103",
          "Port": "5001"
        },
        {
          "Device": "TK106",
          "Protocol": "-",
          "Port": "clones"
        },
        {
          "Device": "GPS-103",
          "Protocol": "gps103",
          "Port": "5001"
        },
        {
          "Device": "GPS-103-A",
          "Protocol": "gps103",
          "Port": "5001"
        },
        {
          "Device": "TW-MD1101",
          "Protocol": "gps103",
          "Port": "5001"
        },
        {
          "Device": "GPS102B",
          "Protocol": "gps103",
          "Port": "5001"
        },
        {
          "Device": "GPS104",
          "Protocol": "gps103",
          "Port": "5001"
        },
        {
          "Device": "TK110",
          "Protocol": "-",
          "Port": "clones"
        },
        {
          "Device": "306A",
          "Protocol": "gps103",
          "Port": "5001"
        },
        {
          "Device": "303F",
          "Protocol": "gps103",
          "Port": "5001"
        },
        {
          "Device": "TK-102B",
          "Protocol": "gps103",
          "Port": "5001"
        },
        {
          "Device": "GPS105B",
          "Protocol": "gps103",
          "Port": "5001"
        },
        {
          "Device": "A306",
          "Protocol": "gps103",
          "Port": "5001"
        },
        {
          "Device": "GPS303-G",
          "Protocol": "gps103",
          "Port": "5001"
        },
        {
          "Device": "EC-546",
          "Protocol": "tk103",
          "Port": "5002"
        },
        {
          "Device": "GT02A",
          "Protocol": "-",
          "Port": "clones"
        },
        {
          "Device": "TT0024",
          "Protocol": "tk103",
          "Port": "5002"
        },
        {
          "Device": "T1024",
          "Protocol": "tk103",
          "Port": "5002"
        },
        {
          "Device": "T1080",
          "Protocol": "tk103",
          "Port": "5002"
        },
        {
          "Device": "T2024",
          "Protocol": "tk103",
          "Port": "5002"
        },
        {
          "Device": "T2124",
          "Protocol": "tk103",
          "Port": "5002"
        },
        {
          "Device": "T12",
          "Protocol": "tk103",
          "Port": "5002"
        },
        {
          "Device": "T4400",
          "Protocol": "tk103",
          "Port": "5002"
        },
        {
          "Device": "T8800",
          "Protocol": "tk103",
          "Port": "5002"
        },
        {
          "Device": "T15400",
          "Protocol": "tk103",
          "Port": "5002"
        },
        {
          "Device": "TK05",
          "Protocol": "tk103",
          "Port": "5002"
        },
        {
          "Device": "TK10",
          "Protocol": "tk103",
          "Port": "5002"
        },
        {
          "Device": "TK15",
          "Protocol": "tk103",
          "Port": "5002"
        },
        {
          "Device": "TK20",
          "Protocol": "tk103",
          "Port": "5002"
        },
        {
          "Device": "T18",
          "Protocol": "tk103",
          "Port": "5002"
        },
        {
          "Device": "T18H",
          "Protocol": "tk103",
          "Port": "5002"
        },
        {
          "Device": "T16",
          "Protocol": "tk103",
          "Port": "5002"
        },
        {
          "Device": "GPS105",
          "Protocol": "-",
          "Port": "clones"
        },
        {
          "Device": "P168",
          "Protocol": "tk103",
          "Port": "5002"
        },
        {
          "Device": "P169",
          "Protocol": "tk103",
          "Port": "5002"
        },
        {
          "Device": "TK206",
          "Protocol": "tk103",
          "Port": "5002"
        },
        {
          "Device": "TK207",
          "Protocol": "tk103",
          "Port": "5002"
        },
        {
          "Device": "GL100",
          "Protocol": "gl100",
          "Port": "5003"
        },
        {
          "Device": "GL100M",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GL200",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GV300N",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GT200",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GT300",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GT500",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GL300",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GL3000W Series",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GL300VC",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GL300W Series",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GL500",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GL505",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GL520",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GT301",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GB100",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GMT100",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GMT200",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GS100",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GV200",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GV300",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GV300VC",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GV300W",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GV500",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GV500VC",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GV50LTA",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GV55",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GV55 Lite",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GV55VC",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GV600W",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GV65",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GV65 Plus",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GV75",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "GV75W",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "Prime AT Plus",
          "Protocol": "gl200",
          "Port": "5004"
        },
        {
          "Device": "Gelix",
          "Protocol": "t55",
          "Port": "5005"
        },
        {
          "Device": "Gelix-2",
          "Protocol": "t55",
          "Port": "5005"
        },
        {
          "Device": "GPS-911(M)",
          "Protocol": "t55",
          "Port": "5005"
        },
        {
          "Device": "AVL-900",
          "Protocol": "t55",
          "Port": "5005"
        },
        {
          "Device": "AVL-900(R)",
          "Protocol": "t55",
          "Port": "5005"
        },
        {
          "Device": "AVL-900(M)",
          "Protocol": "t55",
          "Port": "5005"
        },
        {
          "Device": "AVL-901(B)",
          "Protocol": "t55",
          "Port": "5005"
        },
        {
          "Device": "AVL-901(C)",
          "Protocol": "t55",
          "Port": "5005"
        },
        {
          "Device": "AVL-901(D)",
          "Protocol": "t55",
          "Port": "5005"
        },
        {
          "Device": "AVL-921",
          "Protocol": "t55",
          "Port": "5005"
        },
        {
          "Device": "CradlePoint IBR600",
          "Protocol": "t55",
          "Port": "5005"
        },
        {
          "Device": "Cradlepoint IBR1100",
          "Protocol": "t55",
          "Port": "5005"
        },
        {
          "Device": "Aspicore",
          "Protocol": "t55",
          "Port": "5005"
        },
        {
          "Device": "Tracker for Traccar",
          "Protocol": "t55",
          "Port": "5005"
        },
        {
          "Device": "MultiConnect rCell",
          "Protocol": "t55",
          "Port": "5005"
        },
        {
          "Device": "M2M IP Modem F7114",
          "Protocol": "t55",
          "Port": "5005"
        },
        {
          "Device": "Datamax",
          "Protocol": "t55",
          "Port": "5005"
        },
        {
          "Device": "MA100-1010",
          "Protocol": "t55",
          "Port": "5005"
        },
        {
          "Device": "TK101",
          "Protocol": "xexun",
          "Port": "5006"
        },
        {
          "Device": "TK102",
          "Protocol": "-",
          "Port": "clones"
        },
        {
          "Device": "TK102-2",
          "Protocol": "xexun",
          "Port": "5006"
        },
        {
          "Device": "TK103",
          "Protocol": "-",
          "Port": "clones"
        },
        {
          "Device": "TK103B",
          "Protocol": "-",
          "Port": "clones"
        },
        {
          "Device": "TK103-2",
          "Protocol": "xexun",
          "Port": "5006"
        },
        {
          "Device": "XT009",
          "Protocol": "xexun",
          "Port": "5006"
        },
        {
          "Device": "XT011",
          "Protocol": "xexun",
          "Port": "5006"
        },
        {
          "Device": "TK201",
          "Protocol": "xexun",
          "Port": "5006"
        },
        {
          "Device": "TK201-2",
          "Protocol": "xexun",
          "Port": "5006"
        },
        {
          "Device": "TK202",
          "Protocol": "xexun",
          "Port": "5006"
        },
        {
          "Device": "TK203",
          "Protocol": "xexun",
          "Port": "5006"
        },
        {
          "Device": "TK206",
          "Protocol": "-",
          "Port": "clones"
        },
        {
          "Device": "XT107",
          "Protocol": "xexun",
          "Port": "5006"
        },
        {
          "Device": "TZ-AVL02",
          "Protocol": "totem",
          "Port": "5007"
        },
        {
          "Device": "TZ-AVL03",
          "Protocol": "totem",
          "Port": "5007"
        },
        {
          "Device": "TZ-AVL05",
          "Protocol": "totem",
          "Port": "5007"
        },
        {
          "Device": "TZ-AVL08",
          "Protocol": "totem",
          "Port": "5007"
        },
        {
          "Device": "TZ-AVL09",
          "Protocol": "totem",
          "Port": "5007"
        },
        {
          "Device": "TZ-AVL10",
          "Protocol": "totem",
          "Port": "5007"
        },
        {
          "Device": "TZ-GT08",
          "Protocol": "totem",
          "Port": "5007"
        },
        {
          "Device": "TZ-GT09",
          "Protocol": "totem",
          "Port": "5007"
        },
        {
          "Device": "TZ-VN06",
          "Protocol": "totem",
          "Port": "5007"
        },
        {
          "Device": "AT03",
          "Protocol": "totem",
          "Port": "5007"
        },
        {
          "Device": "AT06",
          "Protocol": "totem",
          "Port": "5007"
        },
        {
          "Device": "AT06+",
          "Protocol": "totem",
          "Port": "5007"
        },
        {
          "Device": "AT07",
          "Protocol": "totem",
          "Port": "5007"
        },
        {
          "Device": "AT09",
          "Protocol": "totem",
          "Port": "5007"
        },
        {
          "Device": "TZ-AVL201",
          "Protocol": "totem",
          "Port": "5007"
        },
        {
          "Device": "Mini MT",
          "Protocol": "enfora",
          "Port": "5008"
        },
        {
          "Device": "Enfora GSM2448",
          "Protocol": "enfora",
          "Port": "5008"
        },
        {
          "Device": "Enfora MT_4000",
          "Protocol": "enfora",
          "Port": "5008"
        },
        {
          "Device": "GT30i",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "GT60",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "VT300",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "VT310",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "VT400",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "GT30",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "GT30X",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "PST-AVL01",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "PT03",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "PT60",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "PT300X",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "PT30",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "GT-110P",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "GT-110K",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "GT-110M",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "GT-110ES",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "GT-110ZS",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "AVL-011",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "VT900",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "P008",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "GT 30",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "CT01",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "CT03",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "CT04",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "CT04-R",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "CT04-X",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "OCT600",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "MT01",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "MT02",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "PT01",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "PT03",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "VT1000",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "GSY007",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "T200",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "iStartek",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "VT310N",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "TK228",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "OST800",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "OCT900",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "OCT900-R",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "OCT800",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "OCT800-D",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "OCT600-CAM",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "OCT600-SG3",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "TZ-GT01",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "VT600",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "Topten MT05",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "Topten MT05S",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "Topten LT02",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "Topten LT03",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "Topten GT08",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "Topten GT08S",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "Topten GT48",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "Topten MT35",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "Topten TK108",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "Topten TK510",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "Topten TK208",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "Topten TK208S",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "Topten TK218",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "Topten TK228",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "Topten TK428",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "Topten PT99",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "Topten PG99",
          "Protocol": "meiligao",
          "Port": "5009"
        },
        {
          "Device": "PG88",
          "Protocol": "trv",
          "Port": "5010"
        },
        {
          "Device": "S88",
          "Protocol": "trv",
          "Port": "5010"
        },
        {
          "Device": "PG22",
          "Protocol": "trv",
          "Port": "5010"
        },
        {
          "Device": "S22",
          "Protocol": "trv",
          "Port": "5010"
        },
        {
          "Device": "iStartek",
          "Protocol": "trv",
          "Port": "5010"
        },
        {
          "Device": "VT206",
          "Protocol": "trv",
          "Port": "5010"
        },
        {
          "Device": "PT33",
          "Protocol": "trv",
          "Port": "5010"
        },
        {
          "Device": "ST200",
          "Protocol": "suntech",
          "Port": "5011"
        },
        {
          "Device": "ST210",
          "Protocol": "suntech",
          "Port": "5011"
        },
        {
          "Device": "ST215",
          "Protocol": "suntech",
          "Port": "5011"
        },
        {
          "Device": "ST215I",
          "Protocol": "suntech",
          "Port": "5011"
        },
        {
          "Device": "ST215E",
          "Protocol": "suntech",
          "Port": "5011"
        },
        {
          "Device": "ST240",
          "Protocol": "suntech",
          "Port": "5011"
        },
        {
          "Device": "ST230",
          "Protocol": "suntech",
          "Port": "5011"
        },
        {
          "Device": "ST900",
          "Protocol": "suntech",
          "Port": "5011"
        },
        {
          "Device": "ST910",
          "Protocol": "suntech",
          "Port": "5011"
        },
        {
          "Device": "ST-910",
          "Protocol": "suntech",
          "Port": "5011"
        },
        {
          "Device": "ST-940",
          "Protocol": "suntech",
          "Port": "5011"
        },
        {
          "Device": "Progress 7s",
          "Protocol": "progress",
          "Port": "5012"
        },
        {
          "Device": "H02",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "H-02A",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "H-02B",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "TX-2",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "H-06",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "H08",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "GTLT3",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "NT201",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "NT202",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "S31",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "LK109",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "LK106",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "LK208",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "LK206",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "LK310",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "LK206A",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "LK206B",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "MI-G6",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "CC830",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "CCTR",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "CCTR-630",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "AT-18",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "GRTQ",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "LK210",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "PT301",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "VT900",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "G91S",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "LK209C",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "G-T005",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "Incutex TK105",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "RF-V8S",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "CCRT809",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "AT-1",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "LK660",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "MT-1",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "CCTR-622G",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "Amparos S4",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "LK910",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "LK700",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "LK710",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "RF-16V",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "Cantrack-G05",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "Secumore-G05",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "Sinotrack ST-901",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "GTRACK4G",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "XE710",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "XE800",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "TK909",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "XE210",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "XE103",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "XE209A",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "XE209B",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "XE209C",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "XE109",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "XE208",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "GTR-100",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "MV720",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "MV740",
          "Protocol": "h02",
          "Port": "5013"
        },
        {
          "Device": "JT600",
          "Protocol": "jt600",
          "Port": "5014"
        },
        {
          "Device": "GP4000",
          "Protocol": "jt600",
          "Port": "5014"
        },
        {
          "Device": "GP5000",
          "Protocol": "jt600",
          "Port": "5014"
        },
        {
          "Device": "GP6000",
          "Protocol": "jt600",
          "Port": "5014"
        },
        {
          "Device": "JT700A",
          "Protocol": "jt600",
          "Port": "5014"
        },
        {
          "Device": "JT700B",
          "Protocol": "jt600",
          "Port": "5014"
        },
        {
          "Device": "JT700C",
          "Protocol": "jt600",
          "Port": "5014"
        },
        {
          "Device": "JT700",
          "Protocol": "jt600",
          "Port": "5014"
        },
        {
          "Device": "JT701",
          "Protocol": "jt600",
          "Port": "5014"
        },
        {
          "Device": "HB-A5",
          "Protocol": "huabao",
          "Port": "5015"
        },
        {
          "Device": "G1C",
          "Protocol": "huabao",
          "Port": "5015"
        },
        {
          "Device": "JT705",
          "Protocol": "huabao",
          "Port": "5015"
        },
        {
          "Device": "ST-902W",
          "Protocol": "huabao",
          "Port": "5015"
        },
        {
          "Device": "CCTR 830-4G",
          "Protocol": "huabao",
          "Port": "5015"
        },
        {
          "Device": "CCTR-800G",
          "Protocol": "huabao",
          "Port": "5015"
        },
        {
          "Device": "ST-901 A+",
          "Protocol": "huabao",
          "Port": "5015"
        },
        {
          "Device": "G-420 Padlock",
          "Protocol": "huabao",
          "Port": "5015"
        },
        {
          "Device": "OBD2 V20",
          "Protocol": "huabao",
          "Port": "5015"
        },
        {
          "Device": "TA09",
          "Protocol": "huabao",
          "Port": "5015"
        },
        {
          "Device": "G-300",
          "Protocol": "huabao",
          "Port": "5015"
        },
        {
          "Device": "MicTrack B21",
          "Protocol": "huabao",
          "Port": "5015"
        },
        {
          "Device": "TK319",
          "Protocol": "huabao",
          "Port": "5015"
        },
        {
          "Device": "LT-162",
          "Protocol": "huabao",
          "Port": "5015"
        },
        {
          "Device": "DT-700",
          "Protocol": "huabao",
          "Port": "5015"
        },
        {
          "Device": "V680",
          "Protocol": "v680",
          "Port": "5016"
        },
        {
          "Device": "P10",
          "Protocol": "v680",
          "Port": "5016"
        },
        {
          "Device": "HC207",
          "Protocol": "v680",
          "Port": "5016"
        },
        {
          "Device": "VT810",
          "Protocol": "v680",
          "Port": "5016"
        },
        {
          "Device": "KS168M",
          "Protocol": "v680",
          "Port": "5016"
        },
        {
          "Device": "HC06A",
          "Protocol": "v680",
          "Port": "5016"
        },
        {
          "Device": "TL201",
          "Protocol": "v680",
          "Port": "5016"
        },
        {
          "Device": "TK118",
          "Protocol": "v680",
          "Port": "5016"
        },
        {
          "Device": "PT200",
          "Protocol": "v680",
          "Port": "5016"
        },
        {
          "Device": "PT350",
          "Protocol": "v680",
          "Port": "5016"
        },
        {
          "Device": "TK06A",
          "Protocol": "-",
          "Port": "clones"
        },
        {
          "Device": "PT80",
          "Protocol": "pt502",
          "Port": "5017"
        },
        {
          "Device": "PT100",
          "Protocol": "pt502",
          "Port": "5017"
        },
        {
          "Device": "PT201",
          "Protocol": "pt502",
          "Port": "5017"
        },
        {
          "Device": "PT502",
          "Protocol": "pt502",
          "Port": "5017"
        },
        {
          "Device": "PT600",
          "Protocol": "pt502",
          "Port": "5017"
        },
        {
          "Device": "PT510",
          "Protocol": "pt502",
          "Port": "5017"
        },
        {
          "Device": "AnioSmart_A510",
          "Protocol": "pt502",
          "Port": "5017"
        },
        {
          "Device": "TR-20",
          "Protocol": "tr20",
          "Port": "5018"
        },
        {
          "Device": "Signal S-2115",
          "Protocol": "navis",
          "Port": "5019"
        },
        {
          "Device": "Signal S-2117",
          "Protocol": "navis",
          "Port": "5019"
        },
        {
          "Device": "CH-4713",
          "Protocol": "navis",
          "Port": "5019"
        },
        {
          "Device": "CH-5703",
          "Protocol": "navis",
          "Port": "5019"
        },
        {
          "Device": "MT80",
          "Protocol": "meitrack",
          "Port": "5020"
        },
        {
          "Device": "MT88",
          "Protocol": "meitrack",
          "Port": "5020"
        },
        {
          "Device": "MT80i",
          "Protocol": "meitrack",
          "Port": "5020"
        },
        {
          "Device": "MT90",
          "Protocol": "meitrack",
          "Port": "5020"
        },
        {
          "Device": "KT90",
          "Protocol": "meitrack",
          "Port": "5020"
        },
        {
          "Device": "MVT100",
          "Protocol": "meitrack",
          "Port": "5020"
        },
        {
          "Device": "MVT340",
          "Protocol": "meitrack",
          "Port": "5020"
        },
        {
          "Device": "MVT380",
          "Protocol": "meitrack",
          "Port": "5020"
        },
        {
          "Device": "MVT600",
          "Protocol": "meitrack",
          "Port": "5020"
        },
        {
          "Device": "T1",
          "Protocol": "meitrack",
          "Port": "5020"
        },
        {
          "Device": "MVT800",
          "Protocol": "meitrack",
          "Port": "5020"
        },
        {
          "Device": "T3",
          "Protocol": "meitrack",
          "Port": "5020"
        },
        {
          "Device": "TC68",
          "Protocol": "meitrack",
          "Port": "5020"
        },
        {
          "Device": "TC68S",
          "Protocol": "meitrack",
          "Port": "5020"
        },
        {
          "Device": "T322",
          "Protocol": "meitrack",
          "Port": "5020"
        },
        {
          "Device": "T622",
          "Protocol": "meitrack",
          "Port": "5020"
        },
        {
          "Device": "P99G",
          "Protocol": "meitrack",
          "Port": "5020"
        },
        {
          "Device": "TT8750",
          "Protocol": "skypatrol",
          "Port": "5021"
        },
        {
          "Device": "TT8750+",
          "Protocol": "skypatrol",
          "Port": "5021"
        },
        {
          "Device": "TT9500",
          "Protocol": "skypatrol",
          "Port": "5021"
        },
        {
          "Device": "TT9200",
          "Protocol": "skypatrol",
          "Port": "5021"
        },
        {
          "Device": "TT8850",
          "Protocol": "skypatrol",
          "Port": "5021"
        },
        {
          "Device": "GSM5108",
          "Protocol": "skypatrol",
          "Port": "5021"
        },
        {
          "Device": "GT02",
          "Protocol": "gt02",
          "Port": "5022"
        },
        {
          "Device": "TR02",
          "Protocol": "gt02",
          "Port": "5022"
        },
        {
          "Device": "GT06",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "GT06N",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "GT09",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "Heacent 908",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "GT03A",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "GT03B",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "GS503",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "ET100",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "GT100",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "GT06D",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "GK301",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "JM01",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "JM08",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "GT02D",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "IB-GT102",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "CRX1",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "JV200",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "TP06A",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "BW08",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "TR06",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "JI09",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "Concox GT300",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "WeTrack 2",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "GT230",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "OBD189",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "ZX612",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "S112U",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "Seeworld",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "G19",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "TW02B",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "EV02",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "G19H",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "G18",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "G19S",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "G17O",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "S20",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "G30",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "JM-VG01U",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "JM-VG02U",
          "Protocol": "gt06",
          "Port": "5023"
        },
        {
          "Device": "GPS311A",
          "Protocol": "-",
          "Port": "clones"
        },
        {
          "Device": "MT-90",
          "Protocol": "megastek",
          "Port": "5024"
        },
        {
          "Device": "MT-100",
          "Protocol": "megastek",
          "Port": "5024"
        },
        {
          "Device": "GPT-69",
          "Protocol": "megastek",
          "Port": "5024"
        },
        {
          "Device": "GT-89",
          "Protocol": "megastek",
          "Port": "5024"
        },
        {
          "Device": "GT-99",
          "Protocol": "megastek",
          "Port": "5024"
        },
        {
          "Device": "XT-007",
          "Protocol": "megastek",
          "Port": "5024"
        },
        {
          "Device": "GMT-368",
          "Protocol": "megastek",
          "Port": "5024"
        },
        {
          "Device": "GVT-369",
          "Protocol": "megastek",
          "Port": "5024"
        },
        {
          "Device": "GVT-390",
          "Protocol": "megastek",
          "Port": "5024"
        },
        {
          "Device": "GVT-500",
          "Protocol": "megastek",
          "Port": "5024"
        },
        {
          "Device": "GVT-510",
          "Protocol": "megastek",
          "Port": "5024"
        },
        {
          "Device": "GMT-368SQ",
          "Protocol": "megastek",
          "Port": "5024"
        },
        {
          "Device": "XT7",
          "Protocol": "megastek",
          "Port": "5024"
        },
        {
          "Device": "GMT368s",
          "Protocol": "megastek",
          "Port": "5024"
        },
        {
          "Device": "MT60-X",
          "Protocol": "megastek",
          "Port": "5024"
        },
        {
          "Device": "MT-90x",
          "Protocol": "megastek",
          "Port": "5024"
        },
        {
          "Device": "MT-60X",
          "Protocol": "megastek",
          "Port": "5024"
        },
        {
          "Device": "MT300",
          "Protocol": "megastek",
          "Port": "5024"
        },
        {
          "Device": "MT110",
          "Protocol": "megastek",
          "Port": "5024"
        },
        {
          "Device": "TD230",
          "Protocol": "navigil",
          "Port": "5025"
        },
        {
          "Device": "uTrace03e",
          "Protocol": "navigil",
          "Port": "5025"
        },
        {
          "Device": "GpsGate",
          "Protocol": "gpsgate",
          "Port": "5026"
        },
        {
          "Device": "FM1100",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FM1110",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FM1010",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FM1120",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FM1202",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FM2100",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FM2200",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FM3001",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FM3200",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FM3612",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FM36M1",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FM4100",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FM4200",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FM5300",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FM6320",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "GH3000",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FM3300",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "CT2000E",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FM1204",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FM3612",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FM3622",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMB900",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMB920",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMT100",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMB001",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMB002",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMB010",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMB020",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMB110",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMB120",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMB122",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMB125",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMA110",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMA120",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMB202",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMB204",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMA202",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMA204",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMB630",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMB640",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMB962",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMB964",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "TMT250",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMC001",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMM001",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMC125",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMC130",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMC640",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMM125",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMM130",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMM640",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FM6300",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMU125",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMU126",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMU130",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMB130",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMB140",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "MSP500",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMB003",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "MTB100",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "FMB208",
          "Protocol": "teltonika",
          "Port": "5027"
        },
        {
          "Device": "Gruz",
          "Protocol": "mta6",
          "Port": "5028"
        },
        {
          "Device": "Personal",
          "Protocol": "mta6",
          "Port": "5028"
        },
        {
          "Device": "ZoomBox",
          "Protocol": "mta6",
          "Port": "5028"
        },
        {
          "Device": "MPU-01",
          "Protocol": "mta6",
          "Port": "5028"
        },
        {
          "Device": "MPU-01 GLONASS",
          "Protocol": "mta6",
          "Port": "5028"
        },
        {
          "Device": "MTA-02",
          "Protocol": "mta6",
          "Port": "5028"
        },
        {
          "Device": "MTA-02-GLONASS",
          "Protocol": "mta6",
          "Port": "5028"
        },
        {
          "Device": "MTA-02-CAM",
          "Protocol": "mta6",
          "Port": "5028"
        },
        {
          "Device": "MTA-03",
          "Protocol": "mta6",
          "Port": "5028"
        },
        {
          "Device": "MTA-12",
          "Protocol": "mta6",
          "Port": "5028"
        },
        {
          "Device": "TZ-AVL19",
          "Protocol": "tzone",
          "Port": "5029"
        },
        {
          "Device": "TLT-2F",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "V520",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "TLT-2H",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "TLT-1C",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "V690",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "VSUN3338",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "TLT-3A",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "V580",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "TLT-1B",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "TLT-2K",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "TLT-2N",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "TLT-1F",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "TLT-8A",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "TLT-8B",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "TLT-3A",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "TLT-1D",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "TLT-6C",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "TLT-7B",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "AT-12A",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "MP80",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "MT510",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "MT500",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "MT600",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "MT510-G",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "MT530",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "MT550",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "MP10",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "MP90",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "MT510G",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "MC300",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "MP80",
          "Protocol": "tlt2h",
          "Port": "5030"
        },
        {
          "Device": "Syrus GPS",
          "Protocol": "taip",
          "Port": "5031"
        },
        {
          "Device": "E-Track",
          "Protocol": "taip",
          "Port": "5031"
        },
        {
          "Device": "Sierra",
          "Protocol": "taip",
          "Port": "5031"
        },
        {
          "Device": "Lantrix",
          "Protocol": "taip",
          "Port": "5031"
        },
        {
          "Device": "Syrus SY2210",
          "Protocol": "taip",
          "Port": "5031"
        },
        {
          "Device": "Lantrix T1700",
          "Protocol": "taip",
          "Port": "5031"
        },
        {
          "Device": "Peplink Transit Mini",
          "Protocol": "taip",
          "Port": "5031"
        },
        {
          "Device": "WondeX VT300",
          "Protocol": "wondex",
          "Port": "5032"
        },
        {
          "Device": "WondeX SPT-10",
          "Protocol": "wondex",
          "Port": "5032"
        },
        {
          "Device": "TK5000",
          "Protocol": "wondex",
          "Port": "5032"
        },
        {
          "Device": "Navixy M7",
          "Protocol": "wondex",
          "Port": "5032"
        },
        {
          "Device": "TK5000XL",
          "Protocol": "wondex",
          "Port": "5032"
        },
        {
          "Device": "CelloTrack 6M (IP65)",
          "Protocol": "cellocator",
          "Port": "5033"
        },
        {
          "Device": "CelloTrack IP67",
          "Protocol": "cellocator",
          "Port": "5033"
        },
        {
          "Device": "CelloTrack XT",
          "Protocol": "cellocator",
          "Port": "5033"
        },
        {
          "Device": "GalileoSky",
          "Protocol": "galileo",
          "Port": "5034"
        },
        {
          "Device": "V-MT001",
          "Protocol": "ywt",
          "Port": "5035"
        },
        {
          "Device": "V208",
          "Protocol": "ywt",
          "Port": "5035"
        },
        {
          "Device": "TK102 Clone",
          "Protocol": "-",
          "Port": "clones"
        },
        {
          "Device": "IntelliTrac X1 Plus",
          "Protocol": "intellitrac",
          "Port": "5037"
        },
        {
          "Device": "IntelliTrac X8",
          "Protocol": "intellitrac",
          "Port": "5037"
        },
        {
          "Device": "IntelliTrac P1",
          "Protocol": "intellitrac",
          "Port": "5037"
        },
        {
          "Device": "GPSMTA",
          "Protocol": "gpsmta",
          "Port": "5038"
        },
        {
          "Device": "Wialon IPS",
          "Protocol": "wialon",
          "Port": "5039"
        },
        {
          "Device": "MasterKit",
          "Protocol": "wialon",
          "Port": "5039"
        },
        {
          "Device": "MasterKit BM8009",
          "Protocol": "wialon",
          "Port": "5039"
        },
        {
          "Device": "NeoTech TR_1000",
          "Protocol": "wialon",
          "Port": "5039"
        },
        {
          "Device": "Eskort TD-Online",
          "Protocol": "wialon",
          "Port": "5039"
        },
        {
          "Device": "CCTR-620",
          "Protocol": "carscop",
          "Port": "5040"
        },
        {
          "Device": "CCTR-622",
          "Protocol": "carscop",
          "Port": "5040"
        },
        {
          "Device": "CCTR-700",
          "Protocol": "carscop",
          "Port": "5040"
        },
        {
          "Device": "CCTR-800",
          "Protocol": "carscop",
          "Port": "5040"
        },
        {
          "Device": "CCTR-801",
          "Protocol": "carscop",
          "Port": "5040"
        },
        {
          "Device": "CCTR-802",
          "Protocol": "carscop",
          "Port": "5040"
        },
        {
          "Device": "CCTR-803",
          "Protocol": "carscop",
          "Port": "5040"
        },
        {
          "Device": "CCTR-808",
          "Protocol": "carscop",
          "Port": "5040"
        },
        {
          "Device": "CCTR-810",
          "Protocol": "carscop",
          "Port": "5040"
        },
        {
          "Device": "CCTR-620+",
          "Protocol": "carscop",
          "Port": "5040"
        },
        {
          "Device": "T-104",
          "Protocol": "apel",
          "Port": "5041"
        },
        {
          "Device": "T-104PRO",
          "Protocol": "apel",
          "Port": "5041"
        },
        {
          "Device": "T-104 GLONASS",
          "Protocol": "apel",
          "Port": "5041"
        },
        {
          "Device": "MP2030A",
          "Protocol": "manpower",
          "Port": "5042"
        },
        {
          "Device": "MP2030B",
          "Protocol": "manpower",
          "Port": "5042"
        },
        {
          "Device": "MP2031A",
          "Protocol": "manpower",
          "Port": "5042"
        },
        {
          "Device": "MP2031B",
          "Protocol": "manpower",
          "Port": "5042"
        },
        {
          "Device": "MP2031C",
          "Protocol": "manpower",
          "Port": "5042"
        },
        {
          "Device": "TR-600",
          "Protocol": "globalsat",
          "Port": "5043"
        },
        {
          "Device": "TR-600G",
          "Protocol": "globalsat",
          "Port": "5043"
        },
        {
          "Device": "TR-606B",
          "Protocol": "globalsat",
          "Port": "5043"
        },
        {
          "Device": "GTR-128/129",
          "Protocol": "globalsat",
          "Port": "5043"
        },
        {
          "Device": "TR-206",
          "Protocol": "globalsat",
          "Port": "5043"
        },
        {
          "Device": "TR-203",
          "Protocol": "globalsat",
          "Port": "5043"
        },
        {
          "Device": "TR-151",
          "Protocol": "globalsat",
          "Port": "5043"
        },
        {
          "Device": "TR-151SP",
          "Protocol": "globalsat",
          "Port": "5043"
        },
        {
          "Device": "AT1",
          "Protocol": "atrack",
          "Port": "5044"
        },
        {
          "Device": "AT1Pro",
          "Protocol": "atrack",
          "Port": "5044"
        },
        {
          "Device": "AT5i",
          "Protocol": "atrack",
          "Port": "5044"
        },
        {
          "Device": "AU5i",
          "Protocol": "atrack",
          "Port": "5044"
        },
        {
          "Device": "AX5",
          "Protocol": "atrack",
          "Port": "5044"
        },
        {
          "Device": "AY5i",
          "Protocol": "atrack",
          "Port": "5044"
        },
        {
          "Device": "AT3",
          "Protocol": "atrack",
          "Port": "5044"
        },
        {
          "Device": "AT5",
          "Protocol": "atrack",
          "Port": "5044"
        },
        {
          "Device": "AU5",
          "Protocol": "atrack",
          "Port": "5044"
        },
        {
          "Device": "AY5",
          "Protocol": "atrack",
          "Port": "5044"
        },
        {
          "Device": "AT1",
          "Protocol": "atrack",
          "Port": "5044"
        },
        {
          "Device": "AX5C",
          "Protocol": "atrack",
          "Port": "5044"
        },
        {
          "Device": "PT3000",
          "Protocol": "pt3000",
          "Port": "5045"
        },
        {
          "Device": "FM-Pro3-R",
          "Protocol": "ruptela",
          "Port": "5046"
        },
        {
          "Device": "FM-Tco3",
          "Protocol": "ruptela",
          "Port": "5046"
        },
        {
          "Device": "FM-Pro3",
          "Protocol": "ruptela",
          "Port": "5046"
        },
        {
          "Device": "FM-Eco3",
          "Protocol": "ruptela",
          "Port": "5046"
        },
        {
          "Device": "Trailer Tracker",
          "Protocol": "ruptela",
          "Port": "5046"
        },
        {
          "Device": "FM-ECO 4",
          "Protocol": "ruptela",
          "Port": "5046"
        },
        {
          "Device": "T8803",
          "Protocol": "topflytech",
          "Port": "5047"
        },
        {
          "Device": "T8801",
          "Protocol": "topflytech",
          "Port": "5047"
        },
        {
          "Device": "T8901",
          "Protocol": "topflytech",
          "Port": "5047"
        },
        {
          "Device": "StarFinder AIRE",
          "Protocol": "laipac",
          "Port": "5048"
        },
        {
          "Device": "StarFinder Lite",
          "Protocol": "laipac",
          "Port": "5048"
        },
        {
          "Device": "StarFinder Bus",
          "Protocol": "laipac",
          "Port": "5048"
        },
        {
          "Device": "S911 Lola",
          "Protocol": "laipac",
          "Port": "5048"
        },
        {
          "Device": "S911 Bracelet Locator",
          "Protocol": "laipac",
          "Port": "5048"
        },
        {
          "Device": "S911 Bracelet Locator HC",
          "Protocol": "laipac",
          "Port": "5048"
        },
        {
          "Device": "S911 Bracelet Locator ST",
          "Protocol": "laipac",
          "Port": "5048"
        },
        {
          "Device": "S911 Personal Locator",
          "Protocol": "laipac",
          "Port": "5048"
        },
        {
          "Device": "A9",
          "Protocol": "aplicom",
          "Port": "5049"
        },
        {
          "Device": "A1 Max",
          "Protocol": "aplicom",
          "Port": "5049"
        },
        {
          "Device": "A1 Trax",
          "Protocol": "aplicom",
          "Port": "5049"
        },
        {
          "Device": "A1 M2M",
          "Protocol": "aplicom",
          "Port": "5049"
        },
        {
          "Device": "A5 GLX",
          "Protocol": "aplicom",
          "Port": "5049"
        },
        {
          "Device": "Aplicom C-series",
          "Protocol": "aplicom",
          "Port": "5049"
        },
        {
          "Device": "Aplicom Q-series",
          "Protocol": "aplicom",
          "Port": "5049"
        },
        {
          "Device": "Omega T600",
          "Protocol": "gotop",
          "Port": "5050"
        },
        {
          "Device": "TL007",
          "Protocol": "gotop",
          "Port": "5050"
        },
        {
          "Device": "TL201",
          "Protocol": "gotop",
          "Port": "5050"
        },
        {
          "Device": "TL206",
          "Protocol": "gotop",
          "Port": "5050"
        },
        {
          "Device": "TL218",
          "Protocol": "gotop",
          "Port": "5050"
        },
        {
          "Device": "VT108",
          "Protocol": "gotop",
          "Port": "5050"
        },
        {
          "Device": "VT1081",
          "Protocol": "gotop",
          "Port": "5050"
        },
        {
          "Device": "TP-20",
          "Protocol": "gotop",
          "Port": "5050"
        },
        {
          "Device": "EQT-20",
          "Protocol": "gotop",
          "Port": "5050"
        },
        {
          "Device": "G-TL-020",
          "Protocol": "gotop",
          "Port": "5050"
        },
        {
          "Device": "GP106M",
          "Protocol": "gotop",
          "Port": "5050"
        },
        {
          "Device": "Toplovo",
          "Protocol": "gotop",
          "Port": "5050"
        },
        {
          "Device": "GC-101",
          "Protocol": "sanav",
          "Port": "5051"
        },
        {
          "Device": "CT-24",
          "Protocol": "sanav",
          "Port": "5051"
        },
        {
          "Device": "CT-58",
          "Protocol": "sanav",
          "Port": "5051"
        },
        {
          "Device": "CT-58A",
          "Protocol": "sanav",
          "Port": "5051"
        },
        {
          "Device": "GX-101",
          "Protocol": "sanav",
          "Port": "5051"
        },
        {
          "Device": "GS-818",
          "Protocol": "sanav",
          "Port": "5051"
        },
        {
          "Device": "MT-101",
          "Protocol": "sanav",
          "Port": "5051"
        },
        {
          "Device": "MU-201",
          "Protocol": "sanav",
          "Port": "5051"
        },
        {
          "Device": "QG-201",
          "Protocol": "sanav",
          "Port": "5051"
        },
        {
          "Device": "M588S",
          "Protocol": "gator",
          "Port": "5052"
        },
        {
          "Device": "M528",
          "Protocol": "gator",
          "Port": "5052"
        },
        {
          "Device": "M508",
          "Protocol": "gator",
          "Port": "5052"
        },
        {
          "Device": "M518",
          "Protocol": "gator",
          "Port": "5052"
        },
        {
          "Device": "M588N",
          "Protocol": "gator",
          "Port": "5052"
        },
        {
          "Device": "S208",
          "Protocol": "gator",
          "Port": "5052"
        },
        {
          "Device": "S228",
          "Protocol": "gator",
          "Port": "5052"
        },
        {
          "Device": "M518S",
          "Protocol": "gator",
          "Port": "5052"
        },
        {
          "Device": "NR002",
          "Protocol": "noran",
          "Port": "5053"
        },
        {
          "Device": "NR006",
          "Protocol": "noran",
          "Port": "5053"
        },
        {
          "Device": "NR008",
          "Protocol": "noran",
          "Port": "5053"
        },
        {
          "Device": "NR016",
          "Protocol": "noran",
          "Port": "5053"
        },
        {
          "Device": "NR024",
          "Protocol": "noran",
          "Port": "5053"
        },
        {
          "Device": "NR028",
          "Protocol": "noran",
          "Port": "5053"
        },
        {
          "Device": "NR032",
          "Protocol": "noran",
          "Port": "5053"
        },
        {
          "Device": "UT01",
          "Protocol": "noran",
          "Port": "5053"
        },
        {
          "Device": "UM02",
          "Protocol": "noran",
          "Port": "5053"
        },
        {
          "Device": "UT04",
          "Protocol": "noran",
          "Port": "5053"
        },
        {
          "Device": "UT03",
          "Protocol": "noran",
          "Port": "5053"
        },
        {
          "Device": "UT05",
          "Protocol": "noran",
          "Port": "5053"
        },
        {
          "Device": "UT06",
          "Protocol": "noran",
          "Port": "5053"
        },
        {
          "Device": "UP102",
          "Protocol": "noran",
          "Port": "5053"
        },
        {
          "Device": "M2M-Mini",
          "Protocol": "m2m",
          "Port": "5054"
        },
        {
          "Device": "OsmAnd",
          "Protocol": "osmand",
          "Port": "5055"
        },
        {
          "Device": "SendLocation",
          "Protocol": "osmand",
          "Port": "5055"
        },
        {
          "Device": "Locus Pro Android",
          "Protocol": "osmand",
          "Port": "5055"
        },
        {
          "Device": "Custodium",
          "Protocol": "osmand",
          "Port": "5055"
        },
        {
          "Device": "Traccar Client",
          "Protocol": "osmand",
          "Port": "5055"
        },
        {
          "Device": "ET-01",
          "Protocol": "easytrack",
          "Port": "5056"
        },
        {
          "Device": "ET-06",
          "Protocol": "easytrack",
          "Port": "5056"
        },
        {
          "Device": "GPS Marker M130",
          "Protocol": "gpsmarker",
          "Port": "5057"
        },
        {
          "Device": "GPS Marker M80",
          "Protocol": "gpsmarker",
          "Port": "5057"
        },
        {
          "Device": "GPS Marker M70",
          "Protocol": "gpsmarker",
          "Port": "5057"
        },
        {
          "Device": "GPS Marker M100",
          "Protocol": "gpsmarker",
          "Port": "5057"
        },
        {
          "Device": "GPS Marker M60",
          "Protocol": "gpsmarker",
          "Port": "5057"
        },
        {
          "Device": "KG100",
          "Protocol": "khd",
          "Port": "5058"
        },
        {
          "Device": "KG200",
          "Protocol": "khd",
          "Port": "5058"
        },
        {
          "Device": "KG300",
          "Protocol": "khd",
          "Port": "5058"
        },
        {
          "Device": "KC200",
          "Protocol": "khd",
          "Port": "5058"
        },
        {
          "Device": "T360-101A",
          "Protocol": "khd",
          "Port": "5058"
        },
        {
          "Device": "T360-101P",
          "Protocol": "khd",
          "Port": "5058"
        },
        {
          "Device": "T360-101E",
          "Protocol": "khd",
          "Port": "5058"
        },
        {
          "Device": "T360-103",
          "Protocol": "khd",
          "Port": "5058"
        },
        {
          "Device": "T360-106",
          "Protocol": "khd",
          "Port": "5058"
        },
        {
          "Device": "T360-108",
          "Protocol": "khd",
          "Port": "5058"
        },
        {
          "Device": "T360-269",
          "Protocol": "khd",
          "Port": "5058"
        },
        {
          "Device": "T360-269B",
          "Protocol": "khd",
          "Port": "5058"
        },
        {
          "Device": "T360-269JT",
          "Protocol": "khd",
          "Port": "5058"
        },
        {
          "Device": "VT600",
          "Protocol": "khd",
          "Port": "5058"
        },
        {
          "Device": "VT600X",
          "Protocol": "khd",
          "Port": "5058"
        },
        {
          "Device": "VT800",
          "Protocol": "khd",
          "Port": "5058"
        },
        {
          "Device": "AL900",
          "Protocol": "khd",
          "Port": "5058"
        },
        {
          "Device": "VT900X",
          "Protocol": "khd",
          "Port": "5058"
        },
        {
          "Device": "AL-900E",
          "Protocol": "khd",
          "Port": "5058"
        },
        {
          "Device": "STG T100",
          "Protocol": "khd",
          "Port": "5058"
        },
        {
          "Device": "Piligrim PL250",
          "Protocol": "piligrim",
          "Port": "5059"
        },
        {
          "Device": "Piligrim 6000N",
          "Protocol": "piligrim",
          "Port": "5059"
        },
        {
          "Device": "Piligrim Patrol",
          "Protocol": "piligrim",
          "Port": "5059"
        },
        {
          "Device": "Piligrim Stealth",
          "Protocol": "piligrim",
          "Port": "5059"
        },
        {
          "Device": "Piligrim Tracker-6000",
          "Protocol": "piligrim",
          "Port": "5059"
        },
        {
          "Device": "STL060",
          "Protocol": "stl060",
          "Port": "5060"
        },
        {
          "Device": "iTrackPro",
          "Protocol": "cartrack",
          "Port": "5061"
        },
        {
          "Device": "MiniFinder Pico",
          "Protocol": "minifinder",
          "Port": "5062"
        },
        {
          "Device": "MiniFinder Atto",
          "Protocol": "minifinder",
          "Port": "5062"
        },
        {
          "Device": "EV_07",
          "Protocol": "minifinder",
          "Port": "5062"
        },
        {
          "Device": "EV_07P",
          "Protocol": "minifinder",
          "Port": "5062"
        },
        {
          "Device": "EV-601",
          "Protocol": "minifinder",
          "Port": "5062"
        },
        {
          "Device": "EV-602",
          "Protocol": "minifinder",
          "Port": "5062"
        },
        {
          "Device": "EV-603",
          "Protocol": "minifinder",
          "Port": "5062"
        },
        {
          "Device": "EV-606",
          "Protocol": "minifinder",
          "Port": "5062"
        },
        {
          "Device": "EV_07P",
          "Protocol": "minifinder",
          "Port": "5062"
        },
        {
          "Device": "GPS668",
          "Protocol": "minifinder",
          "Port": "5062"
        },
        {
          "Device": "SaR-mini",
          "Protocol": "minifinder",
          "Port": "5062"
        },
        {
          "Device": "TE-207",
          "Protocol": "minifinder",
          "Port": "5062"
        },
        {
          "Device": "TE200",
          "Protocol": "minifinder",
          "Port": "5062"
        },
        {
          "Device": "HI-605X",
          "Protocol": "haicom",
          "Port": "5063"
        },
        {
          "Device": "HI-604X",
          "Protocol": "haicom",
          "Port": "5063"
        },
        {
          "Device": "HI-603X",
          "Protocol": "haicom",
          "Port": "5063"
        },
        {
          "Device": "HI-602X",
          "Protocol": "haicom",
          "Port": "5063"
        },
        {
          "Device": "HI-602",
          "Protocol": "haicom",
          "Port": "5063"
        },
        {
          "Device": "HI-603",
          "Protocol": "haicom",
          "Port": "5063"
        },
        {
          "Device": "HI-604",
          "Protocol": "haicom",
          "Port": "5063"
        },
        {
          "Device": "TK115",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "TK116",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "GOT08",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "GOT10",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "GPT06",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "K6",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "K9",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "TK119",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "TK121",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "TK119-3G",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "TK119-T",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "GPT09",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "GPT12",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "GPT12-L",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "GPT26",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "GPT06-3G",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "GPT18",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "K20",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "K30",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "GM06NW",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "WTR1-T",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "Goome",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "TK319-L",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "TK419-4G",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "GPT15",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "ET301",
          "Protocol": "eelink",
          "Port": "5064"
        },
        {
          "Device": "BOXoptions+",
          "Protocol": "box",
          "Port": "5065"
        },
        {
          "Device": "BOXtracker",
          "Protocol": "box",
          "Port": "5065"
        },
        {
          "Device": "BOXsolo",
          "Protocol": "box",
          "Port": "5065"
        },
        {
          "Device": "BOX iSpot",
          "Protocol": "box",
          "Port": "5065"
        },
        {
          "Device": "Freedom PT-9",
          "Protocol": "freedom",
          "Port": "5066"
        },
        {
          "Device": "Freedom PT-10",
          "Protocol": "freedom",
          "Port": "5066"
        },
        {
          "Device": "Telic SBC-AVL",
          "Protocol": "telic",
          "Port": "5067"
        },
        {
          "Device": "Telic SBC3",
          "Protocol": "telic",
          "Port": "5067"
        },
        {
          "Device": "SBC3",
          "Protocol": "telic",
          "Port": "5067"
        },
        {
          "Device": "Picotrack",
          "Protocol": "telic",
          "Port": "5067"
        },
        {
          "Device": "Picotrack IP69 K",
          "Protocol": "telic",
          "Port": "5067"
        },
        {
          "Device": "Picotrack Endurance Primary",
          "Protocol": "telic",
          "Port": "5067"
        },
        {
          "Device": "Picotrack Endurance Rechargeable",
          "Protocol": "telic",
          "Port": "5067"
        },
        {
          "Device": "Trackbox",
          "Protocol": "trackbox",
          "Port": "5068"
        },
        {
          "Device": "84 VT",
          "Protocol": "visiontek",
          "Port": "5069"
        },
        {
          "Device": "86 VT",
          "Protocol": "visiontek",
          "Port": "5069"
        },
        {
          "Device": "VT87",
          "Protocol": "visiontek",
          "Port": "5069"
        },
        {
          "Device": "Orion ET-100",
          "Protocol": "orion",
          "Port": "5070"
        },
        {
          "Device": "Orion OBDtrac",
          "Protocol": "orion",
          "Port": "5070"
        },
        {
          "Device": "BD-2012",
          "Protocol": "orion",
          "Port": "5070"
        },
        {
          "Device": "BD-3112",
          "Protocol": "orion",
          "Port": "5070"
        },
        {
          "Device": "SLS-00886",
          "Protocol": "riti",
          "Port": "5071"
        },
        {
          "Device": "SLS-012SF",
          "Protocol": "riti",
          "Port": "5071"
        },
        {
          "Device": "TYN_886",
          "Protocol": "riti",
          "Port": "5071"
        },
        {
          "Device": "T370",
          "Protocol": "ulbotech",
          "Port": "5072"
        },
        {
          "Device": "T360",
          "Protocol": "ulbotech",
          "Port": "5072"
        },
        {
          "Device": "T303",
          "Protocol": "ulbotech",
          "Port": "5072"
        },
        {
          "Device": "T301",
          "Protocol": "ulbotech",
          "Port": "5072"
        },
        {
          "Device": "T376",
          "Protocol": "ulbotech",
          "Port": "5072"
        },
        {
          "Device": "T373B",
          "Protocol": "ulbotech",
          "Port": "5072"
        },
        {
          "Device": "T373A",
          "Protocol": "ulbotech",
          "Port": "5072"
        },
        {
          "Device": "T371",
          "Protocol": "ulbotech",
          "Port": "5072"
        },
        {
          "Device": "T366",
          "Protocol": "ulbotech",
          "Port": "5072"
        },
        {
          "Device": "T363B",
          "Protocol": "ulbotech",
          "Port": "5072"
        },
        {
          "Device": "T363A",
          "Protocol": "ulbotech",
          "Port": "5072"
        },
        {
          "Device": "T361",
          "Protocol": "ulbotech",
          "Port": "5072"
        },
        {
          "Device": "T23",
          "Protocol": "tramigo",
          "Port": "5073"
        },
        {
          "Device": "TR-900",
          "Protocol": "tr900",
          "Port": "5074"
        },
        {
          "Device": "NEO1",
          "Protocol": "tr900",
          "Port": "5074"
        },
        {
          "Device": "NEO2",
          "Protocol": "tr900",
          "Port": "5074"
        },
        {
          "Device": "Ardi 01",
          "Protocol": "ardi01",
          "Port": "5075"
        },
        {
          "Device": "XT013",
          "Protocol": "xt013",
          "Port": "5076"
        },
        {
          "Device": "AutoFon D",
          "Protocol": "autofon",
          "Port": "5077"
        },
        {
          "Device": "AutoFon SE",
          "Protocol": "autofon",
          "Port": "5077"
        },
        {
          "Device": "AutoFon SE+",
          "Protocol": "autofon",
          "Port": "5077"
        },
        {
          "Device": "StarLine M10",
          "Protocol": "autofon",
          "Port": "5077"
        },
        {
          "Device": "StarLine M11",
          "Protocol": "autofon",
          "Port": "5077"
        },
        {
          "Device": "StarLine M16",
          "Protocol": "autofon",
          "Port": "5077"
        },
        {
          "Device": "StarLine M17",
          "Protocol": "autofon",
          "Port": "5077"
        },
        {
          "Device": "G3A",
          "Protocol": "gosafe",
          "Port": "5078"
        },
        {
          "Device": "G3S",
          "Protocol": "gosafe",
          "Port": "5078"
        },
        {
          "Device": "G6S",
          "Protocol": "gosafe",
          "Port": "5078"
        },
        {
          "Device": "G1S",
          "Protocol": "gosafe",
          "Port": "5078"
        },
        {
          "Device": "G737",
          "Protocol": "gosafe",
          "Port": "5078"
        },
        {
          "Device": "G2P",
          "Protocol": "gosafe",
          "Port": "5078"
        },
        {
          "Device": "G717",
          "Protocol": "gosafe",
          "Port": "5078"
        },
        {
          "Device": "G777",
          "Protocol": "gosafe",
          "Port": "5078"
        },
        {
          "Device": "G91I",
          "Protocol": "gosafe",
          "Port": "5078"
        },
        {
          "Device": "G79",
          "Protocol": "gosafe",
          "Port": "5078"
        },
        {
          "Device": "G797",
          "Protocol": "gosafe",
          "Port": "5078"
        },
        {
          "Device": "G797W",
          "Protocol": "gosafe",
          "Port": "5078"
        },
        {
          "Device": "GS16",
          "Protocol": "gosafe",
          "Port": "5078"
        },
        {
          "Device": "BCE FM Light",
          "Protocol": "bce",
          "Port": "5080"
        },
        {
          "Device": "BCE FM Light+",
          "Protocol": "bce",
          "Port": "5080"
        },
        {
          "Device": "BCE FM Blue",
          "Protocol": "bce",
          "Port": "5080"
        },
        {
          "Device": "BCE FM Blue+",
          "Protocol": "bce",
          "Port": "5080"
        },
        {
          "Device": "FM 500Q",
          "Protocol": "bce",
          "Port": "5080"
        },
        {
          "Device": "XT-2000G",
          "Protocol": "xirgo",
          "Port": "5081"
        },
        {
          "Device": "XT-2060G",
          "Protocol": "xirgo",
          "Port": "5081"
        },
        {
          "Device": "XT-2050C",
          "Protocol": "xirgo",
          "Port": "5081"
        },
        {
          "Device": "XT-2150",
          "Protocol": "xirgo",
          "Port": "5081"
        },
        {
          "Device": "XT-2150G",
          "Protocol": "xirgo",
          "Port": "5081"
        },
        {
          "Device": "XT-2160G",
          "Protocol": "xirgo",
          "Port": "5081"
        },
        {
          "Device": "XT-2150C",
          "Protocol": "xirgo",
          "Port": "5081"
        },
        {
          "Device": "XT-3200",
          "Protocol": "xirgo",
          "Port": "5081"
        },
        {
          "Device": "XT-4500G",
          "Protocol": "xirgo",
          "Port": "5081"
        },
        {
          "Device": "XT-4560G",
          "Protocol": "xirgo",
          "Port": "5081"
        },
        {
          "Device": "XT-4550C",
          "Protocol": "xirgo",
          "Port": "5081"
        },
        {
          "Device": "XT-4700",
          "Protocol": "xirgo",
          "Port": "5081"
        },
        {
          "Device": "XT-4760",
          "Protocol": "xirgo",
          "Port": "5081"
        },
        {
          "Device": "XT-4750C",
          "Protocol": "xirgo",
          "Port": "5081"
        },
        {
          "Device": "XT-4860G",
          "Protocol": "xirgo",
          "Port": "5081"
        },
        {
          "Device": "XT-4850C",
          "Protocol": "xirgo",
          "Port": "5081"
        },
        {
          "Device": "XT-5000",
          "Protocol": "xirgo",
          "Port": "5081"
        },
        {
          "Device": "XT-5060",
          "Protocol": "xirgo",
          "Port": "5081"
        },
        {
          "Device": "XT-5050C",
          "Protocol": "xirgo",
          "Port": "5081"
        },
        {
          "Device": "XT-6200",
          "Protocol": "xirgo",
          "Port": "5081"
        },
        {
          "Device": "XT-6260",
          "Protocol": "xirgo",
          "Port": "5081"
        },
        {
          "Device": "ST7200",
          "Protocol": "xirgo",
          "Port": "5081"
        },
        {
          "Device": "ATU-620",
          "Protocol": "calamp",
          "Port": "5082"
        },
        {
          "Device": "LMU-1100 Series",
          "Protocol": "calamp",
          "Port": "5082"
        },
        {
          "Device": "TTU-700 Series",
          "Protocol": "calamp",
          "Port": "5082"
        },
        {
          "Device": "TTU-1200 Series",
          "Protocol": "calamp",
          "Port": "5082"
        },
        {
          "Device": "TTU-2820 Series",
          "Protocol": "calamp",
          "Port": "5082"
        },
        {
          "Device": "LMU-200 Series",
          "Protocol": "calamp",
          "Port": "5082"
        },
        {
          "Device": "LMU-300 Series",
          "Protocol": "calamp",
          "Port": "5082"
        },
        {
          "Device": "LMU-328",
          "Protocol": "calamp",
          "Port": "5082"
        },
        {
          "Device": "LMU-400 Series",
          "Protocol": "calamp",
          "Port": "5082"
        },
        {
          "Device": "LMU-700 Series",
          "Protocol": "calamp",
          "Port": "5082"
        },
        {
          "Device": "LMU-800 Series",
          "Protocol": "calamp",
          "Port": "5082"
        },
        {
          "Device": "LMU-900 Series",
          "Protocol": "calamp",
          "Port": "5082"
        },
        {
          "Device": "LMU-1100 Series",
          "Protocol": "calamp",
          "Port": "5082"
        },
        {
          "Device": "LMU-1200 Series",
          "Protocol": "calamp",
          "Port": "5082"
        },
        {
          "Device": "LMU-2000 Series",
          "Protocol": "calamp",
          "Port": "5082"
        },
        {
          "Device": "LMU-2100 Series",
          "Protocol": "calamp",
          "Port": "5082"
        },
        {
          "Device": "LMU-2600 Series",
          "Protocol": "calamp",
          "Port": "5082"
        },
        {
          "Device": "LMU-2620",
          "Protocol": "calamp",
          "Port": "5082"
        },
        {
          "Device": "LMU-2700 Series",
          "Protocol": "calamp",
          "Port": "5082"
        },
        {
          "Device": "LMU-2720",
          "Protocol": "calamp",
          "Port": "5082"
        },
        {
          "Device": "LMU-3030",
          "Protocol": "calamp",
          "Port": "5082"
        },
        {
          "Device": "LMU-4200 Series",
          "Protocol": "calamp",
          "Port": "5082"
        },
        {
          "Device": "LMU-4520 Series",
          "Protocol": "calamp",
          "Port": "5082"
        },
        {
          "Device": "LMU-5000 Series",
          "Protocol": "calamp",
          "Port": "5082"
        },
        {
          "Device": "MDT-7",
          "Protocol": "calamp",
          "Port": "5082"
        },
        {
          "Device": "MTX-Tunnel GPS",
          "Protocol": "mtx",
          "Port": "5083"
        },
        {
          "Device": "DS520",
          "Protocol": "tytan",
          "Port": "5084"
        },
        {
          "Device": "DS530",
          "Protocol": "tytan",
          "Port": "5084"
        },
        {
          "Device": "DS540",
          "Protocol": "tytan",
          "Port": "5084"
        },
        {
          "Device": "TZ-AVL301",
          "Protocol": "avl301",
          "Port": "5085"
        },
        {
          "Device": "IDD-213G",
          "Protocol": "castel",
          "Port": "5086"
        },
        {
          "Device": "IDD-212GL",
          "Protocol": "castel",
          "Port": "5086"
        },
        {
          "Device": "IDD-212B",
          "Protocol": "castel",
          "Port": "5086"
        },
        {
          "Device": "IDD-213T",
          "Protocol": "castel",
          "Port": "5086"
        },
        {
          "Device": "IDD-213N/E",
          "Protocol": "castel",
          "Port": "5086"
        },
        {
          "Device": "IDD-218G",
          "Protocol": "castel",
          "Port": "5086"
        },
        {
          "Device": "HT-196R",
          "Protocol": "castel",
          "Port": "5086"
        },
        {
          "Device": "HT-192",
          "Protocol": "castel",
          "Port": "5086"
        },
        {
          "Device": "MPIP-618",
          "Protocol": "castel",
          "Port": "5086"
        },
        {
          "Device": "MPIP-619",
          "Protocol": "castel",
          "Port": "5086"
        },
        {
          "Device": "MPIP-620",
          "Protocol": "castel",
          "Port": "5086"
        },
        {
          "Device": "PT-718",
          "Protocol": "castel",
          "Port": "5086"
        },
        {
          "Device": "PT-690",
          "Protocol": "castel",
          "Port": "5086"
        },
        {
          "Device": "SAT-802",
          "Protocol": "castel",
          "Port": "5086"
        },
        {
          "Device": "MXT-142",
          "Protocol": "mxt",
          "Port": "5087"
        },
        {
          "Device": "MTC-700",
          "Protocol": "mxt",
          "Port": "5087"
        },
        {
          "Device": "MTC-780",
          "Protocol": "mxt",
          "Port": "5087"
        },
        {
          "Device": "MXT-140",
          "Protocol": "mxt",
          "Port": "5087"
        },
        {
          "Device": "MXT-141",
          "Protocol": "mxt",
          "Port": "5087"
        },
        {
          "Device": "IDP-780",
          "Protocol": "mxt",
          "Port": "5087"
        },
        {
          "Device": "MXT-100",
          "Protocol": "mxt",
          "Port": "5087"
        },
        {
          "Device": "MXT-101",
          "Protocol": "mxt",
          "Port": "5087"
        },
        {
          "Device": "MX-100",
          "Protocol": "mxt",
          "Port": "5087"
        },
        {
          "Device": "TD-50",
          "Protocol": "mxt",
          "Port": "5087"
        },
        {
          "Device": "WT-110",
          "Protocol": "mxt",
          "Port": "5087"
        },
        {
          "Device": "TD-60",
          "Protocol": "mxt",
          "Port": "5087"
        },
        {
          "Device": "G-100",
          "Protocol": "mxt",
          "Port": "5087"
        },
        {
          "Device": "i-MXT",
          "Protocol": "mxt",
          "Port": "5087"
        },
        {
          "Device": "Cityeasy 520",
          "Protocol": "cityeasy",
          "Port": "5088"
        },
        {
          "Device": "Cityeasy 009",
          "Protocol": "cityeasy",
          "Port": "5088"
        },
        {
          "Device": "Cityeasy 006",
          "Protocol": "cityeasy",
          "Port": "5088"
        },
        {
          "Device": "Cityeasy 007",
          "Protocol": "cityeasy",
          "Port": "5088"
        },
        {
          "Device": "Cityeasy 202",
          "Protocol": "cityeasy",
          "Port": "5088"
        },
        {
          "Device": "Cityeasy 306",
          "Protocol": "cityeasy",
          "Port": "5088"
        },
        {
          "Device": "Cityeasy 100",
          "Protocol": "cityeasy",
          "Port": "5088"
        },
        {
          "Device": "Cityeasy 200",
          "Protocol": "cityeasy",
          "Port": "5088"
        },
        {
          "Device": "Cityeasy 302",
          "Protocol": "cityeasy",
          "Port": "5088"
        },
        {
          "Device": "Cityeasy 008",
          "Protocol": "cityeasy",
          "Port": "5088"
        },
        {
          "Device": "Cityeasy 201",
          "Protocol": "cityeasy",
          "Port": "5088"
        },
        {
          "Device": "S101+",
          "Protocol": "aquila",
          "Port": "5089"
        },
        {
          "Device": "S101",
          "Protocol": "aquila",
          "Port": "5089"
        },
        {
          "Device": "U101V1+",
          "Protocol": "aquila",
          "Port": "5089"
        },
        {
          "Device": "U101",
          "Protocol": "aquila",
          "Port": "5089"
        },
        {
          "Device": "U101v1",
          "Protocol": "aquila",
          "Port": "5089"
        },
        {
          "Device": "MeSafe",
          "Protocol": "aquila",
          "Port": "5089"
        },
        {
          "Device": "Stay Safe",
          "Protocol": "aquila",
          "Port": "5089"
        },
        {
          "Device": "Lommy Pro",
          "Protocol": "flextrack",
          "Port": "5090"
        },
        {
          "Device": "Lommy Personal",
          "Protocol": "flextrack",
          "Port": "5090"
        },
        {
          "Device": "Lommy Eye",
          "Protocol": "flextrack",
          "Port": "5090"
        },
        {
          "Device": "BlackKite Fleet",
          "Protocol": "blackkite",
          "Port": "5091"
        },
        {
          "Device": "BK-FLT-P1",
          "Protocol": "blackkite",
          "Port": "5091"
        },
        {
          "Device": "ADM100",
          "Protocol": "adm",
          "Port": "5092"
        },
        {
          "Device": "ADM101",
          "Protocol": "adm",
          "Port": "5092"
        },
        {
          "Device": "ADM300",
          "Protocol": "adm",
          "Port": "5092"
        },
        {
          "Device": "ADM700",
          "Protocol": "adm",
          "Port": "5092"
        },
        {
          "Device": "ADM700 3G",
          "Protocol": "adm",
          "Port": "5092"
        },
        {
          "Device": "ADM703 3G",
          "Protocol": "adm",
          "Port": "5092"
        },
        {
          "Device": "ADM710",
          "Protocol": "adm",
          "Port": "5092"
        },
        {
          "Device": "ADM007",
          "Protocol": "adm",
          "Port": "5092"
        },
        {
          "Device": "ADM333",
          "Protocol": "adm",
          "Port": "5092"
        },
        {
          "Device": "JM09",
          "Protocol": "watch",
          "Port": "5093"
        },
        {
          "Device": "TK STAR STICK",
          "Protocol": "watch",
          "Port": "5093"
        },
        {
          "Device": "A9 GPS tracker",
          "Protocol": "watch",
          "Port": "5093"
        },
        {
          "Device": "T8S",
          "Protocol": "watch",
          "Port": "5093"
        },
        {
          "Device": "Astro 120",
          "Protocol": "watch",
          "Port": "5093"
        },
        {
          "Device": "RomboGPS",
          "Protocol": "watch",
          "Port": "5093"
        },
        {
          "Device": "TK-905",
          "Protocol": "watch",
          "Port": "5093"
        },
        {
          "Device": "TK915",
          "Protocol": "watch",
          "Port": "5093"
        },
        {
          "Device": "RF-V47",
          "Protocol": "watch",
          "Port": "5093"
        },
        {
          "Device": "TKStar TK935",
          "Protocol": "watch",
          "Port": "5093"
        },
        {
          "Device": "T8808",
          "Protocol": "t800x",
          "Port": "5094"
        },
        {
          "Device": "T8803 PRO",
          "Protocol": "t800x",
          "Port": "5094"
        },
        {
          "Device": "T8806",
          "Protocol": "t800x",
          "Port": "5094"
        },
        {
          "Device": "T8805",
          "Protocol": "t800x",
          "Port": "5094"
        },
        {
          "Device": "T8603",
          "Protocol": "t800x",
          "Port": "5094"
        },
        {
          "Device": "T800X",
          "Protocol": "t800x",
          "Port": "5094"
        },
        {
          "Device": "T880X",
          "Protocol": "t800x",
          "Port": "5094"
        },
        {
          "Device": "U-Pro mini",
          "Protocol": "upro",
          "Port": "5095"
        },
        {
          "Device": "AURO Comfort 1060",
          "Protocol": "auro",
          "Port": "5096"
        },
        {
          "Device": "Disha 9310",
          "Protocol": "disha",
          "Port": "5097"
        },
        {
          "Device": "Disha 9320",
          "Protocol": "disha",
          "Port": "5097"
        },
        {
          "Device": "Disha 9330",
          "Protocol": "disha",
          "Port": "5097"
        },
        {
          "Device": "TD 300",
          "Protocol": "disha",
          "Port": "5097"
        },
        {
          "Device": "VT100",
          "Protocol": "thinkrace",
          "Port": "5098"
        },
        {
          "Device": "PathAway",
          "Protocol": "pathaway",
          "Port": "5099"
        },
        {
          "Device": "ARNAVI",
          "Protocol": "arnavi",
          "Port": "5100"
        },
        {
          "Device": "СН-5707",
          "Protocol": "nvs",
          "Port": "5101"
        },
        {
          "Device": "NVS-RTK-M",
          "Protocol": "nvs",
          "Port": "5101"
        },
        {
          "Device": "Kenji KJ-8501",
          "Protocol": "kenji",
          "Port": "5102"
        },
        {
          "Device": "AT200",
          "Protocol": "astra",
          "Port": "5103"
        },
        {
          "Device": "Homtecs H20",
          "Protocol": "homtecs",
          "Port": "5104"
        },
        {
          "Device": "Fox Easy AVL",
          "Protocol": "fox",
          "Port": "5105"
        },
        {
          "Device": "Fox Lite AVL",
          "Protocol": "fox",
          "Port": "5105"
        },
        {
          "Device": "Fox Advanced AVL",
          "Protocol": "fox",
          "Port": "5105"
        },
        {
          "Device": "GNX-2",
          "Protocol": "gnx",
          "Port": "5106"
        },
        {
          "Device": "GNX-3",
          "Protocol": "gnx",
          "Port": "5106"
        },
        {
          "Device": "RX-9",
          "Protocol": "arknav",
          "Port": "5107"
        },
        {
          "Device": "RX-8W",
          "Protocol": "arknav",
          "Port": "5107"
        },
        {
          "Device": "RV-8",
          "Protocol": "arknav",
          "Port": "5107"
        },
        {
          "Device": "R-9PRO",
          "Protocol": "arknav",
          "Port": "5107"
        },
        {
          "Device": "R-9W",
          "Protocol": "arknav",
          "Port": "5107"
        },
        {
          "Device": "IR-7",
          "Protocol": "arknav",
          "Port": "5107"
        },
        {
          "Device": "CT-X8",
          "Protocol": "arknav",
          "Port": "5107"
        },
        {
          "Device": "AT-5000",
          "Protocol": "arknav",
          "Port": "5107"
        },
        {
          "Device": "AT-04",
          "Protocol": "arknav",
          "Port": "5107"
        },
        {
          "Device": "AT-9000",
          "Protocol": "arknav",
          "Port": "5107"
        },
        {
          "Device": "DX-3",
          "Protocol": "arknav",
          "Port": "5107"
        },
        {
          "Device": "Supermate D-series",
          "Protocol": "supermate",
          "Port": "5108"
        },
        {
          "Device": "D11",
          "Protocol": "supermate",
          "Port": "5108"
        },
        {
          "Device": "Appello 4P",
          "Protocol": "appello",
          "Port": "5109"
        },
        {
          "Device": "IDPL",
          "Protocol": "idpl",
          "Port": "5110"
        },
        {
          "Device": "HS-500P",
          "Protocol": "huasheng",
          "Port": "5111"
        },
        {
          "Device": "HS-300V",
          "Protocol": "huasheng",
          "Port": "5111"
        },
        {
          "Device": "HS-400",
          "Protocol": "huasheng",
          "Port": "5111"
        },
        {
          "Device": "HS-1200",
          "Protocol": "huasheng",
          "Port": "5111"
        },
        {
          "Device": "HS-3000G",
          "Protocol": "huasheng",
          "Port": "5111"
        },
        {
          "Device": "HS-800W",
          "Protocol": "huasheng",
          "Port": "5111"
        },
        {
          "Device": "HS-2000C",
          "Protocol": "huasheng",
          "Port": "5111"
        },
        {
          "Device": "HS-2000G",
          "Protocol": "huasheng",
          "Port": "5111"
        },
        {
          "Device": "L100",
          "Protocol": "granit",
          "Port": "5112"
        },
        {
          "Device": "Granit Navigator 4",
          "Protocol": "granit",
          "Port": "5113"
        },
        {
          "Device": "Granit Navigator 5",
          "Protocol": "granit",
          "Port": "5113"
        },
        {
          "Device": "CR2000",
          "Protocol": "carcell",
          "Port": "5114"
        },
        {
          "Device": "CR250",
          "Protocol": "carcell",
          "Port": "5114"
        },
        {
          "Device": "RV-M7",
          "Protocol": "raveon",
          "Port": "5117"
        },
        {
          "Device": "CradlePoint",
          "Protocol": "cradlepoint",
          "Port": "5118"
        },
        {
          "Device": "Arknav CT-X8",
          "Protocol": "arknavx8",
          "Port": "5119"
        },
        {
          "Device": "AutoGrade",
          "Protocol": "autograde",
          "Port": "5120"
        },
        {
          "Device": "AR-2GM",
          "Protocol": "oigo",
          "Port": "5121"
        },
        {
          "Device": "AR-3HU",
          "Protocol": "oigo",
          "Port": "5121"
        },
        {
          "Device": "AR-2CX",
          "Protocol": "oigo",
          "Port": "5121"
        },
        {
          "Device": "JP-KORJAR",
          "Protocol": "jpkorjar",
          "Port": "5122"
        },
        {
          "Device": "cGuard Personal",
          "Protocol": "cguard",
          "Port": "5123"
        },
        {
          "Device": "cGuard Atom",
          "Protocol": "cguard",
          "Port": "5123"
        },
        {
          "Device": "cGuard OBD",
          "Protocol": "cguard",
          "Port": "5123"
        },
        {
          "Device": "cGuard Litom",
          "Protocol": "cguard",
          "Port": "5123"
        },
        {
          "Device": "cGuard Beacon",
          "Protocol": "cguard",
          "Port": "5123"
        },
        {
          "Device": "A100",
          "Protocol": "fifotrack",
          "Port": "5124"
        },
        {
          "Device": "A200",
          "Protocol": "fifotrack",
          "Port": "5124"
        },
        {
          "Device": "A300",
          "Protocol": "fifotrack",
          "Port": "5124"
        },
        {
          "Device": "S20",
          "Protocol": "fifotrack",
          "Port": "5124"
        },
        {
          "Device": "S30",
          "Protocol": "fifotrack",
          "Port": "5124"
        },
        {
          "Device": "S50",
          "Protocol": "fifotrack",
          "Port": "5124"
        },
        {
          "Device": "S60",
          "Protocol": "fifotrack",
          "Port": "5124"
        },
        {
          "Device": "A600",
          "Protocol": "fifotrack",
          "Port": "5124"
        },
        {
          "Device": "A700",
          "Protocol": "fifotrack",
          "Port": "5124"
        },
        {
          "Device": "Q1",
          "Protocol": "fifotrack",
          "Port": "5124"
        },
        {
          "Device": "ET800E",
          "Protocol": "extremtrac",
          "Port": "5126"
        },
        {
          "Device": "TrakMate",
          "Protocol": "trakmate",
          "Port": "5127"
        },
        {
          "Device": "AT2000",
          "Protocol": "at2000",
          "Port": "5128"
        },
        {
          "Device": "Maestro MT-01",
          "Protocol": "maestro",
          "Port": "5129"
        },
        {
          "Device": "AIVDM/AIVDO AIS",
          "Protocol": "ais",
          "Port": "5130"
        },
        {
          "Device": "GT-30",
          "Protocol": "gt30",
          "Port": "5131"
        },
        {
          "Device": "TrackMiGaddi",
          "Protocol": "tmg",
          "Port": "5132"
        },
        {
          "Device": "TMG188",
          "Protocol": "tmg",
          "Port": "5132"
        },
        {
          "Device": "TC85D",
          "Protocol": "pretrace",
          "Port": "5133"
        },
        {
          "Device": "TC56",
          "Protocol": "pretrace",
          "Port": "5133"
        },
        {
          "Device": "TC55",
          "Protocol": "pretrace",
          "Port": "5133"
        },
        {
          "Device": "TC80",
          "Protocol": "pretrace",
          "Port": "5133"
        },
        {
          "Device": "TC85",
          "Protocol": "pretrace",
          "Port": "5133"
        },
        {
          "Device": "Pricol",
          "Protocol": "pricol",
          "Port": "5134"
        },
        {
          "Device": "SIWI",
          "Protocol": "siwi",
          "Port": "5135"
        },
        {
          "Device": "StarLink Asset",
          "Protocol": "starlink",
          "Port": "5136"
        },
        {
          "Device": "StarLink Trailer",
          "Protocol": "starlink",
          "Port": "5136"
        },
        {
          "Device": "Starlink TrackerBT",
          "Protocol": "starlink",
          "Port": "5136"
        },
        {
          "Device": "StarLink Tracker",
          "Protocol": "starlink",
          "Port": "5136"
        },
        {
          "Device": "StarLink TrackerSF",
          "Protocol": "starlink",
          "Port": "5136"
        },
        {
          "Device": "StarLink TrackerCAN",
          "Protocol": "starlink",
          "Port": "5136"
        },
        {
          "Device": "StarLink SVR",
          "Protocol": "starlink",
          "Port": "5136"
        },
        {
          "Device": "StarLink ToGo",
          "Protocol": "starlink",
          "Port": "5136"
        },
        {
          "Device": "StarLink Voice",
          "Protocol": "starlink",
          "Port": "5136"
        },
        {
          "Device": "StarLink eConnect",
          "Protocol": "starlink",
          "Port": "5136"
        },
        {
          "Device": "StarLink eBike",
          "Protocol": "starlink",
          "Port": "5136"
        },
        {
          "Device": "StarLink RoadBuddy",
          "Protocol": "starlink",
          "Port": "5136"
        },
        {
          "Device": "G100",
          "Protocol": "dmt",
          "Port": "5137"
        },
        {
          "Device": "G60",
          "Protocol": "dmt",
          "Port": "5137"
        },
        {
          "Device": "G52S",
          "Protocol": "dmt",
          "Port": "5137"
        },
        {
          "Device": "DART",
          "Protocol": "dmt",
          "Port": "5137"
        },
        {
          "Device": "OYSTER",
          "Protocol": "dmt",
          "Port": "5137"
        },
        {
          "Device": "Sting",
          "Protocol": "dmt",
          "Port": "5137"
        },
        {
          "Device": "Xirgo XT2400 Series",
          "Protocol": "xt2400",
          "Port": "5138"
        },
        {
          "Device": "Xirgo XT6300 Series",
          "Protocol": "xt2400",
          "Port": "5138"
        },
        {
          "Device": "REMORA",
          "Protocol": "dmthttp",
          "Port": "5139"
        },
        {
          "Device": "AE1",
          "Protocol": "alematics",
          "Port": "5140"
        },
        {
          "Device": "AE1-W",
          "Protocol": "alematics",
          "Port": "5140"
        },
        {
          "Device": "AM1-S",
          "Protocol": "alematics",
          "Port": "5140"
        },
        {
          "Device": "AM1-W",
          "Protocol": "alematics",
          "Port": "5140"
        },
        {
          "Device": "AM1-S(V)",
          "Protocol": "alematics",
          "Port": "5140"
        },
        {
          "Device": "AM1-W(V)",
          "Protocol": "alematics",
          "Port": "5140"
        },
        {
          "Device": "AM3-S",
          "Protocol": "alematics",
          "Port": "5140"
        },
        {
          "Device": "AM3-W",
          "Protocol": "alematics",
          "Port": "5140"
        },
        {
          "Device": "AM3-S(V)",
          "Protocol": "alematics",
          "Port": "5140"
        },
        {
          "Device": "AM3-W(V)",
          "Protocol": "alematics",
          "Port": "5140"
        },
        {
          "Device": "GPS056",
          "Protocol": "gps056",
          "Port": "5141"
        },
        {
          "Device": "FT-3150",
          "Protocol": "flexcomm",
          "Port": "5142"
        },
        {
          "Device": "VT200",
          "Protocol": "vt200",
          "Port": "5143"
        },
        {
          "Device": "VT400",
          "Protocol": "vt200",
          "Port": "5143"
        },
        {
          "Device": "OwnTracks",
          "Protocol": "owntracks",
          "Port": "5144"
        },
        {
          "Device": "VTFMS",
          "Protocol": "vtfms",
          "Port": "5145"
        },
        {
          "Device": "TLV",
          "Protocol": "tlv",
          "Port": "5146"
        },
        {
          "Device": "ES610",
          "Protocol": "esky",
          "Port": "5147"
        },
        {
          "Device": "GNX-20",
          "Protocol": "genx",
          "Port": "5148"
        },
        {
          "Device": "GNX-6",
          "Protocol": "genx",
          "Port": "5148"
        },
        {
          "Device": "GNX-5P",
          "Protocol": "genx",
          "Port": "5148"
        },
        {
          "Device": "GNX-3",
          "Protocol": "genx",
          "Port": "5148"
        },
        {
          "Device": "GNX-10L",
          "Protocol": "genx",
          "Port": "5148"
        },
        {
          "Device": "GNX-10",
          "Protocol": "genx",
          "Port": "5148"
        },
        {
          "Device": "Flespi",
          "Protocol": "flespi",
          "Port": "5149"
        },
        {
          "Device": "D-WAY",
          "Protocol": "dway",
          "Port": "5150"
        },
        {
          "Device": "Recoda M610",
          "Protocol": "recoda",
          "Port": "5151"
        },
        {
          "Device": "OKO-S2",
          "Protocol": "oko",
          "Port": "5152"
        },
        {
          "Device": "OKO-E",
          "Protocol": "oko",
          "Port": "5152"
        },
        {
          "Device": "OKO-NAVI",
          "Protocol": "oko",
          "Port": "5152"
        },
        {
          "Device": "IVT401",
          "Protocol": "ivt401",
          "Port": "5153"
        },
        {
          "Device": "TL500",
          "Protocol": "ivt401",
          "Port": "5153"
        },
        {
          "Device": "TL1000",
          "Protocol": "ivt401",
          "Port": "5153"
        },
        {
          "Device": "AUTOCOP",
          "Protocol": "ivt401",
          "Port": "5153"
        },
        {
          "Device": "TL3000",
          "Protocol": "ivt401",
          "Port": "5153"
        },
        {
          "Device": "TL500",
          "Protocol": "ivt401",
          "Port": "5153"
        },
        {
          "Device": "Oyster Sigfox",
          "Protocol": "sigfox",
          "Port": "5154"
        },
        {
          "Device": "T57",
          "Protocol": "t57",
          "Port": "5155"
        },
        {
          "Device": "SPOT",
          "Protocol": "spot",
          "Port": "5156"
        },
        {
          "Device": "SPOT GEN3",
          "Protocol": "spot",
          "Port": "5156"
        },
        {
          "Device": "M2C2020",
          "Protocol": "m2c",
          "Port": "5157"
        },
        {
          "Device": "GlobeKeeper",
          "Protocol": "globekeeper",
          "Port": "5158"
        },
        {
          "Device": "OpenGTS",
          "Protocol": "opengts",
          "Port": "5159"
        },
        {
          "Device": "GPSLogger",
          "Protocol": "opengts",
          "Port": "5159"
        },
        {
          "Device": "Cautela",
          "Protocol": "cautela",
          "Port": "5160"
        },
        {
          "Device": "Motorola HF",
          "Protocol": "cautela",
          "Port": "5160"
        },
        {
          "Device": "Continental Vehicle Tracker",
          "Protocol": "continental",
          "Port": "5161"
        },
        {
          "Device": "EGTS (Era-Glonass)",
          "Protocol": "egts",
          "Port": "5162"
        },
        {
          "Device": "ROBOT-UPS",
          "Protocol": "robotrack",
          "Port": "5163"
        },
        {
          "Device": "ROBOT-GPS",
          "Protocol": "robotrack",
          "Port": "5163"
        },
        {
          "Device": "ROBOTRACK",
          "Protocol": "robotrack",
          "Port": "5163"
        },
        {
          "Device": "PT60",
          "Protocol": "pt60",
          "Port": "5164"
        },
        {
          "Device": "Telemax",
          "Protocol": "telemax",
          "Port": "5165"
        },
        {
          "Device": "Micro Genie",
          "Protocol": "sabertek",
          "Port": "5166"
        },
        {
          "Device": "Wialon Retranslator",
          "Protocol": "retranslator",
          "Port": "5167"
        },
        {
          "Device": "Vias700",
          "Protocol": "svias",
          "Port": "5168"
        },
        {
          "Device": "eSeal",
          "Protocol": "eseal",
          "Port": "5169"
        },
        {
          "Device": "Freematics ONE",
          "Protocol": "freematics",
          "Port": "5170"
        },
        {
          "Device": "AT35",
          "Protocol": "avema",
          "Port": "5171"
        },
        {
          "Device": "AT35 3G",
          "Protocol": "avema",
          "Port": "5171"
        },
        {
          "Device": "AT35 LTE",
          "Protocol": "avema",
          "Port": "5171"
        },
        {
          "Device": "AT35 4G/LTE MiFi",
          "Protocol": "avema",
          "Port": "5171"
        },
        {
          "Device": "MT99",
          "Protocol": "avema",
          "Port": "5171"
        },
        {
          "Device": "MT99 4G LTE",
          "Protocol": "avema",
          "Port": "5171"
        },
        {
          "Device": "AutoTrack XL",
          "Protocol": "autotrack",
          "Port": "5172"
        },
        {
          "Device": "AutoTrack еLite",
          "Protocol": "autotrack",
          "Port": "5172"
        },
        {
          "Device": "TEK-586",
          "Protocol": "tek",
          "Port": "5173"
        },
        {
          "Device": "TEK-733",
          "Protocol": "tek",
          "Port": "5173"
        },
        {
          "Device": "Wrist Band",
          "Protocol": "wristband",
          "Port": "5174"
        },
        {
          "Device": "GB101",
          "Protocol": "milesmate",
          "Port": "5176"
        },
        {
          "Device": "MM101A",
          "Protocol": "milesmate",
          "Port": "5176"
        },
        {
          "Device": "VT1611",
          "Protocol": "anytrek",
          "Port": "5177"
        },
        {
          "Device": "SmartSole",
          "Protocol": "smartsole",
          "Port": "5178"
        },
        {
          "Device": "ITS",
          "Protocol": "its",
          "Port": "5179"
        },
        {
          "Device": "AIS140",
          "Protocol": "its",
          "Port": "5179"
        },
        {
          "Device": "XRB 28",
          "Protocol": "xrb28",
          "Port": "5180"
        },
        {
          "Device": "C2STEK",
          "Protocol": "c2stek",
          "Port": "5181"
        },
        {
          "Device": "MT-20",
          "Protocol": "c2stek",
          "Port": "5181"
        },
        {
          "Device": "NT-183W",
          "Protocol": "nyitech",
          "Port": "5182"
        },
        {
          "Device": "NT-183G",
          "Protocol": "nyitech",
          "Port": "5182"
        },
        {
          "Device": "GEO5",
          "Protocol": "neos",
          "Port": "5183"
        },
        {
          "Device": "NEO5",
          "Protocol": "neos",
          "Port": "5183"
        },
        {
          "Device": "NEO7",
          "Protocol": "neos",
          "Port": "5183"
        },
        {
          "Device": "GEO1",
          "Protocol": "neos",
          "Port": "5183"
        },
        {
          "Device": "NEO1",
          "Protocol": "neos",
          "Port": "5183"
        },
        {
          "Device": "NEO2",
          "Protocol": "neos",
          "Port": "5183"
        },
        {
          "Device": "SAT-LITE 4",
          "Protocol": "satsol",
          "Port": "5184"
        },
        {
          "Device": "SAT-LITE 3",
          "Protocol": "satsol",
          "Port": "5184"
        },
        {
          "Device": "Globalstar",
          "Protocol": "globalstar",
          "Port": "5185"
        },
        {
          "Device": "SANUL",
          "Protocol": "sanul",
          "Port": "5186"
        },
        {
          "Device": "MiniFinder Nano",
          "Protocol": "minifinder2",
          "Port": "5187"
        },
        {
          "Device": "MiniFinder Atto Pro",
          "Protocol": "minifinder2",
          "Port": "5187"
        },
        {
          "Device": "PEBBELL",
          "Protocol": "minifinder2",
          "Port": "5187"
        },
        {
          "Device": "Radar Duo",
          "Protocol": "radar",
          "Port": "5188"
        },
        {
          "Device": "Radar Trio",
          "Protocol": "radar",
          "Port": "5188"
        },
        {
          "Device": "GPSRX12",
          "Protocol": "techtlt",
          "Port": "5189"
        },
        {
          "Device": "GPSRX14",
          "Protocol": "techtlt",
          "Port": "5189"
        },
        {
          "Device": "GPSRX16",
          "Protocol": "techtlt",
          "Port": "5189"
        },
        {
          "Device": "Helios",
          "Protocol": "starcom",
          "Port": "5190"
        },
        {
          "Device": "Helios TT",
          "Protocol": "starcom",
          "Port": "5190"
        },
        {
          "Device": "Helios Advanced",
          "Protocol": "starcom",
          "Port": "5190"
        },
        {
          "Device": "Helios Hybrid",
          "Protocol": "starcom",
          "Port": "5190"
        },
        {
          "Device": "MT825",
          "Protocol": "mictrack",
          "Port": "5191"
        },
        {
          "Device": "Plugin",
          "Protocol": "plugin",
          "Port": "5192"
        },
        {
          "Device": "Leaf Spy Pro",
          "Protocol": "leafspy",
          "Port": "5193"
        },
        {
          "Device": "Naviset GT-20",
          "Protocol": "naviset",
          "Port": "5194"
        },
        {
          "Device": "Race Dynamics",
          "Protocol": "racedynamics",
          "Port": "5195"
        },
        {
          "Device": "RST MINI LOW COST",
          "Protocol": "rst",
          "Port": "5196"
        },
        {
          "Device": "RST MINI",
          "Protocol": "rst",
          "Port": "5196"
        },
        {
          "Device": "RST LOW COST",
          "Protocol": "rst",
          "Port": "5196"
        },
        {
          "Device": "RST VERSAO TELEMETRIA",
          "Protocol": "rst",
          "Port": "5196"
        },
        {
          "Device": "RST MINI 4G",
          "Protocol": "rst",
          "Port": "5196"
        },
        {
          "Device": "RST HIBRIDO",
          "Protocol": "rst",
          "Port": "5196"
        },
        {
          "Device": "RST OBD2",
          "Protocol": "rst",
          "Port": "5196"
        },
        {
          "Device": "RST MOVEL",
          "Protocol": "rst",
          "Port": "5196"
        },
        {
          "Device": "PT215",
          "Protocol": "pt215",
          "Port": "5197"
        },
        {
          "Device": "PT40",
          "Protocol": "pacifictrack",
          "Port": "5198"
        },
        {
          "Device": "ZhongXun Topin",
          "Protocol": "topin",
          "Port": "5199"
        },
        {
          "Device": "Sigaba OutSafe",
          "Protocol": "outsafe",
          "Port": "5200"
        },
        {
          "Device": "Solar Powered",
          "Protocol": "solarpowered",
          "Port": "5201"
        },
        {
          "Device": "Motor",
          "Protocol": "motor",
          "Port": "5202"
        },
        {
          "Device": "Profi",
          "Protocol": "omnicomm",
          "Port": "5203"
        },
        {
          "Device": "Optim",
          "Protocol": "omnicomm",
          "Port": "5203"
        },
        {
          "Device": "Light",
          "Protocol": "omnicomm",
          "Port": "5203"
        },
        {
          "Device": "Profi 2.0",
          "Protocol": "omnicomm",
          "Port": "5203"
        },
        {
          "Device": "Optim 2.0",
          "Protocol": "omnicomm",
          "Port": "5203"
        },
        {
          "Device": "Light 2.0",
          "Protocol": "omnicomm",
          "Port": "5203"
        },
        {
          "Device": "S168",
          "Protocol": "s168",
          "Port": "5204"
        },
        {
          "Device": "VNET",
          "Protocol": "vnet",
          "Port": "5205"
        },
        {
          "Device": "ET-700",
          "Protocol": "blue",
          "Port": "5206"
        },
        {
          "Device": "ET-700C",
          "Protocol": "blue",
          "Port": "5206"
        },
        {
          "Device": "PST",
          "Protocol": "pst",
          "Port": "5207"
        },
        {
          "Device": "DF550",
          "Protocol": "dingtek",
          "Port": "5208"
        },
        {
          "Device": "DF702",
          "Protocol": "dingtek",
          "Port": "5208"
        },
        {
          "Device": "Piccolo STX​​",
          "Protocol": "wli",
          "Port": "5209"
        },
        {
          "Device": "Piccolo Plus",
          "Protocol": "wli",
          "Port": "5209"
        },
        {
          "Device": "Piccolo Hybrid+​​​",
          "Protocol": "wli",
          "Port": "5209"
        },
        {
          "Device": "Piccolo ATX2S​​",
          "Protocol": "wli",
          "Port": "5209"
        },
        {
          "Device": "Piccolo ATX Asset​​",
          "Protocol": "wli",
          "Port": "5209"
        },
        {
          "Device": "Piccolo ATX II​​",
          "Protocol": "wli",
          "Port": "5209"
        },
        {
          "Device": "Piccolo TMX+​​​",
          "Protocol": "wli",
          "Port": "5209"
        },
        {
          "Device": "NIOT",
          "Protocol": "niot",
          "Port": "5210"
        },
        {
          "Device": "Portman",
          "Protocol": "portman",
          "Port": "5211"
        },
        {
          "Device": "GT3105MG-PT",
          "Protocol": "portman",
          "Port": "5211"
        },
        {
          "Device": "Icomera MoovBox",
          "Protocol": "moovbox",
          "Port": "5212"
        },
        {
          "Device": "M320",
          "Protocol": "moovbox",
          "Port": "5212"
        },
        {
          "Device": "Futureway",
          "Protocol": "futureway",
          "Port": "5213"
        },
        {
          "Device": "Smart Crutches",
          "Protocol": "futureway",
          "Port": "5213"
        },
        {
          "Device": "POLTE",
          "Protocol": "polte",
          "Port": "5214"
        },
        {
          "Device": "NET",
          "Protocol": "net",
          "Port": "5215"
        },
        {
          "Device": "MT2000",
          "Protocol": "mobilogix",
          "Port": "5216"
        },
        {
          "Device": "MT2000S",
          "Protocol": "mobilogix",
          "Port": "5216"
        },
        {
          "Device": "MT4x00",
          "Protocol": "mobilogix",
          "Port": "5216"
        },
        {
          "Device": "BAT-M1",
          "Protocol": "mobilogix",
          "Port": "5216"
        },
        {
          "Device": "BAT-X",
          "Protocol": "mobilogix",
          "Port": "5216"
        },
        {
          "Device": "SWIFTECH",
          "Protocol": "swiftech",
          "Port": "5217"
        },
        {
          "Device": "XG3700",
          "Protocol": "iotm",
          "Port": "5218"
        },
        {
          "Device": "XG3780",
          "Protocol": "iotm",
          "Port": "5218"
        },
        {
          "Device": "FMS500",
          "Protocol": "iotm",
          "Port": "5218"
        },
        {
          "Device": "DO107",
          "Protocol": "dolphin",
          "Port": "5219"
        },
        {
          "Device": "Ebike Tracker",
          "Protocol": "ennfu",
          "Port": "5220"
        }
       ]);

    const [name, setName] = useState('');
    const [client, setClient] = useState('');
    const [model, setModel] = useState('');
    const [uniqueId, setUniqueId] = useState('');
    const [attributes, setAttributes] = useState('');
    const [telcel, setTelcel] = useState('');
    const [users, setUsers] = useState([]);
    const [observation, setObservation] = useState('');

    /*useEffect(() => {
      handleMostarar();
  }, [])*/

  const handleMostrar = (e) => {
    e.preventDefault();
    mostrar();
  }

  const mostrar = (e) => {
    console.log(JSON.stringify({client, uniqueId, model, attributes:{"claveMitelcel":telcel, "observacion:": observation}}))
    {/*console.log('Mostrando usuarios');
handleMostarar();*/}
}

const handleEnviar = (e) => {
  e.preventDefault();
  console.log(JSON.stringify({client, uniqueId, model, attributes:{"claveMitelcel":telcel, "observacion:": observation}}))
  enviar();
}

const enviar = async () => {
  const response = await fetch('/api/devices', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',
               'Credentials': 'include',
               'Accept':'*/*'    },
    body: JSON.stringify({name, uniqueId, model, attributes:{client, observation}})
  });

  if (response.ok) {
      console.log('Estado: 200')
  } 
}



  return (
    <div className="main-container-box">
      <div className="h100b">
        <h3 className="block-titlebar">Añadir Objetivos</h3>{" "}
        <div className="has-titlebar-content white-bg el-scrollbar">
          <div
            className="el-scrollbar__wrap"
            style={{ marginBottom: "-6px", marginRight: "-6px" }}
          >
            <div className="el-scrollbar__view">
              <div className="device-add submit-from-box">
                <div
                  role="alert"
                  className="el-alert tips-page el-alert--warning is-light"
                >
                  <i className="el-alert__icon el-icon-warning" />
                  <div className="el-alert__content">
                    <span className="el-alert__title">
                      Asegúrese de que la VALIDEZ del número IMEI y el nombre
                      del modelo antes de importar ya que la operación es
                      IRREVOCABLE.
                    </span>
                    {/**/}
                    {/**/}
                    <i
                      className="el-alert__closebtn el-icon-close"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>{" "}
                <form className="el-form">


                  <div className="el-form-item is-required">
                    <label className="el-form-item__label">Meta Cliente</label>
                    <div className="el-form-item__content">
                      <div className="user-tree-select">
                        <div data-tips>
                          <div
                            aria-haspopup="listbox"
                            role="combobox"
                            aria-owns="el-autocomplete-4875"
                            className="el-autocomplete"
                          >
                            <div className="el-input el-input-group el-input-group--append el-input--suffix">
                              {/**/}
                              <input
                                type="text"
                                autoComplete="off"
                                valuekey="value"
                                popperclass="user-autocomplete"
                                placeholder="Nombre de la cuenta"
                                fetchsuggestions="function () { [native code] }"
                                debounce={300}
                                placement="bottom-start"
                                popperappendtobody="true"
                                className="el-input__inner"
                                role="textbox"
                                aria-autocomplete="list"
                                aria-controls="id"
                                aria-activedescendant="el-autocomplete-4875-item--1"
                                onChange={event => setClient(event.target.value)}
                              />
                              {/**/}
                              {/**/}
                              <div className="el-input-group__append">
                                <button
                                  type="button"
                                  className="el-button select-btn el-button--default"
                                >
                                  {/**/}
                                  <i className="el-icon-arrow-down" />
                                  {/**/}
                                </button>
                              </div>
                              {/**/}
                            </div>
                            <div
                              role="region"
                              className="el-autocomplete-suggestion el-popper user-autocomplete"
                              style={{ display: "none" }}
                            >
                              <div className="el-scrollbar">
                                <div
                                  className="el-autocomplete-suggestion__wrap el-scrollbar__wrap"
                                  style={{
                                    marginBottom: "-6px",
                                    marginRight: "-6px",
                                  }}
                                >
                                  <ul
                                    className="el-scrollbar__view el-autocomplete-suggestion__list"
                                    role="listbox"
                                    id="el-autocomplete-4875"
                                  />
                                </div>
                                <div className="el-scrollbar__bar is-horizontal">
                                  <div
                                    className="el-scrollbar__thumb"
                                    style={{ transform: "translateX(0%)" }}
                                  />
                                </div>
                                <div className="el-scrollbar__bar is-vertical">
                                  <div
                                    className="el-scrollbar__thumb"
                                    style={{ transform: "translateY(0%)" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                        {/**/}
                      </div>
                      {/**/}
                    </div>
                  </div>{" "}
                  
                  <div className="el-form-item is-required">
                    <label htmlFor="devicetype" className="el-form-item__label">
                      Tipo
                    </label>
                    <div className="el-form-item__content">
                      <div className="model-select-comp">
                        <div className="model-cur-box">
                          <span>
                            <div
                              role="tooltip"
                              id="el-popover-3132"
                              aria-hidden="true"
                              className="el-popover el-popper model-select-popover"
                              tabIndex={0}
                              style={{ width: "540px", display: "none" }}
                            >
                              {/**/}

                            </div>
                            <span className="el-popover__reference-wrapper">
                              <div
                                className="text-input el-input el-input--suffix el-popover__reference"
                                aria-describedby="el-popover-3132"
                                tabIndex={0}
                                style={{ width: "240px" }}
                              >
                                {/**/}
                                <input
                                  type="text"
                                  autoComplete="off"
                                  placeholder="Módelo del dispositivo"
                                  className="el-input__inner"
                                  onChange={event => setModel(event.target.value)}
                                />
                                {/**/}
      
                                {/**/}
                                {/**/}
                              </div>
                            </span>
                          </span>{" "}
                          <a
                            href="/devicelist.html"
                            target="_blank"
                            className="ml10 link-btn ico-link"
                          >
                            Dispositivos soportados »
                          </a>{" "}
                          <div
                            role="alert"
                            className="el-alert server-info mt5 no-bg el-alert--info is-light"
                            style={{ display: "none" }}
                          >
                            <i className="el-alert__icon el-icon-info" />
                            <div className="el-alert__content">
                              <span className="el-alert__title">
                                Información del Servidor:{" "}
                              </span>
                              {/**/}
                              {/**/}
                              <i
                                className="el-alert__closebtn el-icon-close"
                                style={{ display: "none" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/**/}
                    </div>
                  </div>
                  <div className="el-form-item is-required">
                    <label htmlFor="devicetype" className="el-form-item__label">
                      Clave miTelcel
                    </label>
                    <div className="el-form-item__content">
                      <div className="model-select-comp">
                        <div className="model-cur-box">
                          <span>
                            <div
                              role="tooltip"
                              id="el-popover-3132"
                              aria-hidden="true"
                              className="el-popover el-popper model-select-popover"
                              tabIndex={0}
                              style={{ width: "540px", display: "none" }}
                            >
                              {/**/}
                              <div className="model-content">
                                <div className="el-input el-input--prefix el-input--suffix">
                                  {/**/}
                                  <input
                                    type="text"
                                    autoComplete="off"
                                    placeholder="Clave mi telcel"
                                    className="el-input__inner"
                                  />
                                  <span className="el-input__prefix">
                                    <i className="el-input__icon search-icon base-icon" />
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </div>{" "}

                              </div>{" "}
                            </div>
                            <span className="el-popover__reference-wrapper">
                              <div
                                className="text-input el-input el-input--suffix el-popover__reference"
                                aria-describedby="el-popover-3132"
                                tabIndex={0}
                                style={{ width: "240px" }}
                              >
                                {/**/}
                                <input
                                  type="text"
                                  autoComplete="off"
                                  placeholder=""
                                  className="el-input__inner"
                                  onChange={event => setTelcel(event.target.value)}
                                />
                                {/**/}
                                {/**/}
                                {/**/}
                              </div>
                            </span>
                          </span>{" "}
                          <div
                            role="alert"
                            className="el-alert server-info mt5 no-bg el-alert--info is-light"
                            style={{ display: "none" }}
                          >
                            <i className="el-alert__icon el-icon-info" />
                            <div className="el-alert__content">
                              <span className="el-alert__title">
                                Información del Servidor:{" "}
                              </span>
                              {/**/}
                              {/**/}
                              <i
                                className="el-alert__closebtn el-icon-close"
                                style={{ display: "none" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/**/}
                    </div>
                  </div>


                  <div className="el-form-item" style={{ display: "none" }}>
                    <label className="el-form-item__label">opción</label>
                    <div className="el-form-item__content">
                      <label className="el-checkbox">
                        <span className="el-checkbox__input">
                          <span className="el-checkbox__inner" />
                          <input
                            type="checkbox"
                            aria-hidden="false"
                            true-value={1}
                            false-value={0}
                            className="el-checkbox__original"
                          />
                        </span>
                        <span className="el-checkbox__label">
                          Caducidad de plataforma establecida por defecto en 1
                          año{/**/}
                        </span>
                      </label>
                      <br />{" "}
                      <label className="el-checkbox">
                        <span className="el-checkbox__input">
                          <span className="el-checkbox__inner" />
                          <input
                            type="checkbox"
                            aria-hidden="false"
                            true-value={2}
                            false-value={0}
                            className="el-checkbox__original"
                          />
                        </span>
                        <span className="el-checkbox__label">
                          La fecha de caducidad de la plataforma se estableció 2
                          años por defecto{/**/}
                        </span>
                      </label>
                      {/**/}
                    </div>
                  </div>{" "}
                  <div className="el-form-item is-error is-required">
                    <label htmlFor="imeis" className="el-form-item__label">
                      IMEI
                    </label>
                    <div className="el-form-item__content">
                      <div className="el-textarea">
                        <textarea
                          autoComplete="off"
                          rows={3}
                          placeholder="Ingresa IMEI del dispositivo"
                          className="el-textarea__inner pr20"
                          style={{ minHeight: "33px" }}
                          defaultValue={""}
                          onChange={event => setUniqueId(event.target.value)}
                        />
                        {/**/}
                        <i className="input-textarea-clear el-input__icon el-icon-circle-close el-input__clear hide" />
                      </div>{" "}
                      <p className="desc">IMEI DEL DISPOSITVO</p>
                      {/**/}
                    </div>
                  </div>{" "}
                  <div className="el-form-item">
                    <label htmlFor="remark" className="el-form-item__label">
                      Observación
                    </label>
                    <div className="el-form-item__content">
                      <div className="el-textarea">
                        <textarea
                          autoComplete="off"
                          className="el-textarea__inner"
                          style={{ minHeight: "33px" }}
                          defaultValue={""}
                          onChange={event => setObservation(event.target.value)}
                        />
                        {/**/}
                      </div>
                      {/**/}
                    </div>
                  </div>{" "}
                  <div className="el-form-item form-btn-box">
                    {/**/}
                    <div className="el-form-item__content">
                      <button
                        type="submit"
                        className="el-button el-button--primary"
                        onClick={handleEnviar}
                      >
                        {/**/}
                        {/**/}
                        <span>Confirmar</span>
                      </button>{" "}
                      <button
                        type="button"
                        className="el-button el-button--default"
                      >
                        {/**/}
                        {/**/}
                        <span>Reiniciar</span>
                      </button>
                      {/**/}
                    </div>
                  </div>
                </form>{" "}
                {/**/}
              </div>
            </div>
          </div>
          <div className="el-scrollbar__bar is-horizontal">
            <div
              className="el-scrollbar__thumb"
              style={{ transform: "translateX(0%)" }}
            />
          </div>
          <div className="el-scrollbar__bar is-vertical">
            <div
              className="el-scrollbar__thumb"
              style={{ transform: "translateY(0%)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDeviceContainer;
