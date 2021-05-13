import React, { useRef } from "react";
import { Icon, Message, Placeholder } from "semantic-ui-react";
import ImageThumb from "../../../components/ImageThumb";
import "./style.css";
const Favourties = ({ favourites, loading }) => {
  const listRef = useRef(null);
  const showIcons = favourites.length > 3;
  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: 500,
        behavior: `smooth`,
      });
    }
  };
  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: -500,
        behavior: `smooth`,
      });
    }
  };
  return (
    <>
      {!loading && favourites.length === 0 && (
        <Message content="No contacts found" />
      )}
      <div className="slide-container">
        {showIcons && (
          <Icon
            className="icon-class"
            name="caret left"
            size="huge"
            onClick={scrollLeft}
          />
        )}
        {favourites.length > 0 && (
          <div className="items-container" ref={listRef}>
            {favourites?.map(
              ({ first_name, last_name, contact_picture }, index) => (
                <div key={index} className="single-item-container">
                  <ImageThumb
                    firstName={first_name}
                    lastName={last_name}
                    src={contact_picture}
                    style={{ width: 75, height: 75 }}
                  />
                  <p className="name">
                    {first_name}
                    {last_name}
                  </p>
                </div>
              )
            )}
          </div>
        )}
        {loading && (
          <Placeholder>
            <Placeholder.Header>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
          </Placeholder>
        )}
        {showIcons && (
          <Icon
            className="icon-class"
            name="caret right"
            size="huge"
            onClick={scrollRight}
          />
        )}
      </div>
    </>
  );
};

export default Favourties;
