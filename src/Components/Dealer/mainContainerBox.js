import {React, useState, useEffect} from "react";

import ChartMap from "./chartMap";
import ChartDevice from "./chartDevices";
import AnalysisChart from "./analysisChart";
import TypeChart from "./typeChart";
import DeploymentChart from "./deploymentChart";

import './estilos.css';

const MainContainerBox = () => {
    const [reminder, setReminder] = useState(false);
    
    const [quick, setQuick] = useState(true)
    const [batch,setBatch] = useState(false);
    const [batchMove, setBatchMove] = useState(false);
    const [batchRecharge, setBatchRecharge] = useState(false);
    const [timeDistributor, setTimeDistributor] = useState(false);

    const [expired, setExpired] = useState(true);
    const [otherExpired, setOtherExpired] = useState(false);

    const handleExpired = (e) => {
        e.preventDefault();
        if(expired===false){
            setExpired(true);
            setOtherExpired(false)
        }
    }

    const handleOtherExpired = (e) => {
        e.preventDefault();
        if(otherExpired===false){
            setOtherExpired(true);
            setExpired(true);
        }
    }

    const handleQuickSell = (e) => {
        e.preventDefault();
        if(quick===false){
            setQuick(true);
            setBatch(false);
            setBatchMove(false);
            setBatchRecharge(false);
            setTimeDistributor(false);
        }
    }

        const handleBatch = (e) => {
            e.preventDefault();
            if(batch===false){
                setQuick(false);
                setBatch(true);
                setBatchMove(false);
                setBatchRecharge(false);
                setTimeDistributor(false);
            }
        }

        const handleBatchMove = (e) => {
            e.preventDefault();
            if(batchMove===false){
                setQuick(false);
                setBatch(false);
                setBatchMove(true);
                setBatchRecharge(false);
                setTimeDistributor(false);
            }
        }

        const handleBatchRecharge = (e) => {
            e.preventDefault();
            if(batchRecharge===false){
                setQuick(false);
                setBatch(false);
                setBatchMove(false);
                setBatchRecharge(true);
                setTimeDistributor(false);
            }
        }

        const handleTimeDistributor = (e) => {
            e.preventDefault();
            if(timeDistributor===false){
                setQuick(false);
                setBatch(false);
                setBatchMove(false);
                setBatchRecharge(false);
                setTimeDistributor(true);
            }
            var css = "text-shadow: -1px -1px hsl(0,100%,50%), 1px 1px hsl(5.4, 100%, 50%), 3px 2px hsl(10.8, 100%, 50%), 5px 3px hsl(16.2, 100%, 50%), 7px 4px hsl(21.6, 100%, 50%), 9px 5px hsl(27, 100%, 50%), 11px 6px hsl(32.4, 100%, 50%), 13px 7px hsl(37.8, 100%, 50%), 14px 8px hsl(43.2, 100%, 50%), 16px 9px hsl(48.6, 100%, 50%), 18px 10px hsl(54, 100%, 50%), 20px 11px hsl(59.4, 100%, 50%), 22px 12px hsl(64.8, 100%, 50%), 23px 13px hsl(70.2, 100%, 50%), 25px 14px hsl(75.6, 100%, 50%), 27px 15px hsl(81, 100%, 50%), 28px 16px hsl(86.4, 100%, 50%), 30px 17px hsl(91.8, 100%, 50%), 32px 18px hsl(97.2, 100%, 50%), 33px 19px hsl(102.6, 100%, 50%), 35px 20px hsl(108, 100%, 50%), 36px 21px hsl(113.4, 100%, 50%), 38px 22px hsl(118.8, 100%, 50%), 39px 23px hsl(124.2, 100%, 50%), 41px 24px hsl(129.6, 100%, 50%), 42px 25px hsl(135, 100%, 50%), 43px 26px hsl(140.4, 100%, 50%), 45px 27px hsl(145.8, 100%, 50%), 46px 28px hsl(151.2, 100%, 50%), 47px 29px hsl(156.6, 100%, 50%), 48px 30px hsl(162, 100%, 50%), 49px 31px hsl(167.4, 100%, 50%), 50px 32px hsl(172.8, 100%, 50%), 51px 33px hsl(178.2, 100%, 50%), 52px 34px hsl(183.6, 100%, 50%), 53px 35px hsl(189, 100%, 50%), 54px 36px hsl(194.4, 100%, 50%), 55px 37px hsl(199.8, 100%, 50%), 55px 38px hsl(205.2, 100%, 50%), 56px 39px hsl(210.6, 100%, 50%), 57px 40px hsl(216, 100%, 50%), 57px 41px hsl(221.4, 100%, 50%), 58px 42px hsl(226.8, 100%, 50%), 58px 43px hsl(232.2, 100%, 50%), 58px 44px hsl(237.6, 100%, 50%), 59px 45px hsl(243, 100%, 50%), 59px 46px hsl(248.4, 100%, 50%), 59px 47px hsl(253.8, 100%, 50%), 59px 48px hsl(259.2, 100%, 50%), 59px 49px hsl(264.6, 100%, 50%), 60px 50px hsl(270, 100%, 50%), 59px 51px hsl(275.4, 100%, 50%), 59px 52px hsl(280.8, 100%, 50%), 59px 53px hsl(286.2, 100%, 50%), 59px 54px hsl(291.6, 100%, 50%), 59px 55px hsl(297, 100%, 50%), 58px 56px hsl(302.4, 100%, 50%), 58px 57px hsl(307.8, 100%, 50%), 58px 58px hsl(313.2, 100%, 50%), 57px 59px hsl(318.6, 100%, 50%), 57px 60px hsl(324, 100%, 50%), 56px 61px hsl(329.4, 100%, 50%), 55px 62px hsl(334.8, 100%, 50%), 55px 63px hsl(340.2, 100%, 50%), 54px 64px hsl(345.6, 100%, 50%), 53px 65px hsl(351, 100%, 50%), 52px 66px hsl(356.4, 100%, 50%), 51px 67px hsl(361.8, 100%, 50%), 50px 68px hsl(367.2, 100%, 50%), 49px 69px hsl(372.6, 100%, 50%), 48px 70px hsl(378, 100%, 50%), 47px 71px hsl(383.4, 100%, 50%), 46px 72px hsl(388.8, 100%, 50%), 45px 73px hsl(394.2, 100%, 50%), 43px 74px hsl(399.6, 100%, 50%), 42px 75px hsl(405, 100%, 50%), 41px 76px hsl(410.4, 100%, 50%), 39px 77px hsl(415.8, 100%, 50%), 38px 78px hsl(421.2, 100%, 50%), 36px 79px hsl(426.6, 100%, 50%), 35px 80px hsl(432, 100%, 50%), 33px 81px hsl(437.4, 100%, 50%), 32px 82px hsl(442.8, 100%, 50%), 30px 83px hsl(448.2, 100%, 50%), 28px 84px hsl(453.6, 100%, 50%), 27px 85px hsl(459, 100%, 50%), 25px 86px hsl(464.4, 100%, 50%), 23px 87px hsl(469.8, 100%, 50%), 22px 88px hsl(475.2, 100%, 50%), 20px 89px hsl(480.6, 100%, 50%), 18px 90px hsl(486, 100%, 50%), 16px 91px hsl(491.4, 100%, 50%), 14px 92px hsl(496.8, 100%, 50%), 13px 93px hsl(502.2, 100%, 50%), 11px 94px hsl(507.6, 100%, 50%), 9px 95px hsl(513, 100%, 50%), 7px 96px hsl(518.4, 100%, 50%), 5px 97px hsl(523.8, 100%, 50%), 3px 98px hsl(529.2, 100%, 50%), 1px 99px hsl(534.6, 100%, 50%), 7px 100px hsl(540, 100%, 50%), -1px 101px hsl(545.4, 100%, 50%), -3px 102px hsl(550.8, 100%, 50%), -5px 103px hsl(556.2, 100%, 50%), -7px 104px hsl(561.6, 100%, 50%), -9px 105px hsl(567, 100%, 50%), -11px 106px hsl(572.4, 100%, 50%), -13px 107px hsl(577.8, 100%, 50%), -14px 108px hsl(583.2, 100%, 50%), -16px 109px hsl(588.6, 100%, 50%), -18px 110px hsl(594, 100%, 50%), -20px 111px hsl(599.4, 100%, 50%), -22px 112px hsl(604.8, 100%, 50%), -23px 113px hsl(610.2, 100%, 50%), -25px 114px hsl(615.6, 100%, 50%), -27px 115px hsl(621, 100%, 50%), -28px 116px hsl(626.4, 100%, 50%), -30px 117px hsl(631.8, 100%, 50%), -32px 118px hsl(637.2, 100%, 50%), -33px 119px hsl(642.6, 100%, 50%), -35px 120px hsl(648, 100%, 50%), -36px 121px hsl(653.4, 100%, 50%), -38px 122px hsl(658.8, 100%, 50%), -39px 123px hsl(664.2, 100%, 50%), -41px 124px hsl(669.6, 100%, 50%), -42px 125px hsl(675, 100%, 50%), -43px 126px hsl(680.4, 100%, 50%), -45px 127px hsl(685.8, 100%, 50%), -46px 128px hsl(691.2, 100%, 50%), -47px 129px hsl(696.6, 100%, 50%), -48px 130px hsl(702, 100%, 50%), -49px 131px hsl(707.4, 100%, 50%), -50px 132px hsl(712.8, 100%, 50%), -51px 133px hsl(718.2, 100%, 50%), -52px 134px hsl(723.6, 100%, 50%), -53px 135px hsl(729, 100%, 50%), -54px 136px hsl(734.4, 100%, 50%), -55px 137px hsl(739.8, 100%, 50%), -55px 138px hsl(745.2, 100%, 50%), -56px 139px hsl(750.6, 100%, 50%), -57px 140px hsl(756, 100%, 50%), -57px 141px hsl(761.4, 100%, 50%), -58px 142px hsl(766.8, 100%, 50%), -58px 143px hsl(772.2, 100%, 50%), -58px 144px hsl(777.6, 100%, 50%), -59px 145px hsl(783, 100%, 50%), -59px 146px hsl(788.4, 100%, 50%), -59px 147px hsl(793.8, 100%, 50%), -59px 148px hsl(799.2, 100%, 50%), -59px 149px hsl(804.6, 100%, 50%), -60px 150px hsl(810, 100%, 50%), -59px 151px hsl(815.4, 100%, 50%), -59px 152px hsl(820.8, 100%, 50%), -59px 153px hsl(826.2, 100%, 50%), -59px 154px hsl(831.6, 100%, 50%), -59px 155px hsl(837, 100%, 50%), -58px 156px hsl(842.4, 100%, 50%), -58px 157px hsl(847.8, 100%, 50%), -58px 158px hsl(853.2, 100%, 50%), -57px 159px hsl(858.6, 100%, 50%), -57px 160px hsl(864, 100%, 50%), -56px 161px hsl(869.4, 100%, 50%), -55px 162px hsl(874.8, 100%, 50%), -55px 163px hsl(880.2, 100%, 50%), -54px 164px hsl(885.6, 100%, 50%), -53px 165px hsl(891, 100%, 50%), -52px 166px hsl(896.4, 100%, 50%), -51px 167px hsl(901.8, 100%, 50%), -50px 168px hsl(907.2, 100%, 50%), -49px 169px hsl(912.6, 100%, 50%), -48px 170px hsl(918, 100%, 50%), -47px 171px hsl(923.4, 100%, 50%), -46px 172px hsl(928.8, 100%, 50%), -45px 173px hsl(934.2, 100%, 50%), -43px 174px hsl(939.6, 100%, 50%), -42px 175px hsl(945, 100%, 50%), -41px 176px hsl(950.4, 100%, 50%), -39px 177px hsl(955.8, 100%, 50%), -38px 178px hsl(961.2, 100%, 50%), -36px 179px hsl(966.6, 100%, 50%), -35px 180px hsl(972, 100%, 50%), -33px 181px hsl(977.4, 100%, 50%), -32px 182px hsl(982.8, 100%, 50%), -30px 183px hsl(988.2, 100%, 50%), -28px 184px hsl(993.6, 100%, 50%), -27px 185px hsl(999, 100%, 50%), -25px 186px hsl(1004.4, 100%, 50%), -23px 187px hsl(1009.8, 100%, 50%), -22px 188px hsl(1015.2, 100%, 50%), -20px 189px hsl(1020.6, 100%, 50%), -18px 190px hsl(1026, 100%, 50%), -16px 191px hsl(1031.4, 100%, 50%), -14px 192px hsl(1036.8, 100%, 50%), -13px 193px hsl(1042.2, 100%, 50%), -11px 194px hsl(1047.6, 100%, 50%), -9px 195px hsl(1053, 100%, 50%), -7px 196px hsl(1058.4, 100%, 50%), -5px 197px hsl(1063.8, 100%, 50%), -3px 198px hsl(1069.2, 100%, 50%), -1px 199px hsl(1074.6, 100%, 50%), -1px 200px hsl(1080, 100%, 50%), 1px 201px hsl(1085.4, 100%, 50%), 3px 202px hsl(1090.8, 100%, 50%), 5px 203px hsl(1096.2, 100%, 50%), 7px 204px hsl(1101.6, 100%, 50%), 9px 205px hsl(1107, 100%, 50%), 11px 206px hsl(1112.4, 100%, 50%), 13px 207px hsl(1117.8, 100%, 50%), 14px 208px hsl(1123.2, 100%, 50%), 16px 209px hsl(1128.6, 100%, 50%), 18px 210px hsl(1134, 100%, 50%), 20px 211px hsl(1139.4, 100%, 50%), 22px 212px hsl(1144.8, 100%, 50%), 23px 213px hsl(1150.2, 100%, 50%), 25px 214px hsl(1155.6, 100%, 50%), 27px 215px hsl(1161, 100%, 50%), 28px 216px hsl(1166.4, 100%, 50%), 30px 217px hsl(1171.8, 100%, 50%), 32px 218px hsl(1177.2, 100%, 50%), 33px 219px hsl(1182.6, 100%, 50%), 35px 220px hsl(1188, 100%, 50%), 36px 221px hsl(1193.4, 100%, 50%), 38px 222px hsl(1198.8, 100%, 50%), 39px 223px hsl(1204.2, 100%, 50%), 41px 224px hsl(1209.6, 100%, 50%), 42px 225px hsl(1215, 100%, 50%), 43px 226px hsl(1220.4, 100%, 50%), 45px 227px hsl(1225.8, 100%, 50%), 46px 228px hsl(1231.2, 100%, 50%), 47px 229px hsl(1236.6, 100%, 50%), 48px 230px hsl(1242, 100%, 50%), 49px 231px hsl(1247.4, 100%, 50%), 50px 232px hsl(1252.8, 100%, 50%), 51px 233px hsl(1258.2, 100%, 50%), 52px 234px hsl(1263.6, 100%, 50%), 53px 235px hsl(1269, 100%, 50%), 54px 236px hsl(1274.4, 100%, 50%), 55px 237px hsl(1279.8, 100%, 50%), 55px 238px hsl(1285.2, 100%, 50%), 56px 239px hsl(1290.6, 100%, 50%), 57px 240px hsl(1296, 100%, 50%), 57px 241px hsl(1301.4, 100%, 50%), 58px 242px hsl(1306.8, 100%, 50%), 58px 243px hsl(1312.2, 100%, 50%), 58px 244px hsl(1317.6, 100%, 50%), 59px 245px hsl(1323, 100%, 50%), 59px 246px hsl(1328.4, 100%, 50%), 59px 247px hsl(1333.8, 100%, 50%), 59px 248px hsl(1339.2, 100%, 50%), 59px 249px hsl(1344.6, 100%, 50%), 60px 250px hsl(1350, 100%, 50%), 59px 251px hsl(1355.4, 100%, 50%), 59px 252px hsl(1360.8, 100%, 50%), 59px 253px hsl(1366.2, 100%, 50%), 59px 254px hsl(1371.6, 100%, 50%), 59px 255px hsl(1377, 100%, 50%), 58px 256px hsl(1382.4, 100%, 50%), 58px 257px hsl(1387.8, 100%, 50%), 58px 258px hsl(1393.2, 100%, 50%), 57px 259px hsl(1398.6, 100%, 50%), 57px 260px hsl(1404, 100%, 50%), 56px 261px hsl(1409.4, 100%, 50%), 55px 262px hsl(1414.8, 100%, 50%), 55px 263px hsl(1420.2, 100%, 50%), 54px 264px hsl(1425.6, 100%, 50%), 53px 265px hsl(1431, 100%, 50%), 52px 266px hsl(1436.4, 100%, 50%), 51px 267px hsl(1441.8, 100%, 50%), 50px 268px hsl(1447.2, 100%, 50%), 49px 269px hsl(1452.6, 100%, 50%), 48px 270px hsl(1458, 100%, 50%), 47px 271px hsl(1463.4, 100%, 50%), 46px 272px hsl(1468.8, 100%, 50%), 45px 273px hsl(1474.2, 100%, 50%), 43px 274px hsl(1479.6, 100%, 50%), 42px 275px hsl(1485, 100%, 50%), 41px 276px hsl(1490.4, 100%, 50%), 39px 277px hsl(1495.8, 100%, 50%), 38px 278px hsl(1501.2, 100%, 50%), 36px 279px hsl(1506.6, 100%, 50%), 35px 280px hsl(1512, 100%, 50%), 33px 281px hsl(1517.4, 100%, 50%), 32px 282px hsl(1522.8, 100%, 50%), 30px 283px hsl(1528.2, 100%, 50%), 28px 284px hsl(1533.6, 100%, 50%), 27px 285px hsl(1539, 100%, 50%), 25px 286px hsl(1544.4, 100%, 50%), 23px 287px hsl(1549.8, 100%, 50%), 22px 288px hsl(1555.2, 100%, 50%), 20px 289px hsl(1560.6, 100%, 50%), 18px 290px hsl(1566, 100%, 50%), 16px 291px hsl(1571.4, 100%, 50%), 14px 292px hsl(1576.8, 100%, 50%), 13px 293px hsl(1582.2, 100%, 50%), 11px 294px hsl(1587.6, 100%, 50%), 9px 295px hsl(1593, 100%, 50%), 7px 296px hsl(1598.4, 100%, 50%), 5px 297px hsl(1603.8, 100%, 50%), 3px 298px hsl(1609.2, 100%, 50%), 1px 299px hsl(1614.6, 100%, 50%), 2px 300px hsl(1620, 100%, 50%), -1px 301px hsl(1625.4, 100%, 50%), -3px 302px hsl(1630.8, 100%, 50%), -5px 303px hsl(1636.2, 100%, 50%), -7px 304px hsl(1641.6, 100%, 50%), -9px 305px hsl(1647, 100%, 50%), -11px 306px hsl(1652.4, 100%, 50%), -13px 307px hsl(1657.8, 100%, 50%), -14px 308px hsl(1663.2, 100%, 50%), -16px 309px hsl(1668.6, 100%, 50%), -18px 310px hsl(1674, 100%, 50%), -20px 311px hsl(1679.4, 100%, 50%), -22px 312px hsl(1684.8, 100%, 50%), -23px 313px hsl(1690.2, 100%, 50%), -25px 314px hsl(1695.6, 100%, 50%), -27px 315px hsl(1701, 100%, 50%), -28px 316px hsl(1706.4, 100%, 50%), -30px 317px hsl(1711.8, 100%, 50%), -32px 318px hsl(1717.2, 100%, 50%), -33px 319px hsl(1722.6, 100%, 50%), -35px 320px hsl(1728, 100%, 50%), -36px 321px hsl(1733.4, 100%, 50%), -38px 322px hsl(1738.8, 100%, 50%), -39px 323px hsl(1744.2, 100%, 50%), -41px 324px hsl(1749.6, 100%, 50%), -42px 325px hsl(1755, 100%, 50%), -43px 326px hsl(1760.4, 100%, 50%), -45px 327px hsl(1765.8, 100%, 50%), -46px 328px hsl(1771.2, 100%, 50%), -47px 329px hsl(1776.6, 100%, 50%), -48px 330px hsl(1782, 100%, 50%), -49px 331px hsl(1787.4, 100%, 50%), -50px 332px hsl(1792.8, 100%, 50%), -51px 333px hsl(1798.2, 100%, 50%), -52px 334px hsl(1803.6, 100%, 50%), -53px 335px hsl(1809, 100%, 50%), -54px 336px hsl(1814.4, 100%, 50%), -55px 337px hsl(1819.8, 100%, 50%), -55px 338px hsl(1825.2, 100%, 50%), -56px 339px hsl(1830.6, 100%, 50%), -57px 340px hsl(1836, 100%, 50%), -57px 341px hsl(1841.4, 100%, 50%), -58px 342px hsl(1846.8, 100%, 50%), -58px 343px hsl(1852.2, 100%, 50%), -58px 344px hsl(1857.6, 100%, 50%), -59px 345px hsl(1863, 100%, 50%), -59px 346px hsl(1868.4, 100%, 50%), -59px 347px hsl(1873.8, 100%, 50%), -59px 348px hsl(1879.2, 100%, 50%), -59px 349px hsl(1884.6, 100%, 50%), -60px 350px hsl(1890, 100%, 50%), -59px 351px hsl(1895.4, 100%, 50%), -59px 352px hsl(1900.8, 100%, 50%), -59px 353px hsl(1906.2, 100%, 50%), -59px 354px hsl(1911.6, 100%, 50%), -59px 355px hsl(1917, 100%, 50%), -58px 356px hsl(1922.4, 100%, 50%), -58px 357px hsl(1927.8, 100%, 50%), -58px 358px hsl(1933.2, 100%, 50%), -57px 359px hsl(1938.6, 100%, 50%), -57px 360px hsl(1944, 100%, 50%), -56px 361px hsl(1949.4, 100%, 50%), -55px 362px hsl(1954.8, 100%, 50%), -55px 363px hsl(1960.2, 100%, 50%), -54px 364px hsl(1965.6, 100%, 50%), -53px 365px hsl(1971, 100%, 50%), -52px 366px hsl(1976.4, 100%, 50%), -51px 367px hsl(1981.8, 100%, 50%), -50px 368px hsl(1987.2, 100%, 50%), -49px 369px hsl(1992.6, 100%, 50%), -48px 370px hsl(1998, 100%, 50%), -47px 371px hsl(2003.4, 100%, 50%), -46px 372px hsl(2008.8, 100%, 50%), -45px 373px hsl(2014.2, 100%, 50%), -43px 374px hsl(2019.6, 100%, 50%), -42px 375px hsl(2025, 100%, 50%), -41px 376px hsl(2030.4, 100%, 50%), -39px 377px hsl(2035.8, 100%, 50%), -38px 378px hsl(2041.2, 100%, 50%), -36px 379px hsl(2046.6, 100%, 50%), -35px 380px hsl(2052, 100%, 50%), -33px 381px hsl(2057.4, 100%, 50%), -32px 382px hsl(2062.8, 100%, 50%), -30px 383px hsl(2068.2, 100%, 50%), -28px 384px hsl(2073.6, 100%, 50%), -27px 385px hsl(2079, 100%, 50%), -25px 386px hsl(2084.4, 100%, 50%), -23px 387px hsl(2089.8, 100%, 50%), -22px 388px hsl(2095.2, 100%, 50%), -20px 389px hsl(2100.6, 100%, 50%), -18px 390px hsl(2106, 100%, 50%), -16px 391px hsl(2111.4, 100%, 50%), -14px 392px hsl(2116.8, 100%, 50%), -13px 393px hsl(2122.2, 100%, 50%), -11px 394px hsl(2127.6, 100%, 50%), -9px 395px hsl(2133, 100%, 50%), -7px 396px hsl(2138.4, 100%, 50%), -5px 397px hsl(2143.8, 100%, 50%), -3px 398px hsl(2149.2, 100%, 50%), -1px 399px hsl(2154.6, 100%, 50%); font-size: 40px;";
            console.log("%cVariable %s", css, timeDistributor);
        }

    return (
        <div className="main-container-box">
            <div className="hidden-scroll-x h100b p0 el-scrollbar">
                <div
                    className="el-scrollbar__wrap"
                    style={{ marginBottom: "-6px", marginRight: "-6px" }}
                >
                    <div className="el-scrollbar__view">
                        <div className="p15 dashboard">
                            <div>
                                <div className="el-dialog__wrapper" style={{ display: "none" }}>
                                    <div
                                        role="dialog"
                                        aria-modal="true"
                                        aria-label="dialog"
                                        className="el-dialog"
                                        style={{ marginTop: "15vh", width: 500 }}
                                    >
                                        <div className="el-dialog__header">
                                            <div>
                                                <i className="el-icon-setting f16 pr10" />
                                                Noticia
                                            </div>
                                            <button
                                                type="button"
                                                aria-label="Close"
                                                className="el-dialog__headerbtn"
                                            >
                                                <i className="el-dialog__close el-icon el-icon-close" />
                                            </button>
                                        </div>
                                        {/**/}
                                        {/**/}
                                    </div>
                                </div>{" "}
                                <div className="dashborad-sysNotifyBar" style={{ display: "none" }}>
                                    <div role="alert" className="el-alert el-alert--success is-light">
                                        {/**/}
                                        <div className="el-alert__content">
                                            <span className="el-alert__title">
                                                <div>
                                                    <i className="tag-notify">Noticia</i>{" "}
                                                    <span className="content"></span>
                                                </div>
                                            </span>
                                            {/**/}
                                            {/**/}
                                            <i className="el-alert__closebtn el-icon-close" />
                                        </div>
                                    </div>
                                </div>
                            </div>{" "}
                            <div>
                                <div className="dashboard-user clearfix">
                                    <div className="item">
                                        <div className="item-content user-box bg">
                                            <div className="item-title">DEMO</div>{" "}
                                            <div className="item-user-info">
                                                <div className="user-num">
                                                    <span className="num-title mr5">Clientes</span>{" "}
                                                    <a
                                                        href="/dealer2/business?treeLevel=1"
                                                        className="link-line-hover link-line"
                                                    >
                                                        <span className="total-user">0</span>
                                                    </a>{" "}
                                                    <span className="total-user-new">
                                                        <i className="el-icon-top" />0
                                                    </span>{" "}
                                                    <i
                                                        className="el-tooltip el-icon-info"
                                                        aria-describedby="el-tooltip-9329"
                                                        tabIndex={0}
                                                    />
                                                </div>
                                            </div>{" "}
                                            <div className="option-box clearfix">
                                                <div className="option-item fl">
                                                    <i className="option-icon base-icon add-user-white-icon" />{" "}
                                                    <p className="option-desc">Nuevo</p>
                                                </div>{" "}
                                                <div className="option-item fl">
                                                    <i className="option-icon base-icon edit-blod-white-icon" />{" "}
                                                    <p className="option-desc">Editar</p>
                                                </div>{" "}
                                                <div className="option-item fl">
                                                    <i className="option-icon base-icon key-white-icon" />{" "}
                                                    <p className="option-desc">Contraseña</p>
                                                </div>
                                            </div>{" "}
                                            <button
                                                type="button"
                                                className="el-button el-tooltip el-icon-refresh link-hover ds-refresh-btn el-button--default"
                                                aria-describedby="el-tooltip-3708"
                                                tabIndex={0}
                                            >
                                                {/**/}
                                                {/**/}
                                                {/**/}
                                            </button>
                                        </div>
                                    </div>{" "}
                                    <div className="item">
                                        <div className="item-content device-box bg">
                                            <div className="item-title mr5">
                                                <a
                                                    href="/dealer2/business?treeLevel=1"
                                                    className="link-hover ds-title-link"
                                                >
                                                    Cantidad de dispositivos
                                                </a>
                                            </div>{" "}
                                            <div className="item-device-info">
                                                <span className="num-title">Total</span>{" "}
                                                <a
                                                    href="/dealer2/business?treeLevel=1"
                                                    className="link-line-hover link-line"
                                                >
                                                    <span className="device-total">0</span>
                                                </a>{" "}
                                                <span className="device-total-new">
                                                    <i className="el-icon-top" />
                                                    0
                                                </span>{" "}
                                                <i
                                                    className="el-tooltip el-icon-info"
                                                    aria-describedby="el-tooltip-6588"
                                                    tabIndex={0}
                                                />
                                            </div>{" "}
                                            <div className="device-option option-box clearfix">
                                                <div className="option-item fl">
                                                    <b className="option-num">0</b>{" "}
                                                    <p className="option-desc">
                                                        Importado
                                                        <i
                                                            className="el-tooltip el-icon-info protrack"
                                                            aria-describedby="el-tooltip-3073"
                                                            tabIndex={0}
                                                            style={{ display: "none" }}
                                                        />
                                                    </p>
                                                </div>{" "}
                                                <div className="option-item fl">
                                                    <b className="option-num">
                                                        <a href="/dealer2/reportactivation?type=1" className>
                                                            0
                                                        </a>{" "}
                                                        /
                                                        <a href="/dealer2/reportactivation?type=0" className>
                                                            0
                                                        </a>
                                                    </b>{" "}
                                                    <p className="option-desc">
                                                        <span>
                                                            Activación /
                                                            <br />
                                                            Sesión cerrada
                                                        </span>{" "}
                                                        <i
                                                            className="el-tooltip el-icon-info protrack"
                                                            aria-describedby="el-tooltip-256"
                                                            tabIndex={0}
                                                            style={{ display: "none" }}
                                                        />
                                                    </p>
                                                </div>{" "}
                                                <div className="option-item fl">
                                                    <b className="option-num">0</b>{" "}
                                                    <p className="option-desc">
                                                        Recargado
                                                        <i
                                                            className="el-tooltip el-icon-info protrack"
                                                            aria-describedby="el-tooltip-584"
                                                            tabIndex={0}
                                                            style={{ display: "none" }}
                                                        />
                                                    </p>
                                                </div>{" "}
                                                <div className="option-item fl mr0">
                                                    <b className="option-num">
                                                        <a href="/dealer2/business?treeLevel=2" className>
                                                            0
                                                        </a>
                                                    </b>{" "}
                                                    <p className="option-desc">
                                                        Caducidad
                                                        <i
                                                            className="el-tooltip el-icon-info protrack"
                                                            aria-describedby="el-tooltip-4742"
                                                            tabIndex={0}
                                                            style={{ display: "none" }}
                                                        />
                                                    </p>
                                                </div>
                                            </div>{" "}
                                            <button
                                                type="button"
                                                className="el-button el-tooltip el-icon-refresh ds-refresh-btn link-hover el-button--default"
                                                aria-describedby="el-tooltip-854"
                                                tabIndex={0}
                                            >
                                                {/**/}
                                                {/**/}
                                                {/**/}
                                            </button>
                                        </div>
                                    </div>{" "}
                                    <div className="item box-balance pr0">
                                        <div className="item-content balance-box bg">
                                            <div className="item-title">
                                                <a
                                                    href="/dealer2/balance"
                                                    className="link-hover ds-title-link"
                                                >
                                                    Saldo
                                                </a>
                                            </div>{" "}
                                            <div className="balance-content-box fl">
                                                <div className="balance-num-item">
                                                    <a
                                                        href="/dealer2/cardhistory?type=1"
                                                        className="link-line-hover link-line ds-title-link"
                                                    >
                                                        <b className="balance-num">0</b>
                                                    </a>{" "}
                                                    <p className="balance-desc">
                                                        <i
                                                            className="el-tooltip el-icon-info"
                                                            aria-describedby="el-tooltip-2342"
                                                            tabIndex={0}
                                                        />
                                                        Nueva tarjeta
                                                    </p>
                                                </div>{" "}
                                                <div className="balance-num-item mt20">
                                                    <a
                                                        href="/dealer2/cardhistory?type=2"
                                                        className="link-line-hover link-line ds-title-link"
                                                    >
                                                        <b className="balance-num">0</b>
                                                    </a>{" "}
                                                    <p className="balance-desc">
                                                        <i
                                                            className="el-tooltip el-icon-info"
                                                            aria-describedby="el-tooltip-5212"
                                                            tabIndex={0}
                                                        />
                                                        Tarjeta anual
                                                    </p>
                                                </div>
                                            </div>{" "}
                                            <div className="balance-content-box fl">
                                                <div className="balance-num-item">
                                                    <a
                                                        href="/dealer2/cardhistory?type=4"
                                                        className="link-line-hover link-line ds-title-link"
                                                    >
                                                        <b className="balance-num">0</b>
                                                    </a>{" "}
                                                    <p className="balance-desc">
                                                        <i
                                                            className="el-tooltip el-icon-info"
                                                            aria-describedby="el-tooltip-9697"
                                                            tabIndex={0}
                                                        />{" "}
                                                        <span title="Nueva tarjeta de por vida">
                                                            Nueva tarjeta de por vida
                                                        </span>
                                                    </p>
                                                </div>{" "}
                                                <div className="balance-num-item mt20">
                                                    <a
                                                        href="/dealer2/cardhistory?type=3"
                                                        className="link-line-hover link-line ds-title-link"
                                                    >
                                                        <b className="balance-num">0</b>
                                                    </a>{" "}
                                                    <p className="balance-desc">
                                                        <i
                                                            className="el-tooltip el-icon-info"
                                                            aria-describedby="el-tooltip-530"
                                                            tabIndex={0}
                                                        />
                                                        Tarjeta de por vida
                                                    </p>
                                                </div>
                                            </div>{" "}
                                            <button
                                                type="button"
                                                className="el-button el-tooltip el-icon-refresh link-hover ds-refresh-btn el-button--default"
                                                aria-describedby="el-tooltip-3934"
                                                tabIndex={0}
                                            >
                                                {/**/}
                                                {/**/}
                                                {/**/}
                                            </button>
                                        </div>
                                    </div>{" "}
                                    <div className="el-dialog__wrapper" style={{ display: "none" }}>
                                        <div
                                            role="dialog"
                                            aria-modal="true"
                                            aria-label="dialog"
                                            className="el-dialog"
                                            style={{ marginTop: "15vh", width: 900 }}
                                        >
                                            <div className="el-dialog__header" style={{ cursor: "move" }}>
                                                <div>
                                                    Añadir al cliente
                                                    <a href="javascript://" className="set-template">
                                                        <i className="option-btn base-icon set-icon" />
                                                        Configuración de la plantilla
                                                    </a>{" "}
                                                    <span style={{ color: "rgb(170, 170, 170)" }}>
                                                        (Plantilla predeterminada para subcuenta nueva)
                                                    </span>
                                                </div>
                                                <button
                                                    type="button"
                                                    aria-label="Close"
                                                    className="el-dialog__headerbtn"
                                                >
                                                    <i className="el-dialog__close el-icon el-icon-close" />
                                                </button>
                                            </div>
                                            {/**/}
                                            {/**/}
                                        </div>
                                    </div>{" "}
                                    <div className="el-dialog__wrapper" style={{ display: "none" }}>
                                        <div
                                            role="dialog"
                                            aria-modal="true"
                                            aria-label="Mi Perfil"
                                            className="el-dialog"
                                            style={{ marginTop: "15vh", width: 800 }}
                                        >
                                            <div className="el-dialog__header" style={{ cursor: "move" }}>
                                                <span className="el-dialog__title">Mi Perfil</span>
                                                <button
                                                    type="button"
                                                    aria-label="Close"
                                                    className="el-dialog__headerbtn"
                                                >
                                                    <i className="el-dialog__close el-icon el-icon-close" />
                                                </button>
                                            </div>
                                            {/**/}
                                            {/**/}
                                        </div>
                                    </div>{" "}
                                    <div className="el-dialog__wrapper" style={{ display: "none" }}>
                                        <div
                                            role="dialog"
                                            aria-modal="true"
                                            aria-label="Modificar la contraseña"
                                            className="el-dialog"
                                            style={{ marginTop: "15vh", width: 500 }}
                                        >
                                            <div className="el-dialog__header" style={{ cursor: "move" }}>
                                                <span className="el-dialog__title">
                                                    Modificar la contraseña
                                                </span>
                                                <button
                                                    type="button"
                                                    aria-label="Close"
                                                    className="el-dialog__headerbtn"
                                                >
                                                    <i className="el-dialog__close el-icon el-icon-close" />
                                                </button>
                                            </div>
                                            {/**/}
                                            {/**/}
                                        </div>
                                    </div>
                                </div>
                            </div>{" "}
                            <div className="dashborad-card clearfix">
                                <div className="fl t-h-w">
                                    <div
                                        className="second-item mt10 fl h-w70"
                                        style={{ height: "auto" }}
                                    >
                                        <div className="home-work">
                                            <div className="el-tabs el-tabs--top">
                                                <div className="el-tabs__header is-top">
                                                    <div className="el-tabs__nav-wrap is-scrollable is-top">
                                                        <span className="el-tabs__nav-prev is-disabled">
                                                            <i className="el-icon-arrow-left" />
                                                        </span>
                                                        <span className="el-tabs__nav-next">
                                                            <i className="el-icon-arrow-right" />
                                                        </span>
                                                        <div className="el-tabs__nav-scroll">
                                                            <div
                                                                role="tablist"
                                                                className="el-tabs__nav is-top"
                                                                style={{ transform: "translateX(0px)" }}
                                                            >
                                                                <div
                                                                    className="el-tabs__active-bar is-top"
                                                                    style={{
                                                                        width: 89,
                                                                        transform: "translateX(20px)"
                                                                    }}
                                                                />
                                                                <div
                                                                    id="tab-sale"
                                                                    aria-controls="pane-sale"
                                                                    role="tab"
                                                                    onClick={handleQuickSell}
                                                                    tabIndex={-1}
                                                                    className="el-tabs__item is-top "
                                                                >
                                                                    Venta Rápida
                                                                </div>
                                                                <div
                                                                    id="tab-batchsale"
                                                                    aria-controls="pane-batchsale"
                                                                    role="tab"
                                                                    onClick={handleBatch}
                                                                    tabIndex={-1}
                                                                    className="el-tabs__item is-top"
                                                                >
                                                                    Venta de lotes
                                                                </div>
                                                                <div
                                                                    id="tab-batchmove"
                                                                    aria-controls="pane-batchmove"
                                                                    role="tab"
                                                                    onClick={handleBatchMove}
                                                                    tabIndex={-1}
                                                                    className="el-tabs__item is-top"
                                                                >
                                                                    Movimiento por lotes
                                                                </div>
                                                                <div
                                                                    id="tab-batchrecharge"
                                                                    aria-controls="pane-batchrecharge"
                                                                    role="tab"
                                                                    onClick={handleBatchRecharge}
                                                                    tabIndex={-1}
                                                                    className="el-tabs__item is-top"
                                                                >
                                                                    Recarga por lotes
                                                                </div>
                                                                <div
                                                                    id="tab-batchtime"
                                                                    aria-controls="pane-batchtime"
                                                                    role="tab"
                                                                    onClick={handleTimeDistributor}
                                                                    tabIndex={-1}
                                                                    className="el-tabs__item is-top"
                                                                >
                                                                    Tiempo de distribuidor por lotes
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="el-tabs__content">
                                                    <div
                                                        role="tabpanel"
                                                        id="pane-sale"
                                                        aria-labelledby="tab-sale"
                                                        className="el-tab-pane" 
                                                        style={{ display: quick ? "block" : "none" }} 
                                                    >
                                                        <form className="el-form sell-form el-form--label-right">
                                                            <div
                                                                className="el-row"
                                                                style={{
                                                                    marginLeft: "-7.5px",
                                                                    marginRight: "-7.5px"
                                                                }}
                                                            >
                                                                <div
                                                                    className="el-col el-col-12"
                                                                    style={{
                                                                        paddingLeft: "7.5px",
                                                                        paddingRight: "7.5px"
                                                                    }}
                                                                >
                                                                    <div className="el-form-item field-customer is-required">
                                                                        <label
                                                                            className="el-form-item__label"
                                                                            style={{ width: 130 }}
                                                                        >
                                                                            Meta Cliente
                                                                        </label>
                                                                        <div
                                                                            className="el-form-item__content"
                                                                            style={{ marginLeft: 130 }}
                                                                        >
                                                                            <div className="pr" style={{ maxWidth: 220 }}>
                                                                                <div className="user-tree-select">
                                                                                    <div data-tips>
                                                                                        <div
                                                                                            aria-haspopup="listbox"
                                                                                            role="combobox"
                                                                                            aria-owns="el-autocomplete-5148"
                                                                                            className="el-autocomplete"
                                                                                        >
                                                                                            <div className="el-input el-input-group el-input-group--append el-input--suffix">
                                                                                                {/**/}
                                                                                                <input
                                                                                                    type="text"
                                                                                                    autoComplete="off"
                                                                                                    valuekey="value"
                                                                                                    popperclass="user-autocomplete"
                                                                                                    placeholder="Por favor Seleccionar"
                                                                                                    fetchsuggestions="function () { [native code] }"
                                                                                                    debounce={300}
                                                                                                    placement="bottom-start"
                                                                                                    popperappendtobody="true"
                                                                                                    className="el-input__inner"
                                                                                                    role="textbox"
                                                                                                    aria-autocomplete="list"
                                                                                                    aria-controls="id"
                                                                                                    aria-activedescendant="el-autocomplete-5148-item--1"
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
                                                                                                            marginRight: "-6px"
                                                                                                        }}
                                                                                                    >
                                                                                                        <ul
                                                                                                            className="el-scrollbar__view el-autocomplete-suggestion__list"
                                                                                                            role="listbox"
                                                                                                            id="el-autocomplete-5148"
                                                                                                        />
                                                                                                    </div>
                                                                                                    <div className="el-scrollbar__bar is-horizontal">
                                                                                                        <div
                                                                                                            className="el-scrollbar__thumb"
                                                                                                            style={{
                                                                                                                transform: "translateX(0%)"
                                                                                                            }}
                                                                                                        />
                                                                                                    </div>
                                                                                                    <div className="el-scrollbar__bar is-vertical">
                                                                                                        <div
                                                                                                            className="el-scrollbar__thumb"
                                                                                                            style={{
                                                                                                                transform: "translateY(0%)"
                                                                                                            }}
                                                                                                        />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>{" "}
                                                                                    {/**/}
                                                                                </div>{" "}
                                                                                <div className="adduser">
                                                                                    <em>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="el-button add-new el-button--default"
                                                                                        >
                                                                                            {/**/}
                                                                                            <i className="add-user-icon base-icon" />
                                                                                            <span>Nuevo</span>
                                                                                        </button>
                                                                                    </em>{" "}
                                                                                    <div
                                                                                        className="el-dialog__wrapper"
                                                                                        style={{ display: "none" }}
                                                                                    >
                                                                                        <div
                                                                                            role="dialog"
                                                                                            aria-modal="true"
                                                                                            aria-label="dialog"
                                                                                            className="el-dialog"
                                                                                            style={{
                                                                                                marginTop: "15vh",
                                                                                                width: 900
                                                                                            }}
                                                                                        >
                                                                                            <div
                                                                                                className="el-dialog__header"
                                                                                                style={{ cursor: "move" }}
                                                                                            >
                                                                                                <div>
                                                                                                    Añadir al cliente
                                                                                                    <a
                                                                                                        href="javascript://"
                                                                                                        className="set-template"
                                                                                                    >
                                                                                                        <i className="option-btn base-icon set-icon" />
                                                                                                        Configuración de la plantilla
                                                                                                    </a>{" "}
                                                                                                    <span
                                                                                                        style={{
                                                                                                            color: "rgb(170, 170, 170)"
                                                                                                        }}
                                                                                                    >
                                                                                                        (Plantilla predeterminada para
                                                                                                        subcuenta nueva)
                                                                                                    </span>
                                                                                                </div>
                                                                                                <button
                                                                                                    type="button"
                                                                                                    aria-label="Close"
                                                                                                    className="el-dialog__headerbtn"
                                                                                                >
                                                                                                    <i className="el-dialog__close el-icon el-icon-close" />
                                                                                                </button>
                                                                                            </div>
                                                                                            {/**/}
                                                                                            {/**/}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/**/}
                                                                        </div>
                                                                    </div>
                                                                </div>{" "}
                                                                <div
                                                                    className="el-col el-col-12"
                                                                    style={{
                                                                        paddingLeft: "7.5px",
                                                                        paddingRight: "7.5px"
                                                                    }}
                                                                >
                                                                    <div className="el-form-item is-required">
                                                                        <label
                                                                            className="el-form-item__label"
                                                                            style={{ width: 130 }}
                                                                        >
                                                                            IMEI
                                                                        </label>
                                                                        <div
                                                                            className="el-form-item__content"
                                                                            style={{ marginLeft: 130 }}
                                                                        >
                                                                            <div>
                                                                                <div className="el-input el-input-group el-input-group--append">
                                                                                    {/**/}
                                                                                    <input
                                                                                        type="text"
                                                                                        autoComplete="off"
                                                                                        placeholder="IMEI"
                                                                                        className="el-input__inner"
                                                                                    />
                                                                                    {/**/}
                                                                                    {/**/}
                                                                                    <div className="el-input-group__append">
                                                                                        <button
                                                                                            type="button"
                                                                                            className="el-button el-button--default"
                                                                                        >
                                                                                            {/**/}
                                                                                            <i className="el-icon-search" />
                                                                                            {/**/}
                                                                                        </button>
                                                                                    </div>
                                                                                    {/**/}
                                                                                </div>{" "}
                                                                                <div
                                                                                    className="el-dialog__wrapper"
                                                                                    closed="function () { [native code] }"
                                                                                    style={{ display: "none" }}
                                                                                >
                                                                                    <div
                                                                                        role="dialog"
                                                                                        aria-modal="true"
                                                                                        aria-label="IMEI"
                                                                                        className="el-dialog"
                                                                                        style={{
                                                                                            marginTop: "15vh",
                                                                                            width: 500
                                                                                        }}
                                                                                    >
                                                                                        <div
                                                                                            className="el-dialog__header"
                                                                                            style={{ cursor: "move" }}
                                                                                        >
                                                                                            <span className="el-dialog__title">
                                                                                                IMEI
                                                                                            </span>
                                                                                            <button
                                                                                                type="button"
                                                                                                aria-label="Close"
                                                                                                className="el-dialog__headerbtn"
                                                                                            >
                                                                                                <i className="el-dialog__close el-icon el-icon-close" />
                                                                                            </button>
                                                                                        </div>
                                                                                        {/**/}
                                                                                        {/**/}
                                                                                    </div>
                                                                                </div>
                                                                            </div>{" "}
                                                                            {/**/}
                                                                            {/**/}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>{" "}
                                                            <div
                                                                className="el-row"
                                                                style={{
                                                                    marginLeft: "-7.5px",
                                                                    marginRight: "-7.5px"
                                                                }}
                                                            >
                                                                <div
                                                                    className="el-col el-col-12"
                                                                    style={{
                                                                        paddingLeft: "7.5px",
                                                                        paddingRight: "7.5px"
                                                                    }}
                                                                >
                                                                    <div className="el-form-item is-required">
                                                                        <label
                                                                            htmlFor="name"
                                                                            className="el-form-item__label"
                                                                            style={{ width: 130 }}
                                                                        >
                                                                            Objetivo
                                                                        </label>
                                                                        <div
                                                                            className="el-form-item__content"
                                                                            style={{ marginLeft: 130 }}
                                                                        >
                                                                            <div className="el-input">
                                                                                {/**/}
                                                                                <input
                                                                                    type="text"
                                                                                    autoComplete="off"
                                                                                    className="el-input__inner"
                                                                                />
                                                                                {/**/}
                                                                                {/**/}
                                                                                {/**/}
                                                                                {/**/}
                                                                            </div>
                                                                            {/**/}
                                                                        </div>
                                                                    </div>
                                                                </div>{" "}
                                                                <div
                                                                    className="el-col el-col-12"
                                                                    style={{
                                                                        paddingLeft: "7.5px",
                                                                        paddingRight: "7.5px"
                                                                    }}
                                                                >
                                                                    <div className="el-form-item">
                                                                        <label
                                                                            htmlFor="customername"
                                                                            className="el-form-item__label"
                                                                            style={{ width: 130 }}
                                                                        >
                                                                            Pertenece a
                                                                        </label>
                                                                        <div
                                                                            className="el-form-item__content"
                                                                            style={{ marginLeft: 130 }}
                                                                        >
                                                                            <div data-tips="-" className="txt-ellipsis">
                                                                                -
                                                                            </div>
                                                                            {/**/}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>{" "}
                                                            <div
                                                                className="el-row"
                                                                style={{
                                                                    marginLeft: "-7.5px",
                                                                    marginRight: "-7.5px"
                                                                }}
                                                            >
                                                                <div
                                                                    className="el-col el-col-12"
                                                                    style={{
                                                                        paddingLeft: "7.5px",
                                                                        paddingRight: "7.5px"
                                                                    }}
                                                                >
                                                                    <div className="el-form-item">
                                                                        <label
                                                                            htmlFor="simcard"
                                                                            className="el-form-item__label"
                                                                            style={{ width: 130 }}
                                                                        >
                                                                            Sim Card
                                                                        </label>
                                                                        <div
                                                                            className="el-form-item__content"
                                                                            style={{ marginLeft: 130 }}
                                                                        >
                                                                            <div className="el-input el-input--suffix">
                                                                                {/**/}
                                                                                <input
                                                                                    type="text"
                                                                                    autoComplete="off"
                                                                                    className="el-input__inner"
                                                                                />
                                                                                {/**/}
                                                                                {/**/}
                                                                                {/**/}
                                                                                {/**/}
                                                                            </div>
                                                                            {/**/}
                                                                        </div>
                                                                    </div>
                                                                </div>{" "}
                                                                <div
                                                                    className="el-col el-col-12"
                                                                    style={{
                                                                        paddingLeft: "7.5px",
                                                                        paddingRight: "7.5px"
                                                                    }}
                                                                >
                                                                    <div className="el-form-item is-required">
                                                                        <label
                                                                            htmlFor="distributortime"
                                                                            className="el-form-item__label"
                                                                            style={{ width: 130 }}
                                                                        >
                                                                            Usuario expirado
                                                                        </label>
                                                                        <div
                                                                            className="el-form-item__content"
                                                                            style={{ marginLeft: 130 }}
                                                                        >
                                                                            <div
                                                                                className="el-date-editor el-input el-input--prefix el-input--suffix el-date-editor--date"
                                                                                style={{ width: "100%" }}
                                                                            >
                                                                                {/**/}
                                                                                <input
                                                                                    type="text"
                                                                                    autoComplete="off"
                                                                                    name
                                                                                    className="el-input__inner"
                                                                                />
                                                                                <span className="el-input__prefix">
                                                                                    <i className="el-input__icon el-icon-date" />
                                                                                    {/**/}
                                                                                </span>
                                                                                <span className="el-input__suffix">
                                                                                    <span className="el-input__suffix-inner">
                                                                                        <i className="el-input__icon" />
                                                                                        {/**/}
                                                                                        {/**/}
                                                                                        {/**/}
                                                                                        {/**/}
                                                                                    </span>
                                                                                    {/**/}
                                                                                </span>
                                                                                {/**/}
                                                                                {/**/}
                                                                            </div>
                                                                            {/**/}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>{" "}
                                                            <div className="el-form-item">
                                                                <label
                                                                    htmlFor="remark"
                                                                    className="el-form-item__label"
                                                                    style={{ width: 130 }}
                                                                >
                                                                    Observación
                                                                </label>
                                                                <div
                                                                    className="el-form-item__content"
                                                                    style={{ marginLeft: 130 }}
                                                                >
                                                                    <div className="el-textarea el-input--suffix">
                                                                        <textarea
                                                                            autoComplete="off"
                                                                            className="el-textarea__inner"
                                                                            style={{ minHeight: 33 }}
                                                                            defaultValue={""}
                                                                        />
                                                                        {/**/}
                                                                    </div>
                                                                    {/**/}
                                                                </div>
                                                            </div>{" "}
                                                            <div className="el-form-item">
                                                                {/**/}
                                                                <div
                                                                    className="el-form-item__content"
                                                                    style={{ marginLeft: 130 }}
                                                                >
                                                                    <button
                                                                        type="submit"
                                                                        className="el-button el-button--primary"
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
                                                        </form>
                                                    </div>{""}
                                                    <div
                                                        role="tabpanel"
                                                        aria-hidden="true"
                                                        id="pane-batchsale"
                                                        aria-labelledby="tab-batchsale"
                                                        className="el-tab-pane"
                                                        style={{ display: batch ? "block" : "none" }} 
                                                    >
                                                        <form className="el-form el-form--label-right">
                                                            <div className="el-form-item is-required">
                                                                <label
                                                                    className="el-form-item__label"
                                                                    style={{ width: 150 }}
                                                                >
                                                                    Meta Cliente
                                                                </label>
                                                                <div
                                                                    className="el-form-item__content"
                                                                    style={{ marginLeft: 150 }}
                                                                >
                                                                    <div
                                                                        className="user-tree-select"
                                                                        style={{ width: 264 }}
                                                                    >
                                                                        <div data-tips>
                                                                            <div
                                                                                aria-haspopup="listbox"
                                                                                role="combobox"
                                                                                aria-owns="el-autocomplete-1186"
                                                                                className="el-autocomplete"
                                                                            >
                                                                                <div className="el-input el-input-group el-input-group--append el-input--suffix">
                                                                                    {/**/}
                                                                                    <input
                                                                                        type="text"
                                                                                        autoComplete="off"
                                                                                        valuekey="value"
                                                                                        popperclass="user-autocomplete"
                                                                                        placeholder="Por favor Seleccionar"
                                                                                        fetchsuggestions="function () { [native code] }"
                                                                                        debounce={300}
                                                                                        placement="bottom-start"
                                                                                        popperappendtobody="true"
                                                                                        className="el-input__inner"
                                                                                        role="textbox"
                                                                                        aria-autocomplete="list"
                                                                                        aria-controls="id"
                                                                                        aria-activedescendant="el-autocomplete-1186-item--1"
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
                                                                                                marginRight: "-6px"
                                                                                            }}
                                                                                        >
                                                                                            <ul
                                                                                                className="el-scrollbar__view el-autocomplete-suggestion__list"
                                                                                                role="listbox"
                                                                                                id="el-autocomplete-1186"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="el-scrollbar__bar is-horizontal">
                                                                                            <div
                                                                                                className="el-scrollbar__thumb"
                                                                                                style={{
                                                                                                    transform: "translateX(0%)"
                                                                                                }}
                                                                                            />
                                                                                        </div>
                                                                                        <div className="el-scrollbar__bar is-vertical">
                                                                                            <div
                                                                                                className="el-scrollbar__thumb"
                                                                                                style={{
                                                                                                    transform: "translateY(0%)"
                                                                                                }}
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
                                                                <label
                                                                    htmlFor="distributortime"
                                                                    className="el-form-item__label"
                                                                    style={{ width: 150 }}
                                                                >
                                                                    Usuario expirado
                                                                </label>
                                                                <div
                                                                    className="el-form-item__content"
                                                                    style={{ marginLeft: 150 }}
                                                                >
                                                                    <div className="el-date-editor el-input el-input--prefix el-input--suffix el-date-editor--date">
                                                                        {/**/}
                                                                        <input
                                                                            type="text"
                                                                            autoComplete="off"
                                                                            name
                                                                            className="el-input__inner"
                                                                        />
                                                                        <span className="el-input__prefix">
                                                                            <i className="el-input__icon el-icon-date" />
                                                                            {/**/}
                                                                        </span>
                                                                        <span className="el-input__suffix">
                                                                            <span className="el-input__suffix-inner">
                                                                                <i className="el-input__icon" />
                                                                                {/**/}
                                                                                {/**/}
                                                                                {/**/}
                                                                                {/**/}
                                                                            </span>
                                                                            {/**/}
                                                                        </span>
                                                                        {/**/}
                                                                        {/**/}
                                                                    </div>
                                                                    {/**/}
                                                                </div>
                                                            </div>{" "}
                                                            <div className="el-form-item is-required">
                                                                <label
                                                                    htmlFor="imeis"
                                                                    className="el-form-item__label"
                                                                    style={{ width: 150 }}
                                                                >
                                                                    IMEI
                                                                </label>
                                                                <div
                                                                    className="el-form-item__content"
                                                                    style={{ marginLeft: 150 }}
                                                                >
                                                                    <div className="fl">
                                                                        <div
                                                                            className="el-textarea"
                                                                            style={{ width: 220 }}
                                                                        >
                                                                            <textarea
                                                                                autoComplete="off"
                                                                                rows={4}
                                                                                placeholder="Un IMEI, una línea."
                                                                                className="el-textarea__inner pr20"
                                                                                style={{ minHeight: 33 }}
                                                                                defaultValue={""}
                                                                            />
                                                                            {/**/}
                                                                            <i className="hide input-textarea-clear el-input__icon el-icon-circle-close el-input__clear" />
                                                                        </div>{" "}
                                                                        <p className="desc">
                                                                            Un lote para 200 IMEI como máximo.
                                                                        </p>
                                                                    </div>{" "}
                                                                    <div className="fl">
                                                                        <span>
                                                                            <div
                                                                                role="tooltip"
                                                                                id="el-popover-5379"
                                                                                aria-hidden="true"
                                                                                className="el-popover el-popper imei-list-popover"
                                                                                tabIndex={0}
                                                                                style={{ width: 400, display: "none" }}
                                                                            >
                                                                                {/**/}
                                                                                <div className="el-tabs el-tabs--top">
                                                                                    <div className="el-tabs__header is-top">
                                                                                        <div className="el-tabs__nav-wrap is-top">
                                                                                            <div className="el-tabs__nav-scroll">
                                                                                                <div
                                                                                                    role="tablist"
                                                                                                    className="el-tabs__nav is-top"
                                                                                                    style={{
                                                                                                        transform: "translateX(0px)"
                                                                                                    }}
                                                                                                >
                                                                                                    <div
                                                                                                        className="el-tabs__active-bar is-top"
                                                                                                        style={{
                                                                                                            width: 0,
                                                                                                            transform: "translateX(20px)"
                                                                                                        }}
                                                                                                    />
                                                                                                    <div
                                                                                                        id="tab-0"
                                                                                                        aria-controls="pane-0"
                                                                                                        role="tab"
                                                                                                        aria-selected="true"
                                                                                                        tabIndex={0}
                                                                                                        className="el-tabs__item is-top is-active"
                                                                                                    >
                                                                                                        Todos(0)
                                                                                                    </div>
                                                                                                    <div
                                                                                                        id="tab-1"
                                                                                                        aria-controls="pane-1"
                                                                                                        role="tab"
                                                                                                        tabIndex={-1}
                                                                                                        className="el-tabs__item is-top"
                                                                                                    >
                                                                                                        Normal(0)
                                                                                                    </div>
                                                                                                    <div
                                                                                                        id="tab-3"
                                                                                                        aria-controls="pane-3"
                                                                                                        role="tab"
                                                                                                        tabIndex={-1}
                                                                                                        className="el-tabs__item is-top"
                                                                                                    >
                                                                                                        Repetido(0)
                                                                                                    </div>
                                                                                                    <div
                                                                                                        id="tab-2"
                                                                                                        aria-controls="pane-2"
                                                                                                        role="tab"
                                                                                                        tabIndex={-1}
                                                                                                        className="el-tabs__item is-top"
                                                                                                    >
                                                                                                        Error(0)
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="el-tabs__content">
                                                                                        <div
                                                                                            role="tabpanel"
                                                                                            id="pane-0"
                                                                                            aria-labelledby="tab-0"
                                                                                            className="el-tab-pane"
                                                                                        />{" "}
                                                                                        <div
                                                                                            role="tabpanel"
                                                                                            aria-hidden="true"
                                                                                            id="pane-1"
                                                                                            aria-labelledby="tab-1"
                                                                                            className="el-tab-pane"
                                                                                            style={{ display: "none" }}
                                                                                        />{" "}
                                                                                        <div
                                                                                            role="tabpanel"
                                                                                            aria-hidden="true"
                                                                                            id="pane-3"
                                                                                            aria-labelledby="tab-3"
                                                                                            className="el-tab-pane"
                                                                                            style={{ display: "none" }}
                                                                                        />{" "}
                                                                                        <div
                                                                                            role="tabpanel"
                                                                                            aria-hidden="true"
                                                                                            id="pane-2"
                                                                                            aria-labelledby="tab-2"
                                                                                            className="el-tab-pane"
                                                                                            style={{ display: "none" }}
                                                                                        />
                                                                                    </div>
                                                                                </div>{" "}
                                                                                <button
                                                                                    type="button"
                                                                                    className="el-button popver-close-btn el-button--info is-round"
                                                                                >
                                                                                    {/**/}
                                                                                    <i className="el-icon-close" />
                                                                                    {/**/}
                                                                                </button>{" "}
                                                                                <div
                                                                                    className="el-table el-table--fit el-table--fluid-height el-table--scrollable-x el-table--enable-row-hover"
                                                                                    style={{ maxHeight: 300 }}
                                                                                >
                                                                                    <div className="hidden-columns">
                                                                                        <div /> <div /> <div />
                                                                                    </div>
                                                                                    <div className="el-table__header-wrapper">
                                                                                        <table
                                                                                            cellSpacing={0}
                                                                                            cellPadding={0}
                                                                                            border={0}
                                                                                            className="el-table__header"
                                                                                            style={{ width: 400 }}
                                                                                        >
                                                                                            <colgroup>
                                                                                                <col
                                                                                                    name="el-table_4_column_14"
                                                                                                    width={150}
                                                                                                />
                                                                                                <col
                                                                                                    name="el-table_4_column_15"
                                                                                                    width={100}
                                                                                                />
                                                                                                <col
                                                                                                    name="el-table_4_column_16"
                                                                                                    width={150}
                                                                                                />
                                                                                                <col name="gutter" width={0} />
                                                                                            </colgroup>
                                                                                            <thead className="has-gutter">
                                                                                                <tr className>
                                                                                                    <th
                                                                                                        colSpan={1}
                                                                                                        rowSpan={1}
                                                                                                        className="el-table_4_column_14     is-leaf el-table__cell"
                                                                                                    >
                                                                                                        <div className="cell">IMEI</div>
                                                                                                    </th>
                                                                                                    <th
                                                                                                        colSpan={1}
                                                                                                        rowSpan={1}
                                                                                                        className="el-table_4_column_15     is-leaf el-table__cell"
                                                                                                    >
                                                                                                        <div className="cell">Tipo</div>
                                                                                                    </th>
                                                                                                    <th
                                                                                                        colSpan={1}
                                                                                                        rowSpan={1}
                                                                                                        className="el-table_4_column_16     is-leaf el-table__cell"
                                                                                                    >
                                                                                                        <div className="cell">
                                                                                                            Cliente Senior
                                                                                                        </div>
                                                                                                    </th>
                                                                                                    <th
                                                                                                        className="el-table__cell gutter"
                                                                                                        style={{
                                                                                                            width: 0,
                                                                                                            display: "none"
                                                                                                        }}
                                                                                                    />
                                                                                                </tr>
                                                                                            </thead>
                                                                                        </table>
                                                                                    </div>
                                                                                    <div
                                                                                        className="el-table__body-wrapper is-scrolling-left"
                                                                                        style={{ maxHeight: 300 }}
                                                                                    >
                                                                                        <table
                                                                                            cellSpacing={0}
                                                                                            cellPadding={0}
                                                                                            border={0}
                                                                                            className="el-table__body"
                                                                                            style={{ width: 400 }}
                                                                                        >
                                                                                            <colgroup>
                                                                                                <col
                                                                                                    name="el-table_4_column_14"
                                                                                                    width={150}
                                                                                                />
                                                                                                <col
                                                                                                    name="el-table_4_column_15"
                                                                                                    width={100}
                                                                                                />
                                                                                                <col
                                                                                                    name="el-table_4_column_16"
                                                                                                    width={150}
                                                                                                />
                                                                                            </colgroup>
                                                                                            <tbody>{/**/}</tbody>
                                                                                        </table>
                                                                                        <div
                                                                                            className="el-table__empty-block"
                                                                                            style={{ height: "100%", width: 400 }}
                                                                                        >
                                                                                            <span className="el-table__empty-text">
                                                                                                Sin Datos
                                                                                            </span>
                                                                                        </div>
                                                                                        {/**/}
                                                                                    </div>
                                                                                    {/**/}
                                                                                    {/**/}
                                                                                    {/**/}
                                                                                    {/**/}
                                                                                    <div
                                                                                        className="el-table__column-resize-proxy"
                                                                                        style={{ display: "none" }}
                                                                                    />
                                                                                </div>{" "}
                                                                                <div
                                                                                    className="el-dialog__wrapper"
                                                                                    style={{ display: "none" }}
                                                                                >
                                                                                    <div
                                                                                        role="dialog"
                                                                                        aria-modal="true"
                                                                                        aria-label="Cliente Senior"
                                                                                        className="el-dialog"
                                                                                        style={{
                                                                                            marginTop: "15vh",
                                                                                            width: 600
                                                                                        }}
                                                                                    >
                                                                                        <div
                                                                                            className="el-dialog__header"
                                                                                            style={{ cursor: "move" }}
                                                                                        >
                                                                                            <span className="el-dialog__title">
                                                                                                Cliente Senior
                                                                                            </span>
                                                                                            <button
                                                                                                type="button"
                                                                                                aria-label="Close"
                                                                                                className="el-dialog__headerbtn"
                                                                                            >
                                                                                                <i className="el-dialog__close el-icon el-icon-close" />
                                                                                            </button>
                                                                                        </div>
                                                                                        {/**/}
                                                                                        {/**/}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <span className="el-popover__reference-wrapper">
                                                                                <button
                                                                                    type="button"
                                                                                    className="el-button check-imei-btn el-button--default el-popover__reference"
                                                                                    aria-describedby="el-popover-5379"
                                                                                    tabIndex={0}
                                                                                >
                                                                                    {/**/}
                                                                                    {/**/}
                                                                                    <span>Comprobar</span>
                                                                                </button>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                    {/**/}
                                                                </div>
                                                            </div>{" "}
                                                            <div className="el-form-item">
                                                                {/**/}
                                                                <div
                                                                    className="el-form-item__content"
                                                                    style={{ marginLeft: 150 }}
                                                                >
                                                                    <button
                                                                        type="submit"
                                                                        className="el-button el-button--primary"
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
                                                        </form>
                                                    </div>{" "}
                                                    <div
                                                        role="tabpanel"
                                                        aria-hidden="true"
                                                        id="pane-batchmove"
                                                        aria-labelledby="tab-batchmove"
                                                        className="el-tab-pane"
                                                        style={{ display: batchMove ? "block" : "none" }} 
                                                    >
                                                        <form className="el-form batch-move-form el-form--label-right">
                                                            <div className="el-form-item is-required">
                                                                <label
                                                                    className="el-form-item__label"
                                                                    style={{ width: 150 }}
                                                                >
                                                                    Meta Cliente
                                                                </label>
                                                                <div
                                                                    className="el-form-item__content"
                                                                    style={{ marginLeft: 150 }}
                                                                >
                                                                    <div
                                                                        className="user-tree-select"
                                                                        style={{ width: 264 }}
                                                                    >
                                                                        <div data-tips>
                                                                            <div
                                                                                aria-haspopup="listbox"
                                                                                role="combobox"
                                                                                aria-owns="el-autocomplete-9280"
                                                                                className="el-autocomplete"
                                                                            >
                                                                                <div className="el-input el-input-group el-input-group--append el-input--suffix">
                                                                                    {/**/}
                                                                                    <input
                                                                                        type="text"
                                                                                        autoComplete="off"
                                                                                        valuekey="value"
                                                                                        popperclass="user-autocomplete"
                                                                                        placeholder="Por favor Seleccionar"
                                                                                        fetchsuggestions="function () { [native code] }"
                                                                                        debounce={300}
                                                                                        placement="bottom-start"
                                                                                        popperappendtobody="true"
                                                                                        className="el-input__inner"
                                                                                        role="textbox"
                                                                                        aria-autocomplete="list"
                                                                                        aria-controls="id"
                                                                                        aria-activedescendant="el-autocomplete-9280-item--1"
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
                                                                                                marginRight: "-6px"
                                                                                            }}
                                                                                        >
                                                                                            <ul
                                                                                                className="el-scrollbar__view el-autocomplete-suggestion__list"
                                                                                                role="listbox"
                                                                                                id="el-autocomplete-9280"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="el-scrollbar__bar is-horizontal">
                                                                                            <div
                                                                                                className="el-scrollbar__thumb"
                                                                                                style={{
                                                                                                    transform: "translateX(0%)"
                                                                                                }}
                                                                                            />
                                                                                        </div>
                                                                                        <div className="el-scrollbar__bar is-vertical">
                                                                                            <div
                                                                                                className="el-scrollbar__thumb"
                                                                                                style={{
                                                                                                    transform: "translateY(0%)"
                                                                                                }}
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
                                                                <label
                                                                    htmlFor="imeis"
                                                                    className="el-form-item__label"
                                                                    style={{ width: 150 }}
                                                                >
                                                                    IMEI
                                                                </label>
                                                                <div
                                                                    className="el-form-item__content"
                                                                    style={{ marginLeft: 150 }}
                                                                >
                                                                    <div className="fl">
                                                                        <div
                                                                            className="el-textarea"
                                                                            style={{ width: 220 }}
                                                                        >
                                                                            <textarea
                                                                                autoComplete="off"
                                                                                placeholder="Un IMEI, una línea."
                                                                                rows={5}
                                                                                className="el-textarea__inner pr20"
                                                                                style={{ minHeight: 33 }}
                                                                                defaultValue={""}
                                                                            />
                                                                            {/**/}
                                                                            <i className="hide input-textarea-clear el-input__icon el-icon-circle-close el-input__clear" />
                                                                        </div>{" "}
                                                                        <p className="desc">
                                                                            Un lote para 200 IMEI como máximo.
                                                                        </p>
                                                                    </div>{" "}
                                                                    <div className="fl">
                                                                        <span>
                                                                            <div
                                                                                role="tooltip"
                                                                                id="el-popover-8533"
                                                                                aria-hidden="true"
                                                                                className="el-popover el-popper imei-list-popover"
                                                                                tabIndex={0}
                                                                                style={{ width: 400, display: "none" }}
                                                                            >
                                                                                {/**/}
                                                                                <div className="el-tabs el-tabs--top">
                                                                                    <div className="el-tabs__header is-top">
                                                                                        <div className="el-tabs__nav-wrap is-top">
                                                                                            <div className="el-tabs__nav-scroll">
                                                                                                <div
                                                                                                    role="tablist"
                                                                                                    className="el-tabs__nav is-top"
                                                                                                    style={{
                                                                                                        transform: "translateX(0px)"
                                                                                                    }}
                                                                                                >
                                                                                                    <div
                                                                                                        className="el-tabs__active-bar is-top"
                                                                                                        style={{
                                                                                                            width: 0,
                                                                                                            transform: "translateX(20px)"
                                                                                                        }}
                                                                                                    />
                                                                                                    <div
                                                                                                        id="tab-0"
                                                                                                        aria-controls="pane-0"
                                                                                                        role="tab"
                                                                                                        aria-selected="true"
                                                                                                        tabIndex={0}
                                                                                                        className="el-tabs__item is-top is-active"
                                                                                                    >
                                                                                                        Todos(0)
                                                                                                    </div>
                                                                                                    <div
                                                                                                        id="tab-1"
                                                                                                        aria-controls="pane-1"
                                                                                                        role="tab"
                                                                                                        tabIndex={-1}
                                                                                                        className="el-tabs__item is-top"
                                                                                                    >
                                                                                                        Normal(0)
                                                                                                    </div>
                                                                                                    <div
                                                                                                        id="tab-3"
                                                                                                        aria-controls="pane-3"
                                                                                                        role="tab"
                                                                                                        tabIndex={-1}
                                                                                                        className="el-tabs__item is-top"
                                                                                                    >
                                                                                                        Repetido(0)
                                                                                                    </div>
                                                                                                    <div
                                                                                                        id="tab-2"
                                                                                                        aria-controls="pane-2"
                                                                                                        role="tab"
                                                                                                        tabIndex={-1}
                                                                                                        className="el-tabs__item is-top"
                                                                                                    >
                                                                                                        Error(0)
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="el-tabs__content">
                                                                                        <div
                                                                                            role="tabpanel"
                                                                                            id="pane-0"
                                                                                            aria-labelledby="tab-0"
                                                                                            className="el-tab-pane"
                                                                                        />{" "}
                                                                                        <div
                                                                                            role="tabpanel"
                                                                                            aria-hidden="true"
                                                                                            id="pane-1"
                                                                                            aria-labelledby="tab-1"
                                                                                            className="el-tab-pane"
                                                                                            style={{ display: "none" }}
                                                                                        />{" "}
                                                                                        <div
                                                                                            role="tabpanel"
                                                                                            aria-hidden="true"
                                                                                            id="pane-3"
                                                                                            aria-labelledby="tab-3"
                                                                                            className="el-tab-pane"
                                                                                            style={{ display: "none" }}
                                                                                        />{" "}
                                                                                        <div
                                                                                            role="tabpanel"
                                                                                            aria-hidden="true"
                                                                                            id="pane-2"
                                                                                            aria-labelledby="tab-2"
                                                                                            className="el-tab-pane"
                                                                                            style={{ display: "none" }}
                                                                                        />
                                                                                    </div>
                                                                                </div>{" "}
                                                                                <button
                                                                                    type="button"
                                                                                    className="el-button popver-close-btn el-button--info is-round"
                                                                                >
                                                                                    {/**/}
                                                                                    <i className="el-icon-close" />
                                                                                    {/**/}
                                                                                </button>{" "}
                                                                                <div
                                                                                    className="el-table el-table--fit el-table--fluid-height el-table--scrollable-x el-table--enable-row-hover"
                                                                                    style={{ maxHeight: 300 }}
                                                                                >
                                                                                    <div className="hidden-columns">
                                                                                        <div /> <div /> <div />
                                                                                    </div>
                                                                                    <div className="el-table__header-wrapper">
                                                                                        <table
                                                                                            cellSpacing={0}
                                                                                            cellPadding={0}
                                                                                            border={0}
                                                                                            className="el-table__header"
                                                                                            style={{ width: 400 }}
                                                                                        >
                                                                                            <colgroup>
                                                                                                <col
                                                                                                    name="el-table_5_column_17"
                                                                                                    width={150}
                                                                                                />
                                                                                                <col
                                                                                                    name="el-table_5_column_18"
                                                                                                    width={100}
                                                                                                />
                                                                                                <col
                                                                                                    name="el-table_5_column_19"
                                                                                                    width={150}
                                                                                                />
                                                                                                <col name="gutter" width={0} />
                                                                                            </colgroup>
                                                                                            <thead className="has-gutter">
                                                                                                <tr className>
                                                                                                    <th
                                                                                                        colSpan={1}
                                                                                                        rowSpan={1}
                                                                                                        className="el-table_5_column_17     is-leaf el-table__cell"
                                                                                                    >
                                                                                                        <div className="cell">IMEI</div>
                                                                                                    </th>
                                                                                                    <th
                                                                                                        colSpan={1}
                                                                                                        rowSpan={1}
                                                                                                        className="el-table_5_column_18     is-leaf el-table__cell"
                                                                                                    >
                                                                                                        <div className="cell">Tipo</div>
                                                                                                    </th>
                                                                                                    <th
                                                                                                        colSpan={1}
                                                                                                        rowSpan={1}
                                                                                                        className="el-table_5_column_19     is-leaf el-table__cell"
                                                                                                    >
                                                                                                        <div className="cell">
                                                                                                            Cliente Senior
                                                                                                        </div>
                                                                                                    </th>
                                                                                                    <th
                                                                                                        className="el-table__cell gutter"
                                                                                                        style={{
                                                                                                            width: 0,
                                                                                                            display: "none"
                                                                                                        }}
                                                                                                    />
                                                                                                </tr>
                                                                                            </thead>
                                                                                        </table>
                                                                                    </div>
                                                                                    <div
                                                                                        className="el-table__body-wrapper is-scrolling-left"
                                                                                        style={{ maxHeight: 300 }}
                                                                                    >
                                                                                        <table
                                                                                            cellSpacing={0}
                                                                                            cellPadding={0}
                                                                                            border={0}
                                                                                            className="el-table__body"
                                                                                            style={{ width: 400 }}
                                                                                        >
                                                                                            <colgroup>
                                                                                                <col
                                                                                                    name="el-table_5_column_17"
                                                                                                    width={150}
                                                                                                />
                                                                                                <col
                                                                                                    name="el-table_5_column_18"
                                                                                                    width={100}
                                                                                                />
                                                                                                <col
                                                                                                    name="el-table_5_column_19"
                                                                                                    width={150}
                                                                                                />
                                                                                            </colgroup>
                                                                                            <tbody>{/**/}</tbody>
                                                                                        </table>
                                                                                        <div
                                                                                            className="el-table__empty-block"
                                                                                            style={{ height: "100%", width: 400 }}
                                                                                        >
                                                                                            <span className="el-table__empty-text">
                                                                                                Sin Datos
                                                                                            </span>
                                                                                        </div>
                                                                                        {/**/}
                                                                                    </div>
                                                                                    {/**/}
                                                                                    {/**/}
                                                                                    {/**/}
                                                                                    {/**/}
                                                                                    <div
                                                                                        className="el-table__column-resize-proxy"
                                                                                        style={{ display: "none" }}
                                                                                    />
                                                                                </div>{" "}
                                                                                <div
                                                                                    className="el-dialog__wrapper"
                                                                                    style={{ display: "none" }}
                                                                                >
                                                                                    <div
                                                                                        role="dialog"
                                                                                        aria-modal="true"
                                                                                        aria-label="Cliente Senior"
                                                                                        className="el-dialog"
                                                                                        style={{
                                                                                            marginTop: "15vh",
                                                                                            width: 600
                                                                                        }}
                                                                                    >
                                                                                        <div
                                                                                            className="el-dialog__header"
                                                                                            style={{ cursor: "move" }}
                                                                                        >
                                                                                            <span className="el-dialog__title">
                                                                                                Cliente Senior
                                                                                            </span>
                                                                                            <button
                                                                                                type="button"
                                                                                                aria-label="Close"
                                                                                                className="el-dialog__headerbtn"
                                                                                            >
                                                                                                <i className="el-dialog__close el-icon el-icon-close" />
                                                                                            </button>
                                                                                        </div>
                                                                                        {/**/}
                                                                                        {/**/}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <span className="el-popover__reference-wrapper">
                                                                                <button
                                                                                    type="button"
                                                                                    className="el-button check-imei-btn el-button--default el-popover__reference"
                                                                                    aria-describedby="el-popover-8533"
                                                                                    tabIndex={0}
                                                                                >
                                                                                    {/**/}
                                                                                    {/**/}
                                                                                    <span>Comprobar</span>
                                                                                </button>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                    {/**/}
                                                                </div>
                                                            </div>{" "}
                                                            <div className="el-form-item">
                                                                {/**/}
                                                                <div
                                                                    className="el-form-item__content"
                                                                    style={{ marginLeft: 150 }}
                                                                >
                                                                    <button
                                                                        type="submit"
                                                                        className="el-button el-button--primary"
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
                                                        </form>
                                                    </div>{" "}
                                                    <div
                                                        role="tabpanel"
                                                        aria-hidden="true"
                                                        id="pane-batchrecharge"
                                                        aria-labelledby="tab-batchrecharge"
                                                        className="el-tab-pane"
                                                        style={{ display: batchRecharge ? "block" : "none" }} 
                                                    >
                                                        <form className="el-form el-form--label-right">
                                                            <div
                                                                className="el-form-item is-required"
                                                                style={{ marginBottom: 0 }}
                                                            >
                                                                <label
                                                                    htmlFor="imeis"
                                                                    className="el-form-item__label"
                                                                    style={{ width: 150 }}
                                                                >
                                                                    IMEI
                                                                </label>
                                                                <div
                                                                    className="el-form-item__content"
                                                                    style={{ marginLeft: 150 }}
                                                                >
                                                                    <div className="fl">
                                                                        <div
                                                                            className="el-textarea"
                                                                            style={{ width: 220 }}
                                                                        >
                                                                            <textarea
                                                                                autoComplete="off"
                                                                                rows={3}
                                                                                placeholder="Un IMEI, una línea."
                                                                                className="el-textarea__inner pr20"
                                                                                style={{ minHeight: 33 }}
                                                                                defaultValue={""}
                                                                            />
                                                                            {/**/}
                                                                            <i className="input-textarea-clear el-input__icon el-icon-circle-close el-input__clear hide" />
                                                                        </div>{" "}
                                                                        <p className="desc">
                                                                            Un lote para 200 IMEI como máximo.
                                                                        </p>
                                                                    </div>{" "}
                                                                    <div className="fl">
                                                                        <span>
                                                                            <div
                                                                                role="tooltip"
                                                                                id="el-popover-406"
                                                                                aria-hidden="true"
                                                                                className="el-popover el-popper imei-list-popover"
                                                                                tabIndex={0}
                                                                                style={{ width: 400, display: "none" }}
                                                                            >
                                                                                {/**/}
                                                                                <div className="el-tabs el-tabs--top">
                                                                                    <div className="el-tabs__header is-top">
                                                                                        <div className="el-tabs__nav-wrap is-top">
                                                                                            <div className="el-tabs__nav-scroll">
                                                                                                <div
                                                                                                    role="tablist"
                                                                                                    className="el-tabs__nav is-top"
                                                                                                    style={{
                                                                                                        transform: "translateX(0px)"
                                                                                                    }}
                                                                                                >
                                                                                                    <div
                                                                                                        className="el-tabs__active-bar is-top"
                                                                                                        style={{
                                                                                                            width: 0,
                                                                                                            transform: "translateX(20px)"
                                                                                                        }}
                                                                                                    />
                                                                                                    <div
                                                                                                        id="tab-0"
                                                                                                        aria-controls="pane-0"
                                                                                                        role="tab"
                                                                                                        aria-selected="true"
                                                                                                        tabIndex={0}
                                                                                                        className="el-tabs__item is-top is-active"
                                                                                                    >
                                                                                                        Todos(0)
                                                                                                    </div>
                                                                                                    <div
                                                                                                        id="tab-1"
                                                                                                        aria-controls="pane-1"
                                                                                                        role="tab"
                                                                                                        tabIndex={-1}
                                                                                                        className="el-tabs__item is-top"
                                                                                                    >
                                                                                                        Normal(0)
                                                                                                    </div>
                                                                                                    <div
                                                                                                        id="tab-3"
                                                                                                        aria-controls="pane-3"
                                                                                                        role="tab"
                                                                                                        tabIndex={-1}
                                                                                                        className="el-tabs__item is-top"
                                                                                                    >
                                                                                                        Repetido(0)
                                                                                                    </div>
                                                                                                    <div
                                                                                                        id="tab-2"
                                                                                                        aria-controls="pane-2"
                                                                                                        role="tab"
                                                                                                        tabIndex={-1}
                                                                                                        className="el-tabs__item is-top"
                                                                                                    >
                                                                                                        Error(0)
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="el-tabs__content">
                                                                                        <div
                                                                                            role="tabpanel"
                                                                                            id="pane-0"
                                                                                            aria-labelledby="tab-0"
                                                                                            className="el-tab-pane"
                                                                                        />{" "}
                                                                                        <div
                                                                                            role="tabpanel"
                                                                                            aria-hidden="true"
                                                                                            id="pane-1"
                                                                                            aria-labelledby="tab-1"
                                                                                            className="el-tab-pane"
                                                                                            style={{ display: "none" }}
                                                                                        />{" "}
                                                                                        <div
                                                                                            role="tabpanel"
                                                                                            aria-hidden="true"
                                                                                            id="pane-3"
                                                                                            aria-labelledby="tab-3"
                                                                                            className="el-tab-pane"
                                                                                            style={{ display: "none" }}
                                                                                        />{" "}
                                                                                        <div
                                                                                            role="tabpanel"
                                                                                            aria-hidden="true"
                                                                                            id="pane-2"
                                                                                            aria-labelledby="tab-2"
                                                                                            className="el-tab-pane"
                                                                                            style={{ display: "none" }}
                                                                                        />
                                                                                    </div>
                                                                                </div>{" "}
                                                                                <button
                                                                                    type="button"
                                                                                    className="el-button popver-close-btn el-button--info is-round"
                                                                                >
                                                                                    {/**/}
                                                                                    <i className="el-icon-close" />
                                                                                    {/**/}
                                                                                </button>{" "}
                                                                                <div
                                                                                    className="el-table el-table--fit el-table--fluid-height el-table--scrollable-x el-table--enable-row-hover"
                                                                                    style={{ maxHeight: 300 }}
                                                                                >
                                                                                    <div className="hidden-columns">
                                                                                        <div /> <div /> <div />
                                                                                    </div>
                                                                                    <div className="el-table__header-wrapper">
                                                                                        <table
                                                                                            cellSpacing={0}
                                                                                            cellPadding={0}
                                                                                            border={0}
                                                                                            className="el-table__header"
                                                                                            style={{ width: 400 }}
                                                                                        >
                                                                                            <colgroup>
                                                                                                <col
                                                                                                    name="el-table_2_column_8"
                                                                                                    width={150}
                                                                                                />
                                                                                                <col
                                                                                                    name="el-table_2_column_9"
                                                                                                    width={100}
                                                                                                />
                                                                                                <col
                                                                                                    name="el-table_2_column_10"
                                                                                                    width={150}
                                                                                                />
                                                                                                <col name="gutter" width={0} />
                                                                                            </colgroup>
                                                                                            <thead className="has-gutter">
                                                                                                <tr className>
                                                                                                    <th
                                                                                                        colSpan={1}
                                                                                                        rowSpan={1}
                                                                                                        className="el-table_2_column_8     is-leaf el-table__cell"
                                                                                                    >
                                                                                                        <div className="cell">IMEI</div>
                                                                                                    </th>
                                                                                                    <th
                                                                                                        colSpan={1}
                                                                                                        rowSpan={1}
                                                                                                        className="el-table_2_column_9     is-leaf el-table__cell"
                                                                                                    >
                                                                                                        <div className="cell">Tipo</div>
                                                                                                    </th>
                                                                                                    <th
                                                                                                        colSpan={1}
                                                                                                        rowSpan={1}
                                                                                                        className="el-table_2_column_10     is-leaf el-table__cell"
                                                                                                    >
                                                                                                        <div className="cell">
                                                                                                            Cliente Senior
                                                                                                        </div>
                                                                                                    </th>
                                                                                                    <th
                                                                                                        className="el-table__cell gutter"
                                                                                                        style={{
                                                                                                            width: 0,
                                                                                                            display: "none"
                                                                                                        }}
                                                                                                    />
                                                                                                </tr>
                                                                                            </thead>
                                                                                        </table>
                                                                                    </div>
                                                                                    <div
                                                                                        className="el-table__body-wrapper is-scrolling-left"
                                                                                        style={{ maxHeight: 300 }}
                                                                                    >
                                                                                        <table
                                                                                            cellSpacing={0}
                                                                                            cellPadding={0}
                                                                                            border={0}
                                                                                            className="el-table__body"
                                                                                            style={{ width: 400 }}
                                                                                        >
                                                                                            <colgroup>
                                                                                                <col
                                                                                                    name="el-table_2_column_8"
                                                                                                    width={150}
                                                                                                />
                                                                                                <col
                                                                                                    name="el-table_2_column_9"
                                                                                                    width={100}
                                                                                                />
                                                                                                <col
                                                                                                    name="el-table_2_column_10"
                                                                                                    width={150}
                                                                                                />
                                                                                            </colgroup>
                                                                                            <tbody>{/**/}</tbody>
                                                                                        </table>
                                                                                        <div
                                                                                            className="el-table__empty-block"
                                                                                            style={{ height: "100%", width: 400 }}
                                                                                        >
                                                                                            <span className="el-table__empty-text">
                                                                                                Sin Datos
                                                                                            </span>
                                                                                        </div>
                                                                                        {/**/}
                                                                                    </div>
                                                                                    {/**/}
                                                                                    {/**/}
                                                                                    {/**/}
                                                                                    {/**/}
                                                                                    <div
                                                                                        className="el-table__column-resize-proxy"
                                                                                        style={{ display: "none" }}
                                                                                    />
                                                                                </div>{" "}
                                                                                <div
                                                                                    className="el-dialog__wrapper"
                                                                                    style={{ display: "none" }}
                                                                                >
                                                                                    <div
                                                                                        role="dialog"
                                                                                        aria-modal="true"
                                                                                        aria-label="Cliente Senior"
                                                                                        className="el-dialog"
                                                                                        style={{
                                                                                            marginTop: "15vh",
                                                                                            width: 600
                                                                                        }}
                                                                                    >
                                                                                        <div
                                                                                            className="el-dialog__header"
                                                                                            style={{ cursor: "move" }}
                                                                                        >
                                                                                            <span className="el-dialog__title">
                                                                                                Cliente Senior
                                                                                            </span>
                                                                                            <button
                                                                                                type="button"
                                                                                                aria-label="Close"
                                                                                                className="el-dialog__headerbtn"
                                                                                            >
                                                                                                <i className="el-dialog__close el-icon el-icon-close" />
                                                                                            </button>
                                                                                        </div>
                                                                                        {/**/}
                                                                                        {/**/}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <span className="el-popover__reference-wrapper">
                                                                                <button
                                                                                    type="button"
                                                                                    className="el-button check-imei-btn el-button--default el-popover__reference"
                                                                                    aria-describedby="el-popover-406"
                                                                                    tabIndex={0}
                                                                                >
                                                                                    {/**/}
                                                                                    {/**/}
                                                                                    <span>Comprobar</span>
                                                                                </button>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                    {/**/}
                                                                </div>
                                                            </div>{" "}
                                                            <div className="el-form-item is-required">
                                                                <label
                                                                    htmlFor="cardtype"
                                                                    className="el-form-item__label"
                                                                    style={{ width: 150 }}
                                                                >
                                                                    Tipo de tarjeta
                                                                </label>
                                                                <div
                                                                    className="el-form-item__content"
                                                                    style={{ marginLeft: 150 }}
                                                                >
                                                                    <label
                                                                        role="radio"
                                                                        aria-checked="true"
                                                                        tabIndex={0}
                                                                        className="el-radio is-checked"
                                                                    >
                                                                        <span className="el-radio__input is-checked">
                                                                            <span className="el-radio__inner" />
                                                                            <input
                                                                                type="radio"
                                                                                aria-hidden="true"
                                                                                tabIndex={-1}
                                                                                autoComplete="off"
                                                                                className="el-radio__original"
                                                                                defaultValue={2}
                                                                            />
                                                                        </span>
                                                                        <span className="el-radio__label">
                                                                            Tarjeta anual{/**/}
                                                                        </span>
                                                                    </label>{" "}
                                                                    <label
                                                                        role="radio"
                                                                        tabIndex={0}
                                                                        className="el-radio"
                                                                    >
                                                                        <span className="el-radio__input">
                                                                            <span className="el-radio__inner" />
                                                                            <input
                                                                                type="radio"
                                                                                aria-hidden="true"
                                                                                tabIndex={-1}
                                                                                autoComplete="off"
                                                                                className="el-radio__original"
                                                                                defaultValue={3}
                                                                            />
                                                                        </span>
                                                                        <span className="el-radio__label">
                                                                            Tarjeta de por vida{/**/}
                                                                        </span>
                                                                    </label>
                                                                    {/**/}
                                                                </div>
                                                            </div>{" "}
                                                            <div className="el-form-item is-success is-required">
                                                                <label
                                                                    htmlFor="distributortime"
                                                                    className="el-form-item__label"
                                                                    style={{ width: 150 }}
                                                                >
                                                                    Usuario expirado
                                                                </label>
                                                                <div
                                                                    className="el-form-item__content"
                                                                    style={{ marginLeft: 150 }}
                                                                >
                                                                    <div className="el-date-editor el-input el-input--prefix el-input--suffix el-date-editor--date">
                                                                        {/**/}
                                                                        <input
                                                                            type="text"
                                                                            autoComplete="off"
                                                                            name
                                                                            className="el-input__inner"
                                                                        />
                                                                        <span className="el-input__prefix">
                                                                            <i className="el-input__icon el-icon-date" />
                                                                            {/**/}
                                                                        </span>
                                                                        <span className="el-input__suffix">
                                                                            <span className="el-input__suffix-inner">
                                                                                <i className="el-input__icon" />
                                                                                {/**/}
                                                                                {/**/}
                                                                                {/**/}
                                                                                {/**/}
                                                                            </span>
                                                                            <i className="el-input__icon el-input__validateIcon el-icon-circle-check" />
                                                                        </span>
                                                                        {/**/}
                                                                        {/**/}
                                                                    </div>
                                                                    {/**/}
                                                                </div>
                                                            </div>{" "}
                                                            <div className="el-form-item">
                                                                <label
                                                                    htmlFor="remark"
                                                                    className="el-form-item__label"
                                                                    style={{ width: 150 }}
                                                                >
                                                                    Observación
                                                                </label>
                                                                <div
                                                                    className="el-form-item__content"
                                                                    style={{ marginLeft: 150 }}
                                                                >
                                                                    <div
                                                                        className="el-textarea"
                                                                        style={{ width: 220 }}
                                                                    >
                                                                        <textarea
                                                                            autoComplete="off"
                                                                            className="el-textarea__inner"
                                                                            style={{ minHeight: 33 }}
                                                                            defaultValue={""}
                                                                        />
                                                                        {/**/}
                                                                    </div>
                                                                    {/**/}
                                                                </div>
                                                            </div>{" "}
                                                            <div className="el-form-item">
                                                                {/**/}
                                                                <div
                                                                    className="el-form-item__content"
                                                                    style={{ marginLeft: 150 }}
                                                                >
                                                                    <button
                                                                        type="submit"
                                                                        className="el-button el-button--primary"
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
                                                        </form>
                                                    </div>{" "}
                                                    <div
                                                        role="tabpanel"
                                                        aria-hidden="true"
                                                        id="pane-batchtime"
                                                        aria-labelledby="tab-batchtime"
                                                        className="el-tab-pane"
                                                        style={{ display: timeDistributor ? "block" : "none" }} 
                                                    >
                                                        <form className="el-form el-form--label-right">
                                                            <div className="el-form-item is-required">
                                                                <label
                                                                    htmlFor="distributortime"
                                                                    className="el-form-item__label"
                                                                    style={{ width: 150 }}
                                                                >
                                                                    Usuario expirado
                                                                </label>
                                                                <div
                                                                    className="el-form-item__content"
                                                                    style={{ marginLeft: 150 }}
                                                                >
                                                                    <div className="el-date-editor el-input el-input--prefix el-input--suffix el-date-editor--date">
                                                                        {/**/}
                                                                        <input
                                                                            type="text"
                                                                            autoComplete="off"
                                                                            name
                                                                            className="el-input__inner"
                                                                        />
                                                                        <span className="el-input__prefix">
                                                                            <i className="el-input__icon el-icon-date" />
                                                                            {/**/}
                                                                        </span>
                                                                        <span className="el-input__suffix">
                                                                            <span className="el-input__suffix-inner">
                                                                                <i className="el-input__icon" />
                                                                                {/**/}
                                                                                {/**/}
                                                                                {/**/}
                                                                                {/**/}
                                                                            </span>
                                                                            {/**/}
                                                                        </span>
                                                                        {/**/}
                                                                        {/**/}
                                                                    </div>
                                                                    {/**/}
                                                                </div>
                                                            </div>{" "}
                                                            <div className="el-form-item is-required">
                                                                <label
                                                                    htmlFor="imeis"
                                                                    className="el-form-item__label"
                                                                    style={{ width: 150 }}
                                                                >
                                                                    IMEI
                                                                </label>
                                                                <div
                                                                    className="el-form-item__content"
                                                                    style={{ marginLeft: 150 }}
                                                                >
                                                                    <div className="fl">
                                                                        <div
                                                                            className="el-textarea"
                                                                            style={{ width: 220 }}
                                                                        >
                                                                            <textarea
                                                                                autoComplete="off"
                                                                                placeholder="Un IMEI, una línea."
                                                                                rows={5}
                                                                                className="el-textarea__inner pr20"
                                                                                style={{ minHeight: 33 }}
                                                                                defaultValue={""}
                                                                            />
                                                                            {/**/}
                                                                            <i className="hide input-textarea-clear el-input__icon el-icon-circle-close el-input__clear" />
                                                                        </div>{" "}
                                                                        <p className="desc">
                                                                            Un lote para 200 IMEI como máximo.
                                                                        </p>
                                                                    </div>{" "}
                                                                    <div className="fl">
                                                                        <span>
                                                                            <div
                                                                                role="tooltip"
                                                                                id="el-popover-2058"
                                                                                aria-hidden="true"
                                                                                className="el-popover el-popper imei-list-popover"
                                                                                tabIndex={0}
                                                                                style={{ width: 400, display: "none" }}
                                                                            >
                                                                                {/**/}
                                                                                <div className="el-tabs el-tabs--top">
                                                                                    <div className="el-tabs__header is-top">
                                                                                        <div className="el-tabs__nav-wrap is-top">
                                                                                            <div className="el-tabs__nav-scroll">
                                                                                                <div
                                                                                                    role="tablist"
                                                                                                    className="el-tabs__nav is-top"
                                                                                                    style={{
                                                                                                        transform: "translateX(0px)"
                                                                                                    }}
                                                                                                >
                                                                                                    <div
                                                                                                        className="el-tabs__active-bar is-top"
                                                                                                        style={{
                                                                                                            width: 0,
                                                                                                            transform: "translateX(20px)"
                                                                                                        }}
                                                                                                    />
                                                                                                    <div
                                                                                                        id="tab-0"
                                                                                                        aria-controls="pane-0"
                                                                                                        role="tab"
                                                                                                        aria-selected="true"
                                                                                                        tabIndex={0}
                                                                                                        className="el-tabs__item is-top is-active"
                                                                                                    >
                                                                                                        Todos(0)
                                                                                                    </div>
                                                                                                    <div
                                                                                                        id="tab-1"
                                                                                                        aria-controls="pane-1"
                                                                                                        role="tab"
                                                                                                        tabIndex={-1}
                                                                                                        className="el-tabs__item is-top"
                                                                                                    >
                                                                                                        Normal(0)
                                                                                                    </div>
                                                                                                    <div
                                                                                                        id="tab-3"
                                                                                                        aria-controls="pane-3"
                                                                                                        role="tab"
                                                                                                        tabIndex={-1}
                                                                                                        className="el-tabs__item is-top"
                                                                                                    >
                                                                                                        Repetido(0)
                                                                                                    </div>
                                                                                                    <div
                                                                                                        id="tab-2"
                                                                                                        aria-controls="pane-2"
                                                                                                        role="tab"
                                                                                                        tabIndex={-1}
                                                                                                        className="el-tabs__item is-top"
                                                                                                    >
                                                                                                        Error(0)
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="el-tabs__content">
                                                                                        <div
                                                                                            role="tabpanel"
                                                                                            id="pane-0"
                                                                                            aria-labelledby="tab-0"
                                                                                            className="el-tab-pane"
                                                                                        />{" "}
                                                                                        <div
                                                                                            role="tabpanel"
                                                                                            aria-hidden="true"
                                                                                            id="pane-1"
                                                                                            aria-labelledby="tab-1"
                                                                                            className="el-tab-pane"
                                                                                            style={{ display: "none" }}
                                                                                        />{" "}
                                                                                        <div
                                                                                            role="tabpanel"
                                                                                            aria-hidden="true"
                                                                                            id="pane-3"
                                                                                            aria-labelledby="tab-3"
                                                                                            className="el-tab-pane"
                                                                                            style={{ display: "none" }}
                                                                                        />{" "}
                                                                                        <div
                                                                                            role="tabpanel"
                                                                                            aria-hidden="true"
                                                                                            id="pane-2"
                                                                                            aria-labelledby="tab-2"
                                                                                            className="el-tab-pane"
                                                                                            style={{ display: "none" }}
                                                                                        />
                                                                                    </div>
                                                                                </div>{" "}
                                                                                <button
                                                                                    type="button"
                                                                                    className="el-button popver-close-btn el-button--info is-round"
                                                                                >
                                                                                    {/**/}
                                                                                    <i className="el-icon-close" />
                                                                                    {/**/}
                                                                                </button>{" "}
                                                                                <div
                                                                                    className="el-table el-table--fit el-table--fluid-height el-table--scrollable-x el-table--enable-row-hover"
                                                                                    style={{ maxHeight: 300 }}
                                                                                >
                                                                                    <div className="hidden-columns">
                                                                                        <div /> <div /> <div />
                                                                                    </div>
                                                                                    <div className="el-table__header-wrapper">
                                                                                        <table
                                                                                            cellSpacing={0}
                                                                                            cellPadding={0}
                                                                                            border={0}
                                                                                            className="el-table__header"
                                                                                            style={{ width: 400 }}
                                                                                        >
                                                                                            <colgroup>
                                                                                                <col
                                                                                                    name="el-table_3_column_11"
                                                                                                    width={150}
                                                                                                />
                                                                                                <col
                                                                                                    name="el-table_3_column_12"
                                                                                                    width={100}
                                                                                                />
                                                                                                <col
                                                                                                    name="el-table_3_column_13"
                                                                                                    width={150}
                                                                                                />
                                                                                                <col name="gutter" width={0} />
                                                                                            </colgroup>
                                                                                            <thead className="has-gutter">
                                                                                                <tr className>
                                                                                                    <th
                                                                                                        colSpan={1}
                                                                                                        rowSpan={1}
                                                                                                        className="el-table_3_column_11     is-leaf el-table__cell"
                                                                                                    >
                                                                                                        <div className="cell">IMEI</div>
                                                                                                    </th>
                                                                                                    <th
                                                                                                        colSpan={1}
                                                                                                        rowSpan={1}
                                                                                                        className="el-table_3_column_12     is-leaf el-table__cell"
                                                                                                    >
                                                                                                        <div className="cell">Tipo</div>
                                                                                                    </th>
                                                                                                    <th
                                                                                                        colSpan={1}
                                                                                                        rowSpan={1}
                                                                                                        className="el-table_3_column_13     is-leaf el-table__cell"
                                                                                                    >
                                                                                                        <div className="cell">
                                                                                                            Cliente Senior
                                                                                                        </div>
                                                                                                    </th>
                                                                                                    <th
                                                                                                        className="el-table__cell gutter"
                                                                                                        style={{
                                                                                                            width: 0,
                                                                                                            display: "none"
                                                                                                        }}
                                                                                                    />
                                                                                                </tr>
                                                                                            </thead>
                                                                                        </table>
                                                                                    </div>
                                                                                    <div
                                                                                        className="el-table__body-wrapper is-scrolling-left"
                                                                                        style={{ maxHeight: 300 }}
                                                                                    >
                                                                                        <table
                                                                                            cellSpacing={0}
                                                                                            cellPadding={0}
                                                                                            border={0}
                                                                                            className="el-table__body"
                                                                                            style={{ width: 400 }}
                                                                                        >
                                                                                            <colgroup>
                                                                                                <col
                                                                                                    name="el-table_3_column_11"
                                                                                                    width={150}
                                                                                                />
                                                                                                <col
                                                                                                    name="el-table_3_column_12"
                                                                                                    width={100}
                                                                                                />
                                                                                                <col
                                                                                                    name="el-table_3_column_13"
                                                                                                    width={150}
                                                                                                />
                                                                                            </colgroup>
                                                                                            <tbody>{/**/}</tbody>
                                                                                        </table>
                                                                                        <div
                                                                                            className="el-table__empty-block"
                                                                                            style={{ height: "100%", width: 400 }}
                                                                                        >
                                                                                            <span className="el-table__empty-text">
                                                                                                Sin Datos
                                                                                            </span>
                                                                                        </div>
                                                                                        {/**/}
                                                                                    </div>
                                                                                    {/**/}
                                                                                    {/**/}
                                                                                    {/**/}
                                                                                    {/**/}
                                                                                    <div
                                                                                        className="el-table__column-resize-proxy"
                                                                                        style={{ display: "none" }}
                                                                                    />
                                                                                </div>{" "}
                                                                                <div
                                                                                    className="el-dialog__wrapper"
                                                                                    style={{ display: "none" }}
                                                                                >
                                                                                    <div
                                                                                        role="dialog"
                                                                                        aria-modal="true"
                                                                                        aria-label="Cliente Senior"
                                                                                        className="el-dialog"
                                                                                        style={{
                                                                                            marginTop: "15vh",
                                                                                            width: 600
                                                                                        }}
                                                                                    >
                                                                                        <div
                                                                                            className="el-dialog__header"
                                                                                            style={{ cursor: "move" }}
                                                                                        >
                                                                                            <span className="el-dialog__title">
                                                                                                Cliente Senior
                                                                                            </span>
                                                                                            <button
                                                                                                type="button"
                                                                                                aria-label="Close"
                                                                                                className="el-dialog__headerbtn"
                                                                                            >
                                                                                                <i className="el-dialog__close el-icon el-icon-close" />
                                                                                            </button>
                                                                                        </div>
                                                                                        {/**/}
                                                                                        {/**/}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <span className="el-popover__reference-wrapper">
                                                                                <button
                                                                                    type="button"
                                                                                    className="el-button check-imei-btn el-button--default el-popover__reference"
                                                                                    aria-describedby="el-popover-2058"
                                                                                    tabIndex={0}
                                                                                >
                                                                                    {/**/}
                                                                                    {/**/}
                                                                                    <span>Comprobar</span>
                                                                                </button>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                    {/**/}
                                                                </div>
                                                            </div>{" "}
                                                            <div className="el-form-item">
                                                                {/**/}
                                                                <div
                                                                    className="el-form-item__content"
                                                                    style={{ marginLeft: 150 }}
                                                                >
                                                                    <button
                                                                        type="submit"
                                                                        className="el-button el-button--primary"
                                                                    >
                                                                        {/**/}
                                                                        {/**/}
                                                                        <span>Guardar</span>
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
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    <div className="second-item mt10 fl h-w30">
                                        <div className="reminder-box bg" onClick={() =>setReminder((s) => !s)}>
                                            <h3 className="nobg-title">Recordatorio</h3>{" "}
                                            <div title="Editar" className="reminder-word">
                                                <div className="h100b el-scrollbar">
                                                    <div
                                                        className="el-scrollbar__wrap"
                                                        style={{ marginBottom: "-6px", marginRight: "-6px" }}
                                                    >
                                                        <div className="el-scrollbar__view">
                                                            <div>
                                                                <p style={{ color: "#c1c1c1" }}>
                                                                    Describe anything you want to remark here.
                                                                </p>
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
                                            </div>{" "}
                                            <div style={{ display: reminder ? "block" : "none" }}>
                                                <div className="el-textarea">
                                                    <textarea
                                                        autoComplete="off"
                                                        maxLength={500}
                                                        className="el-textarea__inner"
                                                        style={{ minHeight: 302, height: 1000 }}
                                                        defaultValue={""}
                                                    />
                                                    <span className="el-input__count">0/500</span>
                                                </div>
                                            </div>{" "}
                                            <i title="Editar" className="reminder-edit base-icon" />
                                        </div>
                                    </div>
                                </div>{" "}
                                <div className="fr h-w25">
                                    <div className="mt10 second-item home-message-box pr0">
                                        <div className="home-message">
                                            <h3 className="nobg-title">Mensaje</h3>{" "}
                                            <div className="ds-message-box">
                                                {" "}
                                                <div className="el-table__empty-text">
                                                    <div>Sin datos</div>
                                                </div>{" "}
                                                <div
                                                    className="tr ds-message-more"
                                                    style={{ display: "none" }}
                                                >
                                                    <button
                                                        type="button"
                                                        className="el-button el-button--text"
                                                    >
                                                        {/**/}
                                                        {/**/}
                                                        <span>
                                                            Más
                                                            <i className="el-icon-arrow-right" />
                                                        </span>
                                                    </button>
                                                </div>
                                                <div
                                                    className="el-loading-mask"
                                                    style={{ display: "none" }}
                                                >
                                                    <div className="el-loading-spinner">
                                                        <svg viewBox="25 25 50 50" className="circular">
                                                            <circle
                                                                cx={50}
                                                                cy={50}
                                                                r={20}
                                                                fill="none"
                                                                className="path"
                                                            />
                                                        </svg>
                                                        {/**/}
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div
                                                className="el-dialog__wrapper"
                                                style={{ display: "none" }}
                                            >
                                                <div
                                                    role="dialog"
                                                    aria-modal="true"
                                                    aria-label="Mensaje"
                                                    className="el-dialog"
                                                    style={{ marginTop: "15vh", width: 600 }}
                                                >
                                                    <div
                                                        className="el-dialog__header"
                                                        style={{ cursor: "move" }}
                                                    >
                                                        <span className="el-dialog__title">Mensaje</span>
                                                        <button
                                                            type="button"
                                                            aria-label="Close"
                                                            className="el-dialog__headerbtn"
                                                        >
                                                            <i className="el-dialog__close el-icon el-icon-close" />
                                                        </button>
                                                    </div>
                                                    {/**/}
                                                    {/**/}
                                                </div>
                                            </div>{" "}
                                            <div
                                                className="el-dialog__wrapper message-dialog"
                                                style={{ display: "none" }}
                                            >
                                                <div
                                                    role="dialog"
                                                    aria-modal="true"
                                                    aria-label="Mensaje"
                                                    className="el-dialog"
                                                    style={{ marginTop: "15vh", width: 900 }}
                                                >
                                                    <div
                                                        className="el-dialog__header"
                                                        style={{ cursor: "move" }}
                                                    >
                                                        <span className="el-dialog__title">Mensaje</span>
                                                        <button
                                                            type="button"
                                                            aria-label="Close"
                                                            className="el-dialog__headerbtn"
                                                        >
                                                            <i className="el-dialog__close el-icon el-icon-close" />
                                                        </button>
                                                    </div>
                                                    {/**/}
                                                    {/**/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    <div className="second-item mt10 pr0">
                                        <div className="supplier-box">
                                            <div className="title-box bg">
                                                <h4 className="title">Proveedor de Servicios</h4>
                                            </div>{" "}
                                            <div className="info-box">
                                                <div className="head-line" />{" "}
                                                <div
                                                    className="info-head bg"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://image2.protrack365.com/portrait/12/126137_202012141444840.jpg")'
                                                    }}
                                                />{" "}
                                                <p className="info-name">Protrack GPS</p>{" "}
                                                <div className="info-content">
                                                    <p className="info-word">
                                                        <i className="tel-icon base-icon" />
                                                        8613423994931 (Landy)
                                                    </p>{" "}
                                                    <p className="info-word">
                                                        <i className="email-icon base-icon" />{" "}
                                                        landy@itrybrandgps.com
                                                    </p>{" "}
                                                    <p className="info-word" style={{ display: "none" }}>
                                                        <i className="webpage-icon base-icon" />{" "}
                                                        <a target="_blank" href />
                                                    </p>{" "}
                                                    <p className="info-word">
                                                        <i className="address-icon base-icon" /> A819-820,
                                                        Bao'an Wisdom Vally, Yintian Road, Bao'an District,
                                                        Shenzhen
                                                    </p>
                                                </div>
                                                <div
                                                    className="el-loading-mask"
                                                    style={{ display: "none" }}
                                                >
                                                    <div className="el-loading-spinner">
                                                        <svg viewBox="25 25 50 50" className="circular">
                                                            <circle
                                                                cx={50}
                                                                cy={50}
                                                                r={20}
                                                                fill="none"
                                                                className="path"
                                                            />
                                                        </svg>
                                                        {/**/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    <div className="second-item mt10 pr0">
                                        <div className="device-num-chart">
                                            <h3 className="nobg-title">Cantidad de dispositivos</h3>{" "}
                                            <div className="chart-box">
                                                <div
                                                    id="deviceNumChart"
                                                    className="device-num-box"
                                                    style={{
                                                        WebkitTapHighlightColor: "transparent",
                                                        userSelect: "none",
                                                        position: "relative"
                                                    }}
                                                    _echarts_instance_="ec_1640222276231"
                                                >
                                                    <div
                                                        style={{
                                                            position: "relative",
                                                            width: '100%',
                                                            height: '100%',
                                                            padding: 0,
                                                            margin: 0,
                                                            borderWidth: 0
                                                        }}
                                                    >
                                                        <ChartDevice />
                                                    </div>
                                                    <div />
                                                </div>{" "}
                                                <div className="no-data bg" style={{ display: "none" }}>
                                                    Sin datos
                                                </div>
                                                <div
                                                    className="el-loading-mask"
                                                    style={{ display: "none" }}
                                                >
                                                    <div className="el-loading-spinner">
                                                        <svg viewBox="25 25 50 50" className="circular">
                                                            <circle
                                                                cx={50}
                                                                cy={50}
                                                                r={20}
                                                                fill="none"
                                                                className="path"
                                                            />
                                                        </svg>
                                                        {/**/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    <div className="second-item mt10 pr0" style={{ height: 465 }}>
                                        <div className="model-chart">
                                            <h3 className="nobg-title">Tipo</h3>{" "}
                                            <div className="chart-box">
                                                <div
                                                    id="modelChart"
                                                    className="model-box"
                                                    style={{
                                                        WebkitTapHighlightColor: "transparent",
                                                        userSelect: "none",
                                                        position: "relative"
                                                    }}
                                                    _echarts_instance_="ec_1640222276232"
                                                >
                                                    <div
                                                        style={{
                                                            position: "relative",
                                                            width: '100%',
                                                            height: '100%',
                                                            padding: 0,
                                                            margin: 0,
                                                            borderWidth: 0
                                                        }}
                                                    >
                                                        <TypeChart />
                                                    </div>
                                                    <div />
                                                </div>{" "}
                                                <div className="no-data bg" style={{ display: "none" }}>
                                                    Sin datos
                                                </div>
                                                <div
                                                    className="el-loading-mask"
                                                    style={{ display: "none" }}
                                                >
                                                    <div className="el-loading-spinner">
                                                        <svg viewBox="25 25 50 50" className="circular">
                                                            <circle
                                                                cx={50}
                                                                cy={50}
                                                                r={20}
                                                                fill="none"
                                                                className="path"
                                                            />
                                                        </svg>
                                                        {/**/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{" "}
                                <div className="fl h-w75">
                                    <div className="second-item mt10">
                                        <div className="home-device-expire">
                                            <div className="device-tab-box">
                                                <div className="el-tabs el-tabs--top">
                                                    <div className="el-tabs__header is-top">
                                                        <div className="el-tabs__nav-wrap is-top">
                                                            <div className="el-tabs__nav-scroll">
                                                                <div
                                                                    role="tablist"
                                                                    className="el-tabs__nav is-top"
                                                                    style={{ transform: "translateX(0px)" }}
                                                                >
                                                                    <div
                                                                        className="el-tabs__active-bar is-top"
                                                                        style={{
                                                                            width: 80,
                                                                            transform: "translateX(20px)"
                                                                        }}
                                                                    />
                                                                    <div
                                                                        id="tab-1"
                                                                        aria-controls="pane-1"
                                                                        role="tab"
                                                                        aria-selected="true"
                                                                        tabIndex={0}
                                                                        className="el-tabs__item is-top is-active"
                                                                    >
                                                                        expirado(0)
                                                                    </div>
                                                                    <div
                                                                        id="tab-2"
                                                                        aria-controls="pane-2"
                                                                        role="tab"
                                                                        tabIndex={-1}
                                                                        className="el-tabs__item is-top"
                                                                    >
                                                                        <span>
                                                                            Expirado()
                                                                            <i
                                                                                className="el-tooltip el-icon-info fz12"
                                                                                aria-describedby="el-tooltip-8954"
                                                                                tabIndex={0}
                                                                            />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="el-tabs__content">
                                                        <div
                                                            role="tabpanel"
                                                            id="pane-1"
                                                            aria-labelledby="tab-1"
                                                            className="el-tab-pane"
                                                        />{" "}
                                                        <div
                                                            role="tabpanel"
                                                            aria-hidden="true"
                                                            id="pane-2"
                                                            aria-labelledby="tab-2"
                                                            className="el-tab-pane"
                                                            style={{ display: "none" }}
                                                        />
                                                    </div>
                                                </div>{" "}
                                                <div className="option-box">
                                                    {/**/}{" "}
                                                    <a
                                                        href="/dealer2/business?treeLevel=2"
                                                        className="link-btn more-btn"
                                                    >
                                                        Más»
                                                    </a>
                                                </div>
                                            </div>{" "}
                                            <div
                                                className="el-table el-table--fit el-table--scrollable-x el-table--enable-row-hover el-table--enable-row-transition"
                                                style={{ height: 276 }}
                                            >
                                                <div className="hidden-columns">
                                                    <div /> <div /> <div /> <div /> <div /> <div /> <div />
                                                </div>
                                                <div className="el-table__header-wrapper">
                                                    <table
                                                        cellSpacing={0}
                                                        cellPadding={0}
                                                        border={0}
                                                        className="el-table__header"
                                                        style={{ width: 720 }}
                                                    >
                                                        <colgroup>
                                                            <col name="el-table_1_column_1" width={50} />
                                                            <col name="el-table_1_column_2" width={80} />
                                                            <col name="el-table_1_column_3" width={80} />
                                                            <col name="el-table_1_column_4" width={130} />
                                                            <col name="el-table_1_column_5" width={100} />
                                                            <col name="el-table_1_column_6" width={100} />
                                                            <col name="el-table_1_column_7" width={180} />
                                                            <col name="gutter" width={0} />
                                                        </colgroup>
                                                        <thead className="has-gutter">
                                                            <tr className>
                                                                <th
                                                                    colSpan={1}
                                                                    rowSpan={1}
                                                                    className="el-table_1_column_1  is-center   is-leaf el-table__cell"
                                                                >
                                                                    <div className="cell">#</div>
                                                                </th>
                                                                <th
                                                                    colSpan={1}
                                                                    rowSpan={1}
                                                                    className="el-table_1_column_2     is-leaf el-table__cell"
                                                                >
                                                                    <div className="cell">Objetivo</div>
                                                                </th>
                                                                <th
                                                                    colSpan={1}
                                                                    rowSpan={1}
                                                                    className="el-table_1_column_3     is-leaf el-table__cell"
                                                                >
                                                                    <div className="cell">Cliente Senior</div>
                                                                </th>
                                                                <th
                                                                    colSpan={1}
                                                                    rowSpan={1}
                                                                    className="el-table_1_column_4     is-leaf el-table__cell"
                                                                >
                                                                    <div className="cell">IMEI</div>
                                                                </th>
                                                                <th
                                                                    colSpan={1}
                                                                    rowSpan={1}
                                                                    className="el-table_1_column_5     is-leaf el-table__cell"
                                                                >
                                                                    <div className="cell">
                                                                        Fecha de vencimiento de la plataforma
                                                                    </div>
                                                                </th>
                                                                <th
                                                                    colSpan={1}
                                                                    rowSpan={1}
                                                                    className="el-table_1_column_6     is-leaf el-table__cell"
                                                                >
                                                                    <div className="cell">Usuario expirado</div>
                                                                </th>
                                                                <th
                                                                    colSpan={1}
                                                                    rowSpan={1}
                                                                    className="el-table_1_column_7     is-leaf el-table__cell"
                                                                >
                                                                    <div className="cell">
                                                                        <div className="el-select device-expire-select">
                                                                            {/**/}
                                                                            <div className="el-input el-input--suffix">
                                                                                {/**/}
                                                                                <input
                                                                                    type="text"
                                                                                    readOnly="readonly"
                                                                                    autoComplete="off"
                                                                                    placeholder="Seleccionar"
                                                                                    className="el-input__inner"
                                                                                />
                                                                                {/**/}
                                                                                <span className="el-input__suffix">
                                                                                    <span className="el-input__suffix-inner">
                                                                                        <i className="el-select__caret el-input__icon el-icon-arrow-up" />
                                                                                        {/**/}
                                                                                        {/**/}
                                                                                        {/**/}
                                                                                        {/**/}
                                                                                        {/**/}
                                                                                    </span>
                                                                                    {/**/}
                                                                                </span>
                                                                                {/**/}
                                                                                {/**/}
                                                                            </div>
                                                                            <div
                                                                                className="el-select-dropdown el-popper"
                                                                                style={{ display: "none", minWidth: 160 }}
                                                                            >
                                                                                <div className="el-scrollbar" style={{}}>
                                                                                    <div
                                                                                        className="el-select-dropdown__wrap el-scrollbar__wrap"
                                                                                        style={{
                                                                                            marginBottom: "-6px",
                                                                                            marginRight: "-6px"
                                                                                        }}
                                                                                    >
                                                                                        <ul className="el-scrollbar__view el-select-dropdown__list">
                                                                                            {/**/}
                                                                                            <li className="el-select-dropdown__item">
                                                                                                <span>caduca hoy</span>
                                                                                            </li>{" "}
                                                                                            <li className="el-select-dropdown__item selected">
                                                                                                <span>Caduca en 7 días</span>
                                                                                            </li>{" "}
                                                                                            <li className="el-select-dropdown__item">
                                                                                                <span>expira en 15 dias</span>
                                                                                            </li>{" "}
                                                                                            <li className="el-select-dropdown__item">
                                                                                                <span>Caduca en 30 días</span>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="el-scrollbar__bar is-horizontal">
                                                                                        <div
                                                                                            className="el-scrollbar__thumb"
                                                                                            style={{
                                                                                                transform: "translateX(0%)"
                                                                                            }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="el-scrollbar__bar is-vertical">
                                                                                        <div
                                                                                            className="el-scrollbar__thumb"
                                                                                            style={{
                                                                                                transform: "translateY(0%)"
                                                                                            }}
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                {/**/}
                                                                            </div>
                                                                        </div>{" "}
                                                                        <div
                                                                            className="el-select device-expire-select"
                                                                            style={{ display: "none" }}
                                                                        >
                                                                            {/**/}
                                                                            <div className="el-input el-input--suffix">
                                                                                {/**/}
                                                                                <input
                                                                                    type="text"
                                                                                    readOnly="readonly"
                                                                                    autoComplete="off"
                                                                                    placeholder="Seleccionar"
                                                                                    className="el-input__inner"
                                                                                />
                                                                                {/**/}
                                                                                <span className="el-input__suffix">
                                                                                    <span className="el-input__suffix-inner">
                                                                                        <i className="el-select__caret el-input__icon el-icon-arrow-up" />
                                                                                        {/**/}
                                                                                        {/**/}
                                                                                        {/**/}
                                                                                        {/**/}
                                                                                        {/**/}
                                                                                    </span>
                                                                                    {/**/}
                                                                                </span>
                                                                                {/**/}
                                                                                {/**/}
                                                                            </div>
                                                                            <div
                                                                                className="el-select-dropdown el-popper"
                                                                                style={{ display: "none" }}
                                                                            >
                                                                                <div className="el-scrollbar" style={{}}>
                                                                                    <div
                                                                                        className="el-select-dropdown__wrap el-scrollbar__wrap"
                                                                                        style={{
                                                                                            marginBottom: "-6px",
                                                                                            marginRight: "-6px"
                                                                                        }}
                                                                                    >
                                                                                        <ul className="el-scrollbar__view el-select-dropdown__list">
                                                                                            {/**/}
                                                                                            <li className="el-select-dropdown__item">
                                                                                                <span>Caducó en 7 días</span>
                                                                                            </li>{" "}
                                                                                            <li className="el-select-dropdown__item">
                                                                                                <span>Caducó en 15 días</span>
                                                                                            </li>{" "}
                                                                                            <li className="el-select-dropdown__item selected">
                                                                                                <span>Caducó en 30 días</span>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="el-scrollbar__bar is-horizontal">
                                                                                        <div
                                                                                            className="el-scrollbar__thumb"
                                                                                            style={{
                                                                                                transform: "translateX(0%)"
                                                                                            }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="el-scrollbar__bar is-vertical">
                                                                                        <div
                                                                                            className="el-scrollbar__thumb"
                                                                                            style={{
                                                                                                transform: "translateY(0%)"
                                                                                            }}
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                {/**/}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </th>
                                                                <th
                                                                    className="el-table__cell gutter"
                                                                    style={{ width: 0, display: "none" }}
                                                                />
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                                <div className="el-table__body-wrapper is-scrolling-left">
                                                    <table
                                                        cellSpacing={0}
                                                        cellPadding={0}
                                                        border={0}
                                                        className="el-table__body"
                                                        style={{ width: 720 }}
                                                    >
                                                        <colgroup>
                                                            <col name="el-table_1_column_1" width={50} />
                                                            <col name="el-table_1_column_2" width={80} />
                                                            <col name="el-table_1_column_3" width={80} />
                                                            <col name="el-table_1_column_4" width={130} />
                                                            <col name="el-table_1_column_5" width={100} />
                                                            <col name="el-table_1_column_6" width={100} />
                                                            <col name="el-table_1_column_7" width={180} />
                                                        </colgroup>

                                                    </table>
                                                    {/**/}
                                                    {/**/}
                                                </div>
                                                {/**/}
                                                {/**/}
                                                {/**/}
                                                {/**/}
                                                <div
                                                    className="el-table__column-resize-proxy"
                                                    style={{ display: "none" }}
                                                />
                                                <div
                                                    className="el-loading-mask"
                                                    style={{ display: "none" }}
                                                >
                                                    <div className="el-loading-spinner">
                                                        <svg viewBox="25 25 50 50" className="circular">
                                                            <circle
                                                                cx={50}
                                                                cy={50}
                                                                r={20}
                                                                fill="none"
                                                                className="path"
                                                            />
                                                        </svg>
                                                        {/**/}
                                                    </div>
                                                </div>
                                            </div>{" "}

                                            <div
                                                className="el-dialog__wrapper"
                                                style={{ display: "none" }}
                                            >
                                                <div
                                                    role="dialog"
                                                    aria-modal="true"
                                                    aria-label="Cliente Senior"
                                                    className="el-dialog"
                                                    style={{ marginTop: "15vh", width: 600 }}
                                                >
                                                    <div
                                                        className="el-dialog__header"
                                                        style={{ cursor: "move" }}
                                                    >
                                                        <span className="el-dialog__title">Cliente Senior</span>
                                                        <button
                                                            type="button"
                                                            aria-label="Close"
                                                            className="el-dialog__headerbtn"
                                                        >
                                                            <i className="el-dialog__close el-icon el-icon-close" />
                                                        </button>
                                                    </div>
                                                    {/**/}
                                                    {/**/}
                                                </div>
                                            </div>{" "}
                                            <div
                                                className="el-dialog__wrapper"
                                                style={{ display: "none" }}
                                            >
                                                <div
                                                    role="dialog"
                                                    aria-modal="true"
                                                    aria-label="Recarga"
                                                    className="el-dialog"
                                                    style={{ marginTop: "15vh", width: 600 }}
                                                >
                                                    <div
                                                        className="el-dialog__header"
                                                        style={{ cursor: "move" }}
                                                    >
                                                        <span className="el-dialog__title">Recarga</span>
                                                        <button
                                                            type="button"
                                                            aria-label="Close"
                                                            className="el-dialog__headerbtn"
                                                        >
                                                            <i className="el-dialog__close el-icon el-icon-close" />
                                                        </button>
                                                    </div>
                                                    {/**/}
                                                    {/**/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    <div className="second-item mt10">
                                        <div className="bill-box">
                                            <h3 className="panel-title">Cuenta</h3>{" "}
                                            <div className>
                                                <div role="radiogroup" className="el-radio-group">
                                                    <label
                                                        role="radio"
                                                        aria-checked="true"
                                                        tabIndex={0}
                                                        className="el-radio-button is-active"
                                                    >
                                                        <input
                                                            type="radio"
                                                            tabIndex={-1}
                                                            autoComplete="off"
                                                            className="el-radio-button__orig-radio"
                                                            defaultValue="importpoint"
                                                        />
                                                        <span className="el-radio-button__inner">
                                                            Nueva tarjeta{/**/}
                                                        </span>
                                                    </label>{" "}
                                                    <label
                                                        role="radio"
                                                        tabIndex={-1}
                                                        className="el-radio-button"
                                                    >
                                                        <input
                                                            type="radio"
                                                            tabIndex={-1}
                                                            autoComplete="off"
                                                            className="el-radio-button__orig-radio"
                                                            defaultValue="zsimportpoint"
                                                        />
                                                        <span className="el-radio-button__inner">
                                                            Nueva tarjeta de por vida{/**/}
                                                        </span>
                                                    </label>{" "}
                                                    <label
                                                        role="radio"
                                                        tabIndex={-1}
                                                        className="el-radio-button"
                                                    >
                                                        <input
                                                            type="radio"
                                                            tabIndex={-1}
                                                            autoComplete="off"
                                                            className="el-radio-button__orig-radio"
                                                            defaultValue="yearrechargepoint"
                                                        />
                                                        <span className="el-radio-button__inner">
                                                            Tarjeta anual{/**/}
                                                        </span>
                                                    </label>{" "}
                                                    <label
                                                        role="radio"
                                                        tabIndex={-1}
                                                        className="el-radio-button"
                                                    >
                                                        <input
                                                            type="radio"
                                                            tabIndex={-1}
                                                            autoComplete="off"
                                                            className="el-radio-button__orig-radio"
                                                            defaultValue="zsrechargepoint"
                                                        />
                                                        <span className="el-radio-button__inner">
                                                            Tarjeta de por vida{/**/}
                                                        </span>
                                                    </label>
                                                </div>{" "}
                                                <div className="chart-box">

                                                    <div
                                                        id="pointChart"
                                                        style={{
                                                            width: "100%",
                                                            height: 275,
                                                            WebkitTapHighlightColor: "transparent",
                                                            userSelect: "none",
                                                            position: "relative"
                                                        }}
                                                        _echarts_instance_="ec_1640222276233"
                                                    >
                                                        <div
                                                            style={{
                                                                position: "absolute",
                                                                width: '100%',
                                                                height: '100%',
                                                                padding: 0,
                                                                margin: 0,
                                                                borderWidth: 0
                                                            }}
                                                        >
                                                        <ChartMap />
                                                        </div>
                                                        <div />
                                                    </div>{" "}
                                                    <div className="no-data bg" style={{ display: "none" }}>
                                                        Sin datos
                                                    </div>
                                                </div>
                                                <div
                                                    className="el-loading-mask"
                                                    style={{ display: "none" }}
                                                >
                                                    <div className="el-loading-spinner">
                                                        <svg viewBox="25 25 50 50" className="circular">
                                                            <circle
                                                                cx={50}
                                                                cy={50}
                                                                r={20}
                                                                fill="none"
                                                                className="path"
                                                            />
                                                        </svg>
                                                        {/**/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    <div className="second-item mt10">
                                        <div className="device-analysis">
                                            <h3 className="panel-title">
                                                Análisis de dispositivos
                                                <i
                                                    className="el-tooltip el-icon-info protrack"
                                                    style={{ display: "none" }}
                                                    aria-describedby="el-tooltip-185"
                                                    tabIndex={0}
                                                />
                                            </h3>{" "}
                                            <div className="chart-box">
                                                <div
                                                    id="deviceChart"
                                                    className="device-chart"
                                                    style={{
                                                        WebkitTapHighlightColor: "transparent",
                                                        userSelect: "none",
                                                        position: "relative"
                                                    }}
                                                    _echarts_instance_="ec_1640222276234"
                                                >
                                                    <div
                                                        style={{
                                                            position: "relative",
                                                            width: '100%',
                                                            height: '100%',
                                                            padding: 0,
                                                            margin: 0,
                                                            borderWidth: 0
                                                        }}
                                                    >
                                                        <AnalysisChart />
                                                    </div>
                                                    <div />
                                                </div>{" "}
                                                <div className="no-data bg" style={{ display: "none" }}>
                                                    Sin datos
                                                </div>
                                                <div
                                                    className="el-loading-mask"
                                                    style={{ display: "none" }}
                                                >
                                                    <div className="el-loading-spinner">
                                                        <svg viewBox="25 25 50 50" className="circular">
                                                            <circle
                                                                cx={50}
                                                                cy={50}
                                                                r={20}
                                                                fill="none"
                                                                className="path"
                                                            />
                                                        </svg>
                                                        {/**/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    <div className="second-item mt10" style={{ height: 465 }}>
                                        <div className="device-map">
                                            <h3 className="panel-title">Despliegue de dispositivos</h3>{" "}
                                            <div className="zoom-btn">
                                                <button
                                                    type="button"
                                                    className="el-button el-button--default"
                                                >
                                                    {/**/}
                                                    <i className="el-icon-minus" />
                                                    {/**/}
                                                </button>{" "}
                                                <button
                                                    type="button"
                                                    className="el-button el-button--default"
                                                >
                                                    {/**/}
                                                    <i className="el-icon-plus" />
                                                    {/**/}
                                                </button>
                                            </div>{" "}
                                            <div
                                                id="chartMap"
                                                className="device-chart-Map"
                                                style={{
                                                    WebkitTapHighlightColor: "transparent",
                                                    userSelect: "none",
                                                    position: "relative"
                                                }}
                                                _echarts_instance_="ec_1640222276235"
                                            >
                                                <div
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        padding: 0,
                                                        margin: 0,
                                                        borderWidth: 0
                                                    }}
                                                >
                                                    <DeploymentChart />
                                                </div>
                                                <div />
                                                <div
                                                    className="el-loading-mask"
                                                    style={{ display: "none" }}
                                                >
                                                    <div className="el-loading-spinner">
                                                        <svg viewBox="25 25 50 50" className="circular">
                                                            <circle
                                                                cx={50}
                                                                cy={50}
                                                                r={20}
                                                                fill="none"
                                                                className="path"
                                                            />
                                                        </svg>
                                                        {/**/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="el-scrollbar__bar is-horizontal">
                    <div
                        className="el-scrollbar__thumb"
                        style={{ transform: "translateX(0%)", width: "97.3963%" }}
                    />
                </div>
                <div className="el-scrollbar__bar is-vertical">
                    <div
                        className="el-scrollbar__thumb"
                        style={{ height: "28.1475%", transform: "translateY(0%)" }}
                    />
                </div>
            </div>
        </div>

    );
}

export default MainContainerBox;