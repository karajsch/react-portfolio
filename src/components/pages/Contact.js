import React from "react";

const Contact = () => (
  <div>
      <div className="container-fluid w-75">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 m-5">
        <div className="col">
        <p>e | <a href="mailto: karaiscoding@gmail.com">karaiscoding@gmail.com</a> </p>
        <p>p | (267) 702.6576   </p>
        <p className="mb-5">Philadelphia, PA  </p>

</div><div className="col">
        <form action="https://formspree.io/f/mjvpprqy" method="POST"
                            className="contact-form d-flex flex-column align-items-left">
                            Your Name
                            <div className="form-group w-75">
                                <input type="text" className="form-control" name="name" placeholder="First & Last"
                                    required />
                            </div>
                            Your Email Address
                            <div className="form-group w-75">
                                <input type="email" className="form-control" name="_replyto"
                                    placeholder="name@example.com" required />
                            </div>
                            Your Message
                            <div className="form-group w-75">
                                <textarea name="message" className="form-control" placeholder="Hello!" rows="7"
                                    required />
                            </div>
                            <button type="submit" className="btn w-75">Send</button>
                        </form>
        </div>
  </div>
  </div>
  </div>
 
);

export default Contact;
