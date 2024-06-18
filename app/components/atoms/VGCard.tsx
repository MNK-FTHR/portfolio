"use client";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  useTheme,
  Stack,
  CardMedia,
} from "@mui/material";
import React, { ReactNode } from "react";
import { VGButton, VGLink } from "@/app/components/atoms";
interface IProps {
  title: string | ReactNode;
  body: string | ReactNode;
  links?: { link: string; name: string; internal?: boolean }[];
  illustration?: string;
}
export const VGCard = (props: IProps) => {
  const { title, body, links, illustration } = props;
  const theme = useTheme();
  return (
    <Card
      sx={{
        minWidth: 150,
        minHeight: 100,
        boxShadow:
          "0 13px 27px -5px #32325d40, 0 8px 16px -8px #0000004d, 0 -6px 16px -6px #00000008",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Stack direction={"row"}>
          <Typography variant="body2">{body}</Typography>
          {illustration && (
            <CardMedia
              component="img"
              sx={{ width: 280 }}
              image={illustration}
              alt="Random"
            />
          )}
        </Stack>
      </CardContent>
      <CardActions>
        {links &&
          Array.from(links).map((link, index) =>
            link.internal ? (
              <VGLink
                key={index}
                sx={{ color: "accent.main" }}
                href={link.link}
              >
                <VGButton
                  key={index}
                  size="small"
                  variant="text"
                  sx={{ color: "accent.main" }}
                >
                  {link.name}
                </VGButton>
              </VGLink>
            ) : (
              <VGButton
                key={index}
                size="small"
                variant="text"
                target="_blank"
                sx={{ color: "accent.main" }}
                href={link.link}
              >
                {link.name}
              </VGButton>
            )
          )}
      </CardActions>
    </Card>
  );
};
