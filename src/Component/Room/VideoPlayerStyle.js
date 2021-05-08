import styled from 'styled-components';

export const accentColor = {
    primary: '#21D0B3',
    primaryDark: '#28CFAB',
  
    secondary: '#7AC943',
    secondaryLite: '#72CA4D',
  
    dark: '#121317',
    midNightBlue: '#251842'
  };

export const textColors = {
    textDark: '#1C1E19',
    textMedium: '#272e30',
    textWhite: '#fff',
    textLight: '#8792AC',
    textGray: '#a2a2a2',
    textGrayDark: '#6b6b6b',
    danger: '#e12a3c',
    success: '#28cf87',
    muted: '#5d5d5d',
    error: '#E44343'
};

export const fontSize = {
    titleHuge: '4.5rem',
    titleSize: '3.5rem',
    titleMedium: '2.8rem',
    titleMediumSmall: '2.6rem',
    titleSmall: '2.5rem',
    titleVerySmall: '2.1rem',
    mediumDefault: '1.6rem',
    title: '1.8rem',
  
    smallDefault: '1.2rem',
    default: '1rem',
    mediumSmall: '0.85rem',
    small: '0.7rem',
    large: '2rem',
    medium: '1.4rem'
  };

export const borderColor = {
    light: '#a3a9b733',
    medium: '#797091'
  };

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 10px 10px 0px 0px;
`;

export const Controlls = styled.div`
  opacity: ${(props) => (props.show ? '1' : '0')};

  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;

  // background: transparent linear-gradient(180deg, #262626de 0%, #26262600 100%) 0% 0% no-repeat;
  border-radius: 10px 10px 0 0;
`;

export const PlayerContainer = styled.div`
  height: 100%;
  border-radius: 10px 10px 0 0;
`;

export const ControllsContainer = styled.div`
  padding: 0 1.5rem;
  display: flex;
  height: 50px;
//   justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  // background: transparent linear-gradient(0deg, #262626de 0%, #26262600 100%) 0% 0% no-repeat;
  border-radius: 10px 10px 0 0;

  & > svg {
    cursor: pointer;
  }
`;

export const PlayControls = styled.div`
  display: flex;
  justify-content: space-evenly;

  width: 100%;
  position: absolute;
  bottom: 50%;

  & > svg {
    cursor: pointer;
  }
`;

export const PlayButton = styled.div`
  cursor: pointer;
  margin: 0 1rem;

  transition: 0.5s;

  & > svg {
    height: 35px;
  }
`;

export const Slider = styled.input`
  height: 4px;
  width: 500px;
  outline: none;
  cursor: pointer;
`;

export const Timer = styled.time`
  font-size: 12px;
  margin: 0 1rem;
  min-width: 40px;
`;

export const PlaybackButton = styled.button`
  padding: 1rem;
  margin: 0.3rem;

  min-width: 60px;
  font-size: 14px;

  background: ${(props) => (props.isSelected ? `${accentColor.primary}` : '#4e436926')};
  color: ${(props) => (props.isSelected ? '#121A19' : `${textColors.textWhite}`)};

  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
export const VolumeButton = styled.div`
  width: 20px;
  margin-left:20px;
`;


export const TimeSince = styled.p`
  font-size: ${fontSize.smallDefault};
  color: ${textColors.textLight};
  margin-left: auto;
  padding: 1rem 0;
`;
