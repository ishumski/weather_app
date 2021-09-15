import styled from "styled-components";

export const SidebarContaner: any = styled.div`
  flex: 0.3;
  background-color: #1e213a;
  color: #ffffff;
  padding: 41px 41px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

export const Header: any = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SearchButton: any = styled.button`
  width: 161px;
  height: 40px;
  background: #6e707a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #e7e7eb;
  border: none;
  cursor: pointer;
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`

export const GeolocationButton: any = styled.button`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  color: #e7e7eb;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Body: any = styled.div`
  margin-top: 109px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SmallCloud: any = styled.img`
  position: absolute;
  opacity: 0.1;
  top: 370px;
  right: -11px;
  width: ${(p: any) => p.width};
  height: ${(p: any) => p.height};

`

export const MediumCloudRight: any = styled.img`
  position: absolute;
  opacity: 0.1;
  top: 116px;
  right: -80px;
`

export const MediumCloudLeft: any = styled.img`
  position: absolute;
  opacity: 0.1;
  top: 103px;
  left: -89px;
`

export const LargeCloud: any = styled.img`
  position: absolute;
  opacity: 0.1;
  top: 266px;
  left: -111px;
  width: ${(p: any) => p.width};
  height: ${(p: any) => p.height};
`

export const WeatherIcon: any = styled.img``

export const Temperature: any = styled.p`
  width: 100%;
  margin-top: 87px;
  margin-bottom: 0;
  font-family: Raleway;
  font-weight: 600;
  font-size: 144px;
  display: flex;
  align-items: baseline;
`

export const TemperatureUnit: any = styled.span`
  font-size: 70px;
`

export const WeatherStateName: any = styled.h3`
  margin-top: 87px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  color: #a09fb1;
`

export const Footer: any = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  color: #88869d;
`

export const CurrentDate: any = styled.div`
  width: 100%;
  display: flex;
  font-size: 18px;
`

export const Location: any = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
`

export const VectorIcon: any = styled.img``
export const CurrentLocation: any = styled.p``