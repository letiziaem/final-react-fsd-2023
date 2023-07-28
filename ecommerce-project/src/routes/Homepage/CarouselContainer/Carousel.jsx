import CarouselHeadline from './CarouselHeadline/CarouselHeadline';
import style from './style.module.scss';
import grids from './../../../shared/grid.module.scss';

import carousel1 from './../../../assets/carousel/Range-Fabric-Stone-Gray.webp';
import carousel2 from './../../../assets/carousel/Kettle-Side-Table.webp';
import carousel3 from './../../../assets/carousel/Nomad-Velvet.webp';
import carousel4 from './../../../assets/carousel/Nomad-Leather.webp';
import carousel5 from './../../../assets/carousel/imagem_5.png';

export default function CarouselContainer() {

    return (
        <section className={style.carousel}>
            <CarouselHeadline />
            <div className={style.carousel__overflow}>
                <div className={`${grids["col-lg-3"]}`}>
                    <img className={`${style.carousel__thumbnail}`} src={carousel1} />
                </div>
                <div className={`${grids["col-lg-3"]}`}>
                    <img className={`${style.carousel__thumbnail}`} src={carousel2} />
                </div>
                <div className={`${grids["col-lg-3"]}`}>
                    <img className={`${style.carousel__thumbnail}`} src={carousel3} />
                </div>
                <div className={`${grids["col-lg-3"]}`}>
                    <img className={`${style.carousel__thumbnail}`} src={carousel4} />
                </div>
                <div className={`${grids["col-lg-3"]}`}>
                    <img className={`${style.carousel__thumbnail}`} src={carousel5} />
                </div>
            </div>
        </section>
    );
}
