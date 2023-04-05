import React from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaPlay,
  FaRegCommentDots,
  FaSearch,
  FaCalendarAlt,
  FaUserAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import { useState } from "react";

const BlogGroup = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* Blog Group version one start */}
      <section className='blog-group-version-one bg-white pt-80 pb-140'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='left-side'>
                <div className='wrapper'>
                  <div className='blog-items'>
                    <div className='main-img'>
                      <img
                        className='img-fluid'
                        src='./assets/img/blog/blog-7.png'
                        alt=''
                      />
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
                          <FaCalendarAlt />
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
                    <div className='main-heading'>
                      <h2>
                        Before starting a building construction, the owner sure
                        has necessary permits.
                      </h2>
                    </div>
                    <div className='inner-section'>
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
                    <div className='main-btn'>
                      <Link to='/blog-details'>
                        <span className='btn-shape-normal-outline'>
                          <span>Read More</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className='blog-items'>
                    <div className='main-img'>
                      <img
                        className='img-fluid'
                        src='./assets/img/blog/blog-8.png'
                        alt=''
                      />
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
                          <FaCalendarAlt />
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
                    <div className='main-heading'>
                      <h2>
                        Human shelters were at first very simple and perhaps
                        lasted only a few days or months.
                      </h2>
                    </div>
                    <div className='inner-section'>
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
                    <div className='main-btn'>
                      <Link to='/blog-details'>
                        <span className='btn-shape-normal-outline'>
                          <span>Read More</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className='blog-items'>
                    <div className='main-img'>
                      <img
                        className='img-fluid'
                        src='./assets/img/blog/blog-9.png'
                        alt=''
                      />
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
                          <FaCalendarAlt />
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
                    <div className='main-heading'>
                      <h2>
                        he history of building is marked by a number of trends.
                        One is the increasing durability.
                      </h2>
                    </div>
                    <div className='inner-section'>
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
                    <div className='main-btn'>
                      <Link to='/blog-details'>
                        <span className='btn-shape-normal-outline'>
                          <span>Read More</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='pagination'>
                  <div className='item'>
                    <span>
                      <FaAngleDoubleLeft />
                    </span>
                  </div>
                  <div className='item active'>
                    <span>1</span>
                  </div>
                  <div className='item'>
                    <span>2</span>
                  </div>
                  <div className='item'>
                    <span>3</span>
                  </div>
                  <div className='item'>
                    <span>4</span>
                  </div>
                  <div className='item'>
                    <span>5</span>
                  </div>
                  <div className='item'>
                    <span>
                      <FaAngleDoubleRight />
                    </span>
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
      {/* Our Team Section version three End */}
    </>
  );
};

export default BlogGroup;
