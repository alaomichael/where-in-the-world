import React from 'react';
import Spinner from './Spinner';
import SearchBox from './SearchBox';
import CountryElement from './CountryElement';
import Countries from './Countries';
import SiteContent from './SiteContent';
import useData from './useData';
import matchSorter from 'match-sorter';
import FilterBox from './FilterBox';

export default function ListPage() {
  const countries = useData('https://restcountries.eu/rest/v2/all');
  const [searchValue, setSearchValue] = React.useState('');
  const [currentRegion, setRegion] = React.useState('');
  const availableRegions = React.useMemo(
    () => [
      ...new Set(
        (countries || [])
          .map(country => country.region)
          .filter(country => country),
      ),
    ],
    [countries],
  );
  const filteredCountries = React.useMemo(() => {
    if (!countries) {
      return [];
    }
    let sortableCountries = countries;
    if (currentRegion) {
      sortableCountries = countries.filter(
        country => country.region === currentRegion,
      );
    }
    return matchSorter(sortableCountries, searchValue, { keys: ['name'] });
  }, [searchValue, countries, currentRegion]);
  return (
    <SiteContent>
      {!countries && <Spinner>Fetching some data!</Spinner>}
      {countries && (
        <>
          <SearchBox
            onChange={e => setSearchValue(e.target.value)}
            value={searchValue}
            placeholder="Search for a country"
          />
          <FilterBox
            value={currentRegion}
            onChange={e => setRegion(e.target.value)}
          >
            <option disabled value="">
              Filter by Region
            </option>
            <option value="">All</option>
            {availableRegions.map(region => (
              <option value={region} key={region}>
                {region}
              </option>
            ))}
          </FilterBox>
          <Countries>
            {filteredCountries.map(country => (
              <CountryElement
                as="li"
                key={country.name}
                code={country.alpha3Code}
                name={country.name}
                flag={country.flag}
                details={[
                  {
                    label: 'Population',
                    value: country.population.toLocaleString(),
                  },
                  { label: 'Region', value: country.region },
                  { label: 'Capital', value: country.capital },
                ]}
              />
            ))}
            {filteredCountries.length === 0 && <p>No matches</p>}
          </Countries>
        </>
      )}
    </SiteContent>
  );
}
