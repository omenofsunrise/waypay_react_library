import styled from 'styled-components';

interface CountInfoTitleProps {
  total: number;
  current?: number;
}

const CountInfoTitle = ({ total }: CountInfoTitleProps) => {
  return (
    <div>
      <Paragraph>Всего: {total}</Paragraph>
    </div>
  );
};

const Paragraph = styled.p`
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  white-space: nowrap;
`;

export default CountInfoTitle;
