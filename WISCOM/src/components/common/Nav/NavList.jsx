import React, { useEffect, useRef, useState } from 'react';
import { TimelineMax, Power1, Power4, Back, Sine, gsap } from 'gsap';
import './nav.css';
import * as N from './NavListStyle';

const NavList = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuInnerRef = useRef(null);
  const menuTriggerRef = useRef(null);
  const timelineRef = useRef(null);
  const blursRef = useRef([]);

  useEffect(() => {
    const randomX = random(-400, 400);
    const randomY = random(-200, 200);
    const randomDelay = random(0, 50);
    const randomTime = random(6, 12);
    const randomTime2 = random(5, 6);
    const randomAngle = random(-30, 150);

    const blurs = blursRef.current;
    blurs.forEach((blur) => {
      gsap.set(blur, {
        x: randomX(-1),
        y: randomX(1),
        rotation: randomAngle(-1),
      });

      moveX(blur, 1);
      moveY(blur, -1);
      rotate(blur, 1);
    });

    function rotate(target, direction) {
      gsap.to(target, randomTime2(), {
        rotation: randomAngle(direction),
        ease: Sine.easeInOut,
        onComplete: () => rotate(target, direction * -1),
      });
    }

    function moveX(target, direction) {
      gsap.to(target, randomTime(), {
        x: randomX(direction),
        ease: Sine.easeInOut,
        onComplete: () => moveX(target, direction * -1),
      });
    }

    function moveY(target, direction) {
      gsap.to(target, randomTime(), {
        y: randomY(direction),
        ease: Sine.easeInOut,
        onComplete: () => moveY(target, direction * -1),
      });
    }

    function random(min, max) {
      const delta = max - min;
      return (direction = 1) => (min + delta * Math.random()) * direction;
    }

    const menuTrigger = menuTriggerRef.current;

    if (!menuTrigger) {
      console.error('menuTrigger is null. Check your ref initialization.');
      return;
    }

    const handleMenuTriggerClick = () => {
      setMenuVisible(!menuVisible);
      const timeline = timelineRef.current;
      if (!menuVisible) {
        // 메뉴를 열 때 메뉴 배경을 보이게 함
        menuInnerRef.current.style.visibility = 'visible';
        timeline.play();
      } else {
        timeline.timeScale(1.25);
        timeline.reverse();
        // 메뉴를 닫을 때 생성된 menu 바를 사라지게 함
        setTimeout(() => {
          menuInnerRef.current.style.visibility = 'hidden';
        }, timeline.duration() * 0); // timeout 시간을 timeline의 duration으로 설정
      }
    };

    if (menuTrigger) {
      menuTrigger.addEventListener('click', handleMenuTriggerClick);
    }

    const timeline = new TimelineMax({
      paused: true,
    });

    timeline
      .to(
        menuInnerRef.current,
        1,
        {
          autoAlpha: 1,
          ease: Power4.easeOut,
        },
        'start',
      )
      .fromTo(
        document.querySelector('.js-menu-inner-background i'),
        0.25,
        {
          x: '-100%',
          autoAlpha: 0,
        },
        {
          x: '0%',
          autoAlpha: 1,
          ease: Power1.easeOut,
        },
        'start',
      )
      .staggerFromTo(
        document.querySelectorAll('.js-menu-items-list li'),
        0.4,
        {
          x: -30,
          autoAlpha: 0,
        },
        {
          x: 0,
          autoAlpha: 1,
          delay: 0.35,
          ease: Back.easeOut.config(1),
        },
        0.15,
        'start',
      )
      .fromTo(
        document.querySelector('.js-menu-items-shape'),
        0.25,
        {
          scale: 0.7,
          autoAlpha: 0,
        },
        {
          scale: 1,
          autoAlpha: 1,
          delay: 0.95,
          ease: Back.easeOut.config(1.7),
        },
        'start',
      );

    timelineRef.current = timeline;

    return () => {
      // Cleanup: 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      if (menuTrigger) {
        menuTrigger.removeEventListener('click', handleMenuTriggerClick);
      }
    };
  }, [menuVisible]);

  useEffect(() => {
    const handleResize = () => {
      const menuTrigger = menuTriggerRef.current;

      if (!menuTrigger) {
        return;
      }

      // 창의 크기가 900px를 초과하고 메뉴가 숨겨져 있는 경우에는 트리거를 보이게 설정
      if (menuVisible) {
        menuTrigger.style.display = 'flex';
      } else if (window.innerWidth < 900 && menuVisible == false) {
        menuTrigger.style.display = 'flex';
      } else if (window.innerWidth >= 900 && menuVisible == false) {
        menuTrigger.style.display = 'none';
      }
    }; // 처음 컴포넌트가 마운트될 때 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuVisible]);

  return (
    <>
      <N.MenuTrigger ref={menuTriggerRef}>
        <N.MenuSpan>{menuVisible ? 'CLOSE' : 'MENU'}</N.MenuSpan>
      </N.MenuTrigger>

      <N.MenuInner ref={menuInnerRef}>
        <N.MenuBackGround></N.MenuBackGround>
        <div className="blur" ref={(el) => (blursRef.current[0] = el)} />
        <div className="blur" ref={(el) => (blursRef.current[1] = el)} />
        <div className="blur" ref={(el) => (blursRef.current[2] = el)} />

        <N.MenuInnerWrapper>
          <N.MenuItemList className="js-menu-items-list">
            <N.MenuItemLi className="js-menu-item is-active">
              <N.M_a href="/">MAIN</N.M_a>
            </N.MenuItemLi>
            <N.MenuItemLi className="js-menu-item is-active">
              <N.M_a href="/map">PROJECT</N.M_a>
            </N.MenuItemLi>
            <N.MenuItemLi className="js-menu-item">
              <N.M_a href="/guestbook">GUESTBOOK</N.M_a>
            </N.MenuItemLi>

            <N.MenuItemLi className="js-menu-item">
              <N.M_a href="/developer">DEVELOPER</N.M_a>
            </N.MenuItemLi>
            <N.MenuItemLi className="js-menu-item">
              <N.M_a href="https://pf.kakao.com/_wymuG/chat" target="_blank">
                CHAT
              </N.M_a>
            </N.MenuItemLi>
          </N.MenuItemList>
        </N.MenuInnerWrapper>
      </N.MenuInner>
    </>
  );
};

export default NavList;
