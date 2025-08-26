import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './_modalImage.scss';

type ModalImageProps = {
    src: string;
    alt?: string;
    onClose: () => void;
};

export const ModalImage = ({ src, alt, onClose }: ModalImageProps) => {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onClose]);

    return ReactDOM.createPortal(
        <div className="modalImageOverlay" onClick={onClose}>
            <div className="modalImageContent" onClick={e => e.stopPropagation()}>
                <img src={src} alt={alt || 'Imagen ampliada'} loading="lazy" />
                <button className="modalImageClose" onClick={onClose}>&times;</button>
                <p className="modalDescription">{alt}</p>
            </div>
        </div>,
        document.body
    );
};
