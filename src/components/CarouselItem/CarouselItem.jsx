import { StyledImg, CarouselItemContainer } from "./CarouselItemStyles";
export const CarouselItem = ({ isActive, slideDirection, items }) => {
  return (
    <CarouselItemContainer styledprops={{ isActive, slideDirection }}>
      <div className="d-flex align-items-center justify-content-center flex-wrap gap-2">
        {items.map((item, index) =>
            (
              <StyledImg key={index} src={item.src} alt={item.alt} />
            )      
        )}
      </div>
    </CarouselItemContainer>
  );
};
