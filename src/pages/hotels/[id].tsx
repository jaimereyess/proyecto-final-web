import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HotelTypes } from '../../types/types';

const HotelPage = () => {
    const { id } = useParams();
    const [hotel, setHotel] = useState<HotelTypes>();

    useEffect(() => {
        fetch(`/api/hotel/${id}`)
            .then(response => response.json())
            .then(data => setHotel(data))
            .catch(error => console.error(error));
    }, [id]);
    if (!hotel) {
        return <div>Cargando...</div>;
    }

    console.log(hotel)

    return (
        <div>
            <h1>{hotel.name}</h1>
        </div>
    );
};

export default HotelPage;
