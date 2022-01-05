import styled from '@emotion/styled/macro';
import headerModal from '../../assets/images/dialog-header.cc6302f.png';

export const Container = styled.div`
    width: 100%;
`;
export const busqueda_dispositivo = styled.div`
    background-color: #e4e4e4;
    padding: 5px 5px;
    height: 26px;
    display: flex;
    flex-direction: row;
    gap: 2px;
    justify-content: space-between;
    align-items: center;
`
export const verAlertasDiv = styled.div`
    background-color: #e4e4e4;
    padding: 5px 5px;
    height: 26px;
    display: flex;
    flex-direction: row;
    gap: 2px;
    justify-content: center;
    align-items: center;
`
export const busqueda_en_linea = styled.div`
    width: 100%;
`

export const sufijo_entrada = styled.div`
    width: 100%;

`
export const entrada_interna = styled.input`
   -webkit-font-smoothing: antialiased;
    user-select: none;
    margin: 0;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    outline: 0;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    padding: 0 8px;
    border-radius: 0;
    padding-right: 30px;
    height: 26px;
    line-height: 26px;
    &:hover{
        border-color: #ff9934;
    }
    &:active{
        border-color: #ff9934;
    }   
`
export const deviceChebox = styled.input`
    width: 30px;
    height: 30px;
`;
export const deviceChebox2 = styled.input`
    width: 10px;
    height: 10px;
    margin: 0px 5px;
`;

export const GeoAlarm = styled.button`
    border: none;
    background-color: #ff9934;
    border-radius: 0px;
    color: #ffffffff;
    width: 30px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
        background-color: #f8ae63;
    }
`;
export const AlarmIcons = styled.button`
    border: none;
    background-color: transparent;
    border-radius: 0px;
    color: #8b8b8b;
    width: 30px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
        background-color: #bdbdbd;
    }
`;
export const BuutonDivGeo = styled.div`
    display: none;
    gap: 5px;
    align-items: center;
`;
export const divGeofenceItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    border-bottom: 1px solid #e6e6e6;
    &:hover{
        background-color: #e6e6e6;
    }
    &:hover ${BuutonDivGeo} {
        display: flex;
    }
`;
export const GeoItemDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;
export const CheckBox1 = styled.input`
    cursor: pointer;
    appearance: none;
    position: relative;
    width: 17px;
    height: 17px;
    background-color: #ffffff;
    border: 1px solid #d4d4d4;
    border-radius: 3px;
    &:checked{
        background-color: #ff9934;
        border-color: #ff9934;
    }
    &:checked::after{
        content: " ";
        position: absolute;
        width: 3px;
        height: 10px;
        left: 5px;
        top: 0px;
        border: solid white;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;
export const CheckBoxSearch = styled.input`
    cursor: pointer;
    appearance: none;
    position: relative;
    width: 24px;
    height: 17px;
    background-color: #ffffff;
    border: 1px solid #d4d4d4;
    border-radius: 3px;
    &:checked{
        background-color: #ff9934;
        border-color: #ff9934;
    }
    &:checked::after{
        content: " ";
        position: absolute;
        width: 3px;
        height: 10px;
        left: 5px;
        top: 0px;
        border: solid white;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;
export const CheckBox = styled.input`
    cursor: pointer;
`;
export const SpanGeoItem = styled.span`
    font-size: 12px;
    color: #747474;
`;
export const SpanGeoItemIcon = styled.span`
    font-size: 18px;
    color: #747474;
    padding-top: 6px;
`;
export const ButtonGeoItem = styled.button`
    background-color: transparent;
    border: none;
    font-size: 18px;
    color: #b8b6b6;
    cursor: pointer;
    margin: 0px 0px;
    padding-top: 6px;
    &:hover{
        color: #ff9934;
    }
`;
export const HeaderModal = styled.div`
    color: #fff;
    background: #596673 url(${headerModal}) no-repeat center 0;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
`;
export const TituloModal = styled.h2`
    font-size: 13px;
`;
export const CerrarModal = styled.p`
    font-size: 20px;
    transform: rotate(45deg);
    transition: all .3s ease;
    &:hover{
        transform: rotate(135deg);
    }
`;

export const SpanDisElem = styled.label`
    flex: 1;
    color: transparent;
`;
export const SpanDisElemMain = styled.label`
    flex: 1;
`;
export const CheckMarkElem = styled.span``;

export const geoFenceOptions = styled.div`
    width: 102px;
    height: auto;
    border-radius: 5px;
    background-color: #ffffff;
    display: ${props => props.visibility? 'block':'none'};
    position: absolute;
    top: 72px;
    right: -5px;
    box-shadow: 0px 0px 12px -4px rgba(0,0,0,0.75);
    padding: 5px;
`;
export const geoFenceOpt = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: #606266;
    font-size: 14px;
    gap: 8px;
    cursor: pointer;
    &:hover{
        background-color: #e7e7e7;
    }
`;

export const geoForm = styled.div`
    display: ${props => props.visibility? 'block':'none'};
    position: absolute;
    width: 100%;
    height: 93%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
`;
export const geoFormContent = styled.div`
    width: 100%;
    height: auto;
    background-color: #ffc285;
    margin-top: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
`;
export const rowFenceForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 14px;
    color: #ffff;
`;
export const rowFenceForm2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 14px;
    color: #ffff;
    display: ${props => props.visibility? 'block':'none'};
`;
export const FenceFormButtonAction = styled.button`
    padding: 7px 15px;
    background-color: #ff9934;
    color: #fff;
    border: 1px solid #ff9934;
    border-radius: 5px;
    margin: 0px 2px;
    display: flex;
    align-items: center;
    &:hover{
        background-color: #f5ac63;
        border: 1px solid #f5ac63;
    }
`;
export const FenceFormButtonCancel = styled.button`
    padding: 7px 15px;
    background-color: #ececec;
    color: #606266;
    border-radius: 5px;
    border: 1px solid #dcdfe6;
    margin: 0px 2px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover{
        background-color: #f5ac63;
        border: 1px solid #f5ac63;
    }
`;
export const ColorPicker = styled.input`
    appearance: none;
    width: 30px;
    height: 25px;
    border: none;
    background-color: transparent;
    padding: 0;
    border-color: transparent;
`;
export const CheckBoxFenceForm = styled.input`
    cursor: pointer;
    appearance: none;
    position: relative;
    width: 25px;
    height: 17px;
    background-color: #ffffff;
    border: 1px solid #d4d4d4;
    border-radius: 3px;
    &:checked{
        background-color: #ff9934;
        border-color: #ff9934;
    }
    &:checked::after{
        content: " ";
        position: absolute;
        width: 3px;
        height: 10px;
        left: 5px;
        top: 0px;
        border: solid white;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;
export const VerAlertas = styled.span`
    color: #8b8b8b;
    text-align: center;
    cursor: pointer;
    &:hover{
        color: #ff9934;
    }
`;
export const ListAlerts = styled.ul`
    margin: 10px 5px;
    padding: 0;
    list-style: none;
`;
export const ListAlertElem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    padding: 5px 0px;
    &:hover{
        background-color: #e7e7e7;
    }
    border-bottom: 1px solid #c2c2c2;
`;
export const SpanAlarmData = styled.div`
    display: flex;
    flex-direction: column;

`;
export const ContentInfo = styled.div`
    padding: 8px 16px;
    background-color: #f4f4f5;
    color: #909399;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 15px;
`;
export const ContentTripsDownload = styled.div`
    padding: 8px 16px;
    background-color: #f4f4f5;
    color: #909399;
    border-radius: 4px;
    display: flex;
    flex-direction:column;
    align-items: center;
    margin: 5px 15px;
`;
export const ContentButtonDownload = styled.div`
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
`;
export const LabelTrips = styled.label`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    text-align: justify;
    flex: 1;
    padding:  0px 8px;
`;
export const DivTrips = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    padding: 0px 15px;
`;
export const DivFormTrips = styled.div`
    display: flex;
    flex-direction: column;
`;
export const NameInputTrips = styled.label`
    margin: 5px 0px;
`;
export const SelectDevTrips = styled.select`
    height: 28px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    color: #8a8a8a;
    padding: 0px 8px 0px 8px;
    &:focus{
        outline: none;
        border: 1px solid #ff9934
    }
`;
export const InputTrips = styled.input`
    height: 28px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    color: #8a8a8a;
    padding: 0px 8px 0px 8px;
    &:focus{
        outline: none;
        border: 1px solid #ff9934
    }
`;
export const DownloadButtonExcel = styled.button`
    width: 170px;
    border: none;
    padding: 7px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
    background-color: #67c23a;
    border-color: #67c23a;
    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        background-color: #4e912d;
        border-color: #4e912d;
    }
`;
export const DownloadButtonTxt = styled.button`
    width: 170px;
    border: none;
    padding: 7px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
    background-color: #c4bfa7;
    border-color: #c4bfa7;
    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        background-color: #a19e8a;
    border-color: #a19e8a;
    }
`;
export const DownloadButtonKml = styled.button`
    width: 170px;
    border: none;
    padding: 7px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
    background-color: #4775cc;
    border-color: #4775cc;
    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        background-color: #355797;
        border-color: #355797;
    }
`;