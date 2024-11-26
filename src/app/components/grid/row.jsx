import { useRef, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { useData } from "@/app/contexts/data-context";
import Card from "./card";
import ScrollButton from "./scroll-button";
import Text from "../text";

export default function Row(props) {
  const { catalog } = useData();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const randomCatalogRef = useRef([]);

  let scrolling = false;

  useEffect(() => {
    if (
      catalog &&
      catalog.length > 0 &&
      randomCatalogRef.current.length === 0
    ) {
      randomCatalogRef.current = [...catalog]
        .sort(() => 0.5 - Math.random())
        .slice(0, 20);
    }
  }, [catalog]);

  const randomCatalog = randomCatalogRef.current;

  const smoothScroll = (element, delta) => {
    let start = element.scrollLeft;
    let end = start + delta;
    let startTime = null;

    const scrollAnimation = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / 300, 1);
      element.scrollLeft = start + (end - start) * progress;

      if (progress < 1) {
        requestAnimationFrame(scrollAnimation);
      } else {
        scrolling = false;
        updateArrowsVisibility();
      }
    };

    if (!scrolling) {
      scrolling = true;
      requestAnimationFrame(scrollAnimation);
    }
  };

  const updateArrowsVisibility = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.ctrlKey) return;

      if (scrollRef.current) {
        event.preventDefault();
        const scrollAmount = event.deltaY * 8;
        smoothScroll(scrollRef.current, scrollAmount);
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleScroll, {
        passive: false,
      });
      scrollContainer.addEventListener("scroll", updateArrowsVisibility);
      updateArrowsVisibility();
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleScroll);
        scrollContainer.removeEventListener("scroll", updateArrowsVisibility);
      }
    };
  }, []);

  return (
    <div className="relative flex flex-col gap-6">
      <Text className="ml-8 font-bold">
        {props.name}:
      </Text>
      <div className="relative">
        <ScrollButton
          right={false}
          canScroll={canScrollLeft}
          scrollRef={scrollRef}
          smoothScroll={smoothScroll}
          scrollAmount={-960}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </ScrollButton>
        <div
          ref={scrollRef}
          className="flex flex-grow gap-12 overflow-x-scroll scrollbar-hide p-2"
        >
          {randomCatalog.map((item) => (
            <Card key={item.id} src={item.img} />
          ))}
        </div>
        <ScrollButton
          right={true}
          canScroll={canScrollRight}
          scrollRef={scrollRef}
          smoothScroll={smoothScroll}
          scrollAmount={960}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </ScrollButton>
      </div>
    </div>
  );
}
