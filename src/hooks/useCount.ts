import { shallowEqual, useSelector } from "react-redux";

export default () => {
    const { count } = useSelector((state: any) => state.count, shallowEqual);
    return count;
};
