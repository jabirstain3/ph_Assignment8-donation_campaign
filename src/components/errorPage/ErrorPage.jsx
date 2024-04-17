import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    
    return (
        <div className="w-full my-[28%] text-center">
            <h1 className="text-4xl font-bold m-6">Oops!</h1>
            <p className="text-xl font-semibold   m-4">We can't seem to find the page you requested.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;