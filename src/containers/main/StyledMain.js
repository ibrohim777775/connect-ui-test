import styled from "styled-components";

export const StyledMain = styled.div`
  min-height: 100vh;
  // background: green;
  display: flex;
  & .nav {
    flex: 1;
    background-color: #003a6e;
    padding: 30px;
    .logo__title {
      color: #f5f5f5;
      font-size: 34px;
      font-weight: 600;
      margin-bottom: 20px;
      cursor: pointer;
    }
    .navigation__link {
      color: #f5f5f5;
      font-weight: 600;
      font-size: 18px;
      &:hover {
        color: #1df9f9;
      }
    }
    .navigation__inners {
      padding: 0;
      list-style-type: none;
    }
    .navigation__item {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      padding-left: 30px;
      position: relative;
      &:before {
        position: absolute;
        width: 14px;
        height: 14px;
        content: " ";
        background-color: #fff;
        border-radius: 50%;
        left: 0;
      }
    }
  }
  & .content {
    flex: 5;
    padding: 30px;
    background-color: #f5f5f5;
    & .content__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      .content__title {
        font-size: 24px;
        font-weight: 700;
        color: #000;
      }
      .content__nav {
        display: flex;
        align-items: center;

        .content__links {
          display: flex;
          align-items: center;
          .content__links-icons {
            font-size: 34px;
            margin-right: 20px;
            cursor: pointer;
          }
          .notification {
            position: relative;
          }
          .new__notification {
            position: absolute;
            padding: 0 5px;
            top: -1px;
            left: 18px;
            background-color: red;
            color: #fff;
            border-radius: 50%;
            font-size: 12px;
            font-weight: 600;
          }
        }
        .user__info {
          display: flex;
          align-items: center;
          .user__name {
            color: #000;
            font-szie: 20px;
            font-weight: 600;
            margin-right: 10px;
          }
          .user__img {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background-color: #c4c4c4;
            cursor: pointer;
          }
        }
      }
    }
    & .statistics {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 20px 0 30px 0;
      column-gap: 5%;
      .statistics__items {
        min-width: 200px;
        margin-bottom: 10px;
        // width: 27%;
        flex: 1;
        border-radius: 10px;
        padding: 15px 15px 10px 25px;
        .statistic__items-title {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
        }
        .statistic__items-number {
          color: #fff;
          font-weight: 600;
        }
      }
      .saved {
        background-color: #8e44ad;
      }
      .recommended {
        background-color: #34495e;
      }
      .perfect {
        background-color: #f39c12;
      }
    }
    & .main {
      .main__inners {
        padding: 15px 35px 15px 15px;
        background-color: #fff;
        margin: 0 0 15px 0;
        border-radius: 12px;
        .inner__head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          .inner__head-title {
            font-size: 24px;
            color: #000;
            font-weight: 700;
          }
          .inner__head-info {
            display: flex;
            align-items: center;
            .inner__info-items {
              margin-left: 20px;
            }
          }
        }
        .inner__description {
          width: 85%;
        }
        .inner__nav {
          display: flex;
          justify-content: flex-end;
          & button {
            width: 150px;
            border: none;
            outline: none;
            padding: 7px 12px;
            border-radius: 12px;
            font-weight: 600;
            cursor: pointer;
            transion: all 400ms;
          }
          .inner__connect-btn {
            background-color: #003a6e;
            color: #fff;
            margin-right: 20px;
            &:hover {
              background-color: #fff;
              color: #003a6e;
              border: 1px solid #003a6e;
            }
          }
          .inner__go-btn {
            background-color: #fff;
            color: #003a6e;
            border: 1px solid #003a6e;
            &:hover {
              background-color: #003a6e;
              color: #fff;
            }
          }
        }
      }
    }
  }
`;
