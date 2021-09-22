import styled from "styled-components";

import Badge from "../../common/badge";
import Button from "../../common/button";

export const SidebarContaner = styled.div`
  flex: 0.3;
  background-color: #1e213a;
  color: #ffffff;
  padding: 41px 41px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SearchButton: any = styled(Button)`
  width: 161px;
  height: 40px;
  background: #6e707a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #E7E7EB;
  border: none;
  cursor: pointer;
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`

export const GeopositionBadge: any = styled(Badge)`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  display:flex;
  justify-content:center;
  align-items:center;
  border: none;
  cursor: pointer;
  color: #E7E7EB;
  background: #6e707a;
`

export const Body = styled.div`
  height:641px;
  margin-top: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SmallCloud = styled.img`
  position: absolute;
  opacity: 0.1;
  top: 370px;
  right: -11px;
  width: 147px;
  height: 109px;
`

export const MediumCloudRight = styled.img`
  position: absolute;
  opacity: 0.1;
  top: 116px;
  right: -80px;
`

export const MediumCloudLeft = styled.img`
  position: absolute;
  opacity: 0.1;
  top: 103px;
  left: -89px;
`

export const LargeCloud = styled.img`
  position: absolute;
  opacity: 0.1;
  top: 266px;
  left: -111px;
  width: 248px;
  height: 183px;
`
export const WeatherIcon = styled.img`
  width: 202px;
  height:234px;
  opacity: none;
`

export const Temperature = styled.div`
  width: 100%;
  margin-top: 80px;
  margin-bottom: 0;
  font-family: Raleway;
  font-weight: 600;
  font-size: 144px;
`

export const WeatherStateName = styled.h3`
  margin-top: 80px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  color: #a09fb1;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  color: #88869d;
`

export const CurrentDate = styled.div`
  width: 100%;
  display: flex;
  font-size: 18px;
  height: 57;
  margin-bottom:10px;
`
export const DotIcon = styled.img`
  margin: 0 16px;  
`

export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  font-size: 18px;
`

export const LocationTitle = styled.p`
  margin-left: 9px;
  width: 47px;
`