import style from './style.module.scss';
import grids from './../../../shared/grid.module.scss';
import typos from './../../../shared/typography.module.scss';

import video from './../../../assets/product-video-1.mp4';

export default function VideoProductOne() {

    return (
        <section className={`${style.video} ${grids["container"]}`}>
            <div className={`${grids["row"]}`}>
                <div className={`${grids["col-lg-6"]} ${style.video__thumbnail}`}>
                    <video src={video} autoPlay muted loop></video>
                </div>
                <div className={`${grids["col-lg-6"]}`}>
                    <div className={`${style.video__description}`}>
                        <p className={`${typos["mediumtext"]}`}>Durable enough for everyday drama</p>
                        <p className={`${typos["body"]}`}>Each and every component of our furniture is selected for durability, from the galvanized steel latches to the precision-milled Baltic Birch frame. The fabric is inherently scratch-resistant, thanks to an incredibly tight weave, which makes it perfect for pets and their parents.</p>
                        <div className={`${style.video__description__cols}`}>
                            <div className={`${style.video__description__cols__text}`}>
                                <p className={`${typos["text"]} ${typos["bold"]}`}>Low carbon footprint</p>
                                <p className={`${typos["text"]}`}>Fabric made from upcycled materials</p>
                            </div>
                            <div className={`${style.video__description__cols__text}`}>
                                <p className={`${typos["text"]} ${typos["bold"]}`}>Sustainable wood</p>
                                <p className={`${typos["text"]}`}>Sourced from responsibly managed forests</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}