import style from './style.module.scss';
import grids from './../../../shared/grid.module.scss';
import typos from './../../../shared/typography.module.scss';

import video from './../../../assets/product-video-2.mp4';

export default function VideoProductTwo() {

    return (
        <section className={`${style.video} ${grids["container"]}`}>
            <div className={`${grids["row"]}`}>
                <div className={`${grids["col-lg-6"]}`}>
                    <div className={`${style.video__description}`}>
                        <p className={`${typos["mediumtext"]}`}>Don't sweat the spills</p>
                        <p className={`${typos["body"]}`}>Our olefin fabric is stain-resistant thanks to a deep dyeing process that colors each individual strand to the core, as opposed to other fibers that have little pores that absorb stains. You can even spray spills with a water and bleach solution (yes, we said bleach) and blot it out to clean stains.</p>
                        <div className={`${style.video__description__cols}`}>
                            <div className={`${style.video__description__cols__text}`}>
                                <p className={`${typos["text"]} ${typos["bold"]}`}>Non toxic</p>
                                <p className={`${typos["text"]}`}>Zero chemical additives or treatments</p>
                            </div>
                            <div className={`${style.video__description__cols__text}`}>
                                <p className={`${typos["text"]} ${typos["bold"]}`}>Zero PFCs</p>
                                <p className={`${typos["text"]}`}>Fabric free of dangerous formaldehydes</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${grids["col-lg-6"]} ${style.video__thumbnail}`}>
                    <video src={video} autoPlay muted loop></video>
                </div>
            </div>
        </section>
    );
}
