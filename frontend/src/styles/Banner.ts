import styled from 'styled-components';

export const Banner = styled.div`
  width: 210px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  background: #f2f2f2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  @media screen and (max-width: 520px) {
    margin-bottom: 1.5rem;
  }
`;
export const BannerContainer = styled.div`
  margin-top: 33px;
  display: flex;
  justify-content: space-between;

  svg {
    margin-top: 15px;
    margin-bottom: 22px;
  }
  @media screen and (max-width: 520px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
export const BannerText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.8rem;
  text-align: center;
  color: #413d51;
`;

export const BannerButton = styled.a`
  width: 160px;
  padding-top: 13px;
  padding-bottom: 13px;
  margin-top: 10px;
  background: #f1534d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  text-align: center;
  font-size: 1.4rem;
  justify-self: center;
  cursor: pointer;
`;
