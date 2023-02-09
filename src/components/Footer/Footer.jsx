import React from "react";
import { CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';

const Footer = () => {
  return (
    <footer className="fixed-bottom page-footer font-small blue pt-4" style={{backgroundColor: '#000', color:"#fff"}}>
      <div className="footer-copyright text-center py-3">
        © 2023 Copyright:
        <CDBContainer style={{display: 'flex', justifyContent: 'space-evenly'}}> 
            <CDBBtn color="primary">
            <CDBIcon fab icon="telegram" />
            <a href="#https://t.me/raysssssssss" style={{ color: 'white'}}>Telegram</a>
            </CDBBtn>

            <CDBBtn color="secondary">
            <CDBIcon fab icon="instagram" />
            <a href="#https://www.instagram.com/fstkc_017063/" style={{ color: 'white'}}>Instagram</a>
            </CDBBtn>

            <CDBBtn color="secondary">
            <CDBIcon fab icon="twitter" />
            <a href="#" style={{ color: 'white'}}>Twitter</a>
            </CDBBtn>

            <CDBBtn color="secondary">
            <CDBIcon fab icon="bootstrap" />
            <a href="#" style={{ color: 'white'}}>Bootstrap</a>
            </CDBBtn>

            <CDBBtn color="secondary">
            <CDBIcon fab icon="react" />
            <a href="#" style={{ color: 'white'}}>React</a>
            </CDBBtn>
        </CDBContainer> 
      </div>
    </footer>
  );
};
export default Footer;