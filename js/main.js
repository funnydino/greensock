"use strict";

(() => {

  document.addEventListener('DOMContentLoaded', () => {

    const body = document.querySelector('.body');
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const menuHeader = document.querySelector('.menu__top');
    const mainMenu = document.querySelector('.menu__nav');
    const socialMenu = document.querySelector('.social');
    const menuRight = document.querySelector('.menu__right');
    const heroTitle = document.querySelector('.hero__title');
    const heroText = document.querySelector('.hero__text');
    const heroBtn = document.querySelector('.hero__btn');
    const photoPrimary = document.querySelectorAll('.photos__primary');
    const photoSecondary1 = document.querySelectorAll('.photos__secondary img:nth-child(1)');
    const photoSecondary2 = document.querySelectorAll('.photos__secondary img:nth-child(2)');
    const photosAuthors = document.querySelectorAll('.photos__author');

    let tlPage = gsap.timeline({
      paused: true,
      reversed: true,
    });

    let tlMenu = gsap.timeline({
      paused: true,
      reversed: true,
    });

    setTimeout(() => {
      tlPage.play();
    }, 500);

    tlPage.from(heroTitle, {
        duration: 1,
        opacity: 0,
        y: 70,
      })
      .from(heroBtn, {
        duration: 1,
        opacity: 0,
        y: 50,
      }, "-=.75")
      .from(heroText, {
        duration: 1,
        opacity: 0,
      }, "-=.5")
      .from(photoPrimary, {
        duration: 1,
        scale: .75,
        opacity: 0,
      }, "-=1.4")
      .from(photoSecondary1, {
        duration: 1,
        opacity: 0,
      }, "-=1.15")
      .from(photoSecondary2, {
        duration: 1,
        opacity: 0,
      }, "-=1")
      .from(photosAuthors, {
        duration: 1,
        opacity: 0,
      }, "-=1.05");

    tlMenu.set(menu, {
        top: 0,
      })
      .from(menuHeader, {
        duration: .5,
        opacity: 0,
        scaleY: 0,
        ease: "back.out(3.7)",
      })
      .from(menu, {
        duration: .5,
        opacity: 0,
      }, "-=.5")
      .from(mainMenu, {
        duration: .5,
        opacity: 0,
        y: 75,
      })
      .from(socialMenu, {
        duration: .7,
        opacity: 0,
        y: 35,
      })
      .from(menuRight, {
        duration: .7,
        opacity: 0,
        y: 35,
      }, "-=.7");

    burger.addEventListener('click', () => {
      burger.classList.toggle('burger--close');
      if (burger.classList.contains('burger--close')) {
        body.classList.add('body--lock');
        tlMenu.play();
      } else {
        tlMenu.reverse();
        setTimeout(() => {
          body.classList.remove('body--lock');
        }, tlMenu.duration() * 1000);
      }
    });

    let animate = ({
      timing,
      draw,
      duration
    }) => {

      let start = performance.now();

      requestAnimationFrame(function animate(time) {

        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        let progress = timing(timeFraction);
        draw(progress);

        if (timeFraction < 1) {
          requestAnimationFrame(animate);
        };

      });

    };

  });

})();
