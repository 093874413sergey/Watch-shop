import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Root = styled.div`
  background-color: rgb(84, 69, 69);
`
export const StyledHeader = styled.h1`
  padding: 20px;
  margin: 0;
  text-align: center;
`
export const CentredContent = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
`
export const ImageBlock = styled.div`
  position: relative;
  float: left;
  width: 40%;
  max-width: 450px;
  background-color: gray;
  margin-right: 20px;
  margin-bottom: 10px;
  
  img {
    width: 100%;
    height: auto;
  }
`
export const StyledLink = styled(Link)`
  position: absolute;
  top: 7px;
  left: 20px;
  text-decoration: none;
  color: rgb(84,69,69);
  font-size: 26px;
  font-weight: bold;
  background: #b1b1b191;
  padding: 0 10px 0 10px;
  border-radius: 10px;
`
export const ExternalLink = styled(Link)`
  position: absolute;
  top: 0;
  left: -6.3%;
  width: 10%;
  margin-left: calc(-10%/2);

  img {
    width: 100%;
    height: auto;
  }
`
export const Article = styled.div`
  position: relative;
  padding: 0 20px 20px 20px;
  
  &:after {
    content: '';
    width: 100%;
    height: 0;
    clear: both;
    display: block;
    margin-bottom: 20px;
  }
`
