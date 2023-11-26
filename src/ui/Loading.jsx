import { ThreeDots } from "react-loader-spinner"


function Loading({width="75px",height="40px"}) {
  return (
    <ThreeDots
      width={width}
      height={height}
      radius="9"
      color="#4BD3EF"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        margin: "1rem",
      }}
      wrapperClassName=""
      visible={true}
    />
  );
}

export default Loading