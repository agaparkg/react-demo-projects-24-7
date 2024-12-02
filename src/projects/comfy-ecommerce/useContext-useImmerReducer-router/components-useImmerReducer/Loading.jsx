import { useMyCustomContextApi } from "../hooks/custom";

function Loading() {
  const { state } = useMyCustomContextApi();

  return (
    state.isLoading && (
      <div className="page-loading">
        <h2>Loading...</h2>
      </div>
    )
  );
}

export default Loading;
