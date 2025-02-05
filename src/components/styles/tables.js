import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";



export const DialogTrigger = styled(Dialog.Trigger)`
  width: 200px;
  max-width: 100%;
  font-size: 1.5rem;
  height: 60px;
  background-color: #199fe3;
  color: #ffff;
  outline: none;
  border: none;
  padding: 0 15px;
  border-radius: 5px;
  margin: 20px 0 50px 0;
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: "Montserrat", Sans-serif;
  -webkit-box-shadow: 0 0 0 0.35em transparent;
  box-shadow: 0 0 0 0.35em transparent;

  @media screen and (max-width:350px){
    font-size: 1.3rem;
  }

  &:hover {
    animation: hoverBtn 1s;
    -webkit-animation: hoverBtn 1s;
    animation: hoverBtn 1s;
  }
  span {
    font-size: 2rem;
    transition: 0.2s;
  }
`;

export const ItemModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 5px;
  width: 100%;
  margin: 25px 0;
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: start;
  margin-top: 35px;

  button {
    width: 100px;
    padding: 10px 5px;
    cursor: pointer;
    background-color: #47afca;
    outline: none;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-weight: regular;
    transition: 0.2s;
    font-size: 1.05rem;

    &:hover {
      background-color: #0abdec;
    }
  }

  button:last-child {
    background-color: #34798a;
    transition: 0.1s;
    border: 1px solid #2c6d7d;

    &:hover {
      background-color: #2c6d7d;
    }
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  height: 420px;
  padding: 10px 10px 10px 0;
`;

export const TableBox = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: "Montserrat", Sans-serif;

  @media screen and (max-width: 900px) {
    width: 800px;
  }

  table,
  th,
  td {
    text-align: start;
    padding: 5px;
  }

  thead tr {
    background-color: #199fe3;
    font-size: 1.1rem;
    color: #ffffff;
    clip-path: xywh(0 0 100% 85% round 0.3em);
  }

  tr {
    width: 100%;
  }

  tbody {
    border-top: 15px solid #e1eff6;
  }

  tbody tr {
    border-top: 10px solid #e1eff6;
    color: #199fe3;
    clip-path: xywh(0 0 100% 100% round 0.3em);
  }

  tbody tr:nth-child(odd) {
    background-color: #f2f9fc;
  }

  tbody tr:nth-child(even) {
    background-color: #c1e5f7;
  }

  td {
    padding: 15px;
    position: relative;
  }
`;

export const Actions = styled.td`
  display: flex;
  align-items: stretch;
  justify-content: start;
  gap: 20px;

  img {
    width: 30px;
    height: 30px;
    transition: 0.1s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const AlreadyCreated = styled.p`
  margin-top: 20px;
  font-size: 0.95rem;
  color: #ff5858;
`;

export const InputFilter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  background-color: #ffffff;
  padding: 0 15px;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: 0.2s;

  &:focus-within {
    border-color: #199fe3;
    box-shadow: 0 4px 4px 0 rgba(43, 43, 43, 0.19);

    img {
      width: 25px;
    }
  }

  input {
    background-color: transparent;
    width: 100%;
    margin: 0;
  }

  img {
    width: 20px;
    height: auto;
    transition: 0.2s;
  }
`;

export const ButtonsFilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  gap: 15px;
  margin-bottom:25px;

  button {
    width: max-content;
    padding: 10px 15px;
    margin-top:5px;
    font-family: "Montserrat";
    background-color: #a1a1a1;
    color: #ffffff;
    cursor: pointer;
    transition: 0.2s;

    @media screen and (max-width:377px){
      width: 100%;
    }

    &.activated-button {
      background-color: #126792;
    }
  }
`;

export const SortButton = styled.button`
  width: 170px;
  max-width:100%;
  padding: 10px 5px;
  background-color:#bdbdbd;
  color:#ffffff;
  margin-top:15px;
  cursor: pointer;
  font-family: "Montserrat";
`;
