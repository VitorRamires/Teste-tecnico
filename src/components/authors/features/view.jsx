import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogOverlay,
  ModalBox,
  ItemModal,
  ModalActions,
  DialogTrigger,
  DialogTitle,
  ViewInfoDinamic,
} from "../../styles/preview";
import previewLogo from "../../../img/preview.svg";


export function Preview({ authorIdPreview }) {
  const [getIdPreview, setGetIdPreview] = useState(authorIdPreview);


  const captureOnLocalStorage =
    JSON.parse(localStorage.getItem("authors")) || [];
  let filterIdAuthorPreview =
    captureOnLocalStorage.filter((item) => item.authorId === getIdPreview)[0] ||
    {};


  function getIdAuthorPreviewHandle() {
    setGetIdPreview(authorIdPreview);
  }

  useEffect(() => {
    setGetIdPreview(authorIdPreview);
  }, [authorIdPreview]);

  return (
    <Dialog.Root>
      <DialogTrigger>
        <img
          src={previewLogo}
          alt=""
          title="Preview"
          onClick={getIdAuthorPreviewHandle}
        />
      </DialogTrigger>

      <Dialog.Portal>
        <DialogOverlay>
          <ModalBox>
            <DialogTitle>Visualizando</DialogTitle>
            <Dialog.Description></Dialog.Description>

            <ViewInfoDinamic>
              <ItemModal>
                <h4>
                  <strong>Nome do autor:</strong>
                </h4>
                <p>{filterIdAuthorPreview?.author}</p>
              </ItemModal>
              <ItemModal>
                <h4>
                  <strong>Email:</strong>
                </h4>
                <p>{filterIdAuthorPreview?.email}</p>
              </ItemModal>
              <ItemModal>
                <h4>
                  <strong>Criado em:</strong>
                </h4>
                <p>{filterIdAuthorPreview?.date}</p>
              </ItemModal>
              <ItemModal>
                <h4>
                  <strong>Id: </strong>
                </h4>
                <p>{getIdPreview}</p>
              </ItemModal>
            </ViewInfoDinamic>

            <ModalActions>
              <Dialog.Close asChild>
                <button>Fechar</button>
              </Dialog.Close>
            </ModalActions>
          </ModalBox>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

Preview.propTypes = {
  authorIdPreview: PropTypes.number.isRequired,
};
