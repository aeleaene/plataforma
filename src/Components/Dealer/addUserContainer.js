import {React, useState} from "react";
import Select from "react-select";

import "./estilos.css";

const AddUserContainer = () => {

    const timeZones = [
        {
          value: "GMT-12:00",
          label: "Etc/GMT-12"
        },
        {
          value: "GMT-11:00",
          label: "Etc/GMT-11"
        },
        {
          value: "GMT-11:00",
          label: "Pacific/Midway"
        },
        {
          value: "GMT-10:00",
          label: "America/Adak"
        },
        {
          value: "GMT-09:00",
          label: "America/Anchorage"
        },
        {
          value: "GMT-09:00",
          label: "Pacific/Gambier"
        },
        {
          value: "GMT-08:00",
          label: "America/Dawson_Creek"
        },
        {
          value: "GMT-08:00",
          label: "America/Ensenada"
        },
        {
          value: "GMT-08:00",
          label: "America/Los_Angeles"
        },
        {
          value: "GMT-07:00",
          label: "America/Chihuahua"
        },
        {
          value: "GMT-07:00",
          label: "America/Denver"
        },
        {
          value: "GMT-06:00",
          label: "America/Belize"
        },
        {
          value: "GMT-06:00",
          label: "America/Cancun"
        },
        {
          value: "GMT-06:00",
          label: "America/Chicago"
        },
        {
          value: "GMT-06:00",
          label: "Chile/EasterIsland"
        },
        {
          value: "GMT-05:00",
          label: "America/Bogota"
        },
        {
          value: "GMT-05:00",
          label: "America/Havana"
        },
        {
          value: "GMT-05:00",
          label: "America/New_York"
        },
        {
          value: "GMT-04:30",
          label: "America/Caracas"
        },
        {
          value: "GMT-04:00",
          label: "America/Campo_Grande"
        },
        {
          value: "GMT-04:00",
          label: "America/Glace_Bay"
        },
        {
          value: "GMT-04:00",
          label: "America/Goose_Bay"
        },
        {
          value: "GMT-04:00",
          label: "America/Santiago"
        },
        {
          value: "GMT-04:00",
          label: "America/La_Paz"
        },
        {
          value: "GMT-03:00",
          label: "America/Argentina/Buenos_Aires"
        },
        {
          value: "GMT-03:00",
          label: "America/Montevideo"
        },
        {
          value: "GMT-03:00",
          label: "America/Araguaina"
        },
        {
          value: "GMT-03:00",
          label: "America/Godthab"
        },
        {
          value: "GMT-03:00",
          label: "America/Miquelon"
        },
        {
          value: "GMT-03:00",
          label: "America/Sao_Paulo"
        },
        {
          value: "GMT-03:30",
          label: "America/St_Johns"
        },
        {
          value: "GMT-02:00",
          label: "America/Noronha"
        },
        {
          value: "GMT-01:00",
          label: "Atlantic/Cape_Verde"
        },
        {
          value: "GMT",
          label: "Europe/Belfast"
        },
        {
          value: "GMT",
          label: "Africa/Abidjan"
        },
        {
          value: "GMT",
          label: "Europe/Dublin"
        },
        {
          value: "GMT",
          label: "Europe/Lisbon"
        },
        {
          value: "GMT",
          label: "Europe/London"
        },
        {
          value: "UTC",
          label: "UTC"
        },
        {
          value: "GMT+01:00",
          label: "Africa/Algiers"
        },
        {
          value: "GMT+01:00",
          label: "Africa/Windhoek"
        },
        {
          value: "GMT+01:00",
          label: "Atlantic/Azores"
        },
        {
          value: "GMT+01:00",
          label: "Atlantic/Stanley"
        },
        {
          value: "GMT+01:00",
          label: "Europe/Amsterdam"
        },
        {
          value: "GMT+01:00",
          label: "Europe/Belgrade"
        },
        {
          value: "GMT+01:00",
          label: "Europe/Brussels"
        },
        {
          value: "GMT+02:00",
          label: "Africa/Cairo"
        },
        {
          value: "GMT+02:00",
          label: "Africa/Blantyre"
        },
        {
          value: "GMT+02:00",
          label: "Asia/Beirut"
        },
        {
          value: "GMT+02:00",
          label: "Asia/Damascus"
        },
        {
          value: "GMT+02:00",
          label: "Asia/Gaza"
        },
        {
          value: "GMT+02:00",
          label: "Asia/Jerusalem"
        },
        {
          value: "GMT+03:00",
          label: "Africa/Addis_Ababa"
        },
        {
          value: "GMT+03:00",
          label: "Asia/Riyadh89"
        },
        {
          value: "GMT+03:00",
          label: "Europe/Minsk"
        },
        {
          value: "GMT+03:30",
          label: "Asia/Tehran"
        },
        {
          value: "GMT+04:00",
          label: "Asia/Dubai"
        },
        {
          value: "GMT+04:00",
          label: "Asia/Yerevan"
        },
        {
          value: "GMT+04:00",
          label: "Europe/Moscow"
        },
        {
          value: "GMT+04:30",
          label: "Asia/Kabul"
        },
        {
          value: "GMT+05:00",
          label: "Asia/Tashkent"
        },
        {
          value: "GMT+05:30",
          label: "Asia/Kolkata"
        },
        {
          value: "GMT+05:45",
          label: "Asia/Katmandu"
        },
        {
          value: "GMT+06:00",
          label: "Asia/Dhaka"
        },
        {
          value: "GMT+06:00",
          label: "Asia/Yekaterinburg"
        },
        {
          value: "GMT+06:30",
          label: "Asia/Rangoon"
        },
        {
          value: "GMT+07:00",
          label: "Asia/Bangkok"
        },
        {
          value: "GMT+07:00",
          label: "Asia/Novosibirsk"
        },
        {
          value: "GMT+08:00",
          label: "Etc/GMT+8"
        },
        {
          value: "GMT+08:00",
          label: "Asia/Hong_Kong"
        },
        {
          value: "GMT+08:00",
          label: "Asia/Krasnoyarsk"
        },
        {
          value: "GMT+08:00",
          label: "Australia/Perth"
        },
        {
          value: "GMT+08:45",
          label: "Australia/Eucla"
        },
        {
          value: "GMT+09:00",
          label: "Asia/Irkutsk"
        },
        {
          value: "GMT+09:00",
          label: "Asia/Seoul"
        },
        {
          value: "GMT+09:00",
          label: "Asia/Tokyo"
        },
        {
          value: "GMT+09:30",
          label: "Australia/Adelaide"
        },
        {
          value: "GMT+09:30",
          label: "Australia/Darwin"
        },
        {
          value: "GMT+09:30",
          label: "Pacific/Marquesas"
        },
        {
          value: "GMT+10:00",
          label: "Etc/GMT+10"
        },
        {
          value: "GMT+10:00",
          label: "Australia/Brisbane"
        },
        {
          value: "GMT+10:00",
          label: "Australia/Hobart"
        },
        {
          value: "GMT+10:00",
          label: "Asia/Yakutsk"
        },
        {
          value: "GMT+10:30",
          label: "Australia/Lord_Howe"
        },
        {
          value: "GMT+11:00",
          label: "Asia/Vladivostok"
        },
        {
          value: "GMT+11:30",
          label: "Pacific/Norfolk"
        },
        {
          value: "GMT+12:00",
          label: "Etc/GMT+12"
        },
        {
          value: "GMT+12:00",
          label: "Asia/Anadyr"
        },
        {
          value: "GMT+12:00",
          label: "Asia/Magadan"
        },
        {
          value: "GMT+12:00",
          label: "Pacific/Auckland"
        },
        {
          value: "GMT+12:45",
          label: "Pacific/Chatham"
        },
        {
          value: "GMT+13:00",
          label: "Pacific/Tongatapu"
        },
        {
          value: "GMT+14:00",
          label: "Pacific/Kiritimati"
        }
      ];

      const [enterprise, setEnterprise] = useState('');
      const [contacto, setContacto] = useState('');
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [phone, setPhone] = useState('');
      const [movil, setMovil] = useState('');
      const [direccion, setDireccion] = useState('');
      const [webSite, setWebSite] = useState('');
      const [users, setUsers] = useState([]);
      const [tz, setTz] = useState('');
      const [attributes, setAttributes] = useState([]);
      const [client, setClient] = useState('');
      const [tipoCuenta, setTipoCuenta] = ('');

      const [selectedOption, setSelectedOption] = useState('');

      const mostrar = (e) => {
          console.log("entra");
        console.log(JSON.stringify({name, email, password, phone, attributes: {"direccion":direccion, "sitioWeb":webSite, "celular":movil, "contacto":contacto, "empresa":enterprise, "zonaHoraria":selectedOption, "cliente":client}}))
        {/*console.log('Mostrando usuarios');
        handleMostarar();*/}
        }

        const handleMostrar = (e) => {
            e.preventDefault();
            mostrar();
          }

          const handleEnviar = (e) => {
            e.preventDefault();
            enviar();
        }

          const enviar = async () => {
            const response = await fetch('/api/users', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json',
                         'Credentials': 'include',
                         'Accept':'*/*'    },
              body: JSON.stringify({name, email, password, phone, attributes: {"direccion":direccion, "sitioWeb":webSite, "celular":movil, "contacto":contacto, "empresa":enterprise, "zonaHoraria":selectedOption, "cliente":client}})
            });
        
            if (response.ok) {
                console.log('Estado: 200')
            } 
          }

    
  return (
    <div className="main-container-box">
      <div className="add-user-page h100b">
        <h3 className="block-titlebar">
          Añadir al cliente
          <a href="javascript://" className="set-template">
            <i className="option-btn base-icon set-icon" /> Configuración de la
            plantilla
          </a>{" "}
          <span style={{ color: "rgb(170, 170, 170)" }}>
            (Plantilla predeterminada para subcuenta nueva)
          </span>
        </h3>{" "}
        <div className="has-titlebar-content white-bg el-scrollbar">
          <div
            className="el-scrollbar__wrap"
            style={{ marginBottom: "-6px", marginRight: "-6px" }}
          >
            <div className="el-scrollbar__view">
              <div className="submit-from-box dialog-adduser user-info">
                <form className="el-form user-add half-from">
                  <div className="el-row">
                    <div className="el-form-item online is-required">
                      <label className="el-form-item__label">
                        Atención al cliente superior
                      </label>
                      <div className="el-form-item__content">
                        <div className="user-tree-select">
                          <div data-tips>
                            <div
                              aria-haspopup="listbox"
                              role="combobox"
                              aria-owns="el-autocomplete-2463"
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
                                  aria-activedescendant="el-autocomplete-2463-item--1"
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
                                      id="el-autocomplete-2463"
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
                      <label htmlFor="account" className="el-form-item__label">
                        Cuenta de inicio de sesión
                      </label>
                      <div className="el-form-item__content">
                        <div className="el-input el-input--suffix">
                          {/**/}
                          <input
                            type="text"
                            autoComplete="off"
                            className="el-input__inner"
                            onChange={event => setName(event.target.value)}
                          />
                          {/**/}
                          {/**/}
                          {/**/}
                          {/**/}
                        </div>{" "}
                        {/**/}
                        {/**/}
                      </div>
                    </div>{" "}
                    <div className="el-form-item">
                      <label htmlFor="name" className="el-form-item__label">
                        Nombre de empresa
                      </label>
                      <div className="el-form-item__content">
                        <div className="el-input el-input--suffix">
                          {/**/}
                          <input
                            type="text"
                            autoComplete="off"
                            className="el-input__inner"
                            onChange={event => setEnterprise(event.target.value)}
                          />
                          {/**/}
                          {/**/}
                          {/**/}
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                    </div>{" "}
                    <div className="el-form-item is-required">
                      <label htmlFor="passwd" className="el-form-item__label">
                        Contraseña
                      </label>
                      <div className="el-form-item__content">
                        <div className="el-input el-input--suffix">
                          {/**/}
                          <input
                            type="password"
                            autoComplete="new-password"
                            className="el-input__inner"
                            onChange={event => setPassword(event.target.value)}
                          />
                          {/**/}
                          <span className="el-input__suffix">
                            <span className="el-input__suffix-inner">
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                            </span>
                            {/**/}
                          </span>
                          {/**/}
                          {/**/}
                        </div>{" "}
                        <span className="icon-randompwd el-icon-key" />{" "}
                        <div className="pwd-strength">
                          <span className />
                        </div>
                        {/**/}
                      </div>
                    </div>{" "}
                    <div className="el-form-item is-required">
                      <label htmlFor="repwd" className="el-form-item__label">
                        Confirmar Contraseña
                      </label>
                      <div className="el-form-item__content">
                        <div className="el-input el-input--suffix">
                          {/**/}
                          <input
                            type="password"
                            autoComplete="new-password"
                            className="el-input__inner"
                            onChange={event => setPassword(event.target.value)}
                          />
                          {/**/}
                          <span className="el-input__suffix">
                            <span className="el-input__suffix-inner">
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
                    <div className="el-form-item online is-required">
                      <label htmlFor="type" className="el-form-item__label">
                        Tipo de cliente
                      </label>
                      <div className="el-form-item__content" onChange={event => setEnterprise(event.target.value)}>
                        <label role="radio" tabIndex={0} className="el-radio">
                          <span className="el-radio__input">
                            <span className="el-radio__inner" />
                            <input
                              type="radio"
                              aria-hidden="true"
                              tabIndex={-1}
                              autoComplete="off"
                              className="el-radio__original"
                              value={1}
                            />
                          </span>
                          <span className="el-radio__label">
                            <i className="tree-icon ico-dealer" />
                            Distribuidor{/**/}
                          </span>
                        </label>{" "}
                        <label role="radio" tabIndex={0} className="el-radio">
                          <span className="el-radio__input">
                            <span className="el-radio__inner" />
                            <input
                              type="radio"
                              aria-hidden="true"
                              tabIndex={-1}
                              autoComplete="off"
                              className="el-radio__original"
                              value={3}
                            />
                          </span>
                          <span className="el-radio__label">
                            <i className="tree-icon ico-uservirtual" />
                            Cuenta virtual{/**/}
                          </span>
                        </label>{" "}
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
                              value={2}
                            />
                          </span>
                          <span className="el-radio__label">
                            <i className="tree-icon ico-user" />
                            Usuario Final
                            {/**/}
                          </span>
                        </label>{" "}
                        <label className="el-checkbox">
                          <span className="el-checkbox__input">
                            <span className="el-checkbox__inner" />
                            <input
                              type="checkbox"
                              aria-hidden="false"
                              value={1}
                              className="el-checkbox__original"
                            />
                          </span>
                          <span className="el-checkbox__label">
                            <i className="tree-icon ico-userReadonly" />
                            Solo monitor
                            <i
                              className="el-tooltip el-icon-info"
                              aria-describedby="el-tooltip-115"
                              tabIndex={0}
                            />
                            {/**/}
                          </span>
                        </label>
                        {/**/}
                      </div>
                    </div>{" "}
                    <div className="el-form-item is-required">
                      <label htmlFor="timezone" className="el-form-item__label">
                        Zona horaria
                      </label>
                      <div className="el-form-item__content">
                        <div className="el-select">
                          {/**/}
                          <div className="el-input el-input--suffix">
                              <Select className="el-input el-input--suffix"
                                      defaultValue={selectedOption} 
                                      options={timeZones}
                                      onChange={event => setSelectedOption(event.target.value)}
                                       />
                            {/*
                            <input
                              type="text"
                              readOnly="readonly"
                              autoComplete="off"
                              placeholder="Seleccionar"
                              className=""
                              onChange={event => setTz(event.target.value)}
                            />*/}
                            {/**/}

                            {/**/}
                            {/**/}
                          </div>


                        </div>
                        {/**/}
                      </div>
                    </div>{" "}
                    <div className="cb" />{" "}
                    <div className="el-form-item">
                      <label htmlFor="contact" className="el-form-item__label">
                        Contacto
                      </label>
                      <div className="el-form-item__content">
                        <div className="el-input el-input--suffix">
                          {/**/}
                          <input
                            type="text"
                            autoComplete="off"
                            className="el-input__inner"
                            onChange={event => setContacto(event.target.value)}
                          />
                          {/**/}
                          {/**/}
                          {/**/}
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                    </div>{" "}
                    <div className="el-form-item">
                      <label htmlFor="phone" className="el-form-item__label">
                        Móvil
                      </label>
                      <div className="el-form-item__content">
                        <div className="el-input el-input--suffix">
                          {/**/}
                          <input
                            type="text"
                            autoComplete="off"
                            className="el-input__inner"
                            onChange={event => setMovil(event.target.value)}
                          />
                          {/**/}
                          {/**/}
                          {/**/}
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                    </div>{" "}
                    <div className="el-form-item">
                      <label
                        htmlFor="telephone"
                        className="el-form-item__label"
                      >
                        Teléfono
                      </label>
                      <div className="el-form-item__content">
                        <div className="el-input el-input--suffix">
                          {/**/}
                          <input
                            type="text"
                            autoComplete="off"
                            className="el-input__inner"
                            onChange={event => setPhone(event.target.value)}
                          />
                          {/**/}
                          {/**/}
                          {/**/}
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                    </div>{" "}
                    <div className="el-form-item">
                      <label htmlFor="email" className="el-form-item__label">
                        <div>
                          Correo electrónico
                          <i
                            className="el-tooltip el-icon-info"
                            aria-describedby="el-tooltip-6342"
                            tabIndex={0}
                          />
                        </div>
                      </label>
                      <div className="el-form-item__content">
                        {" "}
                        <div className="el-input el-input--suffix">
                          {/**/}
                          <input
                            type="text"
                            autoComplete="off"
                            className="el-input__inner"
                            onChange={event => setEmail(event.target.value)}
                          />
                          {/**/}
                          {/**/}
                          {/**/}
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                    </div>{" "}
                    <div className="el-form-item">
                      <label htmlFor="address" className="el-form-item__label">
                        Dirección
                      </label>
                      <div className="el-form-item__content">
                        <div className="el-input el-input--suffix">
                          {/**/}
                          <input
                            type="text"
                            autoComplete="off"
                            className="el-input__inner"
                            onChange={event => setDireccion(event.target.value)}
                          />
                          {/**/}
                          {/**/}
                          {/**/}
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                    </div>{" "}
                    <div className="el-form-item">
                      <label htmlFor="website" className="el-form-item__label">
                        Página web
                      </label>
                      <div className="el-form-item__content">
                        <div className="el-input el-input--suffix">
                          {/**/}
                          <input
                            type="text"
                            autoComplete="off"
                            maxLength={250}
                            className="el-input__inner"
                            onChange={event => setWebSite(event.target.value)}
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
                  <div className="el-form-item form-btn-box online">
                    {/**/}
                    <div className="el-form-item__content">
                      <button
                        className="el-button el-button--primary"
                      >
                        {/**/}
                        {/**/}
                        <span>Confirmar</span>
                      </button>{" "}
                      <button
                        type="button"
                        className="el-button el-button--default"
                        onClick={handleEnviar}
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
              style={{ height: "81.4141%", transform: "translateY(0%)" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserContainer;
