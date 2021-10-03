import { ClassNames } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";

const ProfilePhoto = (): JSX.Element => {
  return (
    <ClassNames>
      {({ css }) => (
        <div
          css={{
            "@media screen and (max-width: 599.95px)": {
              display: "none",
            },
          }}
        >
          <StaticImage
            css={{
              borderRadius: "50%",
              "& [data-placeholder-image]": { borderRadius: "50%" },
              "@media screen and (max-width: 1199.95px)": {
                height: "100px",
                width: "100px",
              },
            }}
            imgClassName={css({
              borderRadius: "50%",
            })}
            src="../images/me.png"
            alt="Drew Hays"
            width={600}
            height={600}
          />
        </div>
      )}
    </ClassNames>
  );
};

export default ProfilePhoto;
