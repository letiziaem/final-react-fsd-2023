import style from './../../style.module.scss';
import typos from './../../../../../shared/typography.module.scss';

export default function ProductUpgrade() {

    return (
        <>
            <p className={`${typos["text"]} ${typos["bold"]}`}>Upgrades</p>
            <div>
                <input type="checkbox" id="up1" />
                <label className={`${style.product__description__upgrade__text} ${typos["text"]}`} htmlFor="up1">Moveable chaise + $495</label>
            </div>
            <div>
                <input type="checkbox" id="up2" />
                <label className={`${style.product__description__upgrade__text} ${typos["text"]}`} htmlFor="up2">Ottoman + $345</label>
            </div>
            <div>
                <input type="checkbox" id="up3" />
                <label className={`${style.product__description__upgrade__text} ${typos["text"]}`} htmlFor="up3">Lumbar Pillows + $135</label>
            </div>
            <div>
                <input type="checkbox" id="up4" />
                <label className={`${style.product__description__upgrade__text} ${typos["text"]}`} htmlFor="up4">Sleep Kit + $295</label>
            </div>
        </>
    )
}