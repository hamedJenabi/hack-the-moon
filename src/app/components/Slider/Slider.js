"use client";
import styles from "./Slider.module.scss";
import SliderControl from "./SliderControls";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  Virtual,
  Keyboard,
  Parallax,
  Zoom,
  Controller,
  Autoplay,
  FreeMode,
  Grid,
  EffectFade,
  EffectCards,
  EffectCoverflow,
  EffectCube,
  HashNavigation,
  Manipulation,
  EffectFlip,
  EffectCreative,
  History,
  Thumbs,
} from "swiper/modules";
import classNames from "classnames";

const Slider = (
  {
    children,
    bottomNavigation = false,
    isFullWidth = true,
    className,
    onSwiper,
    ...props
  },
  ref
) => {
  const defaultSettings = {
    modules: [
      Virtual,
      Keyboard,
      Parallax,
      Zoom,
      Navigation,
      Controller,
      Autoplay,
      FreeMode,
      Grid,
      History,
      HashNavigation,
      EffectFade,
      EffectCube,
      EffectFlip,
      EffectCoverflow,
      EffectCreative,
      EffectCards,
      Pagination,
      Scrollbar,
      A11y,
      Mousewheel,
      Manipulation,
      Thumbs,
    ],
    resizeObserver: true,
    navigation: {
      prevEl: ".prev-button",
      nextEl: ".next-button",
    },
    scrollbar: false,
    mousewheel: {
      releaseOnEdges: false,
      forceToAxis: true,
    },
    keyboard: {
      enabled: true,
    },
    a11y: {
      enabled: true,
      firstSlideMessage: "Das ist das erste Element",
      lastSlideMessage: "Das ist das letzte Element",
      nextSlideMessage: "Nächstes Element",
      prevSlideMessage: "Vorheriges Element",
      slideLabelMessage: "Element {{index}} von {{slidesLength}}",
    },
    wrapperTag: "ul",
    ...props,
  };

  return (
    <div
      className={classNames(
        styles.sliderWrapper,
        {
          [styles.fullWidth]: isFullWidth,
          [styles.bottomNavigation]: bottomNavigation,
        },
        className
      )}
    >
      <Swiper {...defaultSettings} ref={ref} onSwiper={onSwiper}>
        {children.map(children, (child) =>
          !child.props?.["data-no-slide"] ? (
            <SwiperSlide tag="li">{child}</SwiperSlide>
          ) : (
            // Fragment is necessary otherwise it throws an error
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>{child}</>
          )
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
export { SliderControl };
