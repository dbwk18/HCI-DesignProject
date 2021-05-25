import React from "react";
import './index.css';

const Modal = (props) => {
    
    const {open, close, create} = props;
    //open에는 open 상태를, close에는 close하는 함수를 받아옴. project 함수는 input을 띄운다.

    return(
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <section>
                    <header>
                        <p>
                            Create new Project! <button onClick={close}> close </button>
                        </p>  
                    </header>
                    <main>
                        <p>Project: <input id='Projectname'/></p>
                        <p>Duration: <input id='Duration'/></p>
                    </main>
                    <footer>
                        <button onClick={create}> Create </button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}

export default Modal;