import style from './style.module.scss';
import grids from './../../../shared/grid.module.scss';
import typos from './../../../shared/typography.module.scss';
import image from './../../../assets/product-details.webp'

export default function DimensionsContainer() {

    return (
        <section className={`${style.dimension} ${grids["container"]}`}>
            <div className={`${grids["row"]}`}>
                <div className={`${grids["col-lg-12"]}`}>
                    <p className={`${typos["mediumtext"]}`}>Dimensions</p>
                </div>
            </div>
            <div className={`${grids["row"]}`}>
                <div className={`${grids["col-lg-6"]}`}>
                    <div className={`${style.dimension__table}`}>
                        <table className={`${style.dimension__table__text} ${typos["body_2"]}`}>
                            <tr>
                                <td colSpan="2">General Dimensions</td>
                                <td>86" L x 61" D x 33" H</td>
                            </tr>
                            <tr>
                                <td colSpan="2">Seat Height</td>
                                <td>17"</td>
                            </tr>
                            <tr>
                                <td colSpan="2">Arm Height</td>
                                <td>23"</td>
                            </tr>
                            <tr>
                                <td colSpan="2">Chaise Length</td>
                                <td>13"</td>
                            </tr>
                            <tr>
                                <td colSpan="2">Seat Depth</td>
                                <td>134"</td>
                            </tr>
                            <tr>
                                <td colSpan="2">Chaise Seat Depth</td>
                                <td>11"</td>
                            </tr>
                            <tr>
                                <td colSpan="2">Leg Height</td>
                                <td>7”</td>
                            </tr>
                            <tr>
                                <td colSpan="2">Ottoman Dimensions</td>
                                <td>26" L x 26" W x 17" H</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className={`${style.dimension__thumbnail} ${grids["col-lg-6"]}`}>
                    <div className={`${style.dimension__thumbnail}`}>
                        <img src={image} />
                    </div>
                </div>
            </div>
        </section>
    );
}
