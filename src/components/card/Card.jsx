import "./card.css";
import Heart from "../../img/heart.svg";
import HeartFilled from "../../img/heartFilled.svg";
import Comment from "../../img/comment.svg";
import Share from "../../img/share.svg";
import Info from "../../img/info.svg";
import { useState } from "react";


const Card = ({post}) => {

   const [liked,setLiked] = useState(false)


  return (
        <div className="card">
          <div className="info">
            <img src={post.userImg} className="userImg" alt="user" />
          <span>{post.fullname}</span>

          </div>
       <img src={post.postImg} className="postImg" alt="post" />


<div className="interaction">

{liked ? (
  <img src={HeartFilled} alt="" className="cardIcon" />
) : (
  <img src={Heart} alt="" className="cardIcon" />

) }



  <img src={Comment} alt="" className="cardIcon" />
  <img src={Share} alt="" className="cardIcon" />
  <img src={Info} alt="" className="cardIcon infoIcon" />
</div>
        </div>
  )
}

export default Card