"use client";

import { useRef, useEffect, useState } from "react";

import "../../globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Card from "./card";

export default function Row(props) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  let scrolling = false;

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
      <h1 className="ml-8 text-white text-2xl font-poppins font-bold">
        {props.name}:
      </h1>
      <div className="relative">
        <button
          className={`absolute left-[-96px] top-1/2 text-[96px] transform -translate-y-1/2 text-white p-2 rounded-full z-10 transition-opacity duration-500 ${
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
          <Card src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg" />
          <Card src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/4t2BRfqHaSKUypPV09LkMjEECpQ.jpg" />
          <Card src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rdXhVZvUegRqgMFFw6j2T76lLRl.jpg" />
          <Card src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/z1hNoGhH12ISnPzPqMOq1QLVGdu.jpg" />
          <Card src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/w5YVZQSR8yTOUFTS46QSUhnsYgK.jpg" />
          <Card src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/x5KXbN1f0YpG2Hra1ghlMBe6Zxq.jpg" />
          <Card src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/tYLecM3WSEjlkKhkGiH5G68Dprm.jpg" />
          <Card src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7seqaCaaXDNUHOx4DqwpoOH8pPa.jpg" />
          <Card src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/abf8tHznhSvl9BAElD2cQeRr7do.jpg" />
          <Card src="https://www.themoviedb.org/t/p/w220_and_h330_face/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg" />
          <Card src="https://www.themoviedb.org/t/p/w220_and_h330_face/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg" />
          <Card src="https://www.themoviedb.org/t/p/w220_and_h330_face/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg" />
        </div>
        <button
          className={`absolute right-[-96px] top-1/2 text-[96px] transform -translate-y-1/2 text-white p-2 rounded-full z-10 transition-transform duration-300 ${
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
