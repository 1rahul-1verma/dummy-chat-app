import { useState, useCallback } from 'react';

const useModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModalState = useCallback(() => {
        setIsModalOpen(prevModalState => !prevModalState);
    }, []);
    return { isModalOpen, toggleModalState };
}
export { useModal };