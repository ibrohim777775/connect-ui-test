import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import items from "../../db";

import { StyledMain } from "./StyledMain";

const Main = () => {
  return (
    <>
      <StyledMain>
        <div className="nav">
          <h1 className="logo__title">ConnectU</h1>
          <nav className="navigation">
            <ul className="navigation__inners">
              <li className="navigation__item">
                <a href="/" className="navigation__link">
                  Menu
                </a>
              </li>
              <li className="navigation__item">
                <a href="/" className="navigation__link">
                  Menu
                </a>
              </li>
              <li className="navigation__item">
                <a href="/" className="navigation__link">
                  Menu
                </a>
              </li>
              <li className="navigation__item">
                <a href="/" className="navigation__link">
                  Menu
                </a>
              </li>
              <li className="navigation__item">
                <a href="/" className="navigation__link">
                  Menu
                </a>
              </li>
              <li className="navigation__item">
                <a href="/" className="navigation__link">
                  Menu
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content">
          <div className="content__header">
            <h2 className="content__title">Dashboard</h2>
            <div className="content__nav">
              <div className="content__links">
                <div className="content__links-items ">
                  <AiOutlineMessage className="content__links-icons message" />
                </div>
                <div className="content__links-items notification">
                  <MdNotificationsNone className="content__links-icons " />
                  <section className="new__notification">3</section>
                </div>
                <div className="content__links-items ">
                  <FiSettings className="content__links-icons settings" />
                </div>
              </div>
              <div className="user__info">
                <h3 className="user__name">Morten Timmerman</h3>
                <div className="user__img"></div>
              </div>
            </div>
          </div>

          <div className="statistics">
            <div className="statistics__items saved">
              <div className="statistic__items-title">Saved</div>
              <div className="statistic__items-number">62 persons</div>
            </div>
            <div className="statistics__items recommended">
              <div className="statistic__items-title">Recommended</div>
              <div className="statistic__items-number">62 persons</div>
            </div>
            <div className="statistics__items perfect">
              <div className="statistic__items-title">Perfect fir</div>
              <div className="statistic__items-number">62 persons</div>
            </div>
          </div>
          <div className="main">
            {items.map((item) => (
              <div key={item.id} className="main__inners">
                <section className="inner__head">
                  <h3 className="inner__head-title">{item.title}</h3>
                  <section className="inner__head-info">
                    <section className="inner__info-items">
                      Location:{item?.location}
                    </section>
                    <section className="inner__info-items">
                      Hours:{item?.hours}
                    </section>{" "}
                    <section className="inner__info-items">
                      Pay:{item?.pay}$/hr
                    </section>{" "}
                    <section className="inner__info-items">
                      Posted:{item?.location} hours ago
                    </section>
                  </section>
                </section>
                <section className="inner__description">
                  <p className="inner__text">{item?.description}</p>
                </section>
                <section className="inner__nav">
                  <button className="inner__connect-btn">Connect</button>
                  <button className="inner__go-btn">Goo!!!</button>
                </section>
              </div>
            ))}
          </div>
        </div>
      </StyledMain>
      {/* <StyledFragment /> */}
    </>
  );
};

export default Main;
