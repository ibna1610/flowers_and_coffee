import { Backdrop, CircularProgress } from "@mui/material";

interface LoadingProps {
  loading?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ loading = false }) => {
  return (
    <Backdrop
      sx={(theme) => ({
        color: "#fff",
        zIndex: theme.zIndex.drawer + 1,
      })}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
