import sass from "@/next-app/styles/components/Modal.module.scss"


const Modal = ({ states, func }) => {
    const classes = [sass.Modal]
    if (states.modal) {
        classes.push(sass.ModalActive)
    }
    return (
        <main
            className={classes.join(" ")}
            onClick={() => states.setModal(false)}
        >
            <div className={`${sass.Body} max-w-[80%]  p-8 flex flex-col justify-center items-center`}>

                <h3></h3>
                <p className={`${sass.Text} text-xl mb-8`}>Are your sure ?</p>
                <div className={`${sass.ActionsBar} flex gap-8 max-[576px]:flex-col-reverse`}>
                    <button
                        className={`${sass.Btn}`}
                        onClick={() => states.setModal(false)}>
                        No..
                    </button>
                    <button
                        className={`${sass.Btn}`}
                        onClick={() => { func, states.setModal(false) }}>
                        Yes!
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Modal;
