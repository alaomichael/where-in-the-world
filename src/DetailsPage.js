import React from 'react';
import { Link } from 'react-router-dom';
import SiteContent from './SiteContent';
import Button from './Button';
import useData from './useData';
import Spinner from './Spinner';
import Flag from './Flag';
import DetailsList from './DetailsList';

export default function DetailsPage(props) {
  const details = useData(
    'https://restcountries.eu/rest/v2/alpha/' + props.match.params.code,
  );
  const borderCountries = [];
  return (
    <SiteContent>
      <Button as={Link} to="/">
        &larr; Back
      </Button>
      {!details && <Spinner />}
      {details && (
        <>
          <Flag src={details.flag} aria-label={`The flag of ${details.name}`} />
          <div>
            <h2>{details.name}</h2>
            <DetailsList>
              <dt>Native name:</dt>
              <dd>{details.nativeName}</dd>
              <br />
              <dt>Population:</dt>
              <dd>{details.population.toLocaleString()}</dd>
              <br />
              <dt>Region:</dt>
              <dd>{details.region}</dd>
              <br />
              <dt>Sub-Region:</dt>
              <dd>{details.subregion}</dd>
              <br />
              <dt>Capital:</dt>
              <dd>{details.capital}</dd>
            </DetailsList>
            <DetailsList>
              <dt>Top Level Domain:</dt>
              <dd>{details.topLevelDomain}</dd>
              <br />
              <dt>
                {details.currencies.length === 1 ? 'Currency' : 'Currencies'}
              </dt>
              <dd>
                {details.currencies
                  .map(currency => `${currency.name} (${currency.symbol})`)
                  .join(', ')}
              </dd>
              <br />
              <dt>
                {details.languages.length === 1 ? 'Language' : 'Languages'}
              </dt>
              <dd>
                {details.languages.map(language => language.name).join(', ')}
              </dd>
            </DetailsList>
            <h3>Border countries</h3>
            {details.borders.map(borderCountry => (
              <Button
                key={borderCountry.name}
                as={Link}
                to={`/country/${borderCountry.alpha3Code}`}
              >
                {borderCountry.name}
              </Button>
            ))}
          </div>
        </>
      )}
    </SiteContent>
  );
}
