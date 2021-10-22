import styled from '@emotion/styled/macro';

import iconos from '../../assets/images/base.a0aebc1.png'

export const dashboard_user_clearfix = styled.div`
     font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
`

export const item = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0 240px 0;
    margin-right: 0px;
    padding: 0;
    float: left;
    box-sizing: border-box;
    padding-right: 10px;
    width: 30%;
`

export const item_content = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    height: 230px;
    border-radius: 2px;
    background-color: #20a8d8;
    color: #fff;
    background-image: url(data:image/png;base64,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),url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAExElEQVRoQ+Wb2asdRRDGf+W+x33BNQRF3BW3uKCoDwoB/1afJA8RBZdoRNwIF0Vi1Ju4xLgbl2jJN+m+zBnnnNM93XPP0SkIgXOru+ubqqm1xxiJ3P1M4BJgB3AhcB5wDqDfTw/H/gX8CfwG/Ar8BPwAfGdm+r06Wc0d3V2ArgWuDmCH7u8CDXwJbJqZHkgVGirQzOHufgWwE7gSqLJn6wCB/xo4ZGbflKIuEs7dLwduDdoslSVlvbS+YWbHUpj7eAYBDqZ7B3DN0IML1x0FPhxi6tmA3V3v6J3B+RTKXbRcTu0DM9vM2SUZsLufBkirN+YcsA28h4O2/045KwlwCDEPAJelbLoCnm+BAymhbClgdz8L2A1ctAIgOUf+CLxhZn8sWrQQcNDsI/8BsBGjQL++SNNzAYd39uE1NuN5ipR57zez3nd6EeC71tBBpZr4YTN7PzkOh9BzX+rua8r3Tl/I+peGQ1Lx5BrE2dLnqDj9cjc56QN8/wozqFKQ3fVHzezt9o8zgENurBD0fyKFqq3cuwv4sZELARUbNwH6/2zgd0DCfBr+H+NBq7Z+NW68BXhk7eqcuwPYeaAE+j1A5WBt2tJyG/CDwFW1Twr73bMEbDxWoN8dQYavzOwt7dsAdvdzgadHKN61vcxXr0oqyfwG17tzDpHV7DOzExHwLuC2VIky+VR0qKRMJZV7B1KZM/gOmtknEfCjwKUZi3NYnwsOKnWNHNmLqcwZfMfN7DVz9zOAZ0cyZ8nzfObeMr8XMoCksmrfvQKsxttDqasG8K2LhiX6mwJ8c2jEDcCStCT3HT4CNB51BNoQYBUJOU4lV4518NJR5iMC/DhwcS6KTP5Vx+Eo7vcC/AygODwmrTrTithOCLCcijz1dlDMpTWpUK9M/SdNE8bMpdu4TgrwnsywUfpgpO34gE+OlDvPk9G3A7AmhxquSbtfAJ93pLkeuC6kkxqeaYI4FjWAxzJpjWEU8toZnDT6SguUHsYTnVfqOPAxoHFKbWpMurbTugC4d0G3U61UgRYJ7Lx+t7qPqpxqarxxWjXD0g2h7o0D7z4NaQi+L/xBFdoyXtXIn1VSdROWaiUeMt/bEwTb0Mgz8GnUqn/L6CDw0TKmhL9v1kotNQxXR2MZ/RK0G5vkGtBJy+cvWxi6IYcS+BaxNKllafEgp6QCX8Ivo/3hGkObT12WlMahHpKaA3JqQ6kpHkrKQ4F8CpCjSqG2OUf+VLMW/8/AS0DSaLQj0KnyUD+6+9AGQC5gHTfkHY6ylwA+1QAIgEtaPDkmHQVvO60UyxBPqUnPtHhKm3ipTisVXB+fwtNQpzXbxAtaLm3T3jJiI7A0LM22aQNgVTCaB5dQSuKRs7+SlBqJh+bFzR2vMUYtyo9V8JfeB6mVWvaPWoKWVdGkxMQULfUVDynrahcP84dpAXTtcak0LvDSuAoF3ceMliVnonuUKiikUVVINYuFxePSAFgCjTkQ364GQNpAPIBWF3MaVx7iS+bu07nUErSstHE615YCaN1en8bFtJZpT+fqYQu0ND2Ny6Ut0NO5PtxOjyZzQbwDWsnJND4B6ACfxkce3QpgMp/x9ACfxodafTVfz6d46j3rumHfp3i6uaOe9eif4v0DoTOzLTQs6JsAAAAASUVORK5CYII=);
    background-position: 0 100%,right 15px bottom 15px;
    background-size: 100%,55px;
    position: relative;
`
export const item_title = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #fff;
    margin: 0;
    font-size: 16px;
    padding: 25px 30px;
`

export const item_user_info = styled.div`
        font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #fff;
    margin: 0;
    padding: 0;
    position: relative;
    height: 98px;
    text-align: center;
`

export const user_num = styled.div`
        font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #fff;
    text-align: center;
    margin: 0;
    padding: 0;
`

export const num_title_mr5 = styled.span`
        font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    margin-right: 5px;
    font-size: 12px;
    color: hsla(0,0%,100%,.8);
    margin-left: -15px;
`

export const link_line_hover = styled.a`
        font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    text-decoration: none;
    color: #20a8d8;
    cursor: pointer;
    outline: none;
    padding-bottom: 1px;
    border-bottom: 1px solid #fff;
`

export const total_user = styled.span`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    cursor: pointer;
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    &:hover{
        color: #FF9934;
    }
`

export const option_box_clearfix = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #fff;
    margin: 0;
    padding: 0;
    padding-left: 30px;
    padding-top: 9%;
`

export const option_icon_base_icon_add_user_white_icon = styled.i`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #fff;
    text-align: center;
    cursor: pointer;
    background-image: url(${iconos});
    background-repeat: no-repeat;
    background-position: -76px -250px;
    height: 18px;
    width: 18px;
    display: inline-block;
`

export const option_desc = styled.p`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    cursor: pointer;
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: hsla(0,0%,100%,.8);
`

export const option_item_f1 = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #fff;
    margin: 0;
    padding: 0;
    float: left;
    display: inline;
    margin-right: 10%;
    text-align: center;
    cursor: pointer;
    &:hover{
        ${option_desc}{
            color: #FF9934;
        }
        ${option_icon_base_icon_add_user_white_icon} {
        background-image: url(${iconos});
        background-repeat: no-repeat;
        background-position: -204px -325px;
        }
    }
`

export const option_icon_base_icon_edit_white_icon = styled.i`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #fff;
    text-align: center;
    cursor: pointer;
    background-image: url(${iconos});
    background-repeat: no-repeat;
    background-position: -76px -220px;
    height: 18px;
    width: 18px;
    display: inline-block;
`

export const option_desc_edit = styled.p`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    cursor: pointer;
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: hsla(0,0%,100%,.8);
`

export const option_item_f2 = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #fff;
    margin: 0;
    padding: 0;
    float: left;
    display: inline;
    margin-right: 10%;
    text-align: center;
    cursor: pointer;
    &:hover{
        ${option_desc_edit}{
            color: #FF9934;
        }
        ${option_icon_base_icon_edit_white_icon} {
        background-image: url(${iconos});
        background-repeat: no-repeat;
        background-position: -204px -380px;
        }
    }
`

export const option_icon_base_icon_password_white_icon = styled.i`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #fff;
    text-align: center;
    cursor: pointer;
    background-image: url(${iconos});
    background-repeat: no-repeat;
    background-position: -79px 0;
    height: 18px;
    width: 18px;
    display: inline-block;
`

export const option_desc_pass = styled.p`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    cursor: pointer;
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: hsla(0,0%,100%,.8);
`

export const option_item_f3 = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #fff;
    margin: 0;
    padding: 0;
    float: left;
    display: inline;
    margin-right: 10%;
    text-align: center;
    cursor: pointer;
    &:hover{
        ${option_desc_pass}{
            color: #FF9934;
        }
        ${option_icon_base_icon_password_white_icon} {
        background-image: url(${iconos});
        background-repeat: no-repeat;
        background-position: -206px -426px;
        }
    }
`

export const el_button_refresh = styled.div`
    font-family: element-icons!important;
    speak: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 400;
    -webkit-user-select: none;
    font-size: 14px;
    border-radius: 2px;
    background-color: transparent;
    border: none;
    padding: 10px;
    position: absolute;
    top: 10px;
    right: 10px;
    color: #fff;
    display: none;
`

export const item_devices = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin-right: 0%;
    padding: 0;
    float: left;
    box-sizing: border-box;
    padding-right: 15px;
    width: 36%;
`

export const item_content_devices = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    height: 230px;
    border-radius: 2px;
    background-color: #63c2de;
    color: #fff;
    background-image: url(data:image/png;base64,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),url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAEb0lEQVRoQ+Wb148dNRSHv0MLJZBA6FURRQgCD4jeggRIQBDwp/ICEg9IIFFCEQ+UKEJEKMASaoBQlhI46Lc5Xk0mc+96xt69F+yn3avx8Xw+9mn2GJvU3P1M4EJgB3A+cC5wNqDfT49h/wb+An4HfgN+Bn4CfjAz/V69WU2J7i6gq4DLA3aqfBc08BWwYmaakCpt6gudNLi7XwLsBi4FqsjsDCD4b4BPzezbUuqil3P3i4GbQ5ul75LTX1o/aGbf5Tw89Mwk4Fi6e4Arpg5c2O8I8OGUpT4a2N21R28L41P43kXdZdQ+MLOVMVKygd39NEBavW7MAFvw7OHQ9j85Y2UBh4u5C9iVI3QBz3wPvJPjyjYEdvezgPuACxYAMmbIY8CbZvbnvE5zgUOz9/8HYBOjoN+Yp+mZwLFn713iZTxLkVre+81scE/PA759CQ1U7hI/bGbvZ/vhcD135Epf0ufeG3JZp2g4gopHlsDPls6j/PQr/eBkCPjOBUZQpZD9/kfM7N3ujycBR2wsF/R/anJV67F3H/jBLUwEtmpSlVu/lgZbB66sXYWhtwLXAApcSpoCic+Bj4Cs8HFgsHUtd4HvBi4rebNOXyUX11eSlcQcUrIwUebXZva2+q4Bu/s5wKMVk/enKmi2zyar+8JEYBURXjaz1QQsbdwyUdhQt+cqyuqKer5A7gEzO5SAHwAuKhCmwtxxLZaQsYzAR83sdXP3M4AnJi5ngWrfqwqputPqEgNLGS8JWIW3eyZoVxXKKwFZZGlXBbZfRwK/GhP9cOb4JUtaQ7wl4BujEJc55tpj0qxcjmBVSxbs9ljSvwDPZgpLALlboBT4oICVJKhONaZdHUV1wSmKUTFvGyCfqaWtLTKvqQj3CaBUTk2VlBsyQtpS4C8F/BCwcwStXJgmSMv4s/g7wQpAJwjzNHwA+HjGeDdt4C1KgX8U8GOAIHKbiu46PhGcIh/9L81+0YmEZi1RnSTsj62QIjGN242kVHTQycVQKwVeFfCTgCx1bpN2NUHSrgyejJeWaDJYkjMLWDGttsBQJJYiKRX3FdNvBvBxAT890iVdG1GUXlDHKzJc+jvZAWm6DyxrrFOD1PaF4etaaa2SFzvPKC7oW+9SDXttYPk6FcbHAItxb2yLLrBOHvV7t1UBbm5JN2e0mnNLNQOPFGI+voHJX1TgsVIztNS1BllsXVl4JtPHLSS0rJU8KBBRXD3PD/fnQW4pWemcOSq10mvJQ430UMnEUUBnO3JNuclADmQtt3QiPZQ0dy8tACiWVgkmFdmWEfhEASCAmyvxtFXECy23U6YNYKV5Ss1qtFSIV6Ihg1bSZBuUmZUU4nVevHbHq92jltCyctF2DtMCup3j0gBWBaOdA/GAVvWijSsPyZy6ezuXWkLLci3tXFsKaPnQNi6mdZZ2O1cPO9DSdBuXSzvQ7Vwf7gbCzVwQ70ErOGnjE4AeeBsfefRzvWY+4xkAb+NDraHsfuBTvPPilsDQp3h/xHHrpn+K9y+s19gtDHA+vwAAAABJRU5ErkJggg==);
    background-position: 0 100%,right 15px bottom 15px;
    background-size: 100%,55px;
    position: relative;
`

export const option_num = styled.div`
font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #fff;
    text-align: center;
    font-size: 16px;
    display: inline-block;
    margin-bottom: 2px;
    font-weight: bold;

`

export const item_content_balance_pr = styled.div`
font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    padding-right: 0!important;
    float: left;
    box-sizing: border-box;
    width: 20%;
`

export const item_content_balance = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    height: 230px;
    border-radius: 2px;
    background-color: #4875b4;
    color: #fff;
    background-image: url(data:image/png;base64,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),url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAEb0lEQVRoQ+Wb148dNRSHv0MLJZBA6FURRQgCD4jeggRIQBDwp/ICEg9IIFFCEQ+UKEJEKMASaoBQlhI46Lc5Xk0mc+96xt69F+yn3avx8Xw+9mn2GJvU3P1M4EJgB3A+cC5wNqDfT49h/wb+An4HfgN+Bn4CfjAz/V69WU2J7i6gq4DLA3aqfBc08BWwYmaakCpt6gudNLi7XwLsBi4FqsjsDCD4b4BPzezbUuqil3P3i4GbQ5ul75LTX1o/aGbf5Tw89Mwk4Fi6e4Arpg5c2O8I8OGUpT4a2N21R28L41P43kXdZdQ+MLOVMVKygd39NEBavW7MAFvw7OHQ9j85Y2UBh4u5C9iVI3QBz3wPvJPjyjYEdvezgPuACxYAMmbIY8CbZvbnvE5zgUOz9/8HYBOjoN+Yp+mZwLFn713iZTxLkVre+81scE/PA759CQ1U7hI/bGbvZ/vhcD135Epf0ufeG3JZp2g4gopHlsDPls6j/PQr/eBkCPjOBUZQpZD9/kfM7N3ujycBR2wsF/R/anJV67F3H/jBLUwEtmpSlVu/lgZbB66sXYWhtwLXAApcSpoCic+Bj4Cs8HFgsHUtd4HvBi4rebNOXyUX11eSlcQcUrIwUebXZva2+q4Bu/s5wKMVk/enKmi2zyar+8JEYBURXjaz1QQsbdwyUdhQt+cqyuqKer5A7gEzO5SAHwAuKhCmwtxxLZaQsYzAR83sdXP3M4AnJi5ngWrfqwqputPqEgNLGS8JWIW3eyZoVxXKKwFZZGlXBbZfRwK/GhP9cOb4JUtaQ7wl4BujEJc55tpj0qxcjmBVSxbs9ljSvwDPZgpLALlboBT4oICVJKhONaZdHUV1wSmKUTFvGyCfqaWtLTKvqQj3CaBUTk2VlBsyQtpS4C8F/BCwcwStXJgmSMv4s/g7wQpAJwjzNHwA+HjGeDdt4C1KgX8U8GOAIHKbiu46PhGcIh/9L81+0YmEZi1RnSTsj62QIjGN242kVHTQycVQKwVeFfCTgCx1bpN2NUHSrgyejJeWaDJYkjMLWDGttsBQJJYiKRX3FdNvBvBxAT890iVdG1GUXlDHKzJc+jvZAWm6DyxrrFOD1PaF4etaaa2SFzvPKC7oW+9SDXttYPk6FcbHAItxb2yLLrBOHvV7t1UBbm5JN2e0mnNLNQOPFGI+voHJX1TgsVIztNS1BllsXVl4JtPHLSS0rJU8KBBRXD3PD/fnQW4pWemcOSq10mvJQ430UMnEUUBnO3JNuclADmQtt3QiPZQ0dy8tACiWVgkmFdmWEfhEASCAmyvxtFXECy23U6YNYKV5Ss1qtFSIV6Ihg1bSZBuUmZUU4nVevHbHq92jltCyctF2DtMCup3j0gBWBaOdA/GAVvWijSsPyZy6ezuXWkLLci3tXFsKaPnQNi6mdZZ2O1cPO9DSdBuXSzvQ7Vwf7gbCzVwQ70ErOGnjE4AeeBsfefRzvWY+4xkAb+NDraHsfuBTvPPilsDQp3h/xHHrpn+K9y+s19gtDHA+vwAAAABJRU5ErkJggg==);
    background-position: 0 100%,right 15px bottom 15px;
    background-size: 100%,55px;
    position: relative;
`

export const balance_content_box = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #fff;
    margin: 0;
    padding: 0;
    padding-left: 30px;
`



export const balance_num_item = styled.div`
font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #fff;
    margin: 0;
    padding: 0;
    float: left;
    display: inline;
    text-align: left;
    padding-right: 6%;
    min-width: 80px;
`

export const link_line = styled.a`
font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: left;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    padding-bottom: 1px;
    border-bottom: 1px solid #fff;
    color: #fff;
`

export const balance_num = styled.b`
font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: left;
    cursor: pointer;
    color: #fff;
    font-size: 34px;
    line-height: 41px;
`
export const balance_dec = styled.p`
font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: left;
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: hsla(0,0%,100%,.8);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 150px;
`