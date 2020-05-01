import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Header2 from '../Layout/Header';
import Footer from '../Layout/Footer';

const tourContent = [
  {
    image: require('./../../images/tour/pic1.jpg'),
  },
  {
    image: require('./../../images/tour/pic2.jpg'),
  },
  {
    image: require('./../../images/tour/pic3.jpg'),
  },
  {
    image: require('./../../images/tour/pic4.jpg'),
  },
  {
    image: require('./../../images/tour/pic5.jpg'),
  },
  {
    image: require('./../../images/tour/pic6.jpg'),
  },
  {
    image: require('./../../images/tour/pic7.jpg'),
  },
  {
    image: require('./../../images/tour/pic8.jpg'),
  },
  {
    image: require('./../../images/tour/pic9.jpg'),
  },
  {
    image: require('./../../images/tour/pic10.jpg'),
  },
];

const tourDay = [
  {
    image: require('./../../images/our-work/pic1.jpg'),
    day: 0,
    title: 'Departure',
    desc: 'Departure from Lahore 11 PM.',
  },
  {
    image: require('./../../images/our-work/pic1.jpg'),
    day: 1,
    title: 'Breakfast at Mansehra/Besham/Naran.',
    desc:
      'Breakfast at Mansehra/Besham/Naran. Short stays on the way. Reach Chilas. Shift to hotel. Dinner at 9 P.M. Overnight Stay.',
  },
  {
    image: require('./../../images/our-work/pic2.jpg'),
    day: 2,
    title: 'Move towards Raikot & Fairy Meadows',
    desc:
      'Breaktfast at 7 A.M. Move towards Raikot. Shift to Jeeps at Raikot and move towards Tattu Village. Trek towards Fairy Meadows for approx. 4 hrs. Reach Fairy Meadows. Dinner and overnight Stay in the Camps.',
  },
  {
    image: require('./../../images/our-work/pic3.jpg'),
    day: 3,
    title: 'Trek towards Bayal Camp',
    desc:
      'Breakfast at 8 A.M. Trek towards Bayal Camp for approx 1 hr. Spend some quality time enjoying the breathtaking view of the Killer Mountain (Nanga Parbat). Trek back towards camps. Dinner at 8 P.M. Bonfire Night.Overnight stay in Fairy Meadows.',
  },
  {
    image: require('./../../images/our-work/pic4.jpg'),
    day: 4,
    title: 'Trek back towards Tattu Village.',
    desc:
      'Breakfast at 6 A.M. Trek back towards Tattu Village. Shift to jeeps and reach Raikot. Transfer to Saloons and move back towards Naran. Sightseeing and short stays on the way. Reach Naran or Besham(If KKH route is used). Dinner at 9 P.M',
  },
  {
    image: require('./../../images/our-work/pic5.jpg'),
    day: 5,
    title: 'Departure',
    desc:
      'Breakfast 8:00 A. Departure 8:00 A.M. Short stays on the way. Dinner on the way(Mansehra). End of services.',
  },
];

var bg3 = require('./../../images/banner/bnr1.jpg');

class BookingDetails extends Component {
  render() {
    var settings = {
      dots: false,
      slidesToShow: 1,
      infinite: true,
      centerPadding: 30,
    };
    return (
      <div>
        <Header2 />
        <div
          className='dlab-bnr-inr overlay-black-middle'
          style={{
            backgroundImage: 'url(' + bg3 + ')',
            backgroundSize: 'cover',
          }}
        >
          <div className='container'>
            <div className='dlab-bnr-inr-entry'>
              <h1 className='text-white'>Booking Details</h1>
              <div className='breadcrumb-row'>
                <ul className='list-inline'>
                  <li>
                    <Link>Home</Link>
                  </li>
                  <li>Booking Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='content-block'>
          <div className='section-full content-inner bg-white'>
            <div className='container'>
              <div className='row m-b30'>
                <div className='col-lg-8'>
                  <div className='d-flex info-bx m-b30'>
                    <div className='tour-title'>
                      <h2>Fairy Meadows</h2>
                      <p>
                        “Fairy Meadows” and Nanga Parbat, the 9th highest
                        mountain in the world.
                      </p>
                      <p>
                        <span className='site-button button-sm'>5 Days</span>{' '}
                        <span className='site-button button-sm'>4 Night</span>{' '}
                        Tour
                      </p>
                    </div>
                    <div className='tour-price ml-auto'>
                      <span>Starting From</span>
                      <h2 className='price'>Rs.15,500</h2>
                      <h4 className='actual-price'>Rs.18,500</h4>
                    </div>
                  </div>
                  <div className='product-gallery on-show-slider'>
                    <Slider {...settings}>
                      {tourContent.map((item, index) => (
                        <div className='item' key={index}>
                          <div className='dlab-box'>
                            <div className='dlab-thum-bx'>
                              <img src={item.image} alt='' />
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className='tour-days'>
                    <h2 className='m-b10'>About Itinerary</h2>
                    <p>
                      HighOnTour presents 5 days’ tour towards a grassland named
                      by German climbers “Fairy Meadows” and Nanga Parbat, the
                      9th highest mountain in the world. Detailed itinerary of
                      tour is given below:
                    </p>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='sticky-top'>
                    <div className='d-flex sp10'>
                      <div className='flex-fill col-6'>
                        <Link
                          className='site-button btn-block'
                          data-toggle='modal'
                          data-target='#exampleModal1'
                        >
                          Book Now
                        </Link>
                      </div>
                      <div className='flex-fill col-6'>
                        <Link
                          className='site-button-secondry btn-block'
                          data-toggle='modal'
                          data-target='#exampleModal'
                        >
                          Submit Query
                        </Link>
                      </div>
                    </div>
                    <div className='m-t50'>
                      <img
                        src={require('./../../images/add/add-bnr.jpg')}
                        className='d-md-none d-xl-block d-lg-block'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </div>

              {tourDay.map((item, index) => (
                <div className='row m-b30' key={index}>
                  <div className='col-md-3 col-lg-2'>
                    <div className='sticky-top'>
                      <div className='day-details bg-primary'>
                        DAY {item.day}
                      </div>
                    </div>
                  </div>
                  <div className='col-md-9 col-lg-10'>
                    <div className='day-details-bx'>
                      <div className='row'>
                        <div className='col-md-12 col-lg-6'>
                          <h4 className='m-b5'>{item.title}</h4>
                          <div className='m-b10'>
                            <ul className='rating-star'>
                              <li>
                                <i className='fa fa-star'></i>
                              </li>
                              <li>
                                <i className='fa fa-star'></i>
                              </li>
                              <li>
                                <i className='fa fa-star'></i>
                              </li>
                              <li>
                                <i className='fa fa-star'></i>
                              </li>
                              <li>
                                <i className='fa fa-star'></i>
                              </li>
                            </ul>
                          </div>
                          <p>{item.desc}</p>
                          <ul className='tour-tag'>
                            <li>
                              <Link>Breakfast</Link>
                            </li>
                            <li>
                              <Link>Dinner</Link>
                            </li>
                          </ul>
                        </div>
                        <div className='col-md-12 col-lg-6'>
                          <img src={item.image} className='radius-sm' alt='' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="modal fade submit-query" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Check Price & Availability</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Customer City</label>
                                                <div className="input-group">
                                                    <select className="form-control">
                                                        <option>Select City</option>
                                                        <option>Kochi</option>
                                                        <option>Mumbai</option>
                                                        <option>New Delhi</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Customer State</label>
                                                <div className="input-group">
                                                    <select className="form-control">
                                                        <option>Select State</option>
                                                        <option>Kochi</option>
                                                        <option>Mumbai</option>
                                                        <option>New Delhi</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Departure Date Selected</label>
                                                <div className="input-group">
                                                    <input name="dzName" required="" className="form-control" type="date" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="quantity btn-quantity">
                                                <input id="demo_vertical2" type="text" name="demo_vertical2" />
                                                <span className="font-12">Adult (12yrs +)</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="quantity btn-quantity">
                                                <input id="demo_vertical2" type="text" name="demo_vertical2" />
                                                <span className="font-12">Child (2-12yrs)</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="quantity btn-quantity">
                                                <input id="demo_vertical2" type="text" name="demo_vertical2" />
                                                <span className="font-12">Infant (0-2yrs)</span>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                                <div className="modal-footer d-flex justify-content-between">
                                    <button type="submit" className="site-button-secondry" data-dismiss="modal">Close</button>
                                    <button type="submit" className="site-button">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade submit-query" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Get the Best Holiday Planned by Experts!</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <h5 className="text-center">Enter your contact details and we will plan the best holiday suiting all your requirements.</h5>
                                    <form className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input name="dzName" required="" className="form-control" placeholder="Your Name" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input name="dzName" required="" className="form-control" placeholder="Your Email Address" type="email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input name="dzName" required="" className="form-control" placeholder="Mobile No" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input name="dzName" required="" className="form-control" placeholder="Your City" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input name="dzName" required="" className="form-control" type="date" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="quantity btn-quantity">
                                                <input id="demo_vertical2" type="text" name="demo_vertical2" />
                                                <span className="font-12">Adult (12yrs +)</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="quantity btn-quantity">
                                                <input id="demo_vertical2" type="text" name="demo_vertical2" />
                                                <span className="font-12">Child (2-12yrs)</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="quantity btn-quantity">
                                                <input id="demo_vertical2" type="text" name="demo_vertical2" />
                                                <span className="font-12">Infant (0-2yrs)</span>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                                <div className="modal-footer d-flex justify-content-between">
                                    <button type="submit" className="site-button-secondry" data-dismiss="modal">Close</button>
                                    <button type="submit" className="site-button">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default BookingDetails;
