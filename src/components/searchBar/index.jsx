import { useState } from "react";
import { Col, Card } from "react-bootstrap";
import * as S from "../commonStyles/cards";
import useGetData from "../../hooks/api/getData";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const url = "https://api.noroff.dev/api/v1/holidaze/venues";

  const { data, isLoading, isError } = useGetData(url);

  console.log(data);

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
    return <div>Error: {isError.message}</div>;
  }

  return (
    <div>
      <div className="d-flex justify-content-center flex-wrap p-2 mb-3">
        <input
          className="m-2"
          type="url"
          placeholder="Search by name or location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            height: "calc(2.5em + 0.7vw)",
            flex: "1 0 100px",
            maxWidth: "350px",
            outline: "none",
            fontFamily: "Quicksand",
          }}
        />
      </div>
      {searchQuery.length > 0 && (
        <div>
          Search results
          <div
            className="search-results d-flex justify-content-center mb-2 pt-2"
            style={{
              backgroundColor: "var(--color-primary)",
              padding: "40px",
            }}
          >
            {filteredVenues.length > 0 ? (
              <div className="d-flex flex-wrap">
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
                        <S.CardImg
                          src={
                            venue.media.length > 0
                              ? venue.media[0]
                              : "/images/beach-resort.jpg"
                          }
                          alt=""
                          style={{
                            objectFit: "cover",
                            width: "100%",
                          }}
                        />
                        <div
                          className="d-flex justify-content-between mt-2"
                          style={{
                            alignItems: "baseline",
                            maxHeight: "32px",
                            color: "white",
                          }}
                        >
                          <Card.Title className="fs-5">{venue.name}</Card.Title>
                          <Card.Text className="fs-6 ms-2 fw-bold d-flex">
                            {venue.price}${" "}
                            <span className="fs-6 fw-normal">/day</span>
                          </Card.Text>
                        </div>
                      </S.CardLink>
                    </S.BaseCard>
                  </Col>
                ))}
              </div>
            ) : (
              <div style={{ color: "white" }}>No results</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
