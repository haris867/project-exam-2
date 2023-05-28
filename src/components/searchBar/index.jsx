import { useState } from "react";
import { Col, Card } from "react-bootstrap";
import * as S from "../commonStyles/cards";
import * as St from "./index.styles";
import useGetData from "../../hooks/api/getData";
import { baseUrl } from "../../utils/constants";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const url = baseUrl + `venues`;

  const { data, isLoading, isError } = useGetData(url);

  const filteredVenues = data.filter(
    (venue) =>
      venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      venue.location.country
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      venue.location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      venue.location.continent.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>An error occured</div>;
  }

  return (
    <div>
      <div className="d-flex justify-content-center flex-wrap p-2 mb-3">
        <St.SearchInput
          className="m-2"
          type="url"
          placeholder="Search by name or location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {searchQuery.length > 0 && (
        <St.SearchResultsContainer className="mb-3">
          <St.SearchBarText className="text-center fs-3 mb-2">
            Search results
          </St.SearchBarText>
          <div className="search-results d-flex justify-content-center mb-2 pt-2">
            {filteredVenues.length > 0 ? (
              <div className="d-flex flex-wrap justify-content-center">
                {filteredVenues.map((venue) => (
                  <Col
                    xs={12}
                    sm={10}
                    md={6}
                    lg={4}
                    className="d-flex justify-content-center align-self-center"
                    data-id={venue.id}
                  >
                    <S.BaseCard>
                      <S.CardLink to={`/venue/${venue.id}`}>
                        {venue.media && venue.media.length > 0 ? (
                          <S.CardImg src={venue.media[0]} alt={venue.name} />
                        ) : (
                          <S.CardImg
                            className="object-fit-contain"
                            src="/images/holidaze-logo.png"
                            alt="Holidaze logo"
                          />
                        )}
                        <St.CardTextContainer className="d-flex justify-content-between mt-2 align-items-baseline">
                          <Card.Title className="fs-5">{venue.name}</Card.Title>
                          <Card.Text className="fs-6 ms-2 fw-bold d-flex">
                            {venue.price}${" "}
                            <span className="fs-6 fw-normal">/day</span>
                          </Card.Text>
                        </St.CardTextContainer>
                      </S.CardLink>
                    </S.BaseCard>
                  </Col>
                ))}
              </div>
            ) : (
              <St.SearchBarText>No results</St.SearchBarText>
            )}
          </div>
        </St.SearchResultsContainer>
      )}
    </div>
  );
}
