import { useParams } from "react-router-dom";

export default function ProductDetail() {
    const { id } = useParams();

    return (
        <div className="flex min-h-[60vh] items-center justify-center">
            <h1 className="text-3xl font-black">
                Producto. {id}
            </h1>
        </div>
    );
}