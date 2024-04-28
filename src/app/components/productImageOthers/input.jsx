import malwareImage from "../../components/Assets/images/malwareImage.png";
import Button from "../Button";

export const ProductImageOther=()=> {
    return(
        <section>
            <img src={malwareImage} alt="malwareImage" />
            <div>
                <h3>Malware and Threat Protection</h3>
                <Button/>
            </div>
        </section>
    )
}