/** @jsxImportSource @theme-ui/core */
import { jsx } from "theme-ui";
import { Text, Heading, Image, Box, Link } from "theme-ui";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function TeamCard({
  src,
  altText,
  title,
  designation,
  fb,
  insta,
  tweet,
  linkedin,
}) {
  // const imageId = src.split("/")[5].split("=")[2];
  // console.log("imageId", title, src);

  return (
    <Box sx={styles.card}>
      <Image src={src} alt={altText} sx={styles.memberThumb} />
      <Box sx={styles.infoWrapper}>
        <Heading className="info__name" sx={styles.infoWrapper}>
          {title}
        </Heading>
        <Text className="info__designationn" sx={styles.infoWrapper}>
          {designation.toUpperCase()}
        </Text>
      </Box>

      <Box sx={styles.socialShare} className="social__share">
        {/* {social.map((item) => (
          <Link key={item.id} href={item.path} className={item.name}>
            {item.icon}
          </Link>
        ))} */}
        {fb !== "" && (
          <Link href={fb} className="facebook" target="_blank">
            <FaFacebookF />
          </Link>
        )}

        {insta !== "" && (
          <Link href={insta} className="instagram" target="_blank">
            <FaInstagram />
          </Link>
        )}

        {tweet !== "" && (
          <Link href={tweet} className="twitter" target="_blank">
            <FaTwitter />
          </Link>
        )}
        {/* <Link href={insta} className="instagram" target="_blank">
          <FaInstagram />
        </Link> */}
        {linkedin !== "" && (
          <Link href={linkedin} className="linkedin" target="_blank">
            <FaLinkedin />
          </Link>
        )}
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    py: [0, null, 4, 5, 6],
    px: [2, null, 6, 7],
    transition: "ease-in-out 0.4s",
    borderRadius: "8px",
    position: "relative",
    "&:hover": {
      boxShadow: ["none", null, "0 4px 10px rgba(39, 83, 123, 0.12)"],
      ".info__name": {
        color: "primary",
      },
      ".info__designation": {
        color: "primary",
      },
      ".social__share": {
        opacity: 1,
        a: {
          my: 0,
          py: [0, null, 1],
        },
      },
    },
  },

  memberThumb: {
    width: ["70px", "80px", "100px", null, null, "130px"],
    height: ["70px", "80px", "100px", null, null, "130px"],
    objectFit: "cover",
    flexShrink: 0,
    border: "2px solid",
    borderColor: "primary",
    borderRadius: "50%",
  },
  infoWrapper: {
    width: "100%",
    textAlign: "center",
    mt: [3, null, 4],
    name: {
      fontSize: [1, 2, 3, null, null, 4],
      fontWeight: "bold",
      lineHeight: [1.25, 1.35],
      transition: "color 0.25s",
      mb: 1,
    },
    designation: {
      fontSize: ["14px", null, null, 2],
      fontWeight: "body",
      lineHeight: "heading",
      color: "text",
      transition: "color 0.25s",
    },
  },
  socialShare: {
    position: ["relative", null, "absolute"],
    right: [0, null, 6, null, 4, 6],
    bottom: [0, null, "18px", 5],
    width: ["100%", null, "auto"],
    display: "flex",
    flexDirection: ["row", null, "column"],
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.25s",
    opacity: [1, null, 0],
    pt: 2,
    a: {
      fontSize: [0, 1, null, 2],
      color: ["text", null, "primary"],
      lineHeight: "1em",
      my: [0, null, "-2px"],
      px: 1,
      transition: "all 0.25s",
      "&:hover": {
        color: ["primary", null, "text"],
      },
    },
  },
};
