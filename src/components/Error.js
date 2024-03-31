import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log("error", error);
  return (
    <>
      <h1>Oops!!</h1>
      <h2>Some thing went wrong</h2>
      <h3>
        {error?.status} {error?.statusText}
      </h3>
    </>
  );
};

export default Error;
