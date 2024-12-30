import React, { useRef } from 'react'
import './testmonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider=useRef();
    let tx=0;


    const slideForward=()=>{
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    } 
    const slideBackward=()=>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }
  return (
    <div className='testimonials'>
        <img src={next_icon} className='next-btn' alt=""  onClick={slideForward}/>
        <img src={back_icon} className='back-btn' alt=""  onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Jyoti Sharma</h3>
                                <span>Edusity, India</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, blanditiis facere. Porro at iure, molestiae quos, animi eos hic esse, dignissimos repudiandae eaque modi minus ut asperiores. Dolores, necessitatibus nulla!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Kushagra Sharma</h3>
                                <span>Edusity, India</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nihil adipisci itaque eveniet consequatur accusamus beatae repellendus ipsam dolor libero rerum, eum fuga iusto nesciunt tenetur repellat, nostrum, id molestiae!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Kritika Ameta</h3>
                                <span>Edusity, India</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ipsum nesciunt! Eaque necessitatibus officia quidem! Dolores maiores reiciendis aliquam praesentium minima minus impedit. Esse, rerum laudantium recusandae assumenda quasi aut.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Rohit Pandey</h3>
                                <span>Edusity, India</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel consequuntur nam, illo voluptatibus in voluptatem, aut cum tenetur similique laboriosam at ea unde praesentium quasi distinctio vitae, nobis accusamus.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials