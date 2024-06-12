import { Card, Stack, Typography } from "@mui/material";
import React from "react";
import { VGCard } from "@/app/components/atoms";

const lorem = `Le Lorem Ipsum est simplement du faux texte employé
          dans la composition et la mise en page avant impression. Le Lorem
          Ipsum est le faux texte standard de l'imprimerie depuis les
          années 1500, quand un imprimeur anonyme assembla ensemble des morceaux
          de texte pour réaliser un livre spécimen de polices de texte. Il
          n'a pas fait que survivre cinq siècles, mais s'est aussi
          adapté à la bureautique informatique, sans que son contenu n'en
          soit modifié. Il a été popularisé dans les années 1960 grâce à la
          vente de feuilles Letraset contenant des passages du Lorem Ipsum, et,
          plus récemment, par son inclusion dans des applications de mise en
          page de texte, comme Aldus PageMaker.`;

const Summary = () => {
  return (
    <Stack
      direction={"column"}
      justifyContent="space-between"
      alignItems="center"
      spacing={4}
    >
      <VGCard
        title="Qui suis-je ?"
        body={lorem}
        illustration="https://picsum.photos/536/354"
        links={[{ link: "https://github.com/MNK-FTHR", name: "Github" }]}
      />
      <VGCard title="Ce que je recherche ?" body={lorem} />
    </Stack>
  );
};

export default Summary;
