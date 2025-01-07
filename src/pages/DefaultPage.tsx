import Count from "../components/Count";

const DefaultPage = function () {
    return (
        <div className="h-full w-full bg-[#17171B] flex flex-col items-center justify-center gap-4 text-[24px] text-white select-none">
            <div>React Boilerplate</div>
            <Count />
        </div>
    );
};

export default DefaultPage;
