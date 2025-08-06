import "./App.css";
import { useInformation } from "./hooks/ejemplo/useInformation";
import { TextFieldUI } from "./packages/ui/components/atoms/forms/input";
import { Box, Grid, Typography, Paper, Button } from "@mui/material";

function App() {
  const { control, handle, errors } = useInformation();

  return (
    <Box
      sx={{
        // minHeight: "100vh",
        backgroundColor: "#f5f7fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "30px",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "900px",
          backgroundColor: "#ffffff",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 10px 10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: "Poppins",
              fontWeight: 500,
            }}
          >
            Información
          </Typography>
        </Grid>
        <Grid
          container
          spacing={2}
          columnSpacing="14px"
          rowGap="14px"
          sx={{
            padding: "0px 10px 5px",
          }}
        >
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
            <TextFieldUI
              label="Nombre"
              name="name"
              fullWidth
              control={control}
              error={!!errors?.name}
              helperText={errors?.name?.message}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
            <TextFieldUI
              label="Apellido"
              name="surname"
              fullWidth
              control={control}
              error={!!errors?.surname}
              helperText={errors?.surname?.message}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
            <TextFieldUI
              label="Correo"
              name="email"
              fullWidth
              control={control}
              error={!!errors?.email}
              helperText={errors?.email?.message}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
            <TextFieldUI
              label="Dirección"
              name="address"
              fullWidth
              control={control}
              error={!!errors?.address}
              helperText={errors?.address?.message}
            />
          </Grid>
        </Grid>
        <Box width="100%" display="flex" justifyContent="flex-end" mt="20px">
          <Button variant="contained" onClick={handle}>
            Guardar
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default App;
