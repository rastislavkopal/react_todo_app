import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

export default function CookiesModal({ shouldShow, setShouldShow }) {

    const [show, setShow] = useState(shouldShow);

    const handleCookiesAccepted = (e) => {
        localStorage.setItem('cookiesAccepted', true);
        setShouldShow(false);
        setShow(false)
    }

    return (
        <>
          <Modal
            show={show}
            onHide={(e) => handleCookiesAccepted(e) }
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Splnené požiadavky.
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
              &#8226; Po uzavretí tohto modalu sa táto inforámcia znova nezobrazí. Je treba premazať localStorage. <br/>
              <h3>Zoznam: HTML5</h3><br/>
              &#8226; Validne &#10004; <br/>
              &#8226; Grafika - route /stuff: svg aj canvas :D &#10004;<br/>
              &#8226; Video tiez v /stuff &#10004;<br/>
              &#8226; Formularove prvky, vsetky maju autofocus, validaciu pre prazdny title aj placeholder &#10004;<br/>
              &#8226; Aplikacia reaguje na offline stav a iba vypise, ze je offline. &#10004;<br/>

              <h3>Zoznam: CSS</h3><br/>
              &#8226; Vendor prefixy &#10004;<br/>
              &#8226; 3D transformacia vo footeri - ikonky &#10004;<br/>
              &#8226; transitions - v route /about po scrolle sa meni farba &#10004;<br/>
              &#8226; Media queries pre footer aj header, aj pre main columns &#10004;<br/>

              <h3>Zoznam: JS</h3><br/>
              &#8226; Pouzity react &#10004;<br/>
              &#8226; localStorage a Drag n drop API &#10004;<br/>
              &#8226; location history &#10004;<br/>
              &#8226; Zistovanie offline stavu &#10004;<br/>
              &#8226; XXXX praca s SVG  XXXX&#9083;<br/>
              </div>
            </Modal.Body>
          </Modal>
        </>
      );
}
