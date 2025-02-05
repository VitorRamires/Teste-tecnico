import { useState, useContext } from "react";
import { CreateGlobalContext } from "../../../context/globalContextBooks";
import PropTypes from "prop-types";

import * as Dialog from "@radix-ui/react-dialog";
import { DialogOverlay, ModalBox } from "../../../global.js";
import {
  ModalActions,
  DialogTrigger,
  DialogDescription,
  Span,
} from "../../styles/remove";
import removeLogo from "../../../img/trash.svg";

/**
 * Component to remove a book
 *
 * @param {Object} props - React component props
 * @param {number} props.bookIdRemove -Ids of books
 * @returns {JSX.Element}
 */
export function Remove({ bookIdRemove }) {
  const [getIdAuthorRemove] = useState(bookIdRemove);

  const { setBooks, books } = useContext(CreateGlobalContext);

  let actualItem = books.filter((item) => item.id === getIdAuthorRemove)[0];
  let removedsArray = books.filter((item) => item.id !== actualItem.id);

  /**
   * Funtion to save a new filtered array and save on localStorage
   *
   * @returns {void}
   */
  function filterArray() {
    localStorage.setItem("books", JSON.stringify(removedsArray));
    setBooks(removedsArray);
  }

  return (
    <Dialog.Root>
      <DialogTrigger>
        <img src={removeLogo} alt="" title="Remover" />
      </DialogTrigger>

      <Dialog.Portal>
        <DialogOverlay>
          <ModalBox>
            <Dialog.Title>
              <Span className="alert">Deseja remover o livro?</Span>
            </Dialog.Title>
            <DialogDescription>
              Esta Operação não pode ser desfeita
            </DialogDescription>

            <ModalActions>
              <Dialog.Close asChild>
                <button>Não</button>
              </Dialog.Close>
              <Dialog.Close asChild>
                <button onClick={filterArray}>Sim</button>
              </Dialog.Close>
            </ModalActions>
          </ModalBox>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

Remove.propTypes = {
  bookIdRemove: PropTypes.number.isRequired,
};
