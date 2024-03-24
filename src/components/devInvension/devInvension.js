import React, { useEffect } from 'react';
import "./devInvension.css";
import Aos from "aos";
import "aos/dist/aos.css"

const DevInvension = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div class="whythem-mainDiv">

            <div className="whythem-allBoxes">
                <div class="whythem">
                    <h1>"ADVANCING YOUR SEWING SKILLS WITH PURPOSE"</h1>
                </div>

                <div data-aos="fade-right" class="whythem-content">
                    <div>
                        <h1>01</h1>
                    </div>
                    <div class="contentText-0-2-724">
                        <h3 class="contentHeading-0-2-725">Mastering the Basics</h3>
                        <p class="contentPara-0-2-726">Build a strong foundation with essential sewing techniques. From threading a
                            needle to basic stitches, ensure you have the fundamental skills to advance confidently</p>
                    </div>
                </div>
                <div data-aos="fade-left" class="whythem-content even">
                    <div class="contentNumber-0-2-723">02</div>
                    <div class="contentText-0-2-724">
                        <h3 class="contentHeading-0-2-725">Explore Advanced Techniques</h3>
                        <p class="contentPara-0-2-726">Delve into advanced sewing methods. Learn intricate stitches, pattern making,
                            and garment construction to elevate your sewing to a professional level</p>
                    </div>
                </div>
                <div data-aos="fade-right" class="whythem-content">
                    <div class="contentNumber-0-2-723">03</div>
                    <div class="contentText-0-2-724">
                        <h3 class="contentHeading-0-2-725">Creative Design &amp; Innovation</h3>
                        <p class="contentPara-0-2-726">Unleash your creativity through design. Explore how to blend traditional
                            sewing skills with contemporary designs, enabling you to create unique and fashionable pieces</p>
                    </div>
                </div>
                <div data-aos="fade-left" class="whythem-content even">
                    <div class="contentNumber-0-2-723">04</div>
                    <div class="contentText-0-2-724">
                        <h3 class="contentHeading-0-2-725">Sewing for Sustainability</h3>
                        <p class="contentPara-0-2-726">Embrace eco-friendly sewing practices. Learn about sustainable materials and
                            methods that reduce environmental impact, aligning your sewing passion with the moto of sustainability
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DevInvension;