import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import useCount from "../hooks/useCount";
import { useDispatch } from "react-redux";
import { onDecrease, onIncrement, onReset } from "../redux/slices/count";
import { RiResetLeftFill } from "react-icons/ri";
import { Fragment } from "react/jsx-runtime";

function Count() {
    const count = useCount();
    const dispatch = useDispatch();

    const onDecreaseCount = () => {
        dispatch(onDecrease());
    };

    const onIncrementCount = () => {
        dispatch(onIncrement());
    };

    const onResetCount = () => {
        dispatch(onReset());
    };

    return (
        <Fragment>
            <div>{count}</div>
            <div className="flex gap-4">
                <CiCircleMinus className={`size-10 cursor-pointer`} onClick={onDecreaseCount} />
                <RiResetLeftFill className={`size-10 cursor-pointer`} onClick={onResetCount} />
                <CiCirclePlus className="size-10 cursor-pointer" onClick={onIncrementCount} />
            </div>
        </Fragment>
    );
}

export default Count;
