import { FaSpinner } from "react-icons/fa";

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-20">
            <FaSpinner className="animate-spin text-blue-500 text-2xl" />

        </div>
    );
}
