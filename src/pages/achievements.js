import React, { useState } from "react";
import SingleAchievement from "../components/SingleAchievement";
import { Box, Button } from "theme-ui";

export default function Achievements({ achievement }) {
  const [selected, setSelected] = useState(null);

  const closeModal = () => setSelected(null);

  return (
    <>
      <section id="achievement" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {achievement.data.map((data, index) => (
          <SingleAchievement
            key={index}
            infos={data}
            id={index}
            onShowDetails={setSelected}
          />
        ))}
      </section>

      {selected && (
        <Box
          className="achievement-popup-overlay"
          onClick={closeModal}
          sx={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <Box
            onClick={(e) => e.stopPropagation()}
            sx={{
              bg: "background",
              p: 4,
              borderRadius: 8,
              maxWidth: 600,
              maxHeight: "80vh",
              overflowY: "auto",
              position: "relative",
            }}
          >
            <Button
              onClick={closeModal}
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                fontSize: 4,
                padding: 0,
                minWidth: 24,
                minHeight: 24,
                lineHeight: 1,
              }}
              aria-label="Close modal"
            >
              &times;
            </Button>

            <h2>{selected.title[0]}</h2>
            <p>{selected.desc[0]}</p>

            {selected.date && selected.date[0] && (
              <p>
                <strong>Date:</strong> {selected.date[0]}
              </p>
            )}

            {selected.fb && selected.fb[0] && (
              <p>
                <a href={selected.fb[0]} target="_blank" rel="noopener noreferrer">
                  Facebook Link
                </a>
              </p>
            )}
            {selected.youtube && selected.youtube[0] && (
              <p>
                <a href={selected.youtube[0]} target="_blank" rel="noopener noreferrer">
                  YouTube Link
                </a>
              </p>
            )}
            {selected.insta && selected.insta[0] && (
              <p>
                <a href={selected.insta[0]} target="_blank" rel="noopener noreferrer">
                  Instagram Link
                </a>
              </p>
            )}
            {selected.medium && selected.medium[0] && (
              <p>
                <a href={selected.medium[0]} target="_blank" rel="noopener noreferrer">
                  Medium Link
                </a>
              </p>
            )}
          </Box>
        </Box>
      )}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://wrcrobotics.pythonanywhere.com/achievements");
  const achievement = await res.json();

  return {
    props: {
      achievement,
    },
  };
}
