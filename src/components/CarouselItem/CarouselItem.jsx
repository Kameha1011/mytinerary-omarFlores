import { CarouselItemContainer, CarouselItemCard } from "./CarouselItemStyles";
export const CarouselItem = ({ isActive, slideDirection, items }) => {
  return (
    <CarouselItemContainer styledprops={{ isActive, slideDirection }}>
      <div className="d-flex align-items-center justify-content-center flex-wrap gap-2">
        {items.map((item, index) =>
            (
              <CarouselItemCard key={index} bgimg={item.picture}>
                <h3>{item.city}</h3>
              </CarouselItemCard>
            )      
        )}
      </div>
    </CarouselItemContainer>
  );
};
