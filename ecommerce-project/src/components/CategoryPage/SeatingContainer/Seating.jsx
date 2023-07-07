import ProductsCard from "../ProductsCard/ProductsCard";

export default function SeatingContainer() {

    return (
        <section class="seating container">
            <div class="row">
                <div class="seating__title col-lg-12">
                    <h2 class="seating__title__headline headline_2">
                        All Seating
                    </h2>
                    <p class="seating__title__subtitle text">The main feature of any living room is always going to be the seating. Pick and choose your seating styles to build the perfect place to relax. Unwind by yourself, spend time with your family, or entertain guests, all in ultimate comfort.</p>
                </div>
            </div>
            <div class="row">
                <ProductsCard />

                <div class="col-lg-4">
                    <div class="seating__thumbnail">
                        <a href="">
                            <img class="seating__thumbnail__img" src="assets/products/2/product.webp" alt="">
                            <img class="seating__thumbnail__hover" src="assets/products/2/product-hover.webp" alt="">
                        </a>
                        <p class="seating__thumbnail__text text bold">Nomad Sofa</p>
                        <p class="seating__thumbnail__text label">$1595 or as low as $100/mo</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="seating__thumbnail">
                        <a href="">
                            <img class="seating__thumbnail__img" src="assets/products/3/product.webp" alt="">
                            <img class="seating__thumbnail__hover" src="assets/products/3/product-hover.webp" alt="">
                        </a>
                        <p class="seating__thumbnail__text text bold">Nomad Sofa</p>
                        <p class="seating__thumbnail__text label">$1595 or as low as $100/mo</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="seating__thumbnail">
                        <a href="">
                            <img class="seating__thumbnail__img" src="assets/products/4/product.webp" alt="">
                            <img class="seating__thumbnail__hover" src="assets/products/4/product-hover.webp" alt="">
                        </a>
                        <p class="seating__thumbnail__text text bold">Nomad Sofa</p>
                        <p class="seating__thumbnail__text label">$1595 or as low as $100/mo</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="seating__thumbnail">
                        <a href="">
                            <img class="seating__thumbnail__img" src="assets/products/5/product.webp" alt="">
                            <img class="seating__thumbnail__hover" src="assets/products/5/product-hover.webp" alt="">
                        </a>
                        <p class="seating__thumbnail__text text bold">Nomad Sofa</p>
                        <p class="seating__thumbnail__text label">$1595 or as low as $100/mo</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="seating__thumbnail">
                        <a href="">
                            <img class="seating__thumbnail__img" src="assets/products/6/product.webp" alt="">
                            <img class="seating__thumbnail__hover" src="assets/products/6/product-hover.webp" alt="">
                        </a>
                        <p class="seating__thumbnail__text text bold">Nomad Sofa</p>
                        <p class="seating__thumbnail__text label">$1595 or as low as $100/mo</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="seating__thumbnail">
                        <a href="">
                            <img class="seating__thumbnail__img" src="assets/products/7/product.webp" alt="">
                            <img class="seating__thumbnail__hover" src="assets/products/7/product-hover.webp" alt="">
                        </a>
                        <p class="seating__thumbnail__text text bold">Nomad Sofa</p>
                        <p class="seating__thumbnail__text label">$1595 or as low as $100/mo</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="seating__thumbnail">
                        <a href="">
                            <img class="seating__thumbnail__img" src="assets/products/8/product.webp" alt="">
                            <img class="seating__thumbnail__hover" src="assets/products/8/product-hover.webp" alt="">
                        </a>
                        <p class="seating__thumbnail__text text bold">Nomad Sofa</p>
                        <p class="seating__thumbnail__text label">$1595 or as low as $100/mo</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="seating__thumbnail">
                        <a href="">
                            <img class="seating__thumbnail__img" src="assets/products/8/product.webp" alt="">
                            <img class="seating__thumbnail__hover" src="assets/products/8/product-hover.webp" alt="">
                        </a>
                        <p class="seating__thumbnail__text text bold">Nomad Sofa</p>
                        <p class="seating__thumbnail__text label">$1595 or as low as $100/mo</p>
                    </div>
                </div>
            </div>
        </section>
    );
}