import styled from 'styled-components';

import firstLayerProfile from '../../assets/first-layer-profile.jpg';
import secondLayerProfile from '../../assets/second-layer-profile.png';

export const IteractiveImage = styled.div`
    max-width: 300px;
    max-height: 300px;
    width: 100%;
    position: relative;
    background-color: white;
    line-height: 0;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
`

export const BlankSpace = styled.img`
  max-width: 300px;
  max-height: 300px;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;  
`

const CardLayer = styled.div`
  width: 100%;
  max-height: 300px;
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  border-radius: 4px;
`

export const FirstLayerProfile = styled(CardLayer)`
    background-image: url(${firstLayerProfile});
    background-clip: content-box;
    padding: 4px;
`

export const SecondLayerProfile = styled(CardLayer)`
    background-image: url(${secondLayerProfile});
`