"use client";
import { lightenDarkenColor } from "@/app/utils/lightenDarkenColor";
import {
  IconButton,
  PaletteColor,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { VGButton } from "@/app/components/atoms";
import { MuiColorInput } from "mui-color-input";
import { useThemeEditor } from "@/app/contexts/ThemeEditorContext";
export const ColorPaletteEditor = ({
  color,
  name,
}: {
  color: PaletteColor;
  name: string;
}) => {
  const { colorChanger } = useThemeEditor();
  const [editMode, setEditMode] = useState<boolean>(false);

  const [colorInInput, setNewColor] = useState<string>(color.main);
  return (
    <Stack direction={"row"} p={2} m={2}>
      <Paper elevation={3} sx={{ p: 1 }}>
        <Stack direction={"column"}>
          <Stack direction={"row"}>
            <Typography variant="h5" textAlign={"center"} width={"100%"}>
              {name}
            </Typography>
            {editMode ? (
              <IconButton
                size="small"
                aria-label="edit"
                onClick={() => setEditMode(!editMode)}
              >
                <CloseIcon />
              </IconButton>
            ) : (
              <IconButton
                size="small"
                aria-label="edit"
                onClick={() => setEditMode(!editMode)}
              >
                <EditIcon />
              </IconButton>
            )}
          </Stack>
          <Stack direction={"row"} width={"100%"}>
            <Stack
              textAlign={"center"}
              bgcolor={color.main}
              padding={4}
              width={"100%"}
            >
              <Typography variant="body1" color={color.contrastText}>
                {Object.keys(color)[0].charAt(0).toUpperCase() +
                  Object.keys(color)[0].slice(1)}
              </Typography>
              <Typography variant="body1" color={color.contrastText}>
                {color.main}
              </Typography>
            </Stack>
            <Stack
              textAlign={"center"}
              bgcolor={color.dark}
              padding={4}
              width={"100%"}
            >
              <Typography variant="body1" color={color.contrastText}>
                Dark
              </Typography>
              <Typography variant="body1" color={color.contrastText}>
                {color.dark}
              </Typography>
            </Stack>
            <Stack
              textAlign={"center"}
              bgcolor={color.light}
              padding={4}
              width={"100%"}
            >
              <Typography variant="body1" color={color.contrastText}>
                Light
              </Typography>
              <Typography variant="body1" color={color.contrastText}>
                {color.light}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        {editMode && (
          <>
            <MuiColorInput
              format="hex"
              sx={{ width: "100%", borderRadius: "none", mt: 1 }}
              value={colorInInput}
              onChange={setNewColor}
            />
            <VGButton
              fullWidth
              color="success"
              variant="contained"
              sx={{ mt: 1 }}
              onClick={() =>
                colorChanger(
                  name.toLowerCase() as "primary" | "secondary" | "accent",
                  colorInInput
                )
              }
            >
              Save
            </VGButton>
          </>
        )}
      </Paper>
    </Stack>
  );
};
