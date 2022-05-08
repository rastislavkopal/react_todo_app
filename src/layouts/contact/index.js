import React from 'react'

export default function Contact() {
  return (
    <div className='body_part pt-5' style={{ backgroundColor: "#172031"}}>
      <form action="mailto:nespravny_mail@fel.cvut.cz" method="GET" className='bg-2 px-3 py-5'>
          <h3>Kontaktujte nás:</h3>
          <div className="row pt-3">
              <div className="col-md-6">
                  <div className="form-group">
                      <input type="text" name="txtName" className="form-control" placeholder="Zadajte vaše meno *" />
                  </div>
                  <div className="form-group">
                      <input type="text" name="txtEmail" className="form-control mt-3" placeholder="Zadajte email *" />
                  </div>
                  <div className="form-group">
                      <input type="text" name="txtPhone" className="form-control mt-3 mb-3" placeholder="Číslo telefónu *" />
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                      <textarea name="txtMsg" className="form-control" placeholder="Text správy *" style={{ width: "100%", height: "150px"}}></textarea>
                  </div>
              </div>

              <div className="form-group">
                  <button type="submit" name="btnSubmit" className="btn btn-danger mt-5">Odoslat</button>
              </div>
          </div>
      </form>
    </div>
  )
}
