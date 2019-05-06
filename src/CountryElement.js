import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Flag from './Flag';
import DetailsList from './DetailsList';

const Container = styled.div`
  border-radius: 5px;
  overflow: auto;
  background: ${props => props.theme.elementsColor};
  flex: 0 0 350px;
  margin: 0 10px 50px;
`;

const Clickable = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const CountryName = styled.h2`
  margin: 0 0 10px;
`;

const DetailsPanel = styled.div`
  margin: 50px;
`;

export default function CountryElement(props) {
  return (
    <Container as={props.as}>
      <Clickable to={`/country/${props.code}`}>
        <Flag
          size="small"
          src={props.flag}
          aria-label={`The flag of ${props.name}`}
        />
        <DetailsPanel>
          <CountryName>{props.name}</CountryName>
          <DetailsList>
            {props.details.map(detail => (
              <Fragment key={detail.label}>
                <dt>{detail.label}</dt>
                <dd>{detail.value}</dd>
              </Fragment>
            ))}
          </DetailsList>
        </DetailsPanel>
      </Clickable>
    </Container>
  );
}
