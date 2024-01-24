import styled from "styled-components";
import img from '../../assets/images/003Register.gif';
import img1 from '../../assets/images/logo_nobkg.png';

export const Wrapper = styled.div`
padding: 4em;
border: 1px solid #000;
background-size: cover;
background-image: url(${img});
background-position: center;
height: 100vh; 
display: flex;
justify-content: center;
align-items: center;

.gridhero2 {
  background-image: url(${img1});
  background-repeat: no-repeat;
  background-size:95%;
  width: 50%;
  height: 50%;
  
}


.form{
    background: darkgray;
}

  .input-box{
    position: relative;
   //  background: black;
    width: 100%;
    height: 50px;
    margin: 30px 0;
    border-radius: 40px;
    background: transparent;
    border: none;
    outline: none;
    border: 2px solid grey;
    font-size: 16px;
    padding: 20px 45px 20px 20px;
    
}
.input-box{
    position: relative;
    background: black;
    width: 100%;
    height: 50px;
    margin: 30px 0;
    border-radius: 40px;
    background: transparent;
    border: none;
    outline: none;
    border: 2px solid grey;
    font-size: 16px;
    padding: 20px 45px 20px 20px;
    
}
  .icon{
    position: relative;
    right:40px;
    top: 50%;
    transform: translative(-20%);
    font-size : 16px;

 }

 .checkBox{
    display: flex;
    justify-content:flex-end;
    font-size: 13px;
    margin: -15px 0 15px;

 }
 .submit{
    width:100px;
    height:45px;
    border: none;
    outline: none;
    border-radius:40px;
    margin-bottom: 10px;

 }
 .email {
   color: dark;
 }

.password{
   color: dark;
}

    @media (max-width: 1000px) {
    }
`;