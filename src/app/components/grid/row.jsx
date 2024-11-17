import { useRef, useEffect, useState } from "react";
import { useAuth } from '@/app/contexts/auth-context';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Card from "./card";

export default function Row({ name }) {
  const { catalog } = useAuth();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const randomCatalogRef = useRef([]);

  let scrolling = false;

  useEffect(() => {
    if (catalog && catalog.length > 0 && randomCatalogRef.current.length === 0) {
      randomCatalogRef.current = [...catalog].sort(() => 0.5 - Math.random()).slice(0, 10);
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
      <h1 className="ml-8 text-neutral-100 text-2xl font-poppins font-bold">
        {name}:
      </h1>
      <div className="relative">
        <button
          className={`absolute left-[-96px] top-1/2 text-[96px] transform -translate-y-1/2 text-neutral-100 p-2 rounded-full z-10 transition-opacity duration-500 ${
            canScrollLeft ? "opacity-100" : "opacity-0"
          } hover:scale-110`}
          onClick={() => {
            if (scrollRef.current) {
              smoothScroll(scrollRef.current, -960);
            }
          }}
          style={{ transition: "opacity 0.5s ease-in-out" }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div
          ref={scrollRef}
          className="flex flex-grow gap-12 overflow-x-scroll scrollbar-hide p-2"
        >
          {randomCatalog.map((item) => (
            <Card key={item.id} src={item.img} />
          ))}
        </div>
        <button
          className={`absolute right-[-96px] top-1/2 text-[96px] transform -translate-y-1/2 text-neutral-100 p-2 rounded-full z-10 transition-transform duration-300 ${
            canScrollRight ? "opacity-100" : "opacity-0"
          } hover:scale-110`}
          onClick={() => {
            if (scrollRef.current) {
              smoothScroll(scrollRef.current, 960);
            }
          }}
          style={{ transition: "opacity 0.5s ease-in-out" }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}
