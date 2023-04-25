import { Box, Dialog, DialogTitle, Typography, DialogActions, Button, useTheme } from "@mui/material";
import React from "react";

export default function ConfirmBox({ successText, rejectText, onSuccess, open, onReject, title, subTitle, subTitleColor }) {
  const theme = useTheme();

  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={() => {}} aria-labelledby="responsive-dialog-title">
      <Box
        sx={{
          padding: 8,
          backgroundColor: theme.palette.darkTheme.main,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <DialogTitle
              sx={{
                padding: 8,
                margin: 0,
                color: "#fff",
              }}
              id="responsive-dialog-title"
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                {title}
                {/* {`Allow participant entry?`} */}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  marginTop: 3,
                  color: subTitleColor ? subTitleColor : "#9FA0A7",
                }}
              >
                {subTitle}
                {/* {`${name} wants to join meeting.`} */}
              </Typography>
            </DialogTitle>
          </Box>
        </Box>
        <Box>
          <DialogActions>
            <Button
              onClick={onReject}
              color={"white"}
              sx={{
                color: "white",
              }}
              size="medium"
            >
              {rejectText}
            </Button>

            <Button
              size="medium"
              onClick={onSuccess}
              color="white"
              autoFocus
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
              }}
            >
              {successText}
            </Button>
          </DialogActions>
        </Box>
      </Box>
    </Dialog>
  );
}
