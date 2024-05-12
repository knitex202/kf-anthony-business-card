// Landing.js
import React from "react";
import "./Landing.css";
import location from "../../Assets/icons8-marker-100.png";
import world from "../../Assets/icons8-world-90.png";
import twitter from "../../Assets/icons8-twitterx-96.png";
import facebook from "../../Assets/icons8-facebook-96.png";
import instagram from "../../Assets/icons8-instagram-96.png";
import linkedin from "../../Assets/icons8-linkedin-96.png";
import youtube from "../../Assets/icons8-youtube-96.png";
import addIcon from "../../Assets/icons8-add-64.png";


const Landing = () => {

  const michelleImage = require("../../Assets/michelle-profile.png")
  const michelleImageData = btoa(
    String.fromCharCode.apply(null, new Uint8Array(michelleImage))
  )

  const contactInfo = {
    name: "K.F Anthony",
    email: "info@kfanthony.com",
    phone: "+18779588511",
    title: "Owner",
    role: "Author, Educator, Consultant",
    organization: "Care Collective Firm ",
    rev: "2024-05-01T17:08:22.834Z",
  };

  const generateVCF = () => {
    const vcfContent = `BEGIN:VCARD
VERSION:3.0
FN;CHARSET=UTF-8:${contactInfo.name}
N;CHARSET=UTF-8:${contactInfo.name};;;;
EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:${contactInfo.email}
TEL;TYPE=HOME,VOICE:${contactInfo.phone}
TITLE;CHARSET=UTF-8:${contactInfo.title}
ROLE;CHARSET=UTF-8:${contactInfo.role}
ORG;CHARSET=UTF-8:${contactInfo.organization}
PHOTO;TYPE=JPEG;ENCODING=b;CHARSET=UTF-8:${michelleImageData}
REV:${contactInfo.rev}
END:VCARD`;

    return vcfContent;
  };

  const handleAddToContacts = () => {
    const vcfContent = generateVCF();
    const blob = new Blob([vcfContent], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "contact.vcf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="landing">
      <div className="article-container" >
      <h1>{contactInfo.name}</h1>
      <h3>Author | Educator | Consultant</h3>
      <span className="location">
        <img src={location} height={20} />
        Austin | Change Maker
      </span>
      {/* <h2>Manage media content and mobilize a team of 50+</h2> */}
      <div className="website-link-container">
        <a href="https://www.kfanthony.com/" target="blank">
        <img src={world} height={40} alt="" />
        <p>KFANTHONY.COM</p>          
        </a>
      </div>
      <div className="socials-connect-container">
        <h2>LET'S CONNECT</h2>
        <div className="socials-container">
          <a href="https://instagram.com/thepoetrystop" target="blank">
            <img className="socials" src={instagram} alt="" />
          </a>
          <a href="https://www.youtube.com/@k.f.anthony4070" target="blank">
            <img className="socials" src={youtube} alt="" />
          </a>
          <a href="https://www.youtube.com/watch?v=C5agVu9b8yc&list=PLY4ZiJ80uMKVWWcr-_V6Wfm283RrcgNpj" target="blank">
            <img className="socials" src={youtube} alt="" />
          </a>
        </div>
      </div>
      </div>
      <div className="add-contact-container" onClick={handleAddToContacts}>
          <img src={addIcon} height={40} alt="" />
          <p>ADD to CONTACT</p>
        </div>
    </div>
  );
};

export default Landing;
