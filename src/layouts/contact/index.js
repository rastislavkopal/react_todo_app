import React, { useRef, useEffect } from 'react'

export default function Contact() {

    const innerRef = useRef();
    useEffect(() => innerRef.current && innerRef.current.focus());
    
  return (
    <section className='body_part pt-5' style={{ backgroundColor: "#172031"}}>
      <form action="mailto:nespravny_mail@fel.cvut.cz" method="GET" className='bg-2 px-5 py-5'>
          <h3>Kontaktujte nás:</h3>
          <div className="row pt-3">
              <div className="col-md-6">
                  <div className="form-group">
                      <input ref={innerRef} type="text" name="name" className="form-control" placeholder="Zadajte vaše meno *" />
                  </div>
                  <div className="form-group">
                      <input type="text" name="email" className="form-control mt-3" placeholder="Zadajte email *" />
                  </div>
                  <div className="form-group">
                      <input type="text" name="phone" className="form-control mt-3 mb-3" placeholder="Číslo telefónu *" />
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                      <textarea name="message" className="form-control" placeholder="Text správy *" style={{ width: "100%", height: "150px"}}></textarea>
                  </div>
              </div>

              <div className="form-group">
                  <button type="submit" name="btnSubmit" className="btn btn-danger mt-5">Odoslat</button>
              </div>
          </div>
      </form>
    </section>
  )
}
