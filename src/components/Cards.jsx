import React from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

import { CiShare2 } from 'react-icons/ci';
import { AiOutlineEye } from 'react-icons/ai';
import { BsFillPenFill } from 'react-icons/bs';
import bgimage1 from '../assests/images/card1bg.png';
import bgimage2 from '../assests/images/card2bg.png';
import sarthakImg from '../assests/images/sarthakKamra.jpg';
import ronalImg from '../assests/images/ronalJones.jpg';
import sarahImg from '../assests/images/sarahWhite.jpg';
import CardNews from './CardNews';
import CardMeet from './CardMeet';
import CardJob from './CardJob';

function Cards() {
  return (
    <div className="flex flex-col gap-6">
      <CardNews
        name="Sarthak Kamra"
        topic="✒️ Article"
        headline="What if famous brands have regular fonts? Meet RegulaBrands!"
        description="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
        views="1.4"
        imgsrc={sarthakImg}
        bgimg={bgimage1}
      />
      <CardNews
        name="Sarah West"
        topic="📝 Education"
        headline="Tax Benefits for Investment under National Pension Scheme launched by Government"
        description="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
        views="1.4"
        imgsrc={sarahImg}
        bgimg={bgimage2}
      />
      <CardMeet
        date="Fri, 12 Oct, 2018"
        topic="📆 Meetup"
        position="Finance & Investment Elite Social Mixer @Lujiazui"
        place="Ahmedabad, India"
        operation="View Website"
        name="Ronal Jones"
        views="1.4"
        imgsrc={sarahImg}
      />
      <CardJob
        topic="💼 Job"
        profile="SoftWare Developer"
        company="Innovaccer Analytics Private Ltd."
        name="Joseph Gray"
        imgsrc={sarthakImg}
        operation="Apply on Timesjob"
        place="Noida, India"
        views="1.4"
      />
    </div>
  );
}

export default Cards;

// topic,
// profile,
// company,
// name,
// imgsrc,
// operation,
