import { FaReact } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = function () {
    const navigate = useNavigate();
    const onMoveMain = function () {
        navigate("/");
    };

    return (
        <div className="w-full h-[40px] flex">
            <div
                className="mx-4 flex items-center gap-4 cursor-pointer select-none"
                onClick={onMoveMain}
            >
                <FaReact className="size-5 fill-[#61DBFB]" />
                <div className="font-semibold focus-visible">React Boilerplate</div>
            </div>
        </div>
    );
};

export default Header;
