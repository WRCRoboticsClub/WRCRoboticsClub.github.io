import React, { useState } from "react";
import SingleAchievement from "../components/SingleAchievement";
import { Box, Button } from "theme-ui";

export default function Achievements({ achievement }) {
  const [selected, setSelected] = useState(null);

  const closeModal = () => setSelected(null);

  return (
    <>
      <section
        id="achievement"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          px: [3, 4],
          py: [4, 5],
        }}
      >
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
            px: 3,
          }}
        >
          <Box
            onClick={(e) => e.stopPropagation()}
            sx={{
              bg: "background",
              p: [3, 4],
              borderRadius: "12px",
              maxWidth: 600,
              width: "100%",
              maxHeight: "80vh",
              overflowY: "auto",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
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
                minWidth: 28,
                minHeight: 28,
                lineHeight: 1,
                color: "text",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                "&:hover": {
                  color: "primary",
                },
              }}
              aria-label="Close modal"
            >
              &times;
            </Button>

            <h2 sx={{ mb: 3, fontSize: [3, 4], textAlign: "center", color: "text" }}>
              {selected.title[0]}
            </h2>
            <p sx={{ mb: 2, fontSize: [1, 2], color: "text" }}>{selected.desc[0]}</p>

            {selected.date && selected.date[0] && (
              <p sx={{ mb: 2, fontSize: 1, color: "text" }}>
                <strong>Date:</strong> {selected.date[0]}
              </p>
            )}

            {selected.fb && selected.fb[0] && (
              <p sx={{ mb: 1 }}>
                <a
                  href={selected.fb[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "primary",
                    textDecoration: "underline",
                    "&:hover": { color: "secondary" },
                  }}
                >
                  Facebook Link
                </a>
              </p>
            )}
            {selected.youtube && selected.youtube[0] && (
              <p sx={{ mb: 1 }}>
                <a
                  href={selected.youtube[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "primary",
                    textDecoration: "underline",
                    "&:hover": { color: "secondary" },
                  }}
                >
                  YouTube Link
                </a>
              </p>
            )}
            {selected.insta && selected.insta[0] && (
              <p sx={{ mb: 1 }}>
                <a
                  href={selected.insta[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "primary",
                    textDecoration: "underline",
                    "&:hover": { color: "secondary" },
                  }}
                >
                  Instagram Link
                </a>
              </p>
            )}
            {selected.medium && selected.medium[0] && (
              <p sx={{ mb: 1 }}>
                <a
                  href={selected.medium[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "primary",
                    textDecoration: "underline",
                    "&:hover": { color: "secondary" },
                  }}
                >
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
