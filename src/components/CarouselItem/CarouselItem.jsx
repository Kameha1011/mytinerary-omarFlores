import { CarouselItemContainer, CarouselItemCard } from "./CarouselItemStyles";
export const CarouselItem = ({ isActive, slideDirection, items }) => {
  return (
    <CarouselItemContainer styledprops={{ isActive, slideDirection }}>
      <div className="d-flex align-items-center justify-content-center flex-wrap gap-2">
        {items.map((item, index) =>
            (
              <CarouselItemCard key={index} bgimg={item.src}>
                <h3>{item.alt}</h3>
              </CarouselItemCard>
            )      
        )}
      </div>
    </CarouselItemContainer>
  );
};
