import React, { useState } from "react";
import {
  FaAngleDoubleRight,
  FaPlay,
  FaRegCalendarAlt,
  FaRegCommentDots,
  FaSearch,
  FaUserAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
const BlogDetailsInner = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* Blog Details version one start */}
      <section className='blog-details-version-one bg-white pt-80 pb-140'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='left-side'>
                <div className='wrapper'>
                  <div className='main-heading'>
                    <h2>
                      Before starting a building construction, the owner sure
                      has necessary permits.
                    </h2>
                  </div>
                  <div className='admin-intro'>
                    <div className='name'>
                      <span>
                        <FaUserAlt />
                      </span>
                      <span>Alex Johan</span>
                    </div>
                    <div className='date'>
                      <span>
                        <FaRegCalendarAlt />
                      </span>
                      <span>Wednesday, February 8, 2023</span>
                    </div>
                    <div className='comment'>
                      <span>
                        <FaRegCommentDots />
                      </span>
                      <span>0 Comments </span>
                    </div>
                  </div>
                  <div className='main-img'>
                    <img
                      className='img-fluid'
                      src='./assets/img/blog/blog-7.png'
                      alt=''
                    />
                  </div>
                  <div className='inner-section'>
                    <p className='mt-20'>
                      Construction planning is a fundamental and challenging
                      activity in the management and execution of construction
                      projects. It involves the choice of technology, the
                      definition of work tasks, the estimation of the required
                      resources and durations for individual tasks, and the
                      identification of any interactions among the different
                      work tasks.
                    </p>
                    <div className='mt-20'>
                      <h3>Construction Plans</h3>
                      <p>
                        Like a detective, a planner begins with a result (i.e. a
                        facility design) and must synthesize the steps required
                        to yield this result. Essential aspects of construction
                        planning include the generation of required activities,
                        analysis of the implications of these activities, and
                        choice among the various alternative means of performing
                        activities. In contrast to a detective discovering a
                        single train of events, however, construction planners
                        also face the normative problem of choosing the best
                        among numerous alternative plans. Moreover, a detective
                        is faced with an observable result, whereas a planner
                        must imagine the final facility as described in the
                        plans and specifications. Like a detective, a planner
                        begins with a result (i.e. a facility design) and must
                        synthesize the steps required to yield this result.
                        Essential aspects of construction planning include the
                        generation of required activities, analysis of the
                        implications of these activities, and choice among the
                        various alternative means of performing activities. In
                        contrast to a detective discovering a single train of
                        events, however, construction planners also face the
                        normative problem of choosing the best among numerous
                        alternative plans. Moreover, a detective is faced with
                        an observable result, whereas a planner must imagine the
                        final facility as described in the plans and
                        specifications.
                      </p>
                    </div>
                    <br />
                    <div>
                      <p>
                        Construction planning is a fundamental and challenging
                        activity in the management and execution of construction
                        projects. It involves the choice of technology, the
                        definition of work tasks, the estimation of the required
                        resources and durations for individual tasks, and the
                        identification of any interactions among the different
                        work tasks.
                      </p>
                    </div>
                    <br />
                    <div className='d-flex gap-4'>
                      <div>
                        <img
                          className='img-fluid rounded-2'
                          src='./assets/img/blog/blog-2.png'
                          alt=''
                        />
                      </div>
                      <div>
                        <img
                          className='img-fluid rounded-2'
                          src='./assets/img/blog/blog-3.png'
                          alt=''
                        />
                      </div>
                    </div>
                    <br />
                    <div>
                      <h3>Wide Range Of Building</h3>
                      <p className='mt-15'>
                        The present state of construction is complex. There is a
                        wide range of building products and systems which are
                        aimed primarily at groups of building types or markets.
                        The design process for buildings is highly organized and
                        draws upon research establishments that study material
                        properties and performance
                      </p>
                      <p className='mt-15'>
                        Construction planning is a fundamental and challenging
                        activity in the management and execution of construction
                        projects. It involves the choice of technology, the
                        definition of work tasks, the estimation of the required
                        resources and durations for individual tasks, and the
                        identification of any interactions among the different
                        work tasks.
                      </p>
                    </div>
                  </div>
                  <div className='tags'>
                    <h4>POST TAGS :</h4>
                    <div className='tag-inner'>
                      <a href='#'>Contractor</a>
                      <a href='#'>Appliances</a>
                      <a href='#'>Power</a>
                      <a href='#'>Electrical</a>
                    </div>
                  </div>
                  <div className='comments'>
                    <h4>COMMENTS :</h4>
                    <div className='inner-comment-section'>
                      <div className='root-comment'>
                        <div className='img-file'>
                          <img src='./assets/img/client/profile-1.png' alt='' />
                        </div>
                        <div className='text-file'>
                          <div className='intro'>
                            <h3>Donald D. Soto</h3>
                            <p>Wednesday, February 8, 2023</p>
                          </div>
                          <div className='text-have'>
                            <p>
                              From here, the actual construction process starts.
                              Based on the site and building plan, necessary
                              excavations, leveling, and filling can be
                              undergone to prepare the site. The necessary
                              excavation for utilities, power, water and
                              sanitation lines, temporary storage facilities are
                              prepared.
                            </p>
                          </div>
                          <div className='reply'>
                            <a href='#'>Reply</a>
                          </div>
                        </div>
                      </div>
                      <div className='child-comment'>
                        <div className='img-file'>
                          <img src='./assets/img/client/profile-2.png' alt='' />
                        </div>
                        <div className='text-file'>
                          <div className='intro'>
                            <h3>Admin</h3>
                            <p>Wednesday, February 8, 2023</p>
                          </div>
                          <div className='text-have'>
                            <p>
                              From here, the actual construction process starts.
                              Based on the site and building plan, necessary
                              excavations, leveling, and filling can be
                              undergone to prepare the site.
                            </p>
                          </div>
                          <div className='reply'>
                            <a href='#'>Reply</a>
                          </div>
                        </div>
                      </div>
                      <div className='root-comment'>
                        <div className='img-file'>
                          <img src='./assets/img/client/profile-3.png' alt='' />
                        </div>
                        <div className='text-file'>
                          <div className='intro'>
                            <h3>Alex Johan</h3>
                            <p>Wednesday, February 1, 2023</p>
                          </div>
                          <div className='text-have'>
                            <p>
                              From here, the actual construction process starts.
                              Based on the site and building plan, necessary
                              excavations, leveling, and filling can be
                              undergone to prepare the site. The necessary
                              excavation for utilities, power, water and
                              sanitation lines, temporary storage facilities are
                              prepared.
                            </p>
                          </div>
                          <div className='reply'>
                            <a href='#'>Reply</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='leave-comment'>
                    <div className='wrapper'>
                      <div>
                        <h4>Leave a Comment :</h4>
                        <p>Your email address will not be published.</p>
                      </div>
                      <div className='input-inner'>
                        <div className='d-md-flex gap-3 access'>
                          <input type='text' placeholder='Your Name : ' />
                          <input type='email' placeholder='Email ID :  ' />
                        </div>
                        <div className='d-md-flex gap-3 access mt-15'>
                          <input type='text' placeholder='Country : ' />
                          <input type='text' placeholder='Phone No :  ' />
                        </div>
                        <div className=' mt-15'>
                          <input type='text' placeholder='Website Link : ' />
                        </div>
                        <div className='mt-15'>
                          <textarea
                            id='test'
                            rows={4}
                            cols={50}
                            placeholder='Write Your Comment...'
                            defaultValue={""}
                          />
                        </div>
                        <div className='main-btn'>
                          <button className='btn-shape-normal-outline'>
                            <span>Submit Comment</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              {/* Widget Section */}
              <div className='widget'>
                {/* Widget seven */}
                <div className='widget-seven'>
                  <div className='wrapper'>
                    <div className='input-inner'>
                      <div className='input'>
                        <span>
                          <FaSearch />
                        </span>
                        <input
                          type='text'
                          placeholder='Search Insider . . . '
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Widget six */}
                <div className='widget-six'>
                  <div className='wrapper'>
                    <h3>Recent Posts</h3>
                    <div className='blog-inner-items'>
                      <div className='item'>
                        <div className='img-file'>
                          <img
                            className='img-fluid'
                            src='./assets/img/blog/blog-1.png'
                            alt=''
                          />
                        </div>
                        <div className='text-file'>
                          <Link to='/blog-details'>
                            <h3>Basic Steps in Starting a Building</h3>
                          </Link>
                          <div className='footer-text'>
                            <span>Alex Jhon</span>
                            <span>|</span>
                            <span>Nov 21, 2022</span>
                          </div>
                        </div>
                      </div>
                      <div className='item'>
                        <div className='img-file'>
                          <img
                            className='img-fluid'
                            src='./assets/img/blog/blog-2.png'
                            alt=''
                          />
                        </div>
                        <div className='text-file'>
                          <Link to='/blog-details'>
                            <h3>Human shelters were at first very simple</h3>
                          </Link>
                          <div className='footer-text'>
                            <span>Amit Biswas</span>
                            <span>|</span>
                            <span>Nov 26, 2022</span>
                          </div>
                        </div>
                      </div>
                      <div className='item'>
                        <div className='img-file'>
                          <img
                            className='img-fluid'
                            src='./assets/img/blog/blog-3.png'
                            alt=''
                          />
                        </div>
                        <div className='text-file'>
                          <Link to='/blog-details'>
                            <h3>The history of building is marked by</h3>
                          </Link>
                          <div className='footer-text'>
                            <span>Maria Dayna</span>
                            <span>|</span>
                            <span>Nov 28, 2022</span>
                          </div>
                        </div>
                      </div>
                      <div className='item'>
                        <div className='img-file'>
                          <img
                            className='img-fluid'
                            src='./assets/img/blog/blog-4.png'
                            alt=''
                          />
                        </div>
                        <div className='text-file'>
                          <Link to='/blog-details'>
                            <h3>Construction today is a significant part</h3>
                          </Link>
                          <div className='footer-text'>
                            <span>Maria Dayna</span>
                            <span>|</span>
                            <span>Oct 05, 2022</span>
                          </div>
                        </div>
                      </div>
                      <div className='item'>
                        <div className='img-file'>
                          <img
                            className='img-fluid'
                            src='./assets/img/blog/blog-5.png'
                            alt=''
                          />
                        </div>
                        <div className='text-file'>
                          <Link to='/blog-details'>
                            <h3>A tent illustrates the basic environmental</h3>
                          </Link>
                          <div className='footer-text'>
                            <span>Suzanne Jage</span>
                            <span>|</span>
                            <span>Oct 01, 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Widget Eight */}
                <div className='widget-eight mt-40'>
                  <div className='wrapper'>
                    <h3>Category</h3>
                    <div className='inner-list'>
                      <ul>
                        <li>
                          <a href='#'>
                            <span>
                              <FaAngleDoubleRight />
                            </span>
                            <span>construction (8)</span>
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <span>
                              <FaAngleDoubleRight />
                            </span>
                            <span>Superstructure (5)</span>
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <span>
                              <FaAngleDoubleRight />
                            </span>
                            <span>Finance (5)</span>
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <span>
                              <FaAngleDoubleRight />
                            </span>
                            <span>Excavations (5)</span>
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <span>
                              <FaAngleDoubleRight />
                            </span>
                            <span>Superstructure (5)</span>
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <span>
                              <FaAngleDoubleRight />
                            </span>
                            <span>Manufacturers (5)</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Widget Nine */}
                <div className='widget-nine mt-40'>
                  <div className='wrapper'>
                    <h3>Tags</h3>
                    <div className='inner-list'>
                      <div className='tag'>
                        <a href='#'>Contractor</a>
                        <a href='#'>Appliances</a>
                        <a href='#'>Power</a>
                        <a href='#'>Electrical</a>
                        <a href='#'>Parties</a>
                        <a href='#'>Facilities</a>
                        <a href='#'>Foundations </a>
                        <a href='#'>Structures</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Widget Two */}
                <div className='widget-two mt-40'>
                  <div className='wrapper'>
                    <h3>Watch Demo</h3>
                    <div className='img-file'>
                      <div className='pop-img'>
                        <div className='inner'>
                          <img src='./assets/img/widgets/img-1.png' alt='' />
                          <div className='vide-button'>
                            <span
                              className='popup-video'
                              onClick={() => setOpen(true)}
                            >
                              <FaPlay />
                            </span>
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
        <ModalVideo
          channel='youtube'
          autoplay
          isOpen={isOpen}
          videoId='XM6kTQPzzpQ'
          onClose={() => setOpen(false)}
        />
      </section>
      {/* Blog Details version one End */}
    </>
  );
};

export default BlogDetailsInner;
