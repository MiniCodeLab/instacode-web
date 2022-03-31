import styled from '@emotion/styled';

export type ImageSizes = 's' | 'm';
const imageWidthBySize = {
  s: 'width: 120px',
  m: 'width: 240px'
};

export const ImageContainer = styled.div<{ size?: ImageSizes }>`
  ${({ size }) => imageWidthBySize[size || 'm']};

  > img {
    height: auto;
    width: 100%;
  }
`;
