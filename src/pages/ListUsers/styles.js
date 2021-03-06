import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: baseline;
    align-content: stretch;
    padding:  10px;
  div {
    margin-top: 80px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 5px;
    width: 50%;
  }
  .buton {
    height: 42px;
    font-size: 16px;
    border: 2px solid #00008B;
    background: none;
    margin-top: 10px;
    color: #da552f;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
  }
`;

export const Header = styled.header`
  width: 100%;
    height: 100%;
    background:  blue;
    font-size: 20px;
    font-weight: robot;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    :hover{
      background: #fc6963;
    color: #fff
    }
`

export const Form = styled.form`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  strong {
    color: black;
    font-size: 18px
  }
  a {
    height: 42px;
    font-size: 16px;
    border: 2px solid #00008B;
    background: none;
    margin-top: 10px;
    color: #da552f;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s
  }
  a:hover {
    background: #da552f;
    color: #fff
  }
  #idMaterial {
    margin-left: 40px;
    margin-bottom: 1px
  }
`;
