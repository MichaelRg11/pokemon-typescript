// import Button from '../Button';
import { ModalContainer, ModalContent, ModalBody } from './style'

interface Props {
    show: boolean;
    setShowModal: (value: boolean) => void;
    msg: string;
    err: boolean;
}

export default function Modal ({ show, setShowModal, msg, err }: Props) {
    if (!show) return null
    return (
        <ModalContainer>
            <ModalContent>
                <ModalBody>
                    <h1>este es el modal</h1>
                    <h2>Contenido del modal we</h2>
                    <h3>{msg}</h3>
                    <div className="mt-2">
                        <button onClick={() => setShowModal(false)}>Aceptar</button>
                    </div>
                </ModalBody>
            </ModalContent>
        </ModalContainer>
    )
}
