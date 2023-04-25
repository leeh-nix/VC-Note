import { Box, Button, Dialog, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, ThemeProvider, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useRef, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import useResponsiveSize from "../hooks/useResponsiveSize";
import CloseIcon from "@mui/icons-material/Close";
import ConfirmBox from "./ConfirmBox";

export default function SettingDialogBox({
  open,
  onClose,
  popupVideoPlayerRef,
  webcams,
  mics,
  setting,
  setSetting,
  setSelectedMic,
  setSelectedWebcam,
  changeWebcam,
  changeMic,
  videoTrack,
  audioTrack,
}) {
  const theme = useTheme();

  const isXStoSM = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const isXSOnly = useMediaQuery(theme.breakpoints.only("xs"));
  const isSMONly = useMediaQuery(theme.breakpoints.only("sm"));
  const [dlgDevices, setDlgDevices] = useState(false);
  const [boxHeight, setBoxHeight] = useState(0);
  const boxRef = useRef();
  const { width: windowWidth } = useWindowSize();

  const internalPadding = useResponsiveSize({
    xl: 3,
    lg: 5,
    md: 2,
    sm: 2,
    xs: 2,
  });

  const handleSetting = (event, n) => {
    setSetting(n);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Box>
          <Dialog maxWidth={"xl"} open={open} onClose={handleClose}>
            <Box
              p={internalPadding}
              sx={{
                width: isXSOnly ? "100vw" : isSMONly ? "50vw" : "55vw",
                display: "flex",
                flex: 1,
                flexDirection: "column",
                overflow: "hidden",
                borderRadius: "4px",
                backgroundColor: theme.palette.darkTheme.slightLighter,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box position={"absolute"} top={0} right={0}>
                  <IconButton
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  Settings
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box mt={3}>
                  <Box>
                    {[
                      { value: "audio", label: "Audio" },
                      { value: "video", label: "Video" },
                    ].map(({ value, label }) =>
                      label === "Audio" || label === "Video" ? (
                        <Button
                          sx={{
                            borderRadius: 0,
                            color: "white",
                            borderColor: "white",
                            "&:hover": {
                              backgroundColor: setting === value ? "#596BFF" : null,
                            },
                          }}
                          variant={setting === value ? "contained" : "outlined"}
                          disableElevation
                          disableRipple
                          color={setting === value ? "primary" : "secondary"}
                          size={"large"}
                          onClick={() => {
                            handleSetting(null, value);
                          }}
                        >
                          {label}
                        </Button>
                      ) : null
                    )}
                  </Box>
                </Box>
              </Box>
              {setting === "audio" ? (
                <Box ref={boxRef}>
                  <Box sx={{ width: "100%" }}>
                    <Box sx={{ width: "60%", margin: "0 auto" }}>
                      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} mt={isXStoSM ? 0 : 3}>
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: "bold",
                            }}
                          >
                            Select Microphone
                          </Typography>
                        </Box>

                        <FormControl sx={{ width: "100%", marginTop: "1.5rem" }}>
                          <InputLabel id="select-microphone-label">Microphone</InputLabel>
                          <Select
                            labelId="select-microphone-label"
                            label="Microphone"
                            fullWidth
                            variant="outlined"
                            value={audioTrack?.getSettings()?.deviceId}
                            MenuProps={{
                              PaperProps: {
                                sx: {
                                  background: "#232830",
                                  color: "#fff",
                                },
                              },
                            }}
                            sx={{
                              ".MuiSelect-icon": {
                                color: "#404B53",
                              },
                              ".MuiSelect-outlined": {
                                backgroundColor: "#17191e",
                              },
                            }}
                            onChange={(e) => {
                              changeMic(e.target.value);
                            }}
                          >
                            {mics?.map((item, index) => {
                              return item?.kind === "audioinput" ? (
                                <MenuItem
                                  value={item?.deviceId}
                                  onClick={(e) => {
                                    setSelectedMic((s) => ({
                                      ...s,
                                      id: item?.deviceId,
                                    }));
                                  }}
                                >
                                  {item?.label ? item?.label : `Mic ${index + 1}`}
                                </MenuItem>
                              ) : null;
                            })}
                          </Select>
                        </FormControl>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ) : setting === "video" ? (
                <Box ref={boxRef}>
                  <Box sx={{ width: "100%" }}>
                    <Grid
                      spacing={3}
                      container
                      sx={{
                        display: "flex",
                        flexDirection: isXSOnly ? "column-reverse" : "row",
                        alignItems: "center",
                      }}
                    >
                      <Grid item xs={12} md={7}>
                        <Box>
                          <Box sx={{ display: "flex", flexDirection: "column" }} mt={isXStoSM ? 0 : 3}>
                            <Box>
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  fontWeight: "bold",
                                }}
                              >
                                Select Camera
                              </Typography>
                            </Box>
                            <FormControl sx={{ width: "100%", marginTop: "1.5rem" }}>
                              <InputLabel id="select-camera-label">Camera</InputLabel>
                              <Select
                                labelId="select-camera-label"
                                fullWidth
                                label="Camera"
                                variant="outlined"
                                value={videoTrack?.getSettings()?.deviceId}
                                onChange={(e) => {
                                  changeWebcam(e.target.value);
                                }}
                                MenuProps={{
                                  PaperProps: {
                                    sx: {
                                      background: "#232830",
                                      color: "#fff",
                                    },
                                  },
                                }}
                                sx={{
                                  ".MuiSelect-icon": {
                                    color: "#404B53",
                                  },
                                  ".MuiSelect-outlined": {
                                    backgroundColor: "#17191e",
                                  },
                                }}
                              >
                                {webcams?.map((item, index) => {
                                  return item?.kind === "videoinput" ? (
                                    <MenuItem
                                      value={item?.deviceId}
                                      onClick={() => {
                                        setSelectedWebcam((s) => ({
                                          ...s,
                                          id: item?.deviceId,
                                        }));
                                      }}
                                    >
                                      {item?.label === "" ? `Webcam ${index + 1}` : item?.label}
                                    </MenuItem>
                                  ) : null;
                                })}
                              </Select>
                            </FormControl>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={5}>
                        <Box sx={{ position: "relative" }} mt={isXStoSM ? 0 : 5} p={2}>
                          <Box
                            sx={{
                              flex: 1,
                              display: "flex",
                              width: isXStoSM ? "50%" : "100%",
                              height: isXStoSM ? "50%" : undefined,
                              paddingTop: !isXSOnly ? "56.25%" : "auto",
                              position: "relative",
                              borderRadius: theme.spacing(1 / 4),
                              overflow: "hidden",
                            }}
                          >
                            <Box
                              sx={{
                                position: !isXSOnly ? "absolute" : "unset",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: theme.palette.primary.light,
                                display: "flex",
                                flexDirection: "column",
                                borderRadius: theme.spacing(1),
                                overflow: "hidden",
                              }}
                            >
                              <video
                                autoPlay
                                playsInline
                                muted
                                ref={popupVideoPlayerRef}
                                controls={false}
                                style={{
                                  borderRadius: "6px",
                                  backgroundColor: "#1c1c1c",
                                  height: "100%",
                                  width: "100%",
                                  objectFit: "cover",
                                }}
                              />
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              ) : null}
            </Box>
          </Dialog>
          <ConfirmBox
            open={dlgDevices}
            title="Mic or webcam not available"
            subTitle="Please connect a mic and webcam to speak and share your video in the meeting. You can also join without them."
            successText="DISMISS"
            onSuccess={() => {
              setDlgDevices(false);
            }}
          />
        </Box>
      </Grid>
    </ThemeProvider>
  );
}
