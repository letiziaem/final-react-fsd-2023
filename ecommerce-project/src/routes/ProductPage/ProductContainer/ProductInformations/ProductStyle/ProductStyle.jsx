import style from './../../style.module.scss';
import typos from './../../../../../shared/typography.module.scss';

import arm1 from './../../../../../assets/inputs/arm1.png';
import arm2 from './../../../../../assets/inputs/arm2.png';
import back1 from './../../../../../assets/inputs/back1.png';
import back2 from './../../../../../assets/inputs/back2.png';

export default function ProductStyle() {

    return (
        <>
            <div className={`${style.product__description__style__arm}`}>
                <p className={`${typos["text"]} ${typos["bold"]}`}>Arm Style</p>
                <div>
                    <input type="radio" name="arm_style" id="arm_style1" checked />
                    <label htmlFor="arm_style1"><img src={arm1} /></label>

                    <input type="radio" name="arm_style" id="arm_style2" />
                    <label htmlFor="arm_style2"><img src={arm2} /></label>
                </div>
            </div>
            <div className={`${style.product__description__style__back}`}>
                <p className={`${typos["text"]} ${typos["bold"]}`}>Flip Back Cushions</p>

                <input type="radio" name="back_style" id="back_style1" checked />
                <label htmlFor="back_style1"><img src={back1} /></label>

                <input type="radio" name="back_style" id="back_style2" />
                <label htmlFor="back_style2"><img src={back2} /></label>
            </div>
        </>
    )
}