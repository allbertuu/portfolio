import styled from "styled-components";
import { colors } from "../../styles/colors";

interface WrapperProps {
  colorOnFocus: string;
}

export const Wrapper = styled.button<WrapperProps>`
  position: relative;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem /* 16px */;

  border: 3px solid ${colors.primary};
  border-radius: 0.5rem /* 8px */;
  padding: 1.25rem /* 20px */;

  font-size: 1rem;

  transition: all ease 0.3s;

  overflow-y: hidden;

  @media (min-width: 640px) {
    height: 95px;

    & {
      max-width: 24rem /* 384px */;
      text-align: justify;
      flex-direction: row;
      align-items: flex-start;
    }
  }

  &:hover {
    box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    height: 100%;
    
    ${(p) => {
      return `border-color: ${p.colorOnFocus};`;
    }}
  }

  &:focus svg {
    transition: all ease 0.5s;
    ${(p) => {
      return `fill: ${p.colorOnFocus};`;
    }}
  }
`;

export const Separator = styled.span`
  &::before {
    content: "";
    width: 3rem;
    height: 4px;
    display: block;

    border-radius: 0.375rem /* 6px */;
    background-color: ${colors.primary};

    @media (min-width: 640px) {
      & {
        width: 0.25rem /* 4px */;
        height: 3rem /* 48px */;
      }
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 640px) {
    & {
      width: 4rem /* 64px */;
    }
  }

  svg {
    width: 3rem /* 48px */;
    height: 3rem /* 48px */;
    fill: ${colors.primary};
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem /* 4px */;

  @media (min-width: 640px) {
    & {
      align-items: flex-start;
    }
  }
`;

export const Title = styled.span`
  font-size: 140%;
`;

export const ExperienceTime = styled.small`
  font-size: 90%;
`;

export const Text = styled.p`
  transition: all ease 0.4s;
`;
