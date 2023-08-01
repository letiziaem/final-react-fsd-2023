import VideoHeadline from "./VideoHeadline/VideoHeadline";
import style from './style.module.scss';
import video from './../../../assets/background-video.mp4';
import buttons from './../../../shared/button.module.scss';

export default function VideoHomepage() {

    return (
        <section className={style.video}>
            <VideoHeadline />
            <video className={style.video__size} src={video} autoPlay muted loop></video>
            <div className={style.video__btn}>
                <button className={`${buttons.button}`}>SHOP SEATING</button>
            </div>
        </section>
    );
}
