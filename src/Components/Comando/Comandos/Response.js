import React from 'react';
import * as s from './Response.styles';
import { FcInfo } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";

const Response = ({reporte}) => {
    return( 
    
    <s.el_message_box>
        <s.el_message_box_header>
            <s.el_message_box_title>
                <s.Span>Response</s.Span>
                <s.el_message_box_headerBtn>
                    <s.el_message_box_close>
                        <AiOutlineClose />
                    </s.el_message_box_close>
                </s.el_message_box_headerBtn>
            </s.el_message_box_title>
        </s.el_message_box_header>

        <s.el_message_box_content>
            <s.el_message_box_container>

                <s.el_message_box_status>
                    <FcInfo />
                </s.el_message_box_status>

                <s.el_message_box_message>
                    <s.P>
                        <s.f13>
                            {reporte}
                        </s.f13>
                    </s.P>
                </s.el_message_box_message>

            </s.el_message_box_container>
        </s.el_message_box_content>

    </s.el_message_box>
    )
}

export default Response;