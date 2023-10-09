import Products from "~/components/pages/PageProducts/components/Products";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function PageProducts() {
  return (
    <Box py={3}>
      <Typography gutterBottom variant="h5" component="h2">
        Changed file: Its working!
      </Typography>
      <Products />
    </Box>
  );
}
