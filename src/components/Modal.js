const Modal = ({ modalActive, setModalActive }) => {
  return (
    <div
      className={modalActive ? "modal" : "inactive-modal"}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              Ваше замовлення було успішно створено!
            </h5>
          </div>
          <div className="modal-body">
            <p>
              Оператор зв'яжеться з Вами для підтвердження. Дякуємо за покупку!
            </p>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => {
                setModalActive(false);
                if (
                  document
                    .querySelector(".changed-components")
                    .contains(document.querySelector(".swiper"))
                ) {
                  document
                    .querySelector(".list-menu")
                    .classList.remove("inactive");
                  document
                    .querySelector(".main-header")
                    .classList.remove("inactive");
                  document
                    .querySelector(".swiper")
                    .classList.remove("inactive");
                } else {
                  document
                    .querySelector(".like-div")
                    .classList.remove("inactive");
                  document
                    .querySelector(".main-header")
                    .classList.remove("inactive");
                }
              }}
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Закрити
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
